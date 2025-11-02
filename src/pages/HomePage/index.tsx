import React, { useCallback, useState } from "react";
import { Alert, Box } from "@mui/material";
import { translateRequest } from "../../helpers";
import { FavoritesComponent, ReverseComponent, TranslatorComponent } from "../../components";

interface AddToHistoryProps {
  text: string;
  translate: string;
  from: string;
  to: string;
}

export const HomePage: React.FC = (): JSX.Element => {
  const [text, setText] = useState<string>('');
  const [translate, setTranslate] = useState<string>('');
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [loadingTranslate, setLoadingTranslate] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [textDetectedLang, setTextDetectedLang] = useState<string | undefined>();
  const [translateDetectedLang, setTranslateDetectedLang] = useState<string | undefined>();
  const [fromLanguage, setTextLang] = useState<string>('en');
  const [toLanguage, setTranslateLang] = useState<string>('ru');

  let typingTimer: NodeJS.Timeout;
  const doneTypingInterval = 3000;

  const addToHistory = ({ text, translate, from, to }: AddToHistoryProps) => {
    const storage = JSON.parse(localStorage.getItem("history") || '{"history":[]}');

    const newHistory = {
      id: Date.now(),
      text: text,
      translate: translate,
      from: from,
      to: to,
    };

    storage.history.push(newHistory);
    localStorage.setItem("history", JSON.stringify(storage));
  };

  const handleSaveToFavorites = useCallback(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem("favorites") || '{"favorites":[]}');

    const newFavorite = {
      id: Date.now(),
      text: text,
      translate: translate,
      from: fromLanguage,
      to: toLanguage,
    };

    favoriteStorage.favorites.push(newFavorite);

    localStorage.setItem("favorites", JSON.stringify(favoriteStorage));
  }, [text, translate, fromLanguage, toLanguage]);

  const translateText = useCallback(async () => {
    setLoadingTranslate(state => !state);

    await translateRequest({ to: toLanguage, text: text })
      .then(result => {
        setTranslate(result);
        setTextDetectedLang(fromLanguage);
        addToHistory({ text: text, translate: result, from: fromLanguage, to: toLanguage });
      })
      .catch(() => setError(true));

    setLoadingTranslate(state => !state);
  }, [fromLanguage, text, toLanguage]);

  const translateTranslate = useCallback(async () => {
    setLoadingText(state => !state);

    await translateRequest({ to: toLanguage, text: text })
      .then(result => {
        setText(result);
        setTranslateDetectedLang(toLanguage);
        addToHistory({ text: translate, translate: result, from: toLanguage, to: fromLanguage });
      })
      .catch(() => setError(true));

    setLoadingText(state => !state);
  }, [fromLanguage, text, toLanguage, translate]);


  const keyUp = (func: () => void) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(func, doneTypingInterval);
  };

  const keyDown = () => clearTimeout(typingTimer);

  const handleChangeTextValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, [setText]);


  const handleChangeTranslateValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTranslate(e.target.value);
  }, [setTranslate]);

  const handleChangefromLanguage = (e: React.SyntheticEvent, newValue: string) => {
    setTextLang(newValue);
  };

  const handleChangeTranslateLang = (e: React.SyntheticEvent, newValue: string) => {
    setTranslateLang(newValue);
  };

  const handleReverse = useCallback(() => {
    const original = fromLanguage;
    const target = toLanguage;

    setTextLang(target);
    setTranslateLang(original);
  }, [fromLanguage, toLanguage]);

  const sameTextLanguages: boolean = textDetectedLang === fromLanguage || !textDetectedLang;
  const sameTranslateLanguages: boolean = translateDetectedLang === toLanguage || !translateDetectedLang;

  if (error) return <Alert severity="error">This is an error. Please, reload page!</Alert>;

  return (
    <>
      <ReverseComponent handleReverse={handleReverse} />

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '1rem'
      }}
      >
        <TranslatorComponent
          text={text}
          loading={loadingText}
          sameLanguages={sameTextLanguages}
          translateDetectedLang={textDetectedLang}
          lang={fromLanguage}
          handleChangeValue={handleChangeTextValue}
          handleChangeLang={handleChangefromLanguage}
          onKeyUp={() => keyUp(translateText)}
          onKeyDown={keyDown}
        />

        <TranslatorComponent
          text={translate}
          loading={loadingTranslate}
          sameLanguages={sameTranslateLanguages}
          translateDetectedLang={translateDetectedLang}
          lang={toLanguage}
          handleChangeValue={handleChangeTranslateValue}
          handleChangeLang={handleChangeTranslateLang}
          onKeyUp={() => keyUp(translateTranslate)}
          onKeyDown={keyDown}
        />
      </Box>

      <FavoritesComponent handleSaveToFavorites={handleSaveToFavorites} />
    </>
  );
}

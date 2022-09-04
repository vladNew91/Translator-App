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
  const [textLang, setTextLang] = useState<string>('en');
  const [translateLang, setTranslateLang] = useState<string>('ru');

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
      from: textLang,
      to: translateLang,
    };

    favoriteStorage.favorites.push(newFavorite);

    localStorage.setItem("favorites", JSON.stringify(favoriteStorage));
  }, [text, translate, textLang, translateLang]);

  const translateText = async () => {
    setLoadingTranslate(state => !state);

    await translateRequest({ targetLang: translateLang, text: text })
      .then(result => {        
        setTranslate(result[0].translations[0].text);
        setTextDetectedLang(result[0].detectedLanguage.language);
        addToHistory({ text: text, translate: result[0].translations[0].text, from: textLang, to: translateLang });
      })
      .catch(() => setError(true));

    setLoadingTranslate(state => !state);
  };

  const translateTranslate = async () => {
    setLoadingText(state => !state);

    await translateRequest({ targetLang: textLang, text: translate })
      .then(result => {
        setText(result[0].translations[0].text);
        setTranslateDetectedLang(result[0].detectedLanguage.language);
        addToHistory({ text: translate, translate: result[0].translations[0].text, from: translateLang, to: textLang });
      })
      .catch(() => setError(true));

    setLoadingText(state => !state);
  };


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

  const handleChangetextLang = (e: React.SyntheticEvent, newValue: string) => {
    setTextLang(newValue);
  };

  const handleChangeTranslateLang = (e: React.SyntheticEvent, newValue: string) => {
    setTranslateLang(newValue);
  };

  const handleReverse = useCallback(() => {
    const original = textLang;
    const target = translateLang;

    setTextLang(target);
    setTranslateLang(original);
  }, [textLang, translateLang]);

  const sameTextLanguages: boolean = textDetectedLang === textLang || !textDetectedLang;
  const sameTranslateLanguages: boolean = translateDetectedLang === translateLang || !translateDetectedLang;

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
          lang={textLang}
          handleChangeValue={handleChangeTextValue}
          handleChangeLang={handleChangetextLang}
          onKeyUp={() => keyUp(translateText)}
          onKeyDown={keyDown}
        />

        <TranslatorComponent
          text={translate}
          loading={loadingTranslate}
          sameLanguages={sameTranslateLanguages}
          translateDetectedLang={translateDetectedLang}
          lang={translateLang}
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

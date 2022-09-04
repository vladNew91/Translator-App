import { URL, X_RAPID_API_KEY, ADDITIONS } from "../consts";

interface TranslateRequestProps {
  targetLang: string;
  text?: string;
}

export const translateRequest = async ({targetLang, text}: TranslateRequestProps) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': X_RAPID_API_KEY,
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: `[{"Text":"${text}"}]`,
  };

  const response = await fetch(`${URL}translate?to%5B0%5D=${targetLang}${ADDITIONS}`, options);
  const result = await response.json();

  return result;
};

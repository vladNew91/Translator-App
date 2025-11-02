import { URL, X_RAPID_API_KEY } from "../consts";
import { TranslateData } from "../types";

interface TranslateRequestProps {
  to: string;
  text?: string;
}

export const translateRequest = async ({ to, text }: TranslateRequestProps) => {
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': X_RAPID_API_KEY,
      'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      target: to,
      format: "text"
    })
  };

  const response = await fetch(URL, options);
  const result = await response.json() as TranslateData;

  return result.data.translations.translatedText[0];
};

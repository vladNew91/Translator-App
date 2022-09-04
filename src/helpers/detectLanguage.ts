import { URL } from "../consts";

export const detectLanguage = async (text: string) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a67c6f0f48msh890a3624869a12fp1756c4jsn4b9840cbe772',
      'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
    },
    body: `[{"Text":"${text}"}]`
  };
  
  try {
    const response = await fetch(`${URL}Detect?api-version=3.0`, options);
    const result = await response.json();

    return result;
  } catch (err) {
    return console.error(err);
  }
};

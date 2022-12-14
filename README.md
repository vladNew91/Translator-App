# Translator App

# [Demo](https://vladnew91-translatop-app.netlify.app)

Conditions:
1. The translation carried out when the user finishes typing the text, you can enter text in both fields.
2. When sending, a loader is displayed (in the skeleton style), in the field in which the translated text should be displayed.
3. If a certain language is set in the text entry field and the printed text does not correspond to the alphabet of the language (for example, when choosing a translation from English, the Cyrillic text is entered), then a warning notification is displayed that the keyboard layout needs to be changed.
4. API has the ability to automatically determine the language of the input text, this functionality is implemente in the user interface.
5. There is the ability to add a translation to “Favorites”. The data added to favorites is saved after reloading the page and when opening in another browser tab.
6. Adaptability (up to mobile devices). Day and night theme implementation.
7. Viewing the history of translations (same storage requirements as for “Favorite Translations”).
8. “Switch” button for swapping target language with source language.

## List of technologies

1. React baced on [Create React App](https://github.com/facebook/create-react-app), functional components.
2. TypeScript.
3. MUI.
4. React-Redux.
5. React-router v6.

### Available Scripts

In the project directory, you can run:

`yarn`\
Install dependences.

`yarn start`\
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build`\
Builds the app for production to the `build` folder.

## Learn More

[MUI](https://mui.com/)\
[React documentation](https://reactjs.org/)\
[TypeScript documentation](https://www.typescriptlang.org/docs/)\
[React-Redux documentation](https://react-redux.js.org/tutorials/quick-start)\
[React-router v6 documentation](https://reactrouter.com/en/v6.3.0/getting-started/overview)

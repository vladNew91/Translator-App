# Translator App

## [Demo](https://vladnew91-translatop-app.netlify.app)

Conditions:
1. The translation carried out when the user finishes typing the text, you can enter text in both fields.
2. When sending, a loader is displayed (in the skeleton style), in the field in which the translated text should be displayed.
3. If a certain language is set in the text entry field and the printed text does not correspond to the alphabet of the language (for example, when choosing a translation from English, the Cyrillic text is entered), then a warning notification is displayed that the keyboard layout needs to be changed.
4. API has the ability to automatically determine the language of the input text, this functionality is implemente in the user interface.
5. There is the ability to add a translation to “Favorites”. The data added to favorites is saved after reloading the page and when opening in another browser tab.
6. Adaptability (up to mobile devices). Day and night theme implementation.
7. Viewing the history of translations (same storage requirements as for “Favorite Translations”).
8. “Switch” button for swapping target language with source language.

### List of technologies

1. [React](https://reactjs.org/)
2. [TypeScript](https://www.typescriptlang.org/docs/)
3. [MUI](https://mui.com/)
4. [React-Redux](https://react-redux.js.org/tutorials/quick-start)
5. [React-Router V6](https://reactrouter.com/en/v6.3.0/getting-started/overview)

### Available Scripts

Clone the repository, in the project directory, you can run:

`yarn` - Install dependences.\
`yarn start` - runs the app in the development mode.\
`yarn build` - builds the app for production to the `build` folder.

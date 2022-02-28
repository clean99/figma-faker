# ⚽️Figma Faker 
This project is for generate fake data figma plugin for component recognization, it can change color/text with random set easily. Feel free to add new fake function.
## 🌈Demo
* Fake text
![FakeText](https://giphy.com/gifs/U1qmxDj4eyCaRNwTVk)
* Fake color
![FakeColor](https://giphy.com/embed/c8HiGcyCMh7MgbkYSy)
## 💫Quickstart
* Run `yarn` to install dependencies.
* Run `yarn build:watch` to start webpack in watch mode.
* Open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.

⭐ To change the UI of your plugin (the react code), start editing [App.tsx](./src/app/components/App.tsx).  
⭐ To interact with the Figma API edit [controller.ts](./src/plugin/controller.ts).  
⭐ Read more on the [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/).

## Toolings
This repo is using:
* React + Webpack
* TypeScript
* Prettier precommit hook

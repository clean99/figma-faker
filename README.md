# ⚽️Figma Faker 
This project is for generate fake data figma plugin for component recognization, it can change color/text with random set easily. Feel free to add new fake function.
## 🌈Demo
* Fake text
<div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/c8HiGcyCMh7MgbkYSy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/c8HiGcyCMh7MgbkYSy">via GIPHY</a></p>
![FakeText](https://media.giphy.com/media/U1qmxDj4eyCaRNwTVk/giphy.gif)
* Fake color
![FakeColor](https://media.giphy.com/media/c8HiGcyCMh7MgbkYSy/giphy.gif)
## 🍒How to Use
With only a few clicks, you can replace any place you want with random text/color!
1. open plugin
2. select nodes that you want to replace with random data
3. click Fake Text/Color
4. done!
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

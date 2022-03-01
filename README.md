# ⚽️Figma Faker 
This project is for generate fake data figma plugin for component recognization, it can change color/text with random set easily. Feel free to add new fake function.
## 💫Feature
* Fake text
Randomly change the text of nodes.
* Fake color
Randomly change the color of nodes.
* Fake coordinate
Randomly change the coordinate(X/Y) of nodes. It include the collision detection.
## 🌈Demo
* Fake text
![FakeText](https://github.com/clean99/figma-faker/blob/master/public/faketext.gif)
* Fake color
![FakeColor](https://github.com/clean99/figma-faker/blob/master/public/fakecolor.gif)
* Fake coordinate
![FakeCoordinate](https://github.com/clean99/figma-faker/blob/master/public/fakecoordinate.gif)
## 🍒How to Use
With only a few clicks, you can replace any place you want with random text/color!
1. open plugin
2. select nodes that you want to replace with random data
3. click Fake___
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

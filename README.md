# Pokémon-Types-App
![project screenshot](https://github.com/HectorDNuno/pokemon-types-app/blob/main/public/project-screenshot.png?raw=true)

![license](https://img.shields.io/badge/license-GPL--3.0-orange.svg)

## Description
Welcome Pokémon trainers! This web app was made to be a reference tool for the video game Pokémon. Specifically, it's so that players of the video game can look up one of the 18 types in the game and see all of its attributes. The way it does this is by making multiple, and in some cases chained, HTTP requests to the [PokéAPI](https://pokeapi.co/). The data recieved is then stored into an array and is displayed on the browser using card components built with Bootstrap. The bulk of the work happens in the TypesView.vue file along with its accompanying components. This front-end works in conjuction with a back-end that you can checkout here [pokemon-api](https://github.com/HectorDNuno/pokemon-api.git). The backend is mainly used to display the data on the cards in the HomeView.vue file and to store the images. I built this project using Vue.js, and I chose this framework to get more practice using components to create user interfaces.

Some challenges were working with the API itself. It's well documented, but extremely nested for the way that I planned to use it. I use it to see different types of information at the same time, but doing so required using different endpoints for each section of the project. This is where the chained HTTP requests came in. For example, the card titled "Moves With Type" required me to get the url of each 'move' and then make several back to back (sometimes over a hundred) HTTP requests. This allowed me to get the damage class of each move and group them accordingly within the card. 

In the future, I'd like to add a way to toggle the images of the Pokémon between their default and shiny versions with just the click of a button. I'd also like to expand the functionality to include all the details of each Pokémon, not just the 18 types. Essentially, I'd like to add a working Pokédex somewhere along the line. 

## How to Install Locally
Clone the project from GitHub by running this on the command line

```
$ git clone <URL-for-this-project>
```
This project has a couple dependencies, install them all with the following commands:

Axios

```
$ npm install axios
```

Bootstrap

```
$ npm install bootstrap
```

Vue Router

```
$ npm install vue-router
```

### Development Server
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

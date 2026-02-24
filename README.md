# Assassin's Creed Memory Game

A memory card game built with React and TypeScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## How to play

Click on a character card without clicking the same one twice. Cards shuffle after every click. Your score resets if you repeat a card — see how high you can go.

## Features

- Character data fetched from a local Express API
- Cards shuffle on every click
- Tracks current score and all-time best score

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- [assassins-creed-api](https://github.com/elenhpapadima/assassins-creed-api) (custom Express API for character data)

## Running locally

This game requires the [assassins-creed-api](https://github.com/elenhpapadima/assassins-creed-api) to be running first.

**1. Start the API:**

```bash
git clone https://github.com/elenhpapadima/assassins-creed-api.git
cd assassins-creed-api
npm install
npm start
```

**2. Start the game** (in a separate terminal):

```bash
git clone https://github.com/elenhpapadima/React_OdinProject_Memory_Game.git
cd React_OdinProject_Memory_Game
npm install
npm run dev
```

The game connects to the API automatically at `http://localhost:3000`.

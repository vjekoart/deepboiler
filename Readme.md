# deepboiler

A boilerplate repository for building web apps.

Monorepo managed by Turborepo, written in Typescript with web client and backend service.

* Frontend: React, [Wouter](https://github.com/molefrog/wouter), Vite, MUI, basic CSS reset
* Backend: ExpressJS with REST API and GraphQL dummy endpoints

The current version of the boilerplate doesn't include test mechanisms, nor `start` action for the backend service.

## Components

```
- apps
    - client
    - backend
```

## Usage

Prerequisites:

* Node v22, see `.nvmrc`
* PNPM, e.g. `npm install -g pnpm@latest-10`

```
$ cd deepboiler

$ pnpm install

# API location and ports are defined in apps/{client,backend}/.env files
$ pnpm run dev

$ pnpm run lint

$ pnpm run build
```

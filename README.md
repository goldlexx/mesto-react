# Mesto — React app

Mesto is a photo-sharing interface built with React. It loads profile and card data from the Yandex Practicum Mesto API.

## Run locally

```sh
git clone https://github.com/goldlexx/mesto-react.git
cd mesto-react
npm ci
npm start
```

## Configuration

Copy `.env.example` to `.env.local` and configure `REACT_APP_API_BASE_URL` and `REACT_APP_API_TOKEN` for a compatible cohort API. Values prefixed with `REACT_APP_` are embedded in the public browser bundle; never put private credentials there. The API token must be treated as public and rotated with its provider if it is no longer valid.

## Build and test

```bash
npm test -- --watchAll=false
npm run build
```




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

Copy `.env.example` to `.env.local` and configure `REACT_APP_API_BASE_URL` to a compatible API or trusted proxy. This browser client does not accept or embed an API token. The original cohort API may require authorization; connect it through a backend proxy that stores credentials server-side. Do not put tokens in `REACT_APP_*` variables because they are public in the generated bundle.

## Build and test

```bash
npm test -- --watchAll=false
npm run build
```




# Mesto — React Client

A React photo-sharing interface for account access, profile updates, and photo-card interactions.

## Live Demo

[Open Mesto](https://goldlexx.github.io/mesto-react/)

## Features

- Registration and sign-in
- Profile and avatar editing
- Browse cards, add photos, and manage likes
- Delete cards owned by the signed-in user

The app requires a compatible Mesto API for account and card data; it does not simulate persistence.

## Tech Stack

- React 18 and React Router
- Create React App (`react-scripts`)
- JavaScript and CSS

## Getting Started

```bash
git clone https://github.com/goldlexx/mesto-react.git
cd mesto-react
npm ci
```

Create `.env.local` with the API base URL. The compatible Mesto Worker is:

```text
REACT_APP_API_BASE_URL=https://mesto-api.rustik-yuldashev.workers.dev
```

Run the development server with `npm start`.

Do not put API credentials in `REACT_APP_*` variables because they are exposed in browser builds. Use a trusted server-side proxy for any API that requires a private credential.

## Build and Test

```bash
npm test -- --watchAll=false
npm run build
```

## Project Background

The original client was created as a learning project during the Yandex Practicum web development course.

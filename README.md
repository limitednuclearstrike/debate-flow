# Flower

A flowing app for competitive debate.

[Live version](https://debate-flow.vercel.app/)

## Usage

```bash
git clone https://github.com/Ashwagandhae/debate-flow.git
cd debate-flow
npm install
```

## Run locally (offline)

After `npm install` has finished once, you can run the app without internet access.

### Development mode

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

Open: <http://127.0.0.1:4173>

### Production mode

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Open: <http://127.0.0.1:4173>

> Note: keep `node_modules/` available locally if you plan to run fully offline.

## Build a Windows `.exe` (Electron)

This repo now includes a concrete Electron + electron-builder setup.

### 1) Build the Electron web assets

```bash
npm run build:electron:web
```

### 2) Run as a desktop app locally

```bash
npm run electron:start
```

### 3) Generate the Windows installer (`.exe`)

```bash
npm run electron:dist:win
```

The installer output will be placed in `dist-electron/`.

## Windows offline run (step-by-step)

In PowerShell:

```powershell
cd path\to\debate-flow
npm install   # one-time while online
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Then open <http://127.0.0.1:4173>.

## Development

```bash
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

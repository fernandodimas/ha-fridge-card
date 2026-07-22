# HA Fridge Card

Custom [Home Assistant](https://www.home-assistant.io/) Lovelace card for displaying fridge and freezer temperatures with multiple fridge layout options.

> **Fork** of [chiconws/ha-fridge-card](https://github.com/chiconws/ha-fridge-card) with a new **Side by Side** layout.

## What's Different

This fork introduces a new **`dual_door`** layout and renames the original to `french_door`:

| Layout | Description |
|---|---|
| `default` | Freezer on top, fridge on bottom |
| `inverted` | Fridge on top, freezer on bottom |
| `dual_door` | **NEW** — Two vertical doors side by side: freezer 40% (left) / fridge 60% (right) |
| `french_door` | French door (two doors on top + drawer on bottom) — _previously `dual_door`_ |
| `freezer` | Freezer only |

![Side by Side](assets/side-by-side.png)

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** → **+ Explore & Download Repositories**
3. Search for **HA Fridge Card**
4. Click **Download**
5. Restart Home Assistant

### Manual

1. Download `dist/ha-fridge-card.js` from the [latest release](https://github.com/fernandodimas/ha-fridge-card/releases)
2. Copy it to your `config/www/` folder
3. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/ha-fridge-card.js`
   - Resource type: **JavaScript Module**

## Usage

```yaml
type: custom:ha-fridge-card
title: "Geladeira"
layout: dual_door
freezer_entity: sensor.freezer_temperature
fridge_entity: sensor.fridge_temperature
```

## Options

| Option | Required | Description |
|---|---|---|
| `type` | Yes | `custom:ha-fridge-card` |
| `title` | No | Card title. Default: `Fridge` |
| `layout` | No | `default`, `inverted`, `dual_door`, `french_door`, `freezer` |
| `freezer_entity` | No* | Entity ID for the freezer temperature sensor |
| `fridge_entity` | No* | Entity ID for the fridge temperature sensor |

\* At least one entity is required.

## Development

```bash
npm install
npm run build       # one-time build
npm run watch       # rebuild on file changes
```

The bundled output is written to `dist/ha-fridge-card.js`.

## License

MIT

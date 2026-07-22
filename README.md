# HA Fridge Card

Custom [Home Assistant](https://www.home-assistant.io/) Lovelace card for displaying fridge and freezer temperatures with multiple fridge layout options.

> **Fork** of [chiconws/ha-fridge-card](https://github.com/chiconws/ha-fridge-card).

## Layouts

| Layout | Preview | Description |
|---|---|---|
| `default` | ![default](assets/layout-default.svg) | Freezer on top, fridge on bottom |
| `inverted` | ![inverted](assets/layout-inverted.svg) | Fridge on top, freezer on bottom |
| `dual_door` | ![dual_door](assets/layout-dual-door.svg) | Side by side: freezer (left) / fridge (right) |
| `french_door` | ![french_door](assets/layout-french-door.svg) | French door (two doors on top + drawer on bottom) |
| `freezer` | ![freezer](assets/layout-freezer.svg) | Freezer only |

## Features

- **5 layout options** — freezer on top, fridge on top, side by side, french door, freezer only
- **Split ratio slider** — adjust freezer/fridge proportion from 20% to 80%
- **Show/hide title** — toggle the card title visibility
- **Ice dispenser** — built-in ice dispenser overlay on the door (all layouts)
- **Custom labels** — rename freezer and fridge section labels
- **Resizable** — configurable width and height via slider

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** → **+ Explore & Download Repositories**
3. Click **⋮** (top right) → **Custom repositories**
4. Add: `https://github.com/fernandodimas/ha-fridge-card` — Category: **Dashboard**
5. Click **Download**
6. Restart Home Assistant

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
freezer_label: "Congelador"
fridge_label: "Geladeira"
show_title: true
split_ratio: 40
card_width: 230
card_height: 387
```

## Options

| Option | Required | Default | Description |
|---|---|---|---|
| `type` | Yes | — | `custom:ha-fridge-card` |
| `title` | No | `Fridge` | Card title |
| `show_title` | No | `true` | Show or hide the card title |
| `layout` | No | `default` | `default`, `inverted`, `dual_door`, `french_door`, `freezer` |
| `freezer_entity` | No* | — | Entity ID for the freezer temperature sensor |
| `fridge_entity` | No* | — | Entity ID for the fridge temperature sensor |
| `freezer_label` | No | `Freezer` | Custom label for the freezer section |
| `fridge_label` | No | `Fridge` | Custom label for the fridge section |
| `show_dispenser` | No | `false` | Show ice dispenser on the door |
| `split_ratio` | No | `30` | Freezer/fridge proportion (20–80%) |
| `card_width` | No | `230` | Card width in px (100–400) |
| `card_height` | No | `387` | Card height in px (200–600) |

\* At least one entity is required.

## License

MIT

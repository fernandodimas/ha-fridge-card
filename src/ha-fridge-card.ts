import { LitElement, html, nothing, css } from "lit";
import { customElement } from "lit/decorators.js";

const CARD_TYPE = "ha-fridge-card";

const INVALID_STATES = new Set(["unknown", "unavailable", "none"]);

const VIEWBOX_WIDTH = 192;
const VIEWBOX_HEIGHT = 387;

const LAYOUTS = ["default", "freezer", "inverted", "dual_door"] as const;
type Layout = (typeof LAYOUTS)[number];

type Zone = { x: number; y: number; width: number; height: number };

const LAYOUT_ZONES: Record<string, { freezer?: Zone; fridge?: Zone }> = {
  default: {
    freezer: { x: 10, y: 8, width: 172, height: 108 },
    fridge: { x: 10, y: 124, width: 172, height: 253 },
  },
  freezer: {
    freezer: { x: 10, y: 8, width: 172, height: 371 },
  },
  inverted: {
    freezer: { x: 10, y: 269, width: 172, height: 108 },
    fridge: { x: 10, y: 8, width: 172, height: 253 },
  },
  dual_door: {
    freezer: { x: 10, y: 269, width: 172, height: 108 },
    fridge: { x: 10, y: 8, width: 172, height: 253 },
  },
};

const FRIDGE_SVGS: Record<string, unknown> = {
  default: html`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="8" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="38" width="6" height="48" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="120" x2="182" y2="120" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="124" width="172" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="124" width="172" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="194" width="6" height="60" rx="3" fill="#B8C2CC" />
    </svg>
  `,
  freezer: html`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="371" rx="10" fill="#edf1f5" />
      <rect x="10" y="8" width="172" height="371" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="140" width="6" height="70" rx="3" fill="#B8C2CC" />
    </svg>
  `,
  inverted: html`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="172" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="8" width="172" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="269" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
    </svg>
  `,
  dual_door: html`
    <svg class="fridge-svg" viewBox="0 0 192 387" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="4" width="184" height="379" rx="14" fill="#E8ECF0" stroke="#C4CDD6" stroke-width="1.5" />
      <rect x="10" y="8" width="84" height="253" rx="10" fill="#F7F9FB" />
      <rect x="10" y="8" width="84" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="82" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <rect x="98" y="8" width="84" height="253" rx="10" fill="#F7F9FB" />
      <rect x="98" y="8" width="84" height="253" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="104" y="80" width="6" height="60" rx="3" fill="#B8C2CC" />
      <line x1="10" y1="265" x2="182" y2="265" stroke="#BCC5CF" stroke-width="1.5" />
      <rect x="10" y="269" width="172" height="108" rx="10" fill="#F4F6F8" />
      <rect x="10" y="269" width="172" height="108" rx="10" stroke="#D1D8E0" stroke-width="1" />
      <rect x="26" y="299" width="6" height="48" rx="3" fill="#B8C2CC" />
    </svg>
  `,
};

// ── Card Class ─────────────────────────────────────────────────────────────────

@customElement(CARD_TYPE)
export class HaFridgeCard extends LitElement {
  private _config?: Record<string, unknown>;
  private _hass?: any;

  static getConfigForm() {
    return {
      schema: [
        { name: "title", selector: { text: {} } },
        {
          name: "layout",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "default", label: "Freezer on top" },
                { value: "inverted", label: "Fridge on top" },
                { value: "dual_door", label: "French door" },
                { value: "freezer", label: "Freezer only" },
              ],
            },
          },
        },
        { name: "freezer_entity", selector: { entity: { domain: "sensor" } } },
        { name: "fridge_entity", selector: { entity: { domain: "sensor" } } },
      ],
      computeLabel: (schema: { name: string }) => {
        switch (schema.name) {
          case "title":
            return "Title";
          case "layout":
            return "Layout";
          case "freezer_entity":
            return "Freezer sensor";
          case "fridge_entity":
            return "Fridge sensor";
          default:
            return undefined;
        }
      },
    };
  }

  getStubConfig() {
    return {
      type: `custom:${CARD_TYPE}`,
      freezer_entity: "sensor.freezer_temperature",
      fridge_entity: "sensor.fridge_temperature",
      title: "Fridge",
      layout: "default",
    };
  }

  setConfig(config: Record<string, unknown>) {
    const layout = this.normalizeLayout(config.layout as string | undefined);
    this._config = { title: "Fridge", ...config, layout };
  }

  set hass(hass: any) {
    this._hass = hass;
    this.requestUpdate();
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    return 4;
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  render() {
    if (!this._config) return nothing;

    const layout = this.normalizeLayout(this._config.layout as string | undefined);
    const zones = LAYOUT_ZONES[layout];
    const showFreezer = true;
    const showFridge = Boolean(zones.fridge);

    const freezer = this.getDisplayState(this._config.freezer_entity as string | undefined);
    const fridge = showFridge
      ? this.getDisplayState(this._config.fridge_entity as string | undefined)
      : null;

    const cardLabel = this.cardLabel(showFreezer, showFridge);

    return html`
      <ha-card>
        <div class="card-shell">
          <div class="heading">
            <h3 class="title">${this._config.title}</h3>
          </div>

          <div class="body">
            <div class="fridge layout-${layout}" role="img" aria-label=${cardLabel}>
              <div class="fridge-photo-frame">
                ${FRIDGE_SVGS[layout]}

                <div class="readings">
                  ${showFreezer && zones.freezer
                    ? html`
                        <section class="reading zone-freezer" style=${this.readingStyle(zones.freezer)}>
                          <p class="section-label">Freezer</p>
                          <div class=${this.temperatureClass(freezer)}>
                            <span>${freezer.stateText}</span>
                            ${freezer.unitText ? html`<span class="unit">${freezer.unitText}</span>` : nothing}
                          </div>
                        </section>
                      `
                    : nothing}

                  ${showFridge && zones.fridge
                    ? html`
                        <section class="reading zone-fridge" style=${this.readingStyle(zones.fridge)}>
                          <p class="section-label">Fridge</p>
                          <div class=${this.temperatureClass(fridge)}>
                            <span>${fridge.stateText}</span>
                            ${fridge.unitText ? html`<span class="unit">${fridge.unitText}</span>` : nothing}
                          </div>
                        </section>
                      `
                    : nothing}
                </div>
              </div>

              <div class="feet" aria-hidden="true">
                <span class="foot"></span>
                <span class="foot"></span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  // ── Helpers ────────────────────────────────────────────────────────────────

  private temperatureClass(displayState: {
    stateText: string;
    unitText: string;
    isPlaceholder: boolean;
  }) {
    return displayState.isPlaceholder ? "temperature placeholder" : "temperature";
  }

  private normalizeLayout(raw: string | undefined): Layout {
    if (raw && (LAYOUTS as readonly string[]).includes(raw)) {
      return raw as Layout;
    }
    return "default";
  }

  private readingStyle(zone: Zone) {
    if (!zone) return "";
    const left = ((zone.x + zone.width / 2) / VIEWBOX_WIDTH) * 100;
    const top = ((zone.y + zone.height / 2) / VIEWBOX_HEIGHT) * 100;
    return `left:${left}%;top:${top}%;`;
  }

  private getDisplayState(entityId: string | undefined): {
    stateText: string;
    unitText: string;
    isPlaceholder: boolean;
  } {
    if (!entityId) {
      return { stateText: "--", unitText: "\u00B0C", isPlaceholder: true };
    }
    const entity = this._hass?.states?.[entityId];
    if (!entity) {
      return { stateText: "--", unitText: "", isPlaceholder: true };
    }
    const rawState = entity.state?.trim();
    if (!rawState || INVALID_STATES.has(rawState.toLowerCase())) {
      return { stateText: "--", unitText: "", isPlaceholder: true };
    }
    const numeric = Number.parseFloat(rawState);
    const unit = this.getUnit(entity);
    if (!Number.isNaN(numeric)) {
      return {
        stateText: new Intl.NumberFormat(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(numeric),
        unitText: unit,
        isPlaceholder: false,
      };
    }
    return { stateText: rawState, unitText: unit, isPlaceholder: false };
  }

  private getUnit(entity: any): string {
    const unit = entity.attributes.unit_of_measurement;
    return typeof unit === "string" && unit.trim() ? unit : "\u00B0C";
  }

  private cardLabel(showFreezer: boolean, showFridge: boolean): string {
    if (showFreezer && showFridge) return "Fridge and freezer temperatures";
    if (showFreezer) return "Freezer temperature";
    if (showFridge) return "Fridge temperature";
    return "Fridge card";
  }

  // ── Styles ────────────────────────────────────────────────────────────────

  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        position: relative;
        overflow: hidden;
        padding: 20px 18px 18px;
      }

      .card-shell {
        display: grid;
        gap: 18px;
      }

      .heading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .title {
        margin: 0;
        color: var(--primary-text-color);
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        text-align: center;
      }

      .body {
        display: grid;
        place-items: center;
      }

      .fridge {
        position: relative;
        color: #132030;
      }

      .fridge-photo-frame {
        position: relative;
        width: min(100%, 192px);
        height: 387px;
        border-radius: 18px 18px 12px 12px;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.92);
        box-shadow:
          0 12px 30px rgba(0, 0, 0, 0.16),
          inset 0 0 0 1px rgba(116, 135, 158, 0.12);
      }

      .fridge-svg {
        width: 100%;
        height: 100%;
        display: block;
      }

      .readings {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .reading {
        position: absolute;
        width: 96px;
        transform: translate(-50%, -50%);
        display: grid;
        justify-items: center;
        gap: 6px;
        padding: 8px 10px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.55);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }

      .section-label {
        margin: 0;
        color: rgba(19, 32, 48, 0.72);
        font-size: 0.52rem;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.55);
      }

      .temperature {
        display: inline-flex;
        align-items: flex-start;
        gap: 4px;
        color: #102031;
        font-size: clamp(1.45rem, 4vw, 1.95rem);
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.03em;
        text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
      }

      .temperature.placeholder {
        color: rgba(16, 32, 49, 0.42);
      }

      .unit {
        color: rgba(16, 32, 49, 0.7);
        font-size: 0.92rem;
        font-weight: 600;
        letter-spacing: 0;
        transform: translateY(0.22rem);
      }

      .reading.zone-freezer .temperature {
        color: #0f3f75;
      }

      .reading.zone-fridge .temperature {
        color: #125b6d;
      }

      .feet {
        display: flex;
        justify-content: space-between;
        padding: 0 12px;
        margin-top: -2px;
        pointer-events: none;
      }

      .foot {
        width: 20px;
        height: 6px;
        border-radius: 0 0 6px 6px;
        background: linear-gradient(180deg, rgba(173, 182, 193, 0.98), rgba(120, 129, 140, 0.92));
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.55),
          0 1px 2px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 420px) {
        ha-card {
          padding-inline: 14px;
        }

        .fridge-photo-frame {
          width: min(100%, 176px);
          height: 356px;
        }
      }
    `;
  }
}

// ── Registration ───────────────────────────────────────────────────────────────

if (!customElements.get(CARD_TYPE)) {
  customElements.define(CARD_TYPE, HaFridgeCard);
}

(window as any).customCards = (window as any).customCards ?? [];
if (!(window as any).customCards.some((card: any) => card.type === CARD_TYPE)) {
  (window as any).customCards.push({
    type: CARD_TYPE,
    name: "HA Fridge Card",
    description: "Fridge and freezer temperatures with multiple fridge layout options.",
    preview: true,
  });
}

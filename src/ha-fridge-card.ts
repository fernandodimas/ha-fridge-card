import { LitElement, html, nothing, css } from "lit";
import { customElement } from "lit/decorators.js";

const CARD_TYPE = "ha-fridge-card";

const INVALID_STATES = new Set(["unknown", "unavailable", "none"]);

const VIEWBOX_WIDTH = 192;
const VIEWBOX_HEIGHT = 387;

const LAYOUTS = ["default", "freezer", "inverted", "french_door", "dual_door"] as const;
type Layout = (typeof LAYOUTS)[number];

type Zone = { x: number; y: number; width: number; height: number };

function computeZones(layout: Layout, ratio: number): { freezer?: Zone; fridge?: Zone } {
  const H = 365;
  const Y0 = 12;
  const r = ratio / 100;

  switch (layout) {
    case "freezer":
      return { freezer: { x: 16, y: Y0, width: 160, height: H } };
    case "default":
      return {
        freezer: { x: 16, y: Y0, width: 160, height: Math.round(H * r) },
        fridge: { x: 16, y: Y0 + Math.round(H * r) + 2, width: 160, height: Math.round(H * (1 - r)) - 2 },
      };
    case "inverted":
    case "french_door":
      return {
        fridge: { x: 16, y: Y0, width: 160, height: Math.round(H * (1 - r)) - 2 },
        freezer: { x: 16, y: Y0 + Math.round(H * (1 - r)), width: 160, height: Math.round(H * r) },
      };
    case "dual_door": {
      const fw = Math.round(160 * r);
      return {
        freezer: { x: 12, y: Y0, width: fw, height: H },
        fridge: { x: 12 + fw + 4, y: Y0, width: 160 - fw, height: H },
      };
    }
    default:
      return {};
  }
}

function buildSvg(layout: Layout, ratio: number): unknown {
  const r = ratio / 100;
  const H = 365;
  const Y0 = 12;

  switch (layout) {
    case "freezer": {
      const cy = Y0 + Math.round(H / 2) - 26;
      return html`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${Y0}" width="160" height="${H}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${Y0 + Math.round(H / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${cy}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${cy + 4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${cy + 28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${cy + 44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;
    }

    case "default": {
      const fh = Math.round(H * r);
      const fH = Math.round(H * (1 - r)) - 2;
      const sep = Y0 + fh;
      const cy = sep + 2 + Math.round(fH / 2) - 26;
      return html`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${Y0}" width="160" height="${fh}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${Y0 + Math.round(fh / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="14" y="${sep}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${sep + 2}" width="160" height="${fH}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${sep + 2 + Math.round(fH / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${cy}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${cy + 4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${cy + 28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${cy + 44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;
    }

    case "inverted": {
      const fH = Math.round(H * (1 - r)) - 2;
      const fh = Math.round(H * r);
      const sep = Y0 + fH;
      const cy = Y0 + Math.round(fH / 2) - 26;
      return html`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${Y0}" width="160" height="${fH}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${Y0 + Math.round(fH / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="76" y="${cy}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="80" y="${cy + 4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="90" y="${cy + 28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="86" y="${cy + 44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="14" y="${sep}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${sep + 2}" width="160" height="${fh}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="24" y="${sep + 2 + Math.round(fh / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;
    }

    case "french_door": {
      const fH = Math.round(H * (1 - r)) - 2;
      const fh = Math.round(H * r);
      const sep = Y0 + fH;
      const halfW = 78;
      const cy = Y0 + Math.round(fH / 2) - 26;
      return html`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="16" y="${Y0}" width="${halfW}" height="${fH}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="82" y="${Y0 + Math.round(fH / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="16" y="${cy}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="20" y="${cy + 4}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="30" y="${cy + 28}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="26" y="${cy + 44}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="96" y="${Y0}" width="2" height="${fH}" rx="1" fill="#D6DCE4" />
        <rect x="98" y="${Y0}" width="${halfW}" height="${fH}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="158" y="${Y0 + Math.round(fH / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="14" y="${sep}" width="164" height="2" rx="1" fill="#D6DCE4" />
        <rect x="16" y="${sep + 2}" width="160" height="${fh}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="76" y="${sep + 10}" width="36" height="4" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;
    }

    case "dual_door": {
      const fw = Math.round(160 * r);
      const lw = 160 - fw;
      const lx = 12 + fw + 4;
      return html`<svg class="fridge-svg" viewBox="0 0 192 387" preserveAspectRatio="none">
        <rect x="4" y="4" width="184" height="379" rx="12" fill="#ECEFF3" stroke="#C8CED6" stroke-width="1.5" />
        <rect x="12" y="${Y0}" width="${fw}" height="${H}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${lx - 6}" y="${Y0 + Math.round(H / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="${12 + Math.round(fw / 2) - 20}" y="${Y0 + 40}" width="40" height="52" rx="4" fill="#C8CED6" stroke="#B0B8C4" stroke-width="0.8" />
        <rect x="${12 + Math.round(fw / 2) - 16}" y="${Y0 + 44}" width="32" height="20" rx="3" fill="#2C2C3A" />
        <rect x="${12 + Math.round(fw / 2) - 6}" y="${Y0 + 68}" width="12" height="14" rx="2" fill="#8A919A" />
        <rect x="${12 + Math.round(fw / 2) - 10}" y="${Y0 + 84}" width="20" height="5" rx="2" fill="#A0A8B4" />
        <rect x="${lx - 2}" y="${Y0}" width="2" height="${H}" rx="1" fill="#D6DCE4" />
        <rect x="${lx}" y="${Y0}" width="${lw}" height="${H}" rx="8" fill="#F5F7FA" stroke="#D6DCE4" stroke-width="0.8" />
        <rect x="${lx + 2}" y="${Y0 + Math.round(H / 2) - 18}" width="4" height="36" rx="2" fill="#B0B8C4" />
        <rect x="20" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
        <rect x="162" y="381" width="10" height="6" rx="2" fill="#C8CED6" />
      </svg>`;
    }

    default:
      return html``;
  }
}

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
          name: "show_title",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ],
            },
          },
        },
        {
          name: "layout",
          selector: {
            select: {
              mode: "dropdown",
              options: [
                { value: "default", label: "Freezer on top" },
                { value: "inverted", label: "Fridge on top" },
                { value: "dual_door", label: "Side by side" },
                { value: "french_door", label: "French door" },
                { value: "freezer", label: "Freezer only" },
              ],
            },
          },
        },
        { name: "freezer_entity", selector: { entity: { domain: "sensor" } } },
        { name: "fridge_entity", selector: { entity: { domain: "sensor" } } },
        { name: "freezer_label", selector: { text: {} } },
        { name: "fridge_label", selector: { text: {} } },
        {
          name: "split_ratio",
          selector: { number: { min: 20, max: 80, step: 1, mode: "slider", unit_of_measurement: "%" } },
        },
        {
          name: "card_width",
          selector: { number: { min: 100, max: 400, step: 10, mode: "slider", unit_of_measurement: "px" } },
        },
        {
          name: "card_height",
          selector: { number: { min: 200, max: 600, step: 10, mode: "slider", unit_of_measurement: "px" } },
        },
      ],
      computeLabel: (schema: { name: string }) => {
        switch (schema.name) {
          case "title":
            return "Title";
          case "show_title":
            return "Show title";
          case "layout":
            return "Layout";
          case "freezer_entity":
            return "Freezer sensor";
          case "fridge_entity":
            return "Fridge sensor";
          case "freezer_label":
            return "Freezer label";
          case "fridge_label":
            return "Fridge label";
          case "split_ratio":
            return "Freezer / Fridge ratio";
          case "card_width":
            return "Width";
          case "card_height":
            return "Height";
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

  getGridOptions() {
    return { columns: 6, rows: 4, min_columns: 4 };
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  render() {
    if (!this._config) return nothing;

    const layout = this.normalizeLayout(this._config.layout as string | undefined);
    const ratio = (this._config.split_ratio as number) ?? 30;
    const zones = computeZones(layout, ratio);
    const showTitle = this._config.show_title !== "false" && this._config.show_title !== false;
    const showFreezer = true;
    const showFridge = Boolean(zones.fridge);

    const freezer = this.getDisplayState(this._config.freezer_entity as string | undefined);
    const fridge = showFridge
      ? this.getDisplayState(this._config.fridge_entity as string | undefined)
      : null;

    const cardLabel = this.cardLabel(showFreezer, showFridge);

    const freezerLabel = (this._config.freezer_label as string) || "Freezer";
    const fridgeLabel = (this._config.fridge_label as string) || "Fridge";
    const cardWidth = (this._config.card_width as number) || 230;
    const cardHeight = (this._config.card_height as number) || 387;

    return html`
      <ha-card>
        <div class="card-shell">
          ${showTitle ? html`
            <div class="heading">
              <h3 class="title">${this._config.title}</h3>
            </div>
          ` : nothing}
          <div class="body">
            <div class="fridge layout-${layout}" role="img" aria-label=${cardLabel}>
              <div class="fridge-photo-frame" style="width:${cardWidth}px;height:${cardHeight}px;">
                ${buildSvg(layout, ratio)}
                <div class="readings">
                  ${showFreezer && zones.freezer
                    ? html`
                        <section class="reading zone-freezer"
                          style=${this.readingStyle(zones.freezer)}>
                          <p class="section-label">${freezerLabel}</p>
                          <div class=${this.temperatureClass(freezer)}>
                            <span>${freezer.stateText}</span>
                            ${freezer.unitText
                              ? html`<span class="unit">${freezer.unitText}</span>`
                              : nothing}
                          </div>
                        </section>
                      `
                    : nothing}
                  ${showFridge && zones.fridge
                    ? html`
                        <section class="reading zone-fridge"
                          style=${this.readingStyle(zones.fridge)}>
                          <p class="section-label">${fridgeLabel}</p>
                          <div class=${this.temperatureClass(fridge)}>
                            <span>${fridge.stateText}</span>
                            ${fridge.unitText
                              ? html`<span class="unit">${fridge.unitText}</span>`
                              : nothing}
                          </div>
                        </section>
                      `
                    : nothing}
                </div>
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

  private cardLabel(showFreezer: boolean, showFridge: boolean) {
    if (showFreezer && showFridge) return "Fridge and freezer temperatures";
    if (showFreezer) return "Freezer temperature";
    return "Fridge temperature";
  }

  private normalizeLayout(layout: string | undefined): Layout {
    if (layout && (LAYOUTS as readonly string[]).includes(layout)) return layout as Layout;
    return "default";
  }

  private readingStyle(zone: { x: number; y: number; width: number; height: number }) {
    const left = ((zone.x + zone.width / 2) / VIEWBOX_WIDTH) * 100;
    const top = ((zone.y + 20) / VIEWBOX_HEIGHT) * 100;
    return `left:${left}%;top:${top}%;`;
  }

  private getDisplayState(entityId: string | undefined): {
    stateText: string;
    unitText: string;
    isPlaceholder: boolean;
  } {
    if (!entityId) {
      return { stateText: "--", unitText: "°C", isPlaceholder: true };
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

  private getUnit(entity: any) {
    const unit = entity.attributes.unit_of_measurement;
    return typeof unit === "string" && unit.trim() ? unit : "°C";
  }

  // ── Styles ─────────────────────────────────────────────────────────────────

  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        border-radius: 18px;
        overflow: hidden;
      }

      .card-shell {
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 18px;
        padding: 18px;
        background: var(--card-background-color, #fff);
      }

      .heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        margin: 0;
        font-size: 1.2em;
        font-weight: 600;
        color: var(--primary-text-color, #212121);
      }

      .body {
        display: flex;
        justify-content: center;
      }

      .fridge {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .fridge-photo-frame {
        position: relative;
        border-radius: 18px 18px 12px 12px;
        background: var(--card-background-color, #fff);
        box-shadow:
          0 1px 3px rgba(0, 0, 0, 0.08),
          0 4px 12px rgba(0, 0, 0, 0.06);
        overflow: hidden;
      }

      .fridge-svg {
        display: block;
        width: 100%;
        height: 100%;
      }

      .readings {
        position: absolute;
        inset: 0;
      }

      .reading {
        position: absolute;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 6px 10px;
        border-radius: 10px;
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        background: rgba(255, 255, 255, 0.35);
        border: 1px solid rgba(255, 255, 255, 0.45);
        pointer-events: none;
      }

      .section-label {
        margin: 0 0 2px;
        font-size: 0.6em;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        opacity: 0.7;
      }

      .zone-freezer .section-label {
        color: #0f3f75;
      }

      .zone-fridge .section-label {
        color: #125b6d;
      }

      .temperature {
        font-size: 1.1em;
        font-weight: 700;
        line-height: 1.2;
      }

      .zone-freezer .temperature {
        color: #0f3f75;
      }

      .zone-fridge .temperature {
        color: #125b6d;
      }

      .temperature .unit {
        font-size: 0.65em;
        font-weight: 500;
        margin-left: 1px;
      }

      .temperature.placeholder {
        opacity: 0.35;
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

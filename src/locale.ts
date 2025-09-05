import type { Lang } from "@/lib/stores/langStore";

type TranslationKey =
  | "developedBy"
  | "title"
  | "subtitle"
  | "webDemo"
  | "download"
  | "features";

const translations: Record<Lang, Record<TranslationKey, string>> = {
  en: {
    developedBy: "Developed with ❤️ by",
    title: "Fallout 2 Community Edition",
    subtitle: "A fully working re-implementation",
    webDemo: "Try in browser",
    download: "Download",
    features: "Features",
  },
};

const transIntro: Record<Lang, string[]> = {
  en: [
    "High resolution support",
    "Increased pathfinding nodes 5x for more accurate pathfinding",
    "Ctrl-click to quickly move items when bartering, looting, or stealing",
    "Press 'a' to select all when choosing item quantity",
    "Press 'a' to Take All when looting",
    "When bartering, caps default to the right amount to balance the trade (if possible)",
    "Music continues playing between maps (requires config)",
    "Auto open doors (requires config)",
  ],
};

export { transIntro, translations };
export type { TranslationKey };

import type { Lang } from "@/lib/stores/langStore";

type TranslationKey = "developedBy" | "title";

const translations: Record<Lang, Record<TranslationKey, string>> = {
  en: {
    developedBy: "Developed with ❤️ by",
    title: "Fallout 2 Community Edition",
  },
};

export default translations;
export type { TranslationKey };

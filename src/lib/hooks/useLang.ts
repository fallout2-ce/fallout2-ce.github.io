import langAtom, {
  SupportedLangs,
  type Lang,
  type LangWithSys,
} from "@/lib/stores/langStore";
import { useAtom } from "jotai";
import { useEffect, useMemo } from "react";

const getLangFromSys = (): Lang => {
  const navLang = navigator.language;
  const langs = SupportedLangs.filter((l) => l != "System");
  return langs.find((l) => navLang.startsWith(l)) || "en";
};

const resolveLang = (lang: LangWithSys): Lang => {
  return lang === "System" ? getLangFromSys() : lang;
};

const useLang = () => {
  const [lang, setLang] = useAtom(langAtom);
  const currLang = useMemo(() => resolveLang(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = currLang;
  }, [currLang]);

  return { currLang, lang, setLang };
};

export default useLang;

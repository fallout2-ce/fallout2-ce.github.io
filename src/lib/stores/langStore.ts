import { atomWithStorage } from "jotai/utils";

const SupportedLangs = ["sys", "en", "ru"] as const;
type LangWithSys = (typeof SupportedLangs)[number];
type Lang = Exclude<LangWithSys, "sys">;

const langAtom = atomWithStorage<LangWithSys>("lang", "sys");

export default langAtom;

export { SupportedLangs };

export type { Lang, LangWithSys };

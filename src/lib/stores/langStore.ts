import { atomWithStorage } from "jotai/utils";

const SupportedLangs = ["System", "en"] as const;
type LangWithSys = (typeof SupportedLangs)[number];
type Lang = Exclude<LangWithSys, "System">;

const langAtom = atomWithStorage<LangWithSys>("lang", "System");

export default langAtom;

export { SupportedLangs };

export type { Lang, LangWithSys };

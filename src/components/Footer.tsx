import useLang from "@/lib/hooks/useLang";
import { translations } from "@/locale";
import { SiDiscord, SiTelegram } from "react-icons/si";

// TODO: plz update the links

const Footer = () => {
  const { currLang } = useLang();
  return (
    <footer className="w-full h-16 lg:h-12 shrink-0 flex items-center justify-center bg-background/10 sticky bottom-0 z-20 backdrop-blur-xs border-t-background">
      <div className="w-full max-w-4xl justify-between p-4 items-center flex flex-col lg:flex-row gap-2 my-2 text-sm">
        <div className="flex gap-6">
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <SiDiscord className="h-6 w-6" />
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105"
          >
            <SiTelegram className="h-6 w-6" />
          </a>
        </div>
        <div className="flex justify-center items-center text-xs gap-1">
          {translations[currLang].developedBy}{" "}
          <a
            href="https://github.com/fallout2-ce"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:scale-101"
          >
            https://github.com/fallout2-ce
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import useLang from "@/lib/hooks/useLang";
import { translations } from "@/locale";
import Introduction from "@/components/Introduction";
import { Button } from "@/components/ui/button";

function App() {
  const { currLang } = useLang();
  return (
    <div className="w-full max-w-4xl p-4 lg:my-8 gap-8 flex flex-col">
      <h1 className="text-primary text-5xl lg:text-6xl  font-extrabold italic max-w-2/3 font-orbitron tracking-tighter">
        {translations[currLang].title}
      </h1>
      <p className="text-2xl font-bold italic font-orbitron">
        {translations[currLang].subtitle}
      </p>
      <Introduction />
      <div className="flex w-full lg:w-1/2 gap-6">
        <a
          className="w-full flex-1"
          href=" https://fallout-nevada.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="w-full rounded-full text-lg py-4 h-14 lg:py-6 px-6"
            variant="outline"
          >
            {translations[currLang].webDemo}
          </Button>
        </a>
        <a
          className="w-full flex-1"
          href="https://github.com/fallout2-ce/fallout2-ce/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full rounded-full text-lg py-4 h-14 lg:py-6 px-8">
            {translations[currLang].download}
          </Button>
        </a>
      </div>
    </div>
  );
}

export default App;

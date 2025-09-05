import useLang from "@/lib/hooks/useLang";
import { transIntro, translations } from "@/locale";
import { ScrollArea } from "@/components/ui/scroll-area";

const Introduction = () => {
  const { currLang } = useLang();
  return (
    <div>
      <h3 className="font-semibold orbitron">
        {translations[currLang].features}:
      </h3>
      <ScrollArea className="mt-2 relative">
        <div className="ml-2">
          <ul className="flex flex-col gap-2 text-base text-muted-foreground list-disc w-full p-4 max-h-[5.5rem] lg:max-h-[8rem]">
            {transIntro[currLang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Introduction;

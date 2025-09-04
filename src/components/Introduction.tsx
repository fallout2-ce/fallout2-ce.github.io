import useLang from "@/lib/hooks/useLang";
import { transIntro, translations } from "@/locale";

const Introduction = () => {
  const { currLang } = useLang();
  return (
    <div>
      <h3>{translations[currLang].features}:</h3>
      <ul className="flex flex-col gap-2 text-base text-muted list-disc w-full p-4">
        {transIntro[currLang].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Introduction;

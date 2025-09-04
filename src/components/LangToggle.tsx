import { Globe } from "lucide-react";
import useLang from "@/lib/hooks/useLang";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SupportedLangs, type LangWithSys } from "@/lib/stores/langStore";

interface DropDownItemsProps {
  value: LangWithSys;
  curr: LangWithSys;
  set: (v: LangWithSys) => void;
}

const Item = ({ value, curr, set }: DropDownItemsProps) => (
  <DropdownMenuCheckboxItem
    checked={curr === value}
    onCheckedChange={() => set(value)}
    className="text-xs"
  >
    {value}
  </DropdownMenuCheckboxItem>
);

const LangToggle = () => {
  const { lang, setLang } = useLang();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Globe className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit border-muted bg-background/10 backdrop-blur-xs"
        sideOffset={12}
      >
        {SupportedLangs.map((l) => (
          <Item key={l} value={l} curr={lang} set={setLang} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangToggle;

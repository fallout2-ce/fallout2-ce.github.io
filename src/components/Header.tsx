import { Link } from "react-router";
import LangToggle from "@/components/LangToggle";

const Header = () => (
  <header className="w-full h-16 shrink-0 flex items-center justify-center bg-background/20 sticky top-0 z-20 backdrop-blur-xs border-b-background">
    <div className="w-full max-w-4xl flex justify-between p-4 items-center">
      <Link to="/">
        <img
          src="/logo.png"
          className="h-10 w-10 hover:scale-105 transition-all duration-200"
        />
      </Link>
      <LangToggle />
    </div>
  </header>
);

export default Header;

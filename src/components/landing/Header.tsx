import logoSchool from "@/assets/sampa-school.png.asset.json";
import logoGroup from "@/assets/sampa-group.png.asset.json";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-grafite/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4">
        <img
          src={logoSchool.url}
          alt="sampa.school — escola de inglês em Interlagos"
          className="h-8 w-auto shrink-0 sm:h-10"
          width={152}
          height={64}
        />
        <div className="flex items-center gap-3 sm:gap-5">
          <img
            src={logoGroup.url}
            alt="sampa.group"
            className="hidden h-8 w-auto opacity-90 sm:block sm:h-9"
            width={138}
            height={60}
          />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
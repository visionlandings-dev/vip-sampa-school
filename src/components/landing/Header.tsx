import { LanguageSwitcher } from "./LanguageSwitcher";

const logoSchool = "/logo-sampa-school.png";
const logoGroup = "/logo-sampa-group.png";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-grafite/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img
            src={logoSchool}
            alt="sampa.school — curso de inglês com método Oxford"
            className="h-8 w-auto shrink-0 sm:h-10"
            width={152}
            height={64}
          />
          <img
            src={logoGroup}
            alt="sampa.group"
            className="h-6 w-auto shrink-0 opacity-90 sm:h-9"
            width={138}
            height={60}
          />
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
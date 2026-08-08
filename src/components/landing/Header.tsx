import logoSchool from "@/assets/sampa-school.png.asset.json";
import logoGroup from "@/assets/sampa-group.png.asset.json";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-grafite/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-center gap-8 px-4 sm:justify-between sm:gap-4">
        <img
          src={logoSchool.url}
          alt="sampa.school — escola de inglês em Interlagos"
          className="h-9 w-auto sm:h-10"
          width={152}
          height={64}
        />
        <img
          src={logoGroup.url}
          alt="sampa.group"
          className="h-8 w-auto opacity-90 sm:h-9"
          width={138}
          height={60}
        />
      </div>
    </header>
  );
}
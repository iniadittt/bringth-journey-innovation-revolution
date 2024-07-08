import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <BackgroundBeams />
      <div className="w-full h-screen relative z-10 flex flex-col gap-0 justify-center items-center">
        <h1 className="font-bold text-9xl uppercase tracking-tight text-slate-200">
          BJIR
        </h1>
        <p className="font-medium text-sm tracking-wide text-slate-300 mb-2">
          Bringth Journey Innovation & Revolution
        </p>
        <Button>Comming Soon</Button>
      </div>
    </main>
  );
}

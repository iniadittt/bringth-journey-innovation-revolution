import { appData } from "@/data/app";
import { Button } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Placeholders } from "@/components/Placeholders";
export default function Home() {
  return (
    <main className="bg-slate-900">
      <BackgroundBeams />
      <div className="w-full h-screen relative z-10 flex flex-col gap-0 justify-center items-center">
        <h1 className="font-bold text-9xl uppercase tracking-tight text-slate-200">
          {appData.title}
        </h1>
        <p className="font-medium text-sm tracking-wide text-slate-300 mb-4">
          {appData.description}
        </p>
        {/* <Button>Comming Soon</Button> */}
        <Placeholders />
      </div>
    </main>
  );
}

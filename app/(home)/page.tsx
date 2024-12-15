import { Callout } from 'fumadocs-ui/components/callout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-950">
        HNZRP Staff Handbook
      </h1>

      <h1 className="mb-4 text-5xl font-extrabold text-[#bebebe]">
        discord.gg/hnzrp
      </h1>

      <h2 className="mb-4 text-3xl font-normal color text-[#6b6e6e]">
        Made with ❤️ by Aqxorus and TempNinjaMan
      </h2>

      <div className="my-8 relative w-[320px] h-[320px] mx-auto">
        <div className="absolute inset-0 radial-blur"></div>
        <img src="/icon.png" alt="HNZRP" className="opacity-[99.99999%]" />
      </div>

      <div className="flex w-full justify-center items-center">
        <Callout className="w-1/2 text-left p-6" icon="" title="Version">
          v3
        </Callout>
      </div>
    </main>
  );
}

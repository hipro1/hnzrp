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
      {/* <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p> */}
    </main>
  );
}

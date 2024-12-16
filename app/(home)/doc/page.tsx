import { Building2, Lock } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';
import Image from 'next/image';
import Spot from '@/public/spot.png';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col items-center py-16 text-center">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        <div
          className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30"
          style={{
            transform: 'rotateX(75deg) translate(-50%, 400px)',
            backgroundImage:
              'radial-gradient(50% 50% at center,transparent,hsl(var(--background))), repeating-linear-gradient(to right,hsl(var(--primary)),hsl(var(--primary)) 1px,transparent 2px,transparent 100px), repeating-linear-gradient(to bottom,hsl(var(--primary)),hsl(var(--primary)) 2px,transparent 3px,transparent 100px)',
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-1] select-none overflow-hidden opacity-30">
        <Image
          alt="spot"
          src={Spot}
          sizes="100vw"
          className="size-full min-w-[800px] max-w-fd-container"
          priority
        />
      </div>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">What rank are you?</p>
      <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Item href="/docs/staff">
          <Icon>
            <Building2 className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Staff</h2>
          <p className="text-sm text-fd-muted-foreground">Junior Moderator+</p>
        </Item>
        <Item href="/docs/ia">
          <Icon>
            <Lock className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Internal Affairs</h2>
          <p className="text-sm text-fd-muted-foreground">MGT/IA+</p>
        </Item>
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div
      className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
      }}
    >
      {children}
    </div>
  );
}

function Item(
  props: LinkProps & { children: React.ReactNode }
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-6 shadow-lg transition-all hover:shadow-fd-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {props.children}
    </Link>
  );
}

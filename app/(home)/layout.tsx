import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">HNZRP Staff Handbook</p>
          <p className="text-xs">
            Made with ❤️ by{' '}
            <a
              href="https://aqxorus.me"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Aqxorus
            </a>{' '}
            and{' '}
            <a
              href="https://discord.com/users/693965900805570633"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              TempNinjaMan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

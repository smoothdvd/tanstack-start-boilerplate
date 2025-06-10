import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';

import './globals.css';

import { NotFound } from '@/components/NotFound';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: '橙柿互动数据看板' },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang='zh_CN'>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

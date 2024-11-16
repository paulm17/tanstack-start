import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import { RaikouProvider } from '@raikou/system';

import '@raikou/system/styles.css';
import '@stylefusion/react/styles.css';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'TanStack Form + Start',
    },
  ],
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <RaikouProvider>
          <Outlet />
      </RaikouProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

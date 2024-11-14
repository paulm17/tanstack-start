import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import { emotionTransform, RaikouEmotionProvider } from '@raikou/emotion';
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
      <RaikouProvider stylesTransform={emotionTransform}>
        <RaikouEmotionProvider>
          <Outlet />
        </RaikouEmotionProvider>
      </RaikouProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  )
}

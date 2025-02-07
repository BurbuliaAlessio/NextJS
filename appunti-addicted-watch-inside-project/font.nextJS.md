# ottimizzazione dei font

Next usa dei font con una ottimizzazione e importazione differente.

```react
// pages/_app.js
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
```

## Best Practice

crea un file `font.ts`, inserisci tutti i font e importali dove lo ritieni piu' necessario.

# in produzione

nella build ricorda che la applicazione cambia significativamente il comportamento rispetto alla versine dev.

I dati non visualizzati non sono spariti, o non esistono piu', ma non vengono visualizzati per la gestione della chache che non viene aggiornata [di default 365 giorni] quindi i dati non vengono visualizzati.

E' important edistinguere.

A fine comando `run build`.
○: static component (la cache va gestita per questi)
ƒ: dynamic component.

come rendere un componente dinamico:

- calling dynamic function `cookie.set() cookie.dleete()` o query string.

- usare `force-dynamic` (guarda [home/page.tsx::4 ]).

- usare il fetching dei dati rende un componente dinamico.

- usare le dynimic route come [id].tsx.

un componente dinamico ricorda che contiene del contenuto js che non sara' quindi SEO.

revalidate() e' una ottima soluzione per rirenderizzare una rotta con il contenuto aggiornato.

## la cache

i componenti dinamici di default non sfruttano la cache, al contrario dei componenti statici.
[guarda [id]/page.tsx]

build output:

```c
Route (app)                              Size     First Load JS
┌ ○ /                                    174 B           109 kB
├ ○ /_not-found                          979 B           106 kB
├ ● /snippets/[id]                       174 B           109 kB
├   ├ /snippets/20 //guarda qui
├   ├ /snippets/32 
├   ├ /snippets/33
├   └ [+2 more paths]
├ ƒ /snippets/[id]/edit                  4.65 kB         110 kB
└ ○ /snippets/new                        834 B           106 kB
  First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-ca66e56689f3922d.js  52.9 kB
  ├ chunks/517-9135a8c8bcbbe84e.js       50.5 kB
  └ other shared chunks (total)          1.95 kB
```

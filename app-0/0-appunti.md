# Next.js

## BASI

SSD - server side rendering.

SCR - Server client reidenring.

ricorda: next js puo' approcciare in due metodi le chiamate API, i contenuti statici vengono generati tramite SSR, metre le chiamate REST vengono effettuate sia tramite SSR che SRC.

Vantaggi SSR: prestazioni e SEO, la chiamata viene fatta in fase di build.

Vantaggi SCR: le chimamte sono visibili nel dev tool.

## ROUTING

il routing e' estramemente semplificato, la rotta sara' il nome del file o della cartella se la cartella contiene un file index, verra' generata quella rotta.

Per la gestione di componenti di layout, presenti in tutte le pagine la cosa migliore da fare e creare un componente Layout, successivamente importare al suo interno i componenti utili, come una nav bar o un footer e successivamente inserire all'interno il children che sara' cio' che e' wrappato nel componente da reinderizzare.

conviene sempre separare la parte visiva del layout con il resto del componente.

guarda `_app.tsx` in cui abbiamo creato una funzione che ritorna il layout, con una nav bar e un footer.

layout avra' dei figli che saranno, in questo caso l'unico componente reinderizzato.

E' possibile sovrascrivere la pagina di errore con una una nuova pagina nominandola `404.tsx`.

Guardare come e' gestito il login per vedere la autenticazione, `middleware.tsx`

## backend

il back end e' gestito con node js essendo il framework fullstack, e' consigliata la gestione tramite node di in backend che sia comunque esterna all'applicativo per la separiazione dei lavori.
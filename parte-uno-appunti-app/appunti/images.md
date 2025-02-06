# images

[guarda home]

Carica le immagini solo nei componenti sever side.

per le path delle immagini aggiungere nel file `tsconfig.json` nelle path:

```json
    "paths": {
      "@/*": ["./src/*"],
      "public/*": ["./public/*"]
    }
```

Le immagini vengono salvate in una cache che ritorna delle immagini adatte alle dimensioni richieste.

le immagini vengono messe in un contenitore `div e durente il loro caricamento, il contenitore, rimarra' delle dimensioni della immagine in modo da non spostare ventuali testi di fianco.

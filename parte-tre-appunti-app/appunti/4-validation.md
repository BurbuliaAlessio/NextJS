# validation of create topics

per la validazione del topics viene usata una lirearia
`zod` utile a validare la maggior parte dei dati.

La usiamo per validare gli input di tringa

```ts
const createTopicSchema = z.object({
  name: z
    .string() //di tipo string  
    .min(3) // almeno tre caratteri
    // solo lower case character
    .regex(/[a-z-]/, {
      message: 'Must be lowercase lett ers or dashes without spaces',
    }),
  description: z.string().min(10),
});
```

viene ritornato un oggetto con all'interno delle proprita' per la validazione come

code: 'too_small'
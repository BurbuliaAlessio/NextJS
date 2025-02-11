# UX about loading

ricordati che creare dei custom hook per la gestione dei caricamento e' una best practice.
Nel caso del form si puo' gestire un valore booleano per il completamento delle azioni.

```tsx
    const [formState, action, isPending] = useActionState(actions.createTopic, {
        errors: {},
    });

    // continua code 

    <FormButton isLoading={isPending}>Save</FormButton>
```

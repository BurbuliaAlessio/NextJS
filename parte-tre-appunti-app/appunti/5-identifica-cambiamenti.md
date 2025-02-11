# posizioni di dati variabili

identificare i componenti/pagine in cui i dati non sono statici.
Andarlo a identificare in fase di produzione potrebbe essere un errore.

In questa applicazione si identificano delle azioni server per la creazione di un topic, di un post e di creazione di commento.

[guarda action/[file-name]].

per ogni azione che compiamo su questi componenti abbiamo bisogno di rivalidare la path rispetto alla cache [revalidate(stringPath)].

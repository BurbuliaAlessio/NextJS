# gestione errori

gli errori possono essere gestiti con la pagina di errore, non e' una best practice perche' riportera' a un'altra pagina, rispertto a quella dove e' accaduto l'errore.

[prova commentando lo createsnippet in [action/index.ts]]

Nello stesso file, puoi vedere redirect: questa funzione genera un errore che puo' essere problematico in try catch e non compera' l'azione opportuna.

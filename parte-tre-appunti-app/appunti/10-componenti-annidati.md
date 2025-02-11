# commenti-anndati

nel caso di commenti si crea un associazione di questo tipo

```tsx
[{id: 1}, {id: 2, parentId: 1}, {id: 3, parentId: 1}, {id: 4}]
//c'e' relazione tra il primo ,il secondo commento e il terzo commento
```

per crear equesta relazione basta generare un componente, dentro l'altro nel momento in cui uno di quesit esiste.

[guarda src/components/comment-show.tsx & src/comments/comment-list.tsx]

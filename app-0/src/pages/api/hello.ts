import { NextApiRequest, NextApiResponse } from 'next';

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    city: string;
}

interface Data {
    users: User[];
    message?: string;
}

let users: User[] = [
    {
        id: 1,
        name: "Mario Rossi",
        email: "mario.rossi@example.com",
        age: 30,
        city: "Roma"
    },
    {
        id: 2,
        name: "Giulia Bianchi",
        email: "giulia.bianchi@example.com",
        age: 25,
        city: "Milano"
    },
    {
        id: 3,
        name: "Luca Verdi",
        email: "luca.verdi@example.com",
        age: 35,
        city: "Napoli"
    },
    {
        id: 4,
        name: "Francesca Neri",
        email: "francesca.neri@example.com",
        age: 28,
        city: "Torino"
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method === 'GET') {

        return res.status(200).json({ users });
    }

    if (req.method === 'POST') {

        const { name, email, age, city } = req.body;

        if (!name || !email || !age || !city) {
            return res.status(400).json({ users, message: "Tutti i campi sono obbligatori!" });
        }

        const newUser: User = {
            id: users.length + 1,
            name,
            email,
            age,
            city
        };

        users.push(newUser);

        return res.status(201).json({ users, message: "Utente aggiunto con successo!" });
    }

    return res.status(405).json({ users, message: "Metodo non consentito!" });
}
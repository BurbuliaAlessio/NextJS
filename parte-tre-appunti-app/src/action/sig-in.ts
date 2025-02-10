'use server';

import * as auth from '@/auth';

export const sigIn = async () => {
    return auth.signIn('github'); // inserisci il provider
};

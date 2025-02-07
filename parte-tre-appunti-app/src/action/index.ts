'use server';

import * as auth from "@/auth";

export async function sigIn() {
    return auth.signIn('github'); //inserisci il provider
}

export async function sigOut() {
    return auth.signOut();
}
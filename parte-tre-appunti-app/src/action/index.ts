'use server';

import * as auth from '@/auth';

// export { sigIn } from './sig-in'
export const sigIn = async () => {
    return auth.signIn('github'); // inserisci il provider
};

// export { signOut } from './sig-out'
export async function signOut() {
    return auth.signOut();
}

// export { createComment } from "./create-comment";
// export { createPost } from "./create-post";
// export { createTopic } from "./create-topic";
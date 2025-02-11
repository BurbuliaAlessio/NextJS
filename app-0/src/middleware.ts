import { NextRequest, NextResponse } from "next/server";

export const MiddleWare = (request: NextRequest) => {
    const isAuth = true; //questa e' la variabile di autenticazione

    if(!isAuth) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login?error=Area Privata, effettuare il login', request.url));
    
}

export default MiddleWare;

export const config = {
    matcher: '/dashboard/:path*',
}
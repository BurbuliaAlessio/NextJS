'use client';

import { Button } from "@nextui-org/react";
import * as action from "@/action";

export function SigInButton({ content }: { content: React.ReactNode }) {
    return (
            <form action={action.sigIn}>
            <Button type="submit">
                {content}
            </Button>
            </form>
    );
}

export function SigOutButton({ content }: { content: React.ReactNode }) {
    return (
            <form action={action.sigOut}>
            <Button type="submit">
                {content}
            </Button>
            </form>
    );
}

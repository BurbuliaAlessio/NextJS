
import { auth } from "@/auth";
import { SigInButton, SigOutButton } from "@/components/button.component";

export default async function Home() {
  const session = await auth();
  
  return (
    <>
      { !session?.user ? (
        <div> <SigInButton content="sig In"/> </div>
      ) : (
        <>
          <div>{JSON.stringify(session.user)}</div>
          <div> <SigOutButton content="sig Out"/> </div>
        </>
      )}
    </>
  )
}
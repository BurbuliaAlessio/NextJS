
import { auth } from "@/auth";
import { SigInButton, SigOutButton } from "@/components/button.component";

export default async function Home() {
  const session = await auth();
  return (
    <>
  <div> <SigInButton content="sig In"/> </div>
   <div> <SigOutButton content="sig Out"/> </div>

   {
    session?.user?.name ? (
      <>
        <h1> {session.user?.name}</h1>
      </>
    ) : (
      <h1>no session</h1>
    )
   }
   </>
  );
}
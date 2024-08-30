import { getSession, GetSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  console.log('user = ', user);
  return (
    <div className="flex justify-center items-center">
      <p className="text-3xl">Home</p>
    </div>
  );
}

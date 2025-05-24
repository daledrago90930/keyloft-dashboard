import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) router.push('/');
  }, [session]);

  if (!session) return <p>Redirecting...</p>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Listings</h1>
    </div>
  );
}

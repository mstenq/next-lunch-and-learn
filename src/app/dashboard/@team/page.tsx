import Link from "next/link";

export default async function Team() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <main className="bg-purple-600 text-white rounded p-4">
      <div>Team</div>
      <Link href="/login" className="underline">
        Login to View Team
      </Link>
    </main>
  );
}

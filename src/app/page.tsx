import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>Hello from Home</div>
      <Link href="/login">Login</Link>
    </main>
  );
}

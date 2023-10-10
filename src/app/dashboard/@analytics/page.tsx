export default async function Analytics() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="bg-blue-600 text-white rounded p-4">
      <div>Analytics</div>
    </main>
  );
}

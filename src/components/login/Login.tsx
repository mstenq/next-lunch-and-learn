export const Login = () => {
  return (
    <form action="/dashboard" method="GET" className="flex flex-col gap-4">
      <h2 className="text-3xl">Login</h2>
      <label>
        Username
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

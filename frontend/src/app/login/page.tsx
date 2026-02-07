import LoginPanel from "@/components/auth/LoginPanel";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md p-6 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-sm text-gray-600">
        管理ページ（Admin）に入るためにログインします。
      </p>
      <LoginPanel />
    </main>
  );
}

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminAuth } from "@/lib/firebase-admin";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;

  if (!session) redirect("/login?next=/admin");

  const auth = getAdminAuth();

  let email = "";

  try {
    const decoded = await auth.verifySessionCookie(session, true);
    email = decoded.email ?? "";
  } catch {
    redirect("/login?next=/admin");
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "";
  if (!adminEmail || email !== adminEmail) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-3">
      <h1 className="text-2xl font-bold">Admin</h1>
      <p className="text-sm text-gray-600">Logged in as: {email}</p>

      <LogoutButton />
    </main>
  );
}



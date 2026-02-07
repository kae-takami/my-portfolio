"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPanel() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const loginWithGoogle = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/admin"); // Day2は仮（Day3で保護）
    } catch (e) {
      setError(e instanceof Error ? e.message : "Login failed");
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={loginWithGoogle}
        className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50"
      >
        Login with Google
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

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
      // 1) Googleログイン
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // 2) Firebaseが発行する「本人証明（IDトークン）」を取得
      const idToken = await result.user.getIdToken();

      // 3) サーバーへ渡して、httpOnly cookie（__session）を作ってもらう
      const res = await fetch("/api/session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (!res.ok) {
        throw new Error("Failed to create session");
      }

      // 4) cookieができた状態で /admin へ
      router.push("/admin");
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


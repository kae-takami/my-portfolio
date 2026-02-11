"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase-client";
import { signOut } from "firebase/auth";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      // 1) サーバーのセッションcookieを削除
      await fetch("/api/logout", { method: "POST" });

      // 2) Firebaseのクライアント側ログイン状態も解除
      await signOut(auth);

      router.push("/login");
      router.refresh(); // 念のため再描画
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={logout}
      disabled={loading}
      className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}

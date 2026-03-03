"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function MaxRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/proxi-max"); }, [router]);
  return null;
}

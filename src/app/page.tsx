import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>The Price of Eggs is TOO DAMN HIGH!</div>
    </div>
  );
}

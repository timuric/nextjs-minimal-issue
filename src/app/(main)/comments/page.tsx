import { revalidateTag } from "next/cache";
import React from "react";

export default async function Home() {
  async function flush() {
    "use server";
    revalidateTag("todo");
  }

  await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { tags: ["todo"] },
  });
  await fetch("https://jsonplaceholder.typicode.com/photos/1", {
    next: { tags: ["photos"] },
  });

  return (
    <form action={flush}>
      <button type={"submit"}>Flush</button>
    </form>
  );
}

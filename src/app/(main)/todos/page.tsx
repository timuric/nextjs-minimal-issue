import React from "react";

export default async function Home() {
  await fetch("https://jsonplaceholder.typicode.com/comments/1");

  await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 1 },
  });

  return <></>;
}

import React from "react";

const Comments = async () => {
  await fetch("https://jsonplaceholder.typicode.com/comments/1");
  return <></>;
};

const Todos = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    next: { revalidate: 1 },
  });

  return <></>;
};
export default async function Home() {
  return (
    <>
      <Todos />
      <Comments />
    </>
  );
}

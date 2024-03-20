import Link from "next/link";

export default async function Home() {
    await fetch('https://jsonplaceholder.typicode.com/users/1', {next:  {tags: ['users']}})
  return (
      <main>
        <Link href={'comments'}>Comments</Link>
        <Link href={'users'}>Users</Link>
      </main>
  );
}

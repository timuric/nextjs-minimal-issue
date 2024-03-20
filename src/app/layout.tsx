export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { tags: ["posts"] },
  });
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

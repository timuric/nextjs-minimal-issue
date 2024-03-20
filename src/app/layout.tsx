export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await fetch("https://jsonplaceholder.typicode.com/photos/1", {
    next: { tags: ["photos"] },
  });

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

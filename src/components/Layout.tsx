export default function Layout({ children }: { children: React.ReactNode },) {
  return (
    <main className="container mx-auto p-5 flex flex-col items-center justify-center h-screen">
      {children}
    </main>
  );
}
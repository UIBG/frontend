export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="auth-background">
      </div>
      <div>
        {children}
      </div>
    </>
  );
}

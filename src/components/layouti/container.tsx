export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative flex flex-col dark:bg-slate-900">
      {children}
    </div>
  );
}

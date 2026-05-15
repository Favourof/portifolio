export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-4 py-8 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist, but the portfolio is still here.
        </p>
      </div>
    </main>
  )
}

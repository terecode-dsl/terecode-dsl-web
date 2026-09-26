// Root layout. The real <html>/<body>, fonts, and theme live in
// app/[locale]/layout.tsx (which knows the active locale). This passthrough
// exists so Next has a root layout covering "/" while all rendered routes are
// locale-prefixed by the proxy.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}

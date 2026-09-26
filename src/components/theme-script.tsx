// Pre-paint theme script. Applied before first paint so a stored light
// preference doesn't flash dark first. Dark is the default: only switch to
// light when explicitly chosen.
//
// Kept in its own component (rather than an inline <script> in the layout JSX)
// so React 19 treats it as a hoistable resource instead of warning that a
// script element rendered in a component won't execute on the client.
const THEME_SCRIPT = `
try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
} catch (e) {}
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}

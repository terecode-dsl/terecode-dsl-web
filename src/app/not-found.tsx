"use client";

// Catches requests not matched by the locale proxy (no locale associated).
// Must render its own <html>/<body> because the passthrough root layout doesn't.
import NextError from "next/error";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}

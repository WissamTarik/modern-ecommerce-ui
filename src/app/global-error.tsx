// app/global-error.tsx
"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Critical System Error</h2>
          <p className="text-muted-foreground mb-8">
            A critical error occurred in the application core.
          </p>
          <Button onClick={() => reset()} size="lg">
            Refresh Application
          </Button>
        </div>
      </body>
    </html>
  )
}
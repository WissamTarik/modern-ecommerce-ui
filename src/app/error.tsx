// app/error.tsx
"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, RotateCcw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
   
    console.error("Global Error:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="bg-destructive/10 p-6 rounded-full mb-6">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      
      <h1 className="text-3xl font-bold tracking-tight mb-2">Something went wrong!</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred while processing your request.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => reset()} 
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" /> Try again
        </Button>
        
        <Button variant="outline" asChild className="gap-2">
          <Link href="/">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
      
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-10 p-4 bg-muted rounded-lg text-xs overflow-auto max-w-full italic text-red-500">
          {error.message}
        </pre>
      )}
    </div>
  )
}
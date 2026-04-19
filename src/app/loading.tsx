import { Loader2 } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      <div className="relative flex items-center justify-center">
       
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        
 
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-primary/20 animate-pulse" />
        </div>
      </div>
      
      <div className="mt-4 flex flex-col items-center gap-1">
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          Loading Store
        </h2>
        <p className="text-sm text-muted-foreground animate-pulse">
          Please wait a moment...
        </p>
      </div>
    </div>
  );
}
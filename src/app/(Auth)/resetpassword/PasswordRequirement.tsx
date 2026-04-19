import { CheckCircle2 } from 'lucide-react'

export default function PasswordRequirement() {
  return (
     <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-muted-foreground/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Password Requirements:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 size={14} className="text-green-500" />
                At least 8 characters long
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 size={14} className="text-green-500" />
                Include at least one uppercase letter (A-Z)
              </li>
              <li className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 size={14} className="text-green-500" />
                Include at least one number (0-9)
              </li>
            </ul>
          </div>
  )
}

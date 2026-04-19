import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

type AuthLayoutProps={
    children:React.ReactNode,
    childrenFooter?:React.ReactNode,
    description?:string,
    title?:string,
    className?:string,
    classNameFooterClasses?:string,
    Icon?:LucideIcon
}
export default function AuthLayoutWrapper({children,childrenFooter,description,title,className,classNameFooterClasses,Icon}:AuthLayoutProps) {
  return (
<div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-muted/30">
      <Card className={cn("w-full max-w-md border-none shadow-xl bg-white overflow-hidden pt-0", className)}>
        
        {Icon && (
          <div className="bg-primary/5 p-8 flex justify-center border-b border-primary/10">
            <div className="bg-white p-4 rounded-full shadow-sm text-primary">
              <Icon className="size-10" />
            </div>
          </div>
        )}

        <CardHeader className="text-center pt-6 mt-0">
          <CardTitle className="text-2xl font-bold tracking-tight text-foreground">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="pt-2 text-base">
              {description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent>
          {children}
        </CardContent>
        <CardFooter className={classNameFooterClasses}>
          {childrenFooter}
        </CardFooter>
      </Card>
    </div>  )
}

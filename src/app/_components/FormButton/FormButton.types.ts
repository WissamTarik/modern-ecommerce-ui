import { Button } from "@/components/ui/button"
import { ComponentProps } from "react"

export type FormButtonProps = ComponentProps<typeof Button> & {
  isLoading?: boolean
  loadingText?: string
  children: React.ReactNode
  className?: string
}
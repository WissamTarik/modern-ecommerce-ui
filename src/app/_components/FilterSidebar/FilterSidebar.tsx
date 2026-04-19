"use client"

import { Input } from "@/components/ui/input"
import useFilter from "./useFilter"
import { Separator } from "@/components/ui/separator"
import { filterProps } from "./Filter.types"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Filter } from "lucide-react"

export default function FilterSidebar({ categories, brands }: filterProps) {
  const { searchParams, updateFilter, clearFilter, handleSearchInput } = useFilter()

 
  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-bold mb-4 text-sm text-foreground">Search</h3>
        <Input
          type="text"
          placeholder="Search items..."
          className="w-full bg-muted/40 border-none focus-visible:ring-primary transition-all"
          onKeyDown={handleSearchInput}
          defaultValue={searchParams.get("keyword") || ""}
        />
      </div>
      <Separator />
      <div>
        <h3 className="font-bold mb-4 text-sm">Categories</h3>
        <div className="space-y-3">
          {categories?.map((category) => (
            <div key={category._id} className="flex items-center space-x-2">
              <Checkbox
                id={category._id}
                checked={searchParams.getAll("category[in]").includes(category._id)}
                onCheckedChange={() => updateFilter("category[in]", category._id)}
              />
              <Label htmlFor={category._id} className="text-sm cursor-pointer">{category.name}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-bold mb-4 text-sm">Brands</h3>
        <div className="grid grid-cols-2 gap-2">
          {brands?.map((brand) => (
            <Button
              key={brand._id}
              variant={searchParams.get("brand") === brand._id ? "default" : "outline"}
              onClick={() => updateFilter("brand", brand._id)}
              className="text-[10px] h-8"
            >
              {brand.name}
            </Button>
          ))}
        </div>
      </div>
      <Separator />
      <Button onClick={clearFilter} variant="destructive" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <>
    
      <div className="lg:hidden mb-4 p-6">
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter size={16} /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-75 p-4 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left mb-4">Filters</SheetTitle>
            </SheetHeader>
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>

     
      <aside className="hidden lg:block w-64 p-4 bg-white rounded-xl shadow-sm border border-border/50 h-fit sticky top-24">
        <FilterContent />
      </aside>
    </>
  )
}
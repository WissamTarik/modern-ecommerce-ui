import { useRouter, useSearchParams } from "next/navigation"


export default function useFilter() {
    const router=useRouter()
    const searchParams=useSearchParams()

    const updateFilter=(key:string,value:string)=>{
        //searchParams is immutable so i take a copy of it by URLSearchParams
        const params=new URLSearchParams(searchParams.toString())
        params.delete("page")
        if(key.includes("[in]")){
            const currentValuesForTheKey=params.getAll(key)
            if(currentValuesForTheKey.includes(value)){
                const newValues=currentValuesForTheKey.filter((currentValue)=>currentValue!=value)
                params.delete(key)
                 newValues.forEach(value=>params.append(key,value))

            }else{
                params.append(key,value)
            }
        }else{
            if(!value){
                params.delete(key)
            }
            else{

                params.set(key,value)
            }
        }
        router.push(`?${params.toString()}`,{scroll:false})
    }
    const handleSearchInput=(e:React.KeyboardEvent<HTMLInputElement>)=>{
  if(e.key==="Enter"){
      updateFilter("keyword",e.currentTarget.value)
  }
    }  
    const clearFilter=()=>{
        router.push(window.location.pathname,{scroll:false})
    }
  return {searchParams,updateFilter,clearFilter,handleSearchInput}
}

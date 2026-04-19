export function serializeSearchParams(params:Record<string,any>):string {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key,value])=>{
        if(Array.isArray(value)){
        value.forEach((v)=>searchParams.append(key,v))
        }else{
            searchParams.append(key,value.toString())
        }
    })
    return searchParams.toString()
}
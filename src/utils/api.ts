export function getApiBaseUrl():string{

    if(!process.env.NEXT_PUBLIC_API_BASE_URL){
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined")
    }
    return process.env.NEXT_PUBLIC_API_BASE_URL
}
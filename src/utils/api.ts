export function getApiBaseUrl():string{

    if(!process.env.NEXT_PUBLIC_API_BASE_URL){
       return "https://ecommerce.routemisr.com"
    }
    return process.env.NEXT_PUBLIC_API_BASE_URL
}
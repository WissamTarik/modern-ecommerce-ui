import { getApiBaseUrl } from "./api";
import { getAuthHeaders } from "./auth";

const baseUrl=getApiBaseUrl()||"https://ecommerce.routemisr.com"
type FetchOptions=RequestInit&{
    useAuth?:boolean,
    nextOptions?:NextFetchRequestConfig
}
export async function apiClient<T>(endpoint:string,options:FetchOptions={}) {
    const {useAuth=false,nextOptions,...restOptions}=options
    try {
        let headers={
            "Content-Type":"application/json",
            ...(restOptions.headers as Record<string,string>)
        }
        if(useAuth){
            const auth=await getAuthHeaders()
            headers={...headers,...auth}

        }
        const response=await fetch(`${baseUrl}${endpoint}`,{
            ...restOptions,
            headers,
            next:nextOptions
        })
        const result=await response.json()
        
        
        if(!response.ok){
            console.error(`API Error [${endpoint}]:`, result.message || response.statusText);
             return result as T
        }
        return result
    } catch (error) {
        console.error(`Fetch Exception [${endpoint}]:`, error);
        return null
    }
}
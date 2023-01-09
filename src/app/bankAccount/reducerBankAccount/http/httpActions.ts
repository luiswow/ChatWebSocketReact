import { IMessageFromPost } from './httpInterfaces'

export async function fetchApi(url = '', data = {},method:"GET"| "POST"|"PUT"|"DELETE"): Promise<any> {
    // Default options are marked with *
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin

        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
}

export const getBankAccounts =async (url:any)=>{
    const response = await fetch(url)
    const data =await response.json();    
    return data // parses JSO

}

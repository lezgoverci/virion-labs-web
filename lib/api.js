export async function fetcher(url,options={}){
    let response;
    if(!options){
        response = await fetch(url,{
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        })
    }else{
        response = await fetch(url, options = {...options,
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        })
    }

    const data = await response.json();

    return data;
}
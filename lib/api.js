export async function fetcher(url,options={}){
    let response;
    if(!options){
        response = await fetch(url,{
            headers: {
                "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        })
    }else{

        try {
            const req = fetch(url,{...options,
                headers: {
                    ...options.headers,
                    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                }
            });
            response = await req;
        } catch (error) {
            console.log(error)
        }

    }

    const data = await response.json();

    return data;
}

interface PKM {
    name: string,
    url: string
}

const fetchDataPromise = async (url:string):Promise<PKM[]> => {
    try{
        return(await (await fetch(url)).json())
    } catch (error: any) {
        return error.message
    }
}

const gettingDataFromFetch = async (url: string):Promise<void> => {
    try{
        const response:PKM[] = await fetchDataPromise(url)
        console.log(response)
    } catch(error: any) {
        console.log(error)
    }
}

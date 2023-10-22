import axios, { AxiosRequestConfig } from "axios"
import { FunctionComponent, useEffect } from "react"


const Home: FunctionComponent =() => {


    const baseUrl = 'https://api.geckoterminal.com/api/v2'
    const config: AxiosRequestConfig = {
        headers: {
        'Accept' : 'application/json;version=20230302'
        }
    }
    useEffect(() => {
        
        axios.get(`${baseUrl}/network`, config)
        .then((element) => {
            console.log(element);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);



    return(
        <>
        </>
    )
}

export default Home
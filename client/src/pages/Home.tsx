import axios from "axios"
import { FunctionComponent, useEffect } from "react"


const Home: FunctionComponent =() => {


    const baseUrl = 'https://api.geckoterminal.com/api/v2'

    useEffect(() => {
        axios.get(`${baseUrl}/network`)
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
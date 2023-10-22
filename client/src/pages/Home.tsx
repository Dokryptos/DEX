import axios, { AxiosRequestConfig } from "axios"
import { FunctionComponent, useEffect, useState } from "react"


const Home: FunctionComponent =() => {


    const [networkList, setNetworkList] = useState<string[]>([])

    const baseUrl = 'https://api.geckoterminal.com/api/v2'
    const config: AxiosRequestConfig = {
        headers: {
        'Accept' : 'application/json;version=20230302'
        }
    }



    useEffect(() => {
        
        axios.get(`${baseUrl}/networks`, config)
        .then((element) => {
            setNetworkList(element.data.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    console.log(networkList[1]);
    return(
        <>
            <div>
                <select placeholder="Networks">
                    {networkList.map((element : any, i : number) => (
                        <option key={i}>{element.id}</option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Home
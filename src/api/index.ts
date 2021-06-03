import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchData = async () => {
    try{
        const response = await axios.get(url)
        
        return(response.data)
    }
    catch(error){

    }
}
import {useEffect} from 'react';
const  useEffectAPI = () =>{
    
    const getUsers =  async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(response)
        const data = await response.json()
        console.log(data);
        }

    useEffect(()=>{
       getUsers();
    })

}
export default useEffectAPI;
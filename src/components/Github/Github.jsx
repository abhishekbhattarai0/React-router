import React, { useEffect, useState } from "react";

export default function Github() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https:api.github.com/users/abhishekbhattarai0')
        .then( response => response.json())
        .then( response => setData(response))
    },[])

    const followers = data.followers

    return(
        <>
         <div>
            Followers : {followers}
            <img src={data.avatar_url} alt="github-photo" 
            width={300} />
         </div>
        </>
    )
}
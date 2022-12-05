import React , {useEffect, useState} from 'react'

export const Redirect = (props) => {

    const [error,setError] = useState();

    const get_url = async() =>{


        const backend_path = `${process.env.REACT_APP_BACKEND_URL}` + String(window.location.pathname);
        // const backend_path = "http://localhost:8080" + String(window.location.pathname);
        // console.log(backend_path);

        var result = await fetch(backend_path,{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        result = await result.json();

        if(result.error===true){
            // window.location.pathname="";
            setError(result.message)


        }else{
            
            console.log(result.data.redirection_url);
            const redirection_url = result.data.redirection_url;
            window.location = redirection_url;
        }

    }

    useEffect(()=>{
        get_url();
    });


    return(
        <div>
            <h1>{error}</h1>
        </div>
    )

}
import React , {useEffect} from 'react'

export const Redirect = (props) => {


    const get_url = async() =>{
        const backend_path = "http://localhost:8080" + String(window.location.pathname);
        console.log(backend_path);

        var result = await fetch(backend_path,{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        result = await result.json();

        if(result.error===true){
            window.location.pathname="";
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
        
            <p>{props.path}</p>
        </div>
    )

}
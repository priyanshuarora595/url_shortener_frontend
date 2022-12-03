import React, { useState, useEffect } from 'react'


export const AddUrl =  () => {

    const[urlString , seturlString] = useState("");
    const[redirectionUrl , setredirectionUrl] = useState("");

    const [error,setError] = useState("");
    

    const [urlStringError,seturlStringError] = useState(false);
    

    useEffect(()=>{
            if(error){
              setError(error)
            }
    },[error])

    

    const add_url = async() => {
        const new_url_obj = {
            "url_string":urlString,
            "redirection_url":redirectionUrl
        }
        var result = await fetch("http://localhost:8080/url/",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body : JSON.stringify(new_url_obj)
        });

        result = await result.json();
        
        if(result.error===true){
            
            seturlStringError(true)
            setError(result.message)

        }
        else{
            console.log("hello new url creted");
            setError("");
            setredirectionUrl("");
            seturlString("");
            window.location.pathname="";
        }

    }

    return(
        <div className='container'>
            <h2 style={{color:"red"}}>{error}</h2>
            <form>
                <div className='row' >
                    <div className='col-sm'>
                        <div className="mb-3 md-3">
                            <label  htmlFor="URLString" className="form-label" style={urlStringError ? {color:"red"} : {color:"black"}}> 
                            {urlStringError ? "Already used url" :  "Url String"}
                            </label>
                            <input type="text" className="form-control" id="URLString"
                            onChange={(val)=>{seturlString(val.target.value);seturlStringError(false);setError('')}}
                            />
                        </div>
                    
                    </div>
                    <div className='col-sm'>

                        <div className="mb-3">
                            <label htmlFor="redirectionUrl" className="form-label" >Redirection Url</label>
                            <input type="text" className="form-control" id="redirectionUrl"
                            onChange={(val)=>{setredirectionUrl(val.target.value);setError('')}}
                            />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <button style={{marginTop:"30px"}} type="button" className="btn btn-primary" onClick={()=> {add_url()}}>Shorten</button>

                    </div>
               
                </div>
                </form>
        </div>
    )

} 
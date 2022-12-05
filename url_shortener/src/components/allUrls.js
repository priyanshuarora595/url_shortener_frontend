

import React, { useState, useEffect } from 'react'

export const AllUrls = () => {

    const [data ,setdata] = useState([]);
    const [error ,setError] = useState([]);
    const get_all_urls = async() => {
        var result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/url/`,
        {
            method : "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization' : (localStorage.getItem("token") || "")
              },
        });
        result = await result.json();
        console.log(result.data);
        setdata(result.data);
    }

    const get_user_urls = async () => {
        let userData = localStorage.getItem("userData");
        userData = JSON.parse(userData);
        console.log(userData._id);
        var result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/url/userUrl/`,
        {
            method : "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization' : (localStorage.getItem("token") || "")
              },
            body : JSON.stringify({
                "uid" : String(userData._id)
            })
        });
        result = await result.json();
        console.log(result.data);
        setdata(result.data);
    }

    useEffect(() => {

        let  userData = localStorage.getItem("userData");
        userData = JSON.parse(userData);
        console.log(userData.is_admin);
        if(userData.is_admin===true)
        {
            get_all_urls();
        }else{
            get_user_urls();
        }
      }, []);


      const deleteUrl = async (url_obj) => {
            console.log(url_obj);
            var result = await fetch(`${process.env.REACT_APP_BACKEND_URL}/url/deleteUrl/`,{
                method:"POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization' : (localStorage.getItem("token") || "")
                  },
                body:JSON.stringify(url_obj)
            });

            result = await result.json();
            console.log(result);
            if(result.error){
                setError(result.error)
            }
            else{
                window.location.pathname='/user'
            }
      }
    return(
        <div>
            <h2>{error}</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Url String</th>
                        <th>Redirected to</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.url_string}</td>
                    <td><a href={item.redirection_url} >{item.redirection_url}</a></td>
                    <td><button type='button' className='btn btn-success' onClick={()=>{deleteUrl({item})}} ><i className="bi bi-trash"></i></button></td>

                </tr>
                ))}
                    
                </tbody>
                </table>
        </div>
    )

}
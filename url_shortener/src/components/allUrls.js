import React, { useState, useEffect } from 'react'

export const AllUrls = () => {

    const [data ,setdata] = useState([]);
    const get_all_urls = async() => {
        var result = await fetch("http://localhost:8080/url/",
        {
            method : "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });
        result = await result.json();
        console.log(result.data);
        setdata(result.data);
    }

    useEffect(() => {
        get_all_urls();
      }, []);



    return(
        <div>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Url String</th>
                        <th>Redirected to</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                    <td>{item.url_string}</td>
                    <td><a href={item.redirection_url} >{item.redirection_url}</a></td>

                </tr>
                ))}
                    
                </tbody>
                </table>
        </div>
    )

}
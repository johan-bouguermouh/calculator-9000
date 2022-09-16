import React from 'react'

export const creatCalc = async (body) => {
    fetch(`/calcul`,
        {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(function(res){ res.json() })
        .then((res)=> console.log(res))
        .catch(function(err){ console.log(err) })
}

export const getAllCalc = async () =>{
   const response =  fetch(`http://localhost:3001/calcul/${localStorage.getItem('userId')}`)
   .then((res) => res.json()).catch(err => {console.log(err.response.data)})
   return response
}

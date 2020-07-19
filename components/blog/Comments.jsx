import React, { useState, useEffect } from "react"
import Axios from "axios"

const Comments = ({ id}) => {
    const [ comments, setComments ] = useState()
    const [ number, setNumber] = useState(0)

    useEffect(() => {
        Axios.get(`${process.env.API_BLOG}/post/${id}/comments`)
        .then( resp => {
            setComments(resp.data)
        })
    },[number])


if(!comments) return (
    <div>
        <Link><a onClick={setNumber(number + 1)}>Cargar comentarios</a></Link>
    </div>
)

return <span>{JSON.stringify(comments)}</span>
}

export default Comments
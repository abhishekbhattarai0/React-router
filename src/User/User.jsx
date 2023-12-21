import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

const {userId} = useParams()


    return(
        <>
            <div
            className="text-center text-3xl bg-gray-500 text-white py-4 px-1 rounded-3xl"
            > User : {userId} </div>
        </>
    )
}
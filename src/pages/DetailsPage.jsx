import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { postDetails} from "../ApiRequest/ApiRequest.jsx";

const DetailsPage = () => {
    const {id}=useParams()
    const [post,setPost]=useState(null)
    console.log(post)
    useEffect(() => {
        (async ()=>{
            const res=await postDetails(id)
            setPost(res)
        })()
    }, [id]);
    return (
        <div>
<div>


    <div className={"container mx-auto "}>
        <div>
            <img src={post?.postDetails?.img} alt={"image"} className="rounded  mt-5"/>
        </div>
        <div className={"mt-10"}>
            <p>{post?.postDetails?.content}</p>
        </div>
        <div className={"mt-10"}>
            <p>{post?.postDetails?.created_at.toLocaleString()
            }</p>
        </div>

    </div>
</div>
        </div>
    );
};

export default DetailsPage;
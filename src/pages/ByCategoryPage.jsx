import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {postByCategory} from "../ApiRequest/ApiRequest.jsx";
import Loader from "../components/Loader.jsx";

const ByCategoryPage = () => {

    const {categoryID}=useParams()
    const [post,setPost]=useState(null)
    console.log(post)
    useEffect(() => {
        (async ()=>{
            const res=await postByCategory(categoryID)
            setPost(res)
        })()
    }, [categoryID]);
    return (
        <div>
<div>
    {post === null ? <Loader/> :

        <div className="container mx-auto my-16 p-9">
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {post.map((item, index) => {
                    return (

                        <Link key={index.toString()} to={"/details/"+item['id']} className={"card w-100 glass"}>
                            <figure><img src={item['img']} alt={"images"}></img></figure>
                            <div className={"card-body"}>
                                <h2 className={"card-title"}>{item['title']}</h2>
                                <p>{item['short']}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    }
</div>

        </div>
    );
};

export default ByCategoryPage;
import React, {useEffect, useState} from 'react';

import layout from "../leyout/Layout.jsx";
import Layout from "../leyout/Layout.jsx";
import {Link} from "react-router-dom";
import { postLatest} from "../ApiRequest/ApiRequest.jsx";
import Loader from "../components/Loader.jsx";

const Home = () => {
    const [post,setPost]=useState(null)
    console.log(post)
    useEffect(()=>{
        (async ()=>{
            let res= await postLatest()
            setPost(res)
        })()
    },[])

    return (
        <div>
            {post === null ? <Loader/> :

                <div className="container mx-auto my-16 p-9">
                    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {post.map((item, index) => {
                            return (

                                <Link key={index.toString()} to={""} className={"card w-100 glass"}>
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
    );
};

export default Home;
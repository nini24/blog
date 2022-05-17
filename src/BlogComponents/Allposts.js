import React, { useState, useRef } from "react"
import NewBlog from "./newBlog"
import Bloglist from "./Bloglist"
import data from '../data.json'



const Allposts = () => {

    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [allPosts, setAllPosts] = useState(data)
    const [isNewPost, setIsNewPost] = useState(false)
    
    //useRef to clear the state of the title, content when a user submits a new post
    const getTitle = useRef()
    const getContent = useRef()

    const saveTitle = e => {
        setTitle(e.target.value)
        console.log(title)
    }

    const saveContent = e => {
        setContent(e.target.value)
        console.log(content)
    }
    const toggleNewPost = () => {
        setIsNewPost(!isNewPost)
    }

    const savePost = (e) => {
        e.preventDefault()
        const id = Date.now()
        setAllPosts([...allPosts, {title,content,id}])
        console.log(allPosts)
        getTitle.current.value=''
        getContent.current.value=''
        toggleNewPost()
    }

    if(isNewPost) {
        return (
            <>
        <NewBlog saveTitle={saveTitle} saveContent={saveContent} getTitle={getTitle} getContent={getContent} savePost={savePost} />

            </>
        )
    }

    return (
        <>
        {!allPosts.length ? (<div><h3>Nothing here</h3></div>): (
        
            <div className="mt-12 font-['Gilroy'] grid grid-cols-3 w-4/6 mx-auto gap-8">
            {allPosts.map(eachPost => {
                return (
                <Bloglist id={eachPost.id} key={eachPost.id} title={eachPost.title} content={eachPost.content} imgurl={eachPost.imgurl} />

                )
            })}
            </div>)}
        <br />
        <button onClick={toggleNewPost} className="mt-20 font-['Gilroy'] bg-black text-white px-3 py-2 text-sm rounded-sm hover:bg-slate-900">Add New</button>
        </>
    )
}

export default Allposts
import React, {useState} from "react"

const NewBlog = props => {

    /* const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    const saveTitle = e => {
        setTitle(e.target.value)
        console.log(title)
    }

    const saveContent = e => {
        setContent(e.target.value)
        console.log(content)
    }
 */
    return (
        <div>
            <form onSubmit={props.savePost} className="font-['Gilroy'] mt-16">
                
                <input type='text' placeholder='Enter a title' onChange={props.saveTitle} required ref={props.getTitle} className="border border-slate-800 px-4 py-2 w-1/3 mb-8" /> <br/>
                <textarea placeholder="Enter a short description" required onChange={props.saveContent} ref={props.getContent} className="border border-slate-800 px-6 py-4 w-1/3" /><br />
                <button className="bg-black text-white px-4 py-2 mt-8">Save Post</button>
            </form>
        </div>
    )
}


export default NewBlog
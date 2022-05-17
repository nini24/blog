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
            <form onSubmit={props.savePost}>
                <input type='text' placeholder='Enter a title' onChange={props.saveTitle} required ref={props.getTitle} className="border border-slate-800 px-4 py-2" /> <br/>
                <textarea placeholder="Enter a short description" required onChange={props.saveContent} ref={props.getContent} className="border border-slate-800 px-6 py-4" /><br />
                <button className="bg-black text-white px-4 py-2">Save Post</button>
            </form>
        </div>
    )
}


export default NewBlog
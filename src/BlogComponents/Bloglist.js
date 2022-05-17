
import data from '../data.json'
import { useState } from 'react'



const Bloglist = (props) => {
  
    return(
        <div className="">
            <div>
            <img src={props.imgurl} />
            <p className=" font-bold text-base mr-4 mt-3 mb-2 text-left" >{props.title}</p>
            <p className="text-left font-medium text-sm text-slate-600 mb-4 ">{props.content}</p>


            </div>
       {/*  {
            info.map(inf => (
                <div>
                    <img src={inf.imgurl} />
                    <p className=" font-bold text-base mr-4 mt-3 mb-2 text-left" >{inf.title}</p>
                    <p className="text-left font-medium text-sm text-slate-600 mb-4 ">{inf.content}</p>
                    <p className='text-sm text-left font-semibold underline hover:text-purple-900'>Read full story</p>
                    <div className='grid grid-cols-3 gap-1 text-xs mt-4 divide-x text-left'>
                        <div><p>By {inf.author}</p></div>
                        <div><p className='px-1'>{inf.date}</p></div>
                        <div><p className='px-1'> {inf.duration}</p></div>                     
                        </div>
                    
                    </div>
            ))
        } */}
           
          {/*   <div className="grid grid-cols-3 w-4/6 gap-12 mx-auto">
                <div className='bg-white'>
                    <img src={Flower} alt='flower'/>
                    <p className=" font-bold text-base mr-4 mt-4 mb-2 text-left">Do Nigerian women really like flowers? </p>
                    <p className="text-left font-medium text-sm text-slate-600 mb-4 ">I normally pretend to love flowers but what I would appreciate is a bouquet of dollars.</p>
                    <p className='text-sm text-left font-semibold underline hover:text-purple-900'>Read full story</p>

                    <div className='grid grid-cols-3 gap-1 text-xs mt-4 divide-x'>
                            <div><p className='text-left '> By Omo</p></div>
                            <div ><p className='text-left px-1'>6th Oct 2021</p></div>
                            <div><p className='text-left px-1'>5 mins</p></div>


                    </div>
                </div> 
                <div>
                    <img src={Fruit} />
                </div>
                <div>
                    <img src={Sweet} />
                </div>
                
            </div> */}
        </div>
    )
}


export default Bloglist
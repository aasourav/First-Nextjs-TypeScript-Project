import React from 'react'
import Image from 'next/image';
interface PostList {
    plist:{
        title: string;
        auth: string;
        img: any;
    }[]
}
const PostList: React.FC<PostList> = ({plist}) => {
  return (
    // <div className='grid grid-col-3'>
    //     {plist.map((data,key)=>(
    //         <div key={key} className=''>
    //             <Image 
    //                 src={data.img}
    //                 height={100}
    //                 width={100}
    //                 alt={data.title}
    //             />
    //             <div>
    //                 <p>{data.title}</p>
    //                 <p>by <span>{data.auth}</span></p>
    //             </div>
    //         </div>
    //     ))}
    // </div>
    <div className='grid grid-cols-2'>
        {plist.map((data,index)=> (
            <div className='flex jusify-center py-3'>
                <Image 
                    src={data.img}
                    height={100}
                    width={100}
                    alt={data.title}
                />
                <div className='pl-2 px-8'>
                    <p>{data.title}</p>
                    <p className='text-gray-400'>by <span className='font-medium text-[#562EFF]'>{data.auth}</span></p>
                </div>
            </div>))}
    </div>
  )
}

export default PostList
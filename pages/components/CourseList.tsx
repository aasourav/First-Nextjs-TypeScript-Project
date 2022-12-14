import React from 'react'
import Image from 'next/image';
import Rating from './Rating';

interface CList {
    cList: {
        title: string;
        rating: number;
        auth: string;
        img: string;
        duration: string;
    }[]
}
const CourseList: React.FC<CList> = ({ cList }) => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            {cList.map(data => (
                <div className='grid grid-cols-1'>
                    <div className='w-full bg-red-200 rounded-md'>
                        <Image
                            src={`/${data.img}`}
                            sizes=''
                            alt={data.title}
                            width="80"
                            height={80}
                        />

                    </div>

                    <div>
                        <p>{data.title}</p>
                        <p className='text-sm text-red-500'>{data.auth}</p>
                        <Rating rating={data.rating} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseList
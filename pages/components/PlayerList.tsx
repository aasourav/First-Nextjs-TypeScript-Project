import React from 'react'
import Image from 'next/image'

interface IProps {
    plist: {name: string, img:any}[]
}
// flex jusify-center w-96 h-12 flex-wrap
const PlayerList: React.FC<IProps> = ({plist}) => {
    
  return (
    <div className='grid grid-cols-3'>
        {plist.map((data,index)=> (
            <div className='flex jusify-center items-center h-24'>
                <Image
                    width='50'
                    height='50'
                    src={data.img}
                    alt={data.name}
                />
                <p className='ml-4'>{data.name}</p>
            </div>))}
    </div>
  )
}

export default PlayerList
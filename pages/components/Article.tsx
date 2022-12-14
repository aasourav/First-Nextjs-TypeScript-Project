import React from 'react'
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

import post1 from '../images/post1.png'
import post2 from '../images/post2.png'
import post3 from '../images/post3.png'
import post4 from '../images/post4.png'
import LatestCourse from './LatestCourse';


import PlayerList from './PlayerList';
import PostList from './PostList';

const arr = [
        {name:'Akkas ALi' , img:img1},
        {name:'Sajid Hasan' , img:img2},
        {name:'Tasdiq Molla' , img:img3},
        {name:'Frroz Ahmed' , img:img4},
        {name:'Junayed Ahmed' , img:img5},
        {name:'Mashrafee Jafor' , img:img6},
    ]
const postArr = [
    {title:'13 of my Favorite UI/UX Goodies', auth:'Kulsum Banu' , img:post1},
    {title:'7 Typography tips for interface design', auth:'Amena Banu' , img:post2},
    {title:'UI Cheatsheet greed vs flex', auth:'Ahsan Amin' , img:post3},
    {title:'13 of my Favorite UI/UX Goodies', auth:'Sohan Molla' , img:post4},

]

const Article = () => {
  return (
    <div className='m-8 w-[65%] self-center bg-white rounded-md p-8'>
        {/* player and blog */}
        <div className=''>
            <div className='pb-8 flex flex-col justify-center'>
                <div className=''>
                     <p className=' text-2xl text-[#562EFF]'>Top Player</p>
                </div>
                <PlayerList plist={arr}/>
            </div>
            <hr/>
            <div className='pt-12'>
                <p className=' text-2xl text-[#562EFF] pb-4'>Top Tutorial</p>
                <div className=''>
                    <PostList plist={postArr}/>
                </div>
             </div>
        </div>
    </div>
    
  )
}

export default Article
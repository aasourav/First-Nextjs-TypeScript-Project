import React from 'react'
import course1 from '../images/course1.png'
import course2 from '../images/course2.png'
import course3 from '../images/course3.png'
import CourseList from './CourseList'

const arr = [
    { title: 'React - The complete guide 2022', rating: 2.5, auth: 'Aich Khan', img: "../images/course1.png", duration: '1.30hr' },
    { title: 'Powerpoint 2020 Master powerpoint Cour', rating: 3.5, auth: 'Aich Khan', img: "../images/course2.png", duration: '2.30hr' },
    { title: 'The complete javascript course 2020', rating: 4.5, auth: 'Aich Khan', img: "../images/course3.png", duration: '4.30hr' }
]
const LatestCourse = () => {
    return (
        <div className='mb-8 w-[65%] self-center bg-white p-8 rounded-md'>
            <p className=' text-2xl text-[#562EFF] pb-8'>Latest Course</p>
            <div className='flex'>
                <CourseList cList={arr} />
            </div>
        </div>
    )
}

export default LatestCourse
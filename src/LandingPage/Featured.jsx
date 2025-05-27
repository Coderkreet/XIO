import React from 'react'
import group from '../../src/userAssets/group.png'

const Featured = () => {
    return (
        <div className='font1 p-4'>
            <h1 className='text-center text-[#9747FF] lg:text-xl md:text-lg font-medium uppercase'>As featured in</h1>
            <div className='max-w-7xl mx-auto flex justify-center items-center'>
                <img src={group} alt="" />
            </div>
        </div>
    )
}

export default Featured
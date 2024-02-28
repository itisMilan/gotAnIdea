"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function LikeIcon() {
    const [isLiked,setIsliked]=useState(false)
  return (
    <>
      <Image
                                src= { isLiked? "/assets/heart-filled.svg": "/assets/heart-gray.svg"}   
                                alt="heart"
                                width={24}
                                height={24}
                                className='cursor-pointer object-contain'
                                onClick={()=>setIsliked(!isLiked)}
                                /> 
    </>
  )
}

export default LikeIcon
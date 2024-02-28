"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { likeThread } from '@/lib/actions/thread.actions'

interface likeProps{
threadId:string,
userId:string
}
function LikeIcon({threadId,userId}:likeProps) {
  const [isLiked,setIsLiked]=useState(false)
  async function handleLike(){
    setIsLiked((prevLiked)=>!prevLiked);
    await likeThread(threadId,userId)
   }
    
  return (
    <>
      <Image
                                src= { isLiked? "/assets/heart-filled.svg": "/assets/heart-gray.svg"}   
                                alt="heart"
                                width={24}
                                height={24}
                                className='cursor-pointer object-contain'
                                onClick={handleLike}
                                /> 
    </>
  )
}

export default LikeIcon
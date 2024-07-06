import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import { FaCloudArrowUp } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { AiFillAudio } from "react-icons/ai";
import { IoMdEyeOff } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";

export default function RightIcons() {
  return (
    <div className='right-icons'>
        <button className='full-btn peach'>Eye access</button>
        <button className='full-btn peach'>Download pdf</button>
        <button className='full-btn peach'>Speech to text</button>
       
    </div>
  )
}

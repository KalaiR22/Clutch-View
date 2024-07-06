import React from 'react'
import Keyboard from '../component/Keyboard'
import EyeMove from '../component/EyesMove' 
import RightIcons from '../component/RightIcons'
import EyeMoveCng from '../component/EyeMoveCng'
import './Home.css'

export default function Home() {
  return (
    <div className='home-layout'>
      
      <Keyboard/>
      <EyeMoveCng/>
      
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import './DemoInputPasswordButton.css'
import ImgAsset from '../public'
export default function DemoInputPasswordButton () {
	const [text_Password, setText_Password] = useState('')
	const [text_Input, setText_Input] = useState('')
	const [text_Input_1, setText_Input_1] = useState('')
	return (
		<div className='DemoInputPasswordButton_DemoInputPasswordButton'>
			<input className='_Password' type='password' placeholder='Password' value={text_Password} onChange={(val) => {setText_Password(val.target.value)}}/>
			<input className='_Input' type='text' placeholder='Input' value={text_Input} onChange={(val) => {setText_Input(val.target.value)}}/>
			<div className='Inputwithicon'>
				<div className='icon'>
					<img className='Vector' src = {ImgAsset.DemoInputPasswordButton_Vector} />
				</div>
				<input className='_Input_1' type='text' placeholder='Search' value={text_Input_1} onChange={(val) => {setText_Input_1(val.target.value)}}/>
			</div>
			<button className='_Button' onClick={()=>console.log("Click")}>
				<span className='ReviewNow'>Review Now</span>
				<div className='icon_1'>
					<img className='Vector_1' src = {ImgAsset.DemoInputPasswordButton_Vector_1} />
				</div>
			</button>
		</div>
	)
}
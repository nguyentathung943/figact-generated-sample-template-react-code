import React, { useState, useEffect } from 'react'
import './DemoTextImageWithAirtableData.css'
import {getListData, getDataValue} from '../Services'
export default function DemoTextImageWithAirtableData () {
	const [table1Ellipse1State,settable1Ellipse1State ] = useState('');
	const [table1nameState,settable1nameState ] = useState('');
	useEffect(()=>{
		const table1Ellipse1requestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?fields%5B%5D=avatar&sort%5B0%5D%5Bfield%5D=ID'
		const gettable1Ellipse1Data = getDataValue(table1Ellipse1requestUrl, settable1Ellipse1State, 1)
		gettable1Ellipse1Data()

		const table1namerequestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?fields%5B%5D=username&sort%5B0%5D%5Bfield%5D=ID'
		const gettable1nameData = getDataValue(table1namerequestUrl, settable1nameState, 1)
		gettable1nameData()
	},[])

	return (
		<div className='DemoTextImageWithAirtableData_DemoTextImageWithAirtableData'>
			<div className='task08'>
				<div className='Group1'><div className='Ellipse1' style={{backgroundImage: `url(${table1Ellipse1State})`}}/>
					<div className='Ellipse2'/>
				</div>
				<span className='name'>{table1nameState}</span>
			</div>
		</div>
	)
}
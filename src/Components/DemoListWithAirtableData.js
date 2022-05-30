import React, { useState, useEffect } from 'react'
import './DemoListWithAirtableData.css'
import {getListData, getDataValue} from '../Services'
export default function DemoListWithAirtableData () {
	const [table1ListState,settable1ListState ] = useState([]);
	useEffect(()=>{
		const table1ListrequestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?sort%5B0%5D%5Bfield%5D=ID'
		const gettable1ListData = getListData(table1ListrequestUrl, settable1ListState)
		gettable1ListData()
	},[])

	return (
		<div className='DemoListWithAirtableData_DemoListWithAirtableData'>
			<div className='List'>
				{table1ListState.map((item) => (
					<div className='_Item'>
						<div className='Thumbnail'>
							<div className='ThumbnailImages'>
								<div className='ThumbnailImages_1'>
									<img className='img' src = {item.img}/>
								</div>
								<div className='VideoTime'>
									<span className='VideoTime_1'>23:45</span>
								</div>
							</div>
						</div>
						<div className='VideoText'>
							<span className='abc'>{item.name}</span>
							<div className='ChannelDesc'>
								<div className='channelName'>
									<span className='JamesGouse'>James Gouse</span>
								</div>
								<div className='Channelviews'>
									<span className='_1Mviews3yearsago'>1M views . 3 years ago</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
import React, { useState, useEffect } from 'react'
import './DemoPageNavigation.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import {getListData, getDataValue} from '../Services'
export default function DemoPageNavigation () {
	const [CarouselState, setCarouselState] = useState('')
	const [table1CarouselState,settable1CarouselState ] = useState([]);
	const [table1ListState,settable1ListState ] = useState([]);
	useEffect(()=>{
		const table1CarouselrequestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?sort%5B0%5D%5Bfield%5D=ID'
		const gettable1CarouselData = getListData(table1CarouselrequestUrl, settable1CarouselState)
		gettable1CarouselData()

		const table1ListrequestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?sort%5B0%5D%5Bfield%5D=ID'
		const gettable1ListData = getListData(table1ListrequestUrl, settable1ListState)
		gettable1ListData()
	},[])

	return (
		<div className='DemoPageNavigation_DemoPageNavigation'>
			<Link to='/demoinputpasswordbutton'>
				<span className='INPUTPASSWORDBUTTONDEMO'>INPUT - PASSWORD - BUTTON DEMO</span>
			</Link>
			<Link to='/demoresponsiveautolayout'>
				<span className='RESPONSIVEDEMO'>RESPONSIVE DEMO</span>
			</Link>
			<span className='NAVIGATETOOTHERPAGECAROUSELITEM'>NAVIGATE TO OTHER PAGE (CAROUSEL ITEM)</span>
			<span className='NAVIGATETOOTHERPAGELISTITEM'>NAVIGATE TO OTHER PAGE (LIST ITEM)</span>
			<div className='Carousel'>
				<div className='_Left' onClick={CarouselState.slidePrev}>
					<img className='Vector_1' src = {ImgAsset.DemoPageNavigation_Vector_1} />
				</div>
				<div className='_Right' onClick={CarouselState.slideNext}>
					<img className='Vector' src = {ImgAsset.DemoPageNavigation_Vector} />
				</div>
					<Carousel pagination={false} showArrows={false} ref={ref => (setCarouselState(ref))} itemsToShow={4}>{table1CarouselState.map((item) => (
						<Link to='/desktop1'>
							<div className='_Item'>
								<span className='film_name'>{item.name}</span>
								<span className='Youtube'>{item.channel}</span>
								<img className='abc' src = {item.img}/>
							</div>
						</Link>
					))}
				</Carousel>
			</div>
			<div className='List'>
				{table1ListState.map((item) => (
					<Link to='/desktop2'>
						<div className='_Item_1'>
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
								<span className='abc_1'>{item.name}</span>
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
					</Link>
				))}
			</div>
		</div>
	)
}
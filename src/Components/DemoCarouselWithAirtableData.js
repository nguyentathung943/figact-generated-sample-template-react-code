import React, { useState, useEffect } from 'react'
import './DemoCarouselWithAirtableData.css'
import ImgAsset from '../public'
import Carousel from 'react-elastic-carousel'
import {getListData, getDataValue} from '../Services'
export default function DemoCarouselWithAirtableData () {
	const [CarouselState, setCarouselState] = useState('')
	const [Carousel_1State, setCarousel_1State] = useState('')
	const [table1CarouselState,settable1CarouselState ] = useState([]);
	const [table1Carousel_1State,settable1Carousel_1State ] = useState([]);
	useEffect(()=>{
		const table1CarouselrequestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?sort%5B0%5D%5Bfield%5D=ID'
		const gettable1CarouselData = getListData(table1CarouselrequestUrl, settable1CarouselState)
		gettable1CarouselData()

		const table1Carousel_1requestUrl = 'https://api.airtable.com/v0/appFg6j4HawhAzDah/table1?sort%5B0%5D%5Bfield%5D=ID'
		const gettable1Carousel_1Data = getListData(table1Carousel_1requestUrl, settable1Carousel_1State)
		gettable1Carousel_1Data()
	},[])

	return (
		<div className='DemoCarouselWithAirtableData_DemoCarouselWithAirtableData'>
			<div className='Carousel'>
				<div className='_Left' onClick={CarouselState.slidePrev}>
					<img className='Vector_1' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_1} />
				</div>
				<div className='_Right' onClick={CarouselState.slideNext}>
					<img className='Vector' src = {ImgAsset.DemoCarouselWithAirtableData_Vector} />
				</div>
					<Carousel pagination={true} showArrows={false} ref={ref => (setCarouselState(ref))} itemsToShow={4}>{table1CarouselState.map((item) => (
						<div className='_Item'>
							<span className='film_name'>{item.name}</span>
							<span className='Youtube'>{item.channel}</span>
							<img className='image' src = {item.img}/>
						</div>
					))}
				</Carousel>
			</div>
			<span className='CAROUSELWITHPAGINATION'>CAROUSEL WITH PAGINATION</span>
			<div className='Carousel_1'>
				<div className='_Left_1' onClick={Carousel_1State.slidePrev}>
					<img className='Vector_3' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_3} />
				</div>
				<div className='_Right_1' onClick={Carousel_1State.slideNext}>
					<img className='Vector_2' src = {ImgAsset.DemoCarouselWithAirtableData_Vector_2} />
				</div>
					<Carousel pagination={false} showArrows={false} ref={ref => (setCarousel_1State(ref))} itemsToShow={4}>{table1Carousel_1State.map((item) => (
						<div className='_Item_1'>
							<span className='film_name_1'>{item.name}</span>
							<span className='Youtube_1'>{item.channel}</span>
							<img className='image_1' src = {item.img}/>
						</div>
					))}
				</Carousel>
			</div>
			<span className='CAROUSELWITHOUTPAGINATION'>CAROUSEL WITHOUT PAGINATION</span>
		</div>
	)
}
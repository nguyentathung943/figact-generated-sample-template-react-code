import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/CombinationDemo'><div>CombinationDemo</div></Link>
		<Link to='/DemoInputPasswordButton'><div>DemoInputPasswordButton</div></Link>
		<Link to='/DemoCarouselWithAirtableData'><div>DemoCarouselWithAirtableData</div></Link>
		<Link to='/DemoConstraintAlignment'><div>DemoConstraintAlignment</div></Link>
		<Link to='/DemoConstraintScaling'><div>DemoConstraintScaling</div></Link>
		<Link to='/DemoResponsiveAutoLayout'><div>DemoResponsiveAutoLayout</div></Link>
		<Link to='/DemoTextImageWithAirtableData'><div>DemoTextImageWithAirtableData</div></Link>
		<Link to='/DemoListWithAirtableData'><div>DemoListWithAirtableData</div></Link>
		<Link to='/DemoPageNavigation'><div>DemoPageNavigation</div></Link>
		<Link to='/Desktop1'><div>Desktop1</div></Link>
		<Link to='/Desktop2'><div>Desktop2</div></Link>
	</div>
	)
}
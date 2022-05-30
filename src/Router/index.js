import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import CombinationDemo from '../Components/CombinationDemo';
import DemoInputPasswordButton from '../Components/DemoInputPasswordButton';
import DemoCarouselWithAirtableData from '../Components/DemoCarouselWithAirtableData';
import DemoConstraintAlignment from '../Components/DemoConstraintAlignment';
import DemoConstraintScaling from '../Components/DemoConstraintScaling';
import DemoResponsiveAutoLayout from '../Components/DemoResponsiveAutoLayout';
import DemoTextImageWithAirtableData from '../Components/DemoTextImageWithAirtableData';
import DemoListWithAirtableData from '../Components/DemoListWithAirtableData';
import DemoPageNavigation from '../Components/DemoPageNavigation';
import Desktop1 from '../Components/Desktop1';
import Desktop2 from '../Components/Desktop2';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/combinationdemo"><CombinationDemo /></Route>
				<Route exact path="/demoinputpasswordbutton"><DemoInputPasswordButton /></Route>
				<Route exact path="/democarouselwithairtabledata"><DemoCarouselWithAirtableData /></Route>
				<Route exact path="/democonstraintalignment"><DemoConstraintAlignment /></Route>
				<Route exact path="/democonstraintscaling"><DemoConstraintScaling /></Route>
				<Route exact path="/demoresponsiveautolayout"><DemoResponsiveAutoLayout /></Route>
				<Route exact path="/demotextimagewithairtabledata"><DemoTextImageWithAirtableData /></Route>
				<Route exact path="/demolistwithairtabledata"><DemoListWithAirtableData /></Route>
				<Route exact path="/demopagenavigation"><DemoPageNavigation /></Route>
				<Route exact path="/desktop1"><Desktop1 /></Route>
				<Route exact path="/desktop2"><Desktop2 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;
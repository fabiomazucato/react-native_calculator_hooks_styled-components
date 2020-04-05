import React, {Fragment} from 'react'

/* Style */
import {color} from './theme/Styles'
import {SafeAreaView} from './theme/Template'

/* Components */
import GeneralStatusBar from './components/UI/GeneralStatusBar'

/* Screen */
import Calculator from './screen/Calculator'

const App = () => (
	<Fragment>
		<GeneralStatusBar
			backgroundColor={color.grey}
			barStyle="light-content"
		/>

		<SafeAreaView>
			<Calculator />
		</SafeAreaView>
	</Fragment>
)

export default App

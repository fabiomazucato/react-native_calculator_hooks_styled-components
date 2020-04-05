import React from 'react'
import {StatusBar} from 'react-native'

import {Container} from './styles'

function GeneralStatusBar(props) {
	const {backgroundColor} = props

	return (
		<Container backgroundColor={backgroundColor}>
			<StatusBar
				translucent
				backgroundColor={backgroundColor}
				{...props}
			/>
		</Container>
	)
}

export default GeneralStatusBar

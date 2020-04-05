import React from 'react'

import {Container, DisplayValue} from './styles'

function Display(props) {
	const {value = 0} = props

	return (
		<Container>
			<DisplayValue>{value}</DisplayValue>
		</Container>
	)
}

export default Display

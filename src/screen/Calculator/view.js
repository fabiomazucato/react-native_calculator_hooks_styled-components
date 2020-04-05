import React, {Fragment} from 'react'

/* Components */
import Display from '../../components/Display'
import Keyboard from '../../components/Keyboard'

import {Container} from './styles'

function Calculator(props) {
	const {displayValue, addDigit, clear, fnOperation} = props

	return (
		<Container>
			<Display value={displayValue} />
			<Keyboard
				addDigit={addDigit}
				clear={clear}
				setOperation={fnOperation}
			/>
		</Container>
	)
}

export default Calculator

import React, {memo} from 'react'

import Button from '../UI/Button'

import {Wrapper} from './styles'

function Keyboard(props) {
	const {addDigit, clear, setOperation} = props
	return (
		<Wrapper>
			<Button label="AC" triple action={() => clear()} />
			<Button label="/" operation action={() => setOperation('/')} />
			<Button label="7" action={() => addDigit('7')} />
			<Button label="8" action={() => addDigit('8')} />
			<Button label="9" action={() => addDigit('9')} />
			<Button label="*" operation action={() => setOperation('*')} />
			<Button label="4" action={() => addDigit('4')} />
			<Button label="5" action={() => addDigit('5')} />
			<Button label="6" action={() => addDigit('6')} />
			<Button label="-" operation action={() => setOperation('-')} />
			<Button label="1" action={() => addDigit('1')} />
			<Button label="2" action={() => addDigit('2')} />
			<Button label="3" action={() => addDigit('3')} />
			<Button label="+" operation action={() => setOperation('+')} />
			<Button label="0" double action={() => addDigit('0')} />
			<Button label="." action={() => addDigit('.')} />
			<Button label="=" operation action={() => setOperation('=')} />
		</Wrapper>
	)
}

export default memo(Keyboard)

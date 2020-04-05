import {createElement, useState, useEffect} from 'react'

import View from './view'

const initialState = {
	displayValue: '0',
	clearDisplay: false,
	operation: null,
	values: [0, 0],
	current: 0
}

function CalculatorContainer(props) {
	const [state, setState] = useState(initialState)

	const addDigit = async (digit) => {
		const clearDisplay = state.displayValue === '0' || state.clearDisplay

		if (digit === '.' && !clearDisplay && state.displayValue.includes('.'))
			return

		const currentValue = clearDisplay ? '' : state.displayValue
		const displayValue = currentValue + digit

		setState({...state, displayValue, clearDisplay: false})
	}

	const clear = () => {
		setState(initialState)
	}

	const fnOperation = (operation) => {
		if (state.current === 0) {
			setState({...state, current: 1, operation, clearDisplay: true})
			return
		}

		const equals = state.operation === '='
		const values = [...state.values]

		try {
			values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
		} catch (err) {
			values[0] = state.values[0]
		}

		values[1] = 0
		setState({
			...state,
			displayValue: `${values[0]}`,
			operation: equals ? null : operation,
			current: equals ? 0 : 1,
			clearDisplay: true,
			values
		})
	}

	/* Enxerga as alterações no diplay para preparar os valores nos campos correntes para o cálculo */
	useEffect(() => {
		if (state.displayValue !== '.') {
			const newValue = parseFloat(state.displayValue)
			const values = [...state.values]
			values[state.current] = newValue

			setState({...state, values})
		}
	}, [state.displayValue])

	const viewProps = {
		displayValue: state.displayValue,
		addDigit,
		clear,
		fnOperation
	}

	return createElement(View, viewProps)
}

export default CalculatorContainer

import React, {useState, useEffect} from 'react'
import {TouchableHighlight} from 'react-native'

import {dimension, color} from '../../../theme/Styles'

import {TextButton} from './styles'

export default function Button(props) {
	const {label, double, triple, operation, action} = props

	const [style, setStyle] = useState({})

	const btDouble = () => {
		const styles = {
			width: (dimension.fullWidth / 4) * 2
		}

		setStyle(styles)
	}

	const btTriple = () => {
		const styles = {
			width: (dimension.fullWidth / 4) * 3
		}

		setStyle(styles)
	}

	const btOperation = () => {
		const styles = {
			backgroundColor: color.error,
			color: color.white
		}

		setStyle(styles)
	}

	useEffect(() => {
		if (double) btDouble()
		if (triple) btTriple()
		if (operation) btOperation()
	}, [double, triple, operation])

	return (
		<TouchableHighlight onPress={action}>
			<TextButton style={style}>{label}</TextButton>
		</TouchableHighlight>
	)
}

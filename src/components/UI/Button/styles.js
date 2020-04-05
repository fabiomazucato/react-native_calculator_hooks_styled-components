import styled from 'styled-components'

/* Theme */
import {dimension, color} from '../../../theme/Styles'

export const TextButton = styled.Text.attrs((props) => ({
	style: {
		...props.style
	}
}))`
	font-size: 40px;
	height: ${dimension.fullWidth / 4}px;
	width: ${dimension.fullWidth / 4}px;
	padding: 20px;
	background-color: ${color.lightGrey};
	text-align: center;
	border: solid 1px ${color.grey};
`

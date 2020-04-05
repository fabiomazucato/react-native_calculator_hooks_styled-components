import styled from 'styled-components'

import {color} from '../../theme/Styles'

export const Container = styled.View`
	flex: 1;
	padding: 20px;
	justify-content: center;
	align-items: flex-end;
	background-color: ${color.darkGrey};
`

export const DisplayValue = styled.Text.attrs({
	numberOfLine: 1
})`
	font-size: 60px;
	color: ${color.white};
`

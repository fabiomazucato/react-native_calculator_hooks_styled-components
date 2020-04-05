import styled from 'styled-components'

import {color, STATUSBAR_HEIGHT} from '../../../theme/Styles'

export const Container = styled.View.attrs((props) => ({
	style: {
		background: props.backgroundColor ? props.backgroundColor : color.error
	}
}))`
	height: ${STATUSBAR_HEIGHT};
`

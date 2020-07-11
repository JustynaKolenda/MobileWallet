import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window");


export const AnimatedView = styled(Animated.View)({
    alignSelf: 'center',
    flex: 1

})

export const ImageCard = styled(Animated.Image)({
    width: 200,
    height: 200,
    
})
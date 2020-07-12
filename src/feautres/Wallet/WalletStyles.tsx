import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window");


export const AnimatedView = styled(Animated.View)({
    alignSelf: 'center',
    flex: 1,
    marginTop: 20,
})

export const ImageCard = styled(Animated.Image)({
    width: 250,
    height: 150,
    resizeMode: 'cover',
})

export const WalletView = styled.View({
    marginTop: 100,
})

export const AddNewCard = styled.TouchableOpacity({
  
})

export const Title = styled.Text({
    color: "#20232a",
    textAlign: 'left',
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 20
})

export const AddNew = styled.Text({
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "bold",
    width: 150,
})
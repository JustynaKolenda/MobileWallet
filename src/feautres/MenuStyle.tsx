import styled from 'styled-components/native'
import { Animated, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const Container = styled.View({
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginTop: 30
})

export const ValueInput = styled.TextInput({
    height: 50,
    padding: 8
})

export const AddValue = styled.TouchableOpacity({
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
})

export const AddValueButtonTitle = styled.Text({
    color: 'white'
})

export const Heder = styled.View({

})

export const ListWraper = styled.View({

})

export const ContainerListValue = styled.View ({
    width: '100%',
    height: 80,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
})

export const InfoText = styled.Text({
    fontSize: 20
})

export const ScrolList = styled(FlatList)({
    flex:1
})
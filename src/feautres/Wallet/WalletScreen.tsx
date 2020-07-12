import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import WalletSlaider from './WalletSlaider';
import { WalletView, AddNewCard, AddNew, Title } from './WalletStyles';


export default class WalletScreen extends React.Component {
    render(){
        return(
            <WalletView>
                <View style={{position:'relative',}}>
                    <Title>Karty</Title>
                    <AddNewCard>
                        <AddNew>Add new Card</AddNew>
                    </AddNewCard>
                </View>
                <WalletSlaider/>
            </WalletView>
        )
    }
}
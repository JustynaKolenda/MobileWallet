import React from "react";
import { View, FlatList, Animated, Image, Text } from "react-native";
import { GetCard } from "../conectors";
import { CardsType } from "../Card/CardTypes";
import { ImageCard, AnimatedView } from "./WalletStyles";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface WalletSlaiderS {
    cards : Array<CardsType>,
}

export class WalletSlaider extends React.Component <any, WalletSlaiderS> {
   constructor(props: any){
       super(props);
       this.state = {
            cards: []
       }
   }

   public imgeSlaider = (item:CardsType) => (
    <AnimatedView >
        <ImageCard source={{uri: item.uri}}/>
        <Text>{item.title}</Text>
    </AnimatedView>
  )

   componentDidMount(){
    const cards =  GetCard();
    this.setState ({
        cards
    })
  }

  private renderIt = ({item}:any) => this.imgeSlaider(item)

    render(){
        return (
        <AnimatedFlatList
            style={{marginTop: 20}}
            scrollEventThrottle={16}
            bounces={false}
            data={this.state.cards}
            renderItem={this.renderIt}
            keyExtractor={ (item: { id: string; }) => item.id }
        />
        );
    };
};

export default WalletSlaider;
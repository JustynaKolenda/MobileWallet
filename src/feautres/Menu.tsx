

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button
} from 'react-native';


declare const global: {HermesInternal: null | {}};

const Menu = ({navigation}:any) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
           <View>
            <Button title="Go to Wallet" onPress={() => navigation.navigate('Wallet')} />
           </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default Menu;

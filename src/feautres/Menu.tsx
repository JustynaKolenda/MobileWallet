

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button,
  Text
} from 'react-native';
import { Container, Heder, AddValue, AddValueButtonTitle, ValueInput, ListWraper, ScrolList} from './MenuStyle';
import ListValue from './ListValue';

const Menu = () => {
  const [ values, setValue ] = useState(['valu1', 'other value', 'next value']);
  const [ currentValu, setCurrentValue] = useState('')

  function onAddValue() {
    if (currentValu.length < 3) {
      return;
    }
    setCurrentValue('');
    setValue([...values, currentValu]);
  }

  return (
    <SafeAreaView>
      <Container>
        <Heder>
            <ValueInput 
              placeholder={'Nowy paragon'} 
              value={currentValu} 
              onChangeText={setCurrentValue}
            />
            <AddValue onPress={onAddValue}>
                <AddValueButtonTitle>{'Add'}</AddValueButtonTitle>
            </AddValue>
        </Heder>
      <ListWraper>
        <ScrolList 
          data={values}
          keyExtractor= {(item,index) => index.toString()}
          renderItem={({value}:any) => <ListValue value={value}/>}
        />
      </ListWraper>
      </Container>
    </SafeAreaView>
  );
};


export default Menu;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Wallet from '../../feautres/Wallet';
import Menu from '../../feautres/Menu';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Menu" component={ Menu } />
            <Tab.Screen name="Wallet" component={ Wallet } />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
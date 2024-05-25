import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthStackNavigator from './AuthStackNavigator';
import DashboardScreen from './DashboardScreen';
import ClientRegisterScreen from './ClientRegisterScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{label}</Text>
  </TouchableOpacity>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Auth">
      <Drawer.Screen name="Auth" component={AuthStackNavigator} />
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabel: () => (
            <CustomDrawerItem
              label="Dashboard"
              onPress={() => navigation.navigate('Dashboard')}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ClientRegister"
        component={ClientRegisterScreen}
        options={{
          drawerLabel: () => (
            <CustomDrawerItem
              label="Cadastrar Cliente"
              onPress={() => navigation.navigate('ClientRegister')}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
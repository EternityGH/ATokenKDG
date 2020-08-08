import React from 'react';

// ------------S--Import React Navigation---------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// ------------E--Import React Navigation---------------------

// ------------S--Import Screen---------------------
import WalletScreen, {
  screenOptions as WalletScreenScreenOptions
} from '../screens/WalletScreen';
// ------------E--Import Screen---------------------


// ------------S--Import External Library---------------------
import Icon from 'react-native-vector-icons/Ionicons';
// ------------E--Import Screen---------------------



const AppNavigator = props => {
    const WalletStack = createStackNavigator();
    // const BottomMenu = createBottomTabNavigator();

    // const WalletStackScreen = () => {
    //   return (
    //     <WalletStack.Navigator
    //     screenOptions={{
    //         headerShown: false
    //       }}
    //     >
    //       <WalletStack.Screen
    //         name="WalletScreen"
    //         component={WalletScreen}
    //       />
    //     </WalletStack.Navigator>
    //   );
    // };

  return (
    <NavigationContainer>
        {/* <BottomMenu.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Dashboard') {
                iconName = focused ? 'md-wallet' : 'md-wallet';
              } else if (route.name === 'a') {
                iconName = focused ? 'hand-holding-usd' : 'hand-holding-usd';
              }else if (route.name === 'b') {
                iconName = focused ? 'diamond' : 'diamond';
              }else if (route.name === 'c') {
                iconName = focused ? 'user-o' : 'user-o';
              }
  
  
  
              // You can return any component that you like here!
              if(iconName === 'hand-holding-usd'){
                  return <FontAwesome5 name={iconName} size={size} color={color}  />
              }else if(iconName === 'diamond' || iconName === 'user-o'){
                  return <FontAwesome name={iconName} size={size} color={color}   />
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#547DD3',
            inactiveTintColor: 'gray',
          }}>
    
            <BottomMenu.Screen 
                name="Dashboard" 
                component={DashBoardStackNavigatorScreen} 
                options={{
                    tabBarLabel: "Tài sản"
                  }}
            />
             <BottomMenu.Screen 
                name="a" 
                component={Vaynhanh} 
                options={{
                    tabBarLabel: "Vay mượn"
                  }}
            />
            <BottomMenu.Screen 
                name="b" 
                component={Tailoc} 
                options={{
                    tabBarLabel: "Tài lộc"
                  }}
            />
             <BottomMenu.Screen 
                name="c" 
                component={Cuatoi} 
                options={{
                    tabBarLabel: "Của tôi"
                  }}
            />                                  
        </BottomMenu.Navigator> */}
        <WalletStack.Navigator
        >
          <WalletStack.Screen
            name="WalletScreen"
            component={WalletScreen}
            options={WalletScreenScreenOptions}
          />
        </WalletStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

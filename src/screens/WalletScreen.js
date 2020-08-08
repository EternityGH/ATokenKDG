import React from 'react'
import {    
        StyleSheet, 
        Text, 
        View,
        Platform
       } from 'react-native';
import HeaderButton from '../components/UI/HeaderButton';
import {
        HeaderButtons,
        Item,
        } from 'react-navigation-header-buttons';


const WalletScreen = () => {
    return (

        <View style={styles.container}>
            <Text>Vi screen</Text>
        </View>

    )
}


export const screenOptions = navData => {
    return {
      headerTitle: 'JiaweiToken',
      headerStyle: {
        backgroundColor: '#36A5FE',
      },
      headerTitleStyle: {
        marginLeft: -160,
        color: 'white'
      },
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => {
              console.log("Hello");
            }}
          />
        </HeaderButtons>
      )
    };
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F1F5F8'
    }
});
export default WalletScreen;



import React from 'react'
import {    
        StyleSheet, 
        Text, 
        View,
        Platform,
        Dimensions,
        ScrollView
       } from 'react-native';

// ------------S--Import Header Button---------------------
import HeaderButton from '../components/UI/HeaderButton';
import {
        HeaderButtons,
        Item,
        } from 'react-navigation-header-buttons';
// ------------E--Import  Header Button---------------------    

// ------------S--Import Self-created Components---------------------
import KDGButton from '../components/UI/KDGButton';
import Card from '../components/UI/Card';
// ------------Import Self-created Components---------------------

// ------------S--Import External Library---------------------
import Icon from 'react-native-vector-icons/Ionicons';
// ------------E--Import  External Library---------------------


//Cách tính tỉ lệ, lấy chiều ngang (hoặc chiều dọc) màn hình ios làm chuẩn tức là 414 (hoặc 896). Lấy kết quả / 414 (hoặc 896)
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const WalletScreen = () => {
  console.log(screenHeight);
    return (
        <ScrollView>
        <View style={styles.belowHeaderContainer}>   
        <View style={styles.line1Container}>
          <Text style={styles.tongtaisan}>tổng tài sản</Text>
          <Card style={styles.card}>
            <Icon name="shield-checkmark-sharp" size={15} color="rgba(255, 255, 255, 0.5)" />
            <Text style={styles.subaove}> sự bảo vệ</Text>
          </Card>
        </View>
        <View style={styles.line2Container}>
          <Text style={styles.moneyNumber}>₫ 0.00</Text>
        </View>
        </View>
        </ScrollView>

    )
}


export const screenOptions = navData => {
    return {
      headerTitle: () => (
        <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>JiaweiToken</Text>
              <KDGButton 
                style={styles.KDGButton}
                title='Chưa Sao Lưu'
                titleSize={(14/414)*screenWidth}
                color='#F45E23'
                titleColor = 'white'
                width={(120/414)*screenWidth}
                height={(30/414)*screenWidth}
              />
        </View>
      ),
      headerStyle: {
        backgroundColor: '#36A5FE',
        shadowColor: 'transparent',
        elevation: 0,
        height: Platform.OS === 'android' ? (70/896)*screenHeight : (100/896)*screenHeight,
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
      ),  
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Noti"
            iconName='notifications-outline'
            onPress={() => {
              console.log("Hello");
            }}
          />
          <Item
            title="Scan"
            iconName='scan-outline'
            onPress={() => {
              console.log("Hello");
            }}
            style={{marginLeft: (-10/414)*screenWidth, marginRight: (-10/414)*screenWidth}}
          />
        </HeaderButtons>
      ),  
    };
};
  

const styles = StyleSheet.create({
    // ----------header----------
    headerTitleContainer: {
      flexDirection: 'row',
      marginTop: (5/896)*screenHeight,
      marginLeft: (-30/414)*screenWidth
    },
    headerTitle: {
      color: 'white',
      fontSize: (18/414)*screenWidth,
    },
    KDGButton: {
      marginTop: (-3/414)*screenWidth,
      marginLeft: (70/414)*screenWidth
    },

    // ----------content----------

           // ----------line 1----------
    belowHeaderContainer: {
      backgroundColor: '#36A5FE',
    },
    line1Container: {
      flexDirection: 'row',
      marginLeft: 15
    },
    tongtaisan: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: (17/414)*screenWidth,
      marginRight: 10
    },
    card: {
      width: 90,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      flexDirection: 'row'
    },
    subaove: {
      fontSize: (12/414)*screenWidth,
      color: 'rgba(255, 255, 255, 0.5)'
    },
            // ----------line 2----------
    line2Container: {
      flexDirection: 'row',
      marginLeft: 15
    },
    moneyNumber: {
      fontFamily: 'Roboto-Bold',
      color: 'white',
      fontSize: (30/414)*screenWidth,
    }
});
export default WalletScreen;



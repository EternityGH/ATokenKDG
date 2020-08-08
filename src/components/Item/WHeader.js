import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
const WHeader = (props) => {
    return (
        <View style={{...props.style}}>
            <View style={styles.headerContainer}>
                <View style={styles.meunuConatiner}>
                <Text style={styles.textVidammay}>Ví đám mây</Text>
                <Text style={styles.textViHD}>Ví HD</Text>
                </View>
            
            <View style={styles.iconContainer}>
                <View style={styles.notiIcon}>
                <Ionicons name="md-notifications-outline" size={24} color="#6877C3" />
                </View>
                <View style={styles.scanIcon}>
                <Ionicons name="ios-qr-scanner" size={24} color="#6877C3" />
                </View>
            </View>   
            </View>                
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
 
      },
      meunuConatiner: {
        flexDirection: 'row',
      },
      textVidammay: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 20
      },
      textViHD:{
        marginLeft: 3,
        color: '#AAAAAA',
        fontWeight: 'bold',
      },
      iconContainer: {
        flexDirection: 'row',
        marginLeft: 170
      },
      notiIcon: {
        
      },
      scanIcon: {
        marginLeft: 10
      },
});

export default WHeader;

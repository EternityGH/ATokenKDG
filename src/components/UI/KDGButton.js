import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const KDGButton  = props => {
  return (
      <TouchableOpacity onPress={props.toPress} style={{...props.style,...styles.button, ...{backgroundColor: props.color, 
                                                      width: props.width,
                                                      height: props.height,
                                                      }}
      }>  
            <Text style={{fontSize: props.titleSize,
                          fontWeight: props.titleWeight,
                          color: props.titleColor,

                        }}>
                  {props.title}
            </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 4,
    justifyContent: 'center', 
    alignItems: 'center', 
  }
});

export default KDGButton;

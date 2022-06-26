import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

function Button(props) {
      const { onPress, title = 'Save' } = props;
      return (
            <Pressable style={props.disabled? styles.buttonDis: styles.button} onPress={onPress} disabled={props.disabled}>
                  <Text style={styles.text}>{title}</Text>
            </Pressable>
      );
}

export default function ButtonConfirm(props) {



      return (<Button

            title="ยืนยัน"
            color="#0060ab"
            disabled={props.disabled}
            onPress={props.onPress}
      />)
}

const styles = StyleSheet.create({
      button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
            borderRadius: 4,
            boxShadow: ' 0 2px 8px 0 rgb(0 0 0 / 15%)',
            backgroundColor: '#0060ab',
            border: 0,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 100,
            marginRight: 100
      },
      buttonDis: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
            borderRadius: 4,
            backgroundColor: '#a3a3a3',
            border: 0,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 100,
            marginRight: 100
      },
      text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
      },
});
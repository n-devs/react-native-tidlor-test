import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';

function Button(props) {
      const { onPress, title } = props;
      return (
            <Pressable style={styles.button} onPress={onPress}>
                  <Text style={styles.text}>{title}</Text>
            </Pressable>
      );
}

Button.propTypes = {
      onPress: PropTypes.func,
      title: PropTypes.string
}

export default function GetStartedButton(props) {

      return (<Button

            title="Get Started"
            color="#0060ab"
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
            margin: 50
      },
      text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
      },
});

GetStartedButton.propTypes = {
      onPress: PropTypes.func
}
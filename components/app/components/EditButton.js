import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

function Button(props) {
      const { onPress } = props;
      return (
            <Pressable style={styles.button} onPress={onPress}>
                  <Feather name="edit" size={24} color="black" />
            </Pressable>
      );
}

export default function EditButton(props) {



      return (<Button
            onPress={props.onPress}
      />)
}

const styles = StyleSheet.create({
      button: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            border: 0
      }
});
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function ChackValue(props) {

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                              (<Text style={{ color: 'green' }}>นามสกุลถูกต้อง</Text>)
            }
      </View>)

}

export default function TextInputLastName(props) {
      const { value, onChangeText } = props;
      return (
            <View style={styles.container}>
                  <Text>นามสกุล</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                  ></TextInput>
                  <ChackValue value={value}></ChackValue>
            </View>
      )
};

const styles = StyleSheet.create({
      container: {
            // flex: 1,
            // justifyContent: "center",
            marginTop: 10,
            marginBottom: 10,
      },
      input: {
            height: 40,
            // margin: 12,
            borderBottomWidth: 1,
            padding: 10,
      }
});
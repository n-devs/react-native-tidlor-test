import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function ChackValue(props) {

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                              (<Text style={{ color: 'green' }}>ชื่อถูกต้อง</Text>)
            }
      </View>)

}

export default function TextInputFirstName(props) {
      const { value, onChangeText } = props;
      return (
            <View style={styles.container}>
                  <Text>ชื่อ</Text>
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
            marginTop: 10,
            marginBottom: 10,
      },
      input: {
            height: 40,
            borderBottomWidth: 1,
            padding: 10,
      }
});
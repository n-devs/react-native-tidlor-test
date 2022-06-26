import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


function ChackValue(props) {
      const re = /^(?:\d{1}|\(\d{1}\))([-\/\.])\d{4}\1\d{5}\1\d{2}\1\d{1}$/;

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกเลขบัตรประชาชน</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกเลขบัตรประชาชน</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกเลขบัตรประชาชน</Text>) :
                              !re.exec(props.value) ? (<Text style={{ color: 'red' }}>กรุณากรอกเลขบัตรประชาชนให้ถูกต้อง</Text>) :
                                    (<Text style={{ color: 'green' }}>เลขบัตรประชาชนถูกต้อง</Text>)
            }
      </View>)

}
export default function TextInputIDNumber(props) {
      const { value, onChangeText } = props;


      return (
            <View style={styles.container}>
                  <Text>เลขบัตรประจำตัวประชาชน</Text>
                  
                  <TextInput
                        style={styles.input}
                        onChangeText={text => { onChangeText(text) }}
                        value={value}
                  ></TextInput>
                  <Text>ตัวอย่าง: 1-1111-11111-11-1</Text>
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
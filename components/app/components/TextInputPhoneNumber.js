import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

function ChackValue(props) {
      const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกเบอร์โทรศัพท์</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกเบอร์โทรศัพท์</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกเบอร์โทรศัพท์</Text>) :
                              !re.exec(props.value) ? (<Text style={{ color: 'red' }}>กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง</Text>) :
                                    (<Text style={{ color: 'green' }}>เบอร์โทรศัพท์ถูกต้อง</Text>)
            }
      </View>)

}

export default function TextInputPhoneNumber(props) {
      const { value, onChangeText } = props;
      return (
            <View style={styles.container}>
                  <Text>เบอร์โทร</Text>


                  <TextInput
                        style={styles.input}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                  ></TextInput>
                  <Text>ตัวอย่าง: 080-125-1457</Text>
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
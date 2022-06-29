import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

function ChackValue(props) {

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกนามสกุล</Text>) :
                              (<Text style={{ color: 'green' }}>นามสกุลถูกต้อง</Text>)
            }
      </View>)

}

ChackValue.propTypes = {
      value: PropTypes.string
}

export default function TextInputLastName(props) {
      const { value, onChangeText, onBlur } = props;
      return (
            <View style={styles.container}>
                  <Text>นามสกุล</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        name={props.name} 
                        ref={props.ref} 
                  ></TextInput>
                  <ChackValue value={value}></ChackValue>
            </View>
      )
};

TextInputLastName.propTypes = {
      value: PropTypes.string,
      onChangeText: PropTypes.func,
      onBlur: PropTypes.func

}

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
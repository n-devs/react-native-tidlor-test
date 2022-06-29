import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

function ChackValue(props) {

      return (<View>
            {props.value === undefined ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                  props.value === null ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                        props.value === "" ? (<Text style={{ color: 'red' }}>กรุณากรอกชื่อ</Text>) :
                              (<Text style={{ color: 'green' }}>ชื่อถูกต้อง</Text>)
            }
      </View>)

}

ChackValue.propTypes = {
      value: PropTypes.string
}

export default function TextInputFirstName(props) {
      const { value, onChangeText, onBlur,error } = props;
      return (
            <View style={styles.container}>
                  <Text>ชื่อ</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        onBlur={onBlur}
                        value={value}
                        name={props.name} 
                        ref={props.ref} 
                  ></TextInput>
                  <ChackValue value={value} error={error}></ChackValue>
            </View>
      )
};

TextInputFirstName.propTypes = {
      value: PropTypes.string,
      onChangeText: PropTypes.func,
      onBlur: PropTypes.func

}

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
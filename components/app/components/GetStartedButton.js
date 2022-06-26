import React from 'react';
import { StyleSheet,Text, Pressable } from 'react-native';

 function Button(props) {
      const { onPress, title = 'Save' } = props;
      return (
        <Pressable  style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      );
    }

export default function GetStartedButton(props) {
      const { navigationRedux, handleUpdateNavigation } = props;
      const [value, setValue] = React.useState({
            state: 0,
            path: "loadding",
            header: "loadding"
      });

      const update = (newValue) => (e) => {
            let data;

            data = {
                  state: newValue,
                  path: "register",
                  header: "สมัครสมาชิก"
            }
            setValue(data);
            handleUpdateNavigation(data)
      }

      React.useEffect(() => {
            setValue(navigationRedux)
      }, [navigationRedux])

      return (<Button
           
            title="Get Started"
            color="#0060ab"
            onPress={ update(1)}
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
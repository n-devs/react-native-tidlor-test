import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/LoadingScreen';
import MainScreen from './redux/containers/app/screens/MainScreen';
import CreateScreen from './redux/containers/app/screens/CreateScreen';

const Stack = createNativeStackNavigator();

export default function Main(props) {
      const { navigationRedux } = props;
      const [value, setValue] = React.useState({
            state: 0,
            path: "loadding",
            primary: "loadding"
      });
      React.useEffect(() => {
            setValue(navigationRedux)
      }, [navigationRedux]);
      return value.state === 0 ? (<LoadingScreen></LoadingScreen>) : (

            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen
                              name="register"
                              component={MainScreen}
                              options={{ title: 'สมัครสมาชิก',headerTitleAlign:"center" }}
                        />
                        <Stack.Screen
                              name="add-user"
                              component={CreateScreen}
                              options={{ title: 'เพิ่มสมาชิก',headerTitleAlign:"center" }}
                        />
                         <Stack.Screen
                              name="edit-user"
                              component={CreateScreen}
                              options={{ title: 'แก้ไขสมาชิก',headerTitleAlign:"center" }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>

      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
      },
});

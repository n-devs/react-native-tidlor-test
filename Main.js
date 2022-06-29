import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/LoadingScreen';
import MainScreen from './screens/MainScreen';
import CreateScreen from './screens/CreateScreen';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UPDATE_NAVIGATION_REQUESTED, GET_NAVIGATION_REQUESTED } from './redux/constants/navigation'


const Stack = createNativeStackNavigator();

function Main(props) {
      const { navigationRedux, getNavigationRedux, setNavigationRedux } = props;

      React.useEffect(() => {
            getNavigationRedux()
      }, [])

      return navigationRedux.state === 0 ? (<LoadingScreen
            onPress={() => {
                  setNavigationRedux({
                        state: 1,
                        path: "register",
                        header: "สมัครสมาชิก"
                  })
            }}
      ></LoadingScreen>) : (

            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen
                              name="register"
                              component={MainScreen}
                              options={{ title: 'สมัครสมาชิก', headerTitleAlign: "center" }}
                        />
                        <Stack.Screen
                              name="add-user"
                              component={CreateScreen}
                              options={{ title: 'เพิ่มสมาชิก', headerTitleAlign: "center" }}
                        />
                        <Stack.Screen
                              name="edit-user"
                              component={CreateScreen}
                              options={{ title: 'แก้ไขสมาชิก', headerTitleAlign: "center" }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>

      );
};

Main.propTypes = {
      getNavigationRedux: PropTypes.func.isRequired,
      setNavigationRedux: PropTypes.func.isRequired
}


// Get state to props
const mapStateToProps = (state) => ({
      navigationRedux: state.navigationRedux
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
      getNavigationRedux: () => dispatch({ type: GET_NAVIGATION_REQUESTED }),
      setNavigationRedux: (navigation) => dispatch({ type: UPDATE_NAVIGATION_REQUESTED, payload: navigation })
})

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(Main)
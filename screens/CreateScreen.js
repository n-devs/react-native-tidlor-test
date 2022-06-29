import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonConfirm from '../components/app/components/ButtonConfirm';
import TextInputFirstName from '../components/app/components/TextInputFirstName';
import TextInputIDNumber from '../components/app/components/TextInputIDNumber';
import TextInputLastName from '../components/app/components/TextInputLastName';
import TextInputPhoneNumber from '../components/app/components/TextInputPhoneNumber';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UPDATE_NAVIGATION_REQUESTED, GET_NAVIGATION_REQUESTED } from '../redux/constants/navigation';
import { UPDATE_USER_REQUESTED, GET_USERS_REQUESTED, CREATE_USER_REQUESTED } from '../redux/constants/users';
import { DELETE_STATE_REQUESTED, GET_STATE_REQUESTED } from '../redux/constants/state';
import { useForm, Controller } from "react-hook-form";


function CreateScreen(props) {

      const {
            navigation,
            navigationRedux,
            usersRedux,
            stateRedux,
            getStateRedux,
            getUsersRedux,
            getNavigationRedux,
            setNavigationRedux,
            addUserRedux,
            setUserRedux
      } = props;
      const [id, setId] = React.useState(0)

      const { register, setValue, getValues, handleSubmit, control, reset, formState: { errors } } = useForm();

      const re_id = /^(?:\d{1}|\(\d{1}\))([-\/\.])\d{4}\1\d{5}\1\d{2}\1\d{1}$/;
      const re_phone = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

      function addData(data) {

            usersRedux.users.push({
                  id: usersRedux.users.length,
                  firstName: data.firstName,
                  lastName: data.lastName,
                  IDNumber: data.IDNumber,
                  phoneNumber: data.phoneNumber
            })

            addUserRedux(usersRedux.users)



      }

      function updateData(data) {

            let updateUser = usersRedux.users.findIndex((user => user.id === id));

            usersRedux.users[updateUser].id = id;
            usersRedux.users[updateUser].firstName = data.firstName;
            usersRedux.users[updateUser].lastName = data.lastName;
            usersRedux.users[updateUser].IDNumber = data.IDNumber;
            usersRedux.users[updateUser].phoneNumber =data. phoneNumber;
            setUserRedux(usersRedux.users)
      }

      const onSubmit = data => {
            console.log(data);
            if (data.firstName && data.lastName && data.IDNumber && re_id.exec(data.IDNumber) && data.phoneNumber && re_phone.exec(data.phoneNumber)) {
                  let nav = {
                        state: 1,
                        path: "register",
                        header: "สมัครสมาชิก"
                  }
                  setNavigationRedux(nav)
      
                  if (navigationRedux.state === 2) {
                        addData(data)
      
                  } else if (navigationRedux.state === 3) {
                        updateData(data)
                  }
      
      
                  navigation.push(nav.path)
            }
      };

      React.useEffect(() => {
            getNavigationRedux()
            getUsersRedux()
            getStateRedux()

            setId(stateRedux.id)

            setValue('firstName', stateRedux.firstName);
            setValue('lastName', stateRedux.lastName);
            setValue('IDNumber', stateRedux.IDNumber);
            setValue('phoneNumber', stateRedux.phoneNumber);
      }, [])



      return (<View style={styles.container}>

            <Controller
                  control={control}
                  // rules={{
                  //       required: true,
                  // }}
                  render={({ field: { onChange, onBlur, value } }) => (
                        <TextInputFirstName

                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                        ></TextInputFirstName>
                  )}
                  name="firstName"
            />

            <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                        <TextInputLastName
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                        />
                  )}
                  name="lastName"
            />

            <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                        <TextInputIDNumber
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                        />
                  )}
                  name="IDNumber"
            />

            <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                        <TextInputPhoneNumber
                              onBlur={onBlur}
                              onChangeText={value => onChange(value)}
                              value={value}
                        />
                  )}
                  name="phoneNumber"
            />

            <ButtonConfirm title="Submit" onPress={handleSubmit(onSubmit)} disabled={false}></ButtonConfirm>

      </View>)
}

const styles = StyleSheet.create({
      container: {
            padding: 35
      },
      input: {
            height: 40,
            margin: 12,
            borderBottomWidth: 1,
            padding: 10,
      }
});

CreateScreen.propTypes = {
      navigation: PropTypes.object,
      navigationRedux: PropTypes.object,
      usersRedux: PropTypes.object,
      stateRedux: PropTypes.object,
      getStateRedux: PropTypes.func.isRequired,
      getUsersRedux: PropTypes.func.isRequired,
      getNavigationRedux: PropTypes.func.isRequired,
      setNavigationRedux: PropTypes.func.isRequired,
      addUserRedux: PropTypes.func.isRequired,
      setUserRedux: PropTypes.func.isRequired,
}


// Get state to props
const mapStateToProps = (state) => ({
      usersRedux: state.usersRedux,
      stateRedux: state.stateRedux,
      navigationRedux: state.navigationRedux,

})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
      getStateRedux: () => dispatch({ type: GET_STATE_REQUESTED }),
      getUsersRedux: () => dispatch({ type: GET_USERS_REQUESTED }),
      getNavigationRedux: () => dispatch({ type: GET_NAVIGATION_REQUESTED }),
      setNavigationRedux: (navigation) => dispatch({ type: UPDATE_NAVIGATION_REQUESTED, payload: navigation }),
      addUserRedux: (user) => dispatch({ type: CREATE_USER_REQUESTED, payload: user }),
      setUserRedux: (user) => dispatch({ type: UPDATE_USER_REQUESTED, payload: user }),
})

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen)
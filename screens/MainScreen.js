import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AddButton from '../components/app/components/AddButton';
import CardUser from '../components/app/components/CardUser';
import DeleteModal from '../components/app/components/DeleteModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UPDATE_NAVIGATION_REQUESTED, GET_NAVIGATION_REQUESTED } from '../redux/constants/navigation';
import { UPDATE_STATE_REQUESTED, DELETE_STATE_REQUESTED, GET_STATE_REQUESTED } from '../redux/constants/state';
import { DELETE_USER_REQUESTED, GET_USERS_REQUESTED } from '../redux/constants/users';

function MainScreen(props) {
      const {
            navigation,
            usersRedux,
            getUsersRedux,
            getStateRedux,
            setNavigationRedux,
            deleteUserRedux,
            setStateRedux,
            deleteStateRedux } = props;

      const [deleteDataState, setDeleteDataState] = React.useState(null);
      const [modalVisible, setModalVisible] = React.useState(false);

      React.useEffect(() => {
            getUsersRedux()
            getStateRedux()
      }, [])
      return (<View style={styles.container}>
            <ScrollView>
                  {usersRedux.users.length > 0 ? usersRedux.users.map((val, i, arr) => (<View key={i}>
                        {val && (<CardUser
                              data={val}
                              name={`${val.firstName} ${val.lastName}`}
                              ID={`${val.IDNumber}`}
                              phone={`${val.phoneNumber}`}
                              onPressEdit={() => {
                                    setNavigationRedux({
                                          state: 3,
                                          path: "edit-user",
                                          header: "แก้ไขสมาชิก"
                                    });
                                    setStateRedux(val);
                                    navigation.push("edit-user")

                              }}
                              onPressDelete={() => {
                                    setDeleteDataState(val)
                                    setModalVisible(!modalVisible)
                              }}
                        ></CardUser>)}

                  </View>)) : (<Text style={styles.text}>คุณยังไม่มีสมาชิก กรุณาเพิ่มสมาชิก</Text>)}

                  <AddButton onPress={() => {
                        deleteStateRedux({
                              id: usersRedux.users.length,
                              firstName: "",
                              lastName: "",
                              IDNumber: "",
                              phoneNumber: ""
                        })
                        setNavigationRedux({
                              state: 2,
                              path: "add-user",
                              header: "เพิ่มสมาชิก"
                        });
                        navigation.push("add-user")


                  }}></AddButton>
            </ScrollView>
            <DeleteModal
                  data={deleteDataState}
                  open={modalVisible}
                  onDelete={() => {
                        let removeData = usersRedux.users.filter(user => user.id !== deleteDataState.id);


                        setModalVisible(!modalVisible)
                        deleteUserRedux(deleteDataState.id)
                  }}
                  onNotDelete={() => { setModalVisible(!modalVisible) }}></DeleteModal>
      </View>)
}

const styles = StyleSheet.create({
      container: {
            flex: 1
      },
      text: {
            marginTop: 50,
            marginBottom: 20,
            textAlign: 'center',
            fontSize: 16,
      }

});

MainScreen.propTypes = {
      navigation: PropTypes.object,
      usersRedux: PropTypes.object,
      getUsersRedux: PropTypes.func.isRequired,
      setNavigationRedux: PropTypes.func.isRequired,
      deleteUserRedux: PropTypes.func.isRequired,
      setStateRedux: PropTypes.func.isRequired,
      deleteStateRedux: PropTypes.func.isRequired,
      getStateRedux: PropTypes.func.isRequired,
}


// Get state to props
const mapStateToProps = (state) => ({
      usersRedux: state.usersRedux
})

// Get dispatch / function to props
const mapDispatchToProps = (dispatch) => ({
      getUsersRedux: () => dispatch({ type: GET_USERS_REQUESTED }),
      getStateRedux: () => dispatch({ type: GET_STATE_REQUESTED }),
      getNavigationRedux: () => dispatch({ type: GET_NAVIGATION_REQUESTED }),
      setNavigationRedux: (navigation) => dispatch({ type: UPDATE_NAVIGATION_REQUESTED, payload: navigation }),
      deleteUserRedux: (user) => dispatch({ type: DELETE_USER_REQUESTED, payload: user }),
      setStateRedux: (state) => dispatch({ type: UPDATE_STATE_REQUESTED, payload: state }),
      deleteStateRedux: (state) => dispatch({ type: DELETE_STATE_REQUESTED, payload: state }),
})

// To make those two function works register it using connect
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
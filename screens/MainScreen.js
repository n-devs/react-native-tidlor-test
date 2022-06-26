import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AddButton from '../components/app/components/AddButton';
import CardUser from '../components/app/components/CardUser';
import DeleteModal from '../components/app/components/DeleteModal';

export default function MainScreen(props) {
      const { navigationRedux,
            dataStateRedux,
            handleUpdateNavigation,
            handleUpdateEditOnIdState,
            handleUpdateEditOnState,
            handleUpdateDBState } = props;

      const [locationScreen, setLocationScreen] = React.useState({
            state: 1,
            path: "register",
            header: "สมัครสมาชิก"
      });
      const [deleteDataState, setDeleteDataState] = React.useState(null);
      const [modalVisible, setModalVisible] = React.useState(false);


      function update() {
            let data;

            data = {
                  state: 2,
                  path: "add-user",
                  header: "เพิ่มสมาชิก"
            }

            let inputDataDefault = {
                  firstName: "",
                  lastName: "",
                  IDNumber: "",
                  phoneNumber: ""
            }

            setLocationScreen(data);

            handleUpdateNavigation(data)
            handleUpdateEditOnIdState(dataStateRedux.db.length)
            handleUpdateEditOnState({
                  id: dataStateRedux.db.length,
                  ...inputDataDefault
            })
            props.navigation.push(data.path)

      }

      const onUpdate = (updateData) => (e) => {
            let data;

            data = {
                  state: 3,
                  path: "edit-user",
                  header: "แก้ไขสมาชิก"
            }
            console.log("update id: ", updateData);

            let inputDataDefault = {
                  firstName: updateData.firstName,
                  lastName: updateData.lastName,
                  IDNumber: updateData.IDNumber,
                  phoneNumber: updateData.phoneNumber
            }

            setLocationScreen(data);

            handleUpdateNavigation(data)
            handleUpdateEditOnIdState(updateData.id)
            handleUpdateEditOnState({
                  id: updateData.id,
                  ...inputDataDefault
            })
            props.navigation.push(data.path)
      }

      const onDelete = (data) => (e) => {
            console.log("delete id: ", data);

            setDeleteDataState(data)
            setModalVisible(!modalVisible)
      }

      const deleteData = (data) => (e) => {
           
            const dbDefault = dataStateRedux.db;

            let removeData = dbDefault.filter(person => person.id !== data.id);

           
            setModalVisible(!modalVisible)
            handleUpdateDBState(removeData)


      }

      function notDeleteData() {
            setModalVisible(!modalVisible)
      }

      React.useEffect(() => {
            setLocationScreen(navigationRedux)
      }, [navigationRedux])

      return (<View style={styles.container}>
            <ScrollView>
                  {dataStateRedux.db.length > 0 ? dataStateRedux.db.map((val, i, arr) => (<View key={i}>

                        <CardUser
                              data={val}
                              name={`${val.firstName} ${val.lastName}`}
                              ID={`${val.IDNumber}`}
                              phone={`${val.phoneNumber}`}
                              onPressEdit={onUpdate(val)}
                              onPressDelete={onDelete(val)}
                        ></CardUser>
                  </View>)) : (<Text style={styles.text}>คุณยังไม่มีสมาชิก กรุณาเพิ่มสมาชิก</Text>)}

                  <AddButton onPress={update}></AddButton>
            </ScrollView>
            <DeleteModal
                  data={deleteDataState}
                  open={modalVisible}
                  onDelete={deleteData(deleteDataState)}
                  onNotDelete={notDeleteData}></DeleteModal>
      </View>)
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // justifyContent: "center",
      },
      text: {
            marginTop: 50,
            marginBottom: 20,
            textAlign: 'center',
            fontSize: 16,
      }

});
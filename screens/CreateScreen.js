import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonConfirm from '../components/app/components/ButtonConfirm';
import TextInputFirstName from '../components/app/components/TextInputFirstName';
import TextInputIDNumber from '../components/app/components/TextInputIDNumber';
import TextInputLastName from '../components/app/components/TextInputLastName';
import TextInputPhoneNumber from '../components/app/components/TextInputPhoneNumber';

export default function CreateScreen(props) {

      const { navigationRedux,
            dataStateRedux,
            handleUpdateNavigation,
            handleUpdateDBState,
            handleUpdateEditOnIdState,
            handleUpdateEditOnState } = props;
      const [locationScreen, setLocationScreen] = React.useState({
            state: 1,
            path: "register",
            header: "สมัครสมาชิก"
      });
      const [id, setId] = React.useState(0)
      const [firstName, setFirstName] = React.useState("")
      const [lastName, setLastName] = React.useState("")
      const [IDNumber, setIDNumber] = React.useState("")
      const [phoneNumber, setPhoneNumber] = React.useState("")

      const re_id = /^(?:\d{1}|\(\d{1}\))([-\/\.])\d{4}\1\d{5}\1\d{2}\1\d{1}$/;
      const re_phone = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;

      function createData() {
            let inputDataDefault = {
                  firstName: "",
                  lastName: "",
                  IDNumber: "",
                  phoneNumber: ""
            }

            let dbDefault = dataStateRedux.db;
            dbDefault.push({
                  id: dbDefault.length,
                  firstName: firstName,
                  lastName: lastName,
                  IDNumber: IDNumber,
                  phoneNumber: phoneNumber
            })


            console.log("create", dbDefault);

            handleUpdateDBState(dbDefault)
            handleUpdateEditOnState({
                  id: dbDefault.length,
                  ...inputDataDefault
            })
            handleUpdateEditOnIdState(dbDefault.length)

      }

      function updateData() {
            console.log("aa");
            let inputDataDefault = {
                  firstName: "",
                  lastName: "",
                  IDNumber: "",
                  phoneNumber: ""
            }

            const dbDefault = dataStateRedux.db;

            let updateDB = dbDefault.findIndex((obj => obj.id === id));

            dbDefault[updateDB].id = id;
            dbDefault[updateDB].firstName = firstName;
            dbDefault[updateDB].lastName = lastName;
            dbDefault[updateDB].IDNumber = IDNumber;
            dbDefault[updateDB].phoneNumber = phoneNumber;

            console.log("update", updateDB);

            handleUpdateDBState(dbDefault)
            handleUpdateEditOnState({
                  id: dbDefault.length,
                  ...inputDataDefault
            })
            handleUpdateEditOnIdState(dbDefault.length)



      }

      function update() {

            let data = {
                  state: 1,
                  path: "register",
                  header: "สมัครสมาชิก"
            }
            setLocationScreen(data);
            handleUpdateNavigation(data)

            if (navigationRedux.state === 2) {
                  createData()

            } else if (navigationRedux.state === 3) {
                  updateData()
            }


            props.navigation.push(data.path)
      }

      React.useEffect(() => {
            setLocationScreen(navigationRedux)

            setId(dataStateRedux.editOn.id)
            setFirstName(dataStateRedux.editOn.firstName)
            setLastName(dataStateRedux.editOn.lastName)
            setIDNumber(dataStateRedux.editOn.IDNumber)
            setPhoneNumber(dataStateRedux.editOn.phoneNumber)
    
      }, [navigationRedux, dataStateRedux])



      return (<View style={styles.container}>
            <TextInputFirstName value={firstName} onChangeText={setFirstName}></TextInputFirstName>
            <TextInputLastName value={lastName} onChangeText={setLastName}></TextInputLastName>
            <TextInputIDNumber value={IDNumber} onChangeText={setIDNumber}></TextInputIDNumber>
            <TextInputPhoneNumber value={phoneNumber} onChangeText={setPhoneNumber}></TextInputPhoneNumber>
            {firstName && lastName && IDNumber && re_id.exec(IDNumber) && phoneNumber && re_phone.exec(phoneNumber) ? (
                  <ButtonConfirm onPress={update} disabled={false}></ButtonConfirm>
            ) : (<ButtonConfirm onPress={update} disabled={true}></ButtonConfirm>)}

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
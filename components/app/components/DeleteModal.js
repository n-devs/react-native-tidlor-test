import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";


export default function DeleteModal(props) {
      const { data, open, onDelete, onNotDelete } = props;
      return (<Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  // setModalVisible(!modalVisible);
                  onNotDelete()
            }}
      >
            <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                        <Text style={styles.modalText}>ลบสมาชิก</Text>
                        <Text style={styles.modalText}>ต้องการลบ</Text>
                        {/* <Text style={styles.modalText}>{`${data.firstName} ${data.lastName}`}</Text> */}
                        <View style={styles.center}>
                              <View style={styles.box}>
                                    <View style={styles.buttonAction}>
                                          <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={onNotDelete}
                                          >
                                                <Text style={styles.textStyle}>ไม่</Text>
                                          </Pressable>
                                    </View>
                                    <View style={styles.buttonAction}>
                                          <Pressable
                                                style={[styles.button, styles.buttonOpen]}
                                                onPress={onDelete}
                                          >
                                                <Text style={styles.textStyle}>ใช่</Text>
                                          </Pressable>
                                    </View>
                              </View>
                        </View>
                  </View>
            </View>
      </Modal>)
}

const styles = StyleSheet.create({
      center: {
            justifyContent: "center",
            alignContent: "center"
      },
      box: {
            flexDirection: "row",
            justifyContent: "space-between"
      },
      centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
      },
      modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                  width: 0,
                  height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
      },
      button: {
            width:120,
            padding: 10,
            elevation: 2
      },
      buttonAction: {
            justifyContent: "space-between",
            alignContent: "center",
      },
      buttonOpen: {
            backgroundColor: "#dd052b",
      },
      buttonClose: {
            backgroundColor: "#0060ab",
      },
      textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
      },
      modalText: {
            marginBottom: 15,
            textAlign: "center"
      }
});
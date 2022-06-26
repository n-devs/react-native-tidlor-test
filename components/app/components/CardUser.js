import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

export default function CardUser(props) {
      return (
            <View style={[
                  styles.container,
                  styles.card,
                  {
                        flexDirection: "row",
                        alignContent: "space-between",
                  },
            ]}>
                  <View
                        style={[
                              styles.box,
                              {
                                    flexGrow: 0,
                                    flexShrink: 1,
                                    flexBasis: "90%",
                              },
                        ]}>
                        <Text>ชื่อ: {`${props.name}`}</Text>
                        <Text>ID: {`${props.ID}`}</Text>
                        <Text>เบอร์: {`${props.phone}`}</Text>
                  </View>
                  <View
                        style={[
                              styles.box,
                              {
                                    flexGrow: 1,
                                    flexShrink: 0,
                                    flexBasis: "auto",
                              },
                        ]}>
                        <View style={styles.box}>
                              <View style={styles.button}>
                                    <EditButton onPress={props.onPressEdit}></EditButton>
                              </View>
                              <View style={styles.button}>
                                    <DeleteButton onPress={props.onPressDelete}></DeleteButton>
                              </View>
                        </View>
                  </View>
            </View>
      )
};


const styles = StyleSheet.create({
      container: {
            paddingHorizontal: 10,
      },
      box: {
            flex: 1,
            height: 80,
            justifyContent: "space-between"
      },
      center: {
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
      },
      card: {
            backgroundColor: "white",
            padding: 10,
            margin: 5,
            borderRadius: 5,
            boxShadow: "rgb(0 0 0 / 10%) 0px 1px 1px 0px",
      },
      button: {
            justifyContent: "space-between",
            alignContent: "center",
            flexDirection: "column"
      }
})
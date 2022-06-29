import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import GetStartedButton from '../components/app/components/GetStartedButton';
import PropTypes from 'prop-types';

const image = { uri: "https://www.tidlor.com/tidlor/media/tidlor-image/webp/background/bg-graydiagonal.webp" };

export default function LoadingScreen(props) {


      return (
            <ImageBackground source={image} resizeMode="cover" style={styles.bgCover}>
                  <View style={styles.container}>
                        <GetStartedButton onPress={props.onPress}></GetStartedButton>
                  </View>
            </ImageBackground>)
}

LoadingScreen.propTypes = {
      onPress: PropTypes.func
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: "center",
      },
      bg: {
            backgroundColor: "#f5f6f7"
      },
      bgCover: {
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
      }
});
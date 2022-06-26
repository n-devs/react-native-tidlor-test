import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import GetStartedButton from '../redux/containers/app/components/GetStartedButton';

const image = { uri: "https://www.tidlor.com/tidlor/media/tidlor-image/webp/background/bg-graydiagonal.webp" };

export default function LoadingScreen() {
      return (
            <ImageBackground source={image} resizeMode="cover" style={styles.bgCover}>
                  <View style={styles.container}>
                        <GetStartedButton></GetStartedButton>
                  </View>
            </ImageBackground>)
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
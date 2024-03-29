import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import giveClassesBackgroundImage from "../../assets/images/give-classes-background.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const GiveClasses = () => {
  const { goBack } = useNavigation();

  function handleNavigateGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBackgroundImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateGoBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;

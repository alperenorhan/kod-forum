import React from "react";
import { SafeAreaView, Text, Image, View } from "react-native";
import styles from "./Signup.style";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/img/kodizimyesil.png")}
        />
        <View style={styles.text_container}>
          <Text style={styles.header_text}>Kaydol</Text>
        </View>
      </View>
      <View style={styles.signupform}>
        <Input label="Username" placeholder="yourusername" />
        <Input label="E-mail" placeholder="yourname@example.com" />
        <Input label="Password" placeholder="yourpassword" isSecure="true" />
        <Input
          label="Password Again"
          placeholder="yourpassword"
          isSecure="true"
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Kaydol" />
      </View>
    </View>
  );
};

export default Signup;

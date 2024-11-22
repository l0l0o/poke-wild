import styles from "@/styles/styles";
import { View, Image, Text } from "react-native";

const FirstScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../../assets/images/logoPokeball.png")}
      />
      <Text style={styles.text}>Dex</Text>
    </View>
  );
};

export default FirstScreen;

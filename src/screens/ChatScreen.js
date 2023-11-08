// src/screens/ChatScreen.js

import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import bg from "../../assets/images/BG2.png";
import Message from "../componentes/Message/index.js";
import messages from "../../assets/data/messages.json";
import InputBox from "../componentes/InputBox/index.js";

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
    >
        <ImageBackground source={bg} style={styles.bg}>
          <FlatList
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            style={{ padding: 10 }}
            inverted
          />
          <InputBox/>
        </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatScreen;
import ChatListItem from "../componentes/ChatListItem/ChatListItem.js";
import { FlatList } from "react-native";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;
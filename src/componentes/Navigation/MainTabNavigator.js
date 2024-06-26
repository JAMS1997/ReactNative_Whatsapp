import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../../screens/ChatsScreen.js";
import NotImplementedScreen from "../../screens/NotImplementedScreen.js";
import { Ionicons, Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Chats"
    screenOptions={{
      tabBarStyle: { backgroundColor: 'whitesmoke' },
      headerStyle: { backgroundColor: 'whitesmoke' },
    }}
  >
    <Tab.Screen
      name="Status"
      component={NotImplementedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="logo-whatsapp" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Calls"
      component={NotImplementedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="call-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Camera"
      component={NotImplementedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="camera-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Chats"
      component={ChatsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
        ),
        headerRight: () => (
          <Entypo name="new-message" size={18} color={'royalblue'} style={{ marginRight: 15 }} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={NotImplementedScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default MainTabNavigator;

// Icons

{/*<Ionicons name="logo-whatsapp" size={size} color={color} />
<Ionicons name="call-outline" size={size} color={color} />
<Ionicons name="camera-outline" size={size} color={color} />
<Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
<Ionicons name="settings-outline" size={size} color={color} />4. StackNavigatorImport the helper function createNativeStackNavigator and create the Stack.


You can also change the background color of the tabBar and Header
<Tab.Navigator
  initialRouteName="Chats"
  screenOptions={{
    tabBarStyle: { backgroundColor: "whitesmoke" },
    headerStyle: { backgroundColor: "whitesmoke" },
  }}
>
*/}
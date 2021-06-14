import React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Events 1st Page!</Text>
      <Button
        onPress={() => navigation.navigate("Second Page")}
        title="Second Screen"
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
      }}
    >
      <Text>Events 2nd Page!</Text>
      <Button
        onPress={() => navigation.navigate("Third Page")}
        title="Third Screen"
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Text>Events 3rd Page!</Text>
      <Button
        onPress={() => navigation.popToTop()}
        title="Back to Top"
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First Page" component={EventsScreen}></Stack.Screen>
      <Stack.Screen
        name="Second Page"
        component={EventsSecondScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Third Page"
        component={EventsThirdScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Favorites from "../pages/Favorites";
import TeacherList from "../pages/TeacherList";

const { Navigator, Screen } = createBottomTabNavigator();

const AppStudyTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        inactiveTintColor: "#c1bccc",
        activeBackgroundColor: "#ebebf5",
        activeTintColor: "#7159c1",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
};

export default AppStudyTabs;

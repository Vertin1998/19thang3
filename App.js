import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// **1️⃣ Login Screen**
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    navigation.replace("Main"); // Chuyển sang màn hình chính (tab)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput style={styles.input} placeholder="Email ID" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

// **2️⃣ Explorer Screen**
const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorer</Text>
      <Text>Danh sách các món ăn</Text>
    </View>
  );
};

// **3️⃣ Account Screen**
const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBanner} />
      <Text style={styles.profileTitle}>Hung Nguyen</Text>
      <Text style={styles.profileSubtitle}>Mobile Developer</Text>
      <Text>I have 5 years of experience in native mobile apps developer, now i am learning React Native.</Text>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// **🌍 Navigation Setup**
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// **Tabs dưới cùng**
const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Explorer"
      component={ExplorerScreen}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
      }}
    />
  </Tab.Navigator>
);

// **🌎 App Navigator**
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// **💄 Style**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#f90",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileBanner: {
    width: "100%",
    height: 100,
    backgroundColor: "#00aaff",
    marginBottom: 20,
  },
  profileTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  profileSubtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  signOutButton: {
    backgroundColor: "#f90",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  signOutText: {
    color: "#fff",
    fontSize: 16,
  },
});
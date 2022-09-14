import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  SCek,
  SPenyakit,
  STentang,
  SHasil,
  Account,
  EditProfile,
  Menu1,
  Jenis,
  Menu2,
  Menu2Sub,
  Register2,
  Lupa,
  Download,
} from '../pages';
import { colors } from '../utils';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          // headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Lupa"
        component={Lupa}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Download"
        component={Download}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Register',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register2"
        component={Register2}
        options={{
          headerShown: false,
          headerTitle: 'Register',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="SCek"
        component={SCek}
        options={{
          headerShown: false,
          headerTitle: 'Simplisia',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          headerShown: false,
          headerTitle: 'Simplisia',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Jenis"
        component={Jenis}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Menu2"
        component={Menu2}
        options={{
          headerShown: false,
          headerTitle: 'soal',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



      <Stack.Screen
        name="Menu2Sub"
        component={Menu2Sub}
        options={{
          headerShown: false,
          headerTitle: 'Resep',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SPenyakit"
        component={SPenyakit}
        options={{
          headerShown: true,
          headerTitle: 'Indeks Penyakit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />

      <Stack.Screen
        name="STentang"
        component={STentang}
        options={{
          headerShown: false,
          headerTitle: 'Tentang',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SHasil"
        component={SHasil}
        options={{
          headerShown: false,
          headerTitle: 'Hasil Analisa',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />



    </Stack.Navigator>
  );
}

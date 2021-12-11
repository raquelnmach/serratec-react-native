import { NativeBaseProvider } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { Container } from "./components/Container";
import Menu from './components/Menu';
import { UsuarioProvider } from "./context";

export default function App() {
  return (
    <UsuarioProvider>
      <NativeBaseProvider>
        <Menu />
        <StatusBar
          backgroundColor="#D3D3D3"
          style="dark"
          barStyle="dark-content"
        />
      </NativeBaseProvider>
    </UsuarioProvider>
  );
}

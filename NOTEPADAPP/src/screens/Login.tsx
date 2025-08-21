import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/Custominput";

export default function Login () {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onLogin = () => {
    // aquí iría la lógica real de autenticación
    console.log("Inicio de sesión:", { password });
  };

    return(
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <CustomInput
                    value={password}
                    title="Contraseña"
                    type="password"
                    onChange={setPassword}
                    required
                />

                <CustomButton 
                title="Iniciar sesión" 
                onPress={onLogin} 
                style={{ marginTop: 8 }}
                />

                <CustomButton
                    title="Registrarme"
                    onPress={() => {}}
                    variant={"secondary"}
                    style={{ marginTop: 8 }}
                />

                <CustomButton
                    title="Olvide mi contraseña"
                    onPress={() => {}}
                    variant={"tertiary"}
                    style={{ marginTop: 8 }}
                />
            </View>
        </SafeAreaView>
    );
}

 const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
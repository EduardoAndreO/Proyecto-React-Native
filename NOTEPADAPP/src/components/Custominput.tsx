import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInputProps, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";


type Props = {
    value: string;
    title: string;
    type: 'text' | 'password' | 'email' | 'number' | 'numeric';
    onChange: (text: string) => void;
    required?: boolean;
    label?: string;
};

export default function CustomInput ({value, title, label, type="text", onChange, required}: Props) {
    const [isSecureText, setIsSecureText] = useState(type === "password");
    
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const isPasswordField = type ==="password";
    const keyboardType: KeyboardTypeOptions = 
    type === 'email' ? 'email-address' :
        type === 'number' ? 'number-pad' :
             type === 'numeric' ? 'numeric' : 'default';

    const getError = () => {
    // validación de Campos obligatorios
    if (required && !value) 
        return "El campo es obligatorio";
    // evaluar si el correo tiene @
    if (type === 'email' && !value.includes('@')) 
        return "Correo invalido";
    // evaluar longitud de contraseña
    if (type === 'password' && value.length < 4) 
        return "La contraseña debe ser mas fuerte";
    }
    const error = getError();
    return (
        <View>
            <View style={[
                styles.inputContainer, 
                error && styles.inputError]}>
            <TextInput
                style={[styles.input]}
                placeholder={title}
                value={value}
                onChangeText={onChange}
                secureTextEntry={isSecureText}
                keyboardType={keyboardType}
            />
            { isPasswordField && (
                <TouchableOpacity 
                    onPress={() => {
                        setIsSecureText(prev => !prev);
                        setIsPasswordVisible(prev => !prev);
                    }}
                    activeOpacity={0.7}
                    style={styles.iconTouch}
                    accessibilityLabel="Alternar visibilidad de contraseña"
                    >
                    <Icon
                        name={isPasswordVisible ? "visibility-off" : "visibility"}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            )}
            </View>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        input: {
            flex: 1,
            paddingVertical: 12,
            fontSize: 15,
            color: 'black',
        },
        inputError: {
            borderColor: 'red',
        },
        error: {
            color: 'red',
        },
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            paddingHorizontal: 12,
            backgroundColor: '#f9f9f9ff'
        },
        iconTouch: {
            marginLeft: 8,
            padding: 6,
        },
    }
);
import React from "react";
import { StyleSheet, Text, TouchableOpacity, StyleProp, ViewStyle, GestureResponderEvent, ActivityIndicator } from "react-native";

type Props = {
    title: string;
    onPress: (ev?: GestureResponderEvent) => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    loading?: boolean;
};

// componente con props
export default function CustomButton ({title, onPress, variant='primary', style, disabled = false, loading = false}: Props){
    const Styles = getStyles(variant);

    return( 
    <TouchableOpacity 
        onPress={onPress} 
        style={[Styles.button, style, disabled && Styles.disabled]}
        activeOpacity={0.8}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityState={{disabled: disabled || loading}}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        >
        {loading ? ( <ActivityIndicator 
            size="small" 
            color={variant === "tertiary" ? "#010117" : "#ededf7"} 
            /> 
        ) : (
            <Text style={Styles.text}>{title}</Text>
        )}
      </TouchableOpacity>
    );
}
// funcion con parametros para generar estilos
const getStyles = (variant: 'primary' | 'secondary' | 'tertiary') => {
    const backgroundColor =
        variant === "primary" ? "#1c1c30" : variant === "secondary" ? "#65659c" : "#dfdff7";

    const textColor =
        variant === "primary" || variant === "secondary" ? "#ededf7" : "#010117";

    const borderWidth = variant === "tertiary" ? 1 : 0;
    
    return StyleSheet.create({
       button: {
        padding: 12,
        margin: 10, 
        borderRadius: 5,
        backgroundColor,
        borderWidth,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 44,
    },
    text: {
      color: textColor,
      fontWeight: "bold",
    },
    disabled: {
      opacity: 0.6,
    },
  });
};
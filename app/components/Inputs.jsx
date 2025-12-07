import React from "react";
import { StyleSheet, TextInput } from "react-native";


const Input = (props) => {
    const { onChangeText, placeholder, ...otherProps } = props;
    return (
        <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor='#A1A4B2'
            {...otherProps}
        />
    )
}

export const Inputs = {
    email: React.memo(() => <Input placeholder="Email address" />),
    password: React.memo(() => <Input placeholder="Password" secureTextEntry={true} />),
    name: React.memo(() => <Input placeholder="Full name" />)
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 63,
        backgroundColor: '#F2F3F7',
        borderRadius: 15,
        color: 'black',
        paddingHorizontal: 20,
    }
});
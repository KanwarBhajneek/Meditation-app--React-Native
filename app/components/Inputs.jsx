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

import { useTranslation } from "react-i18next";

export const Inputs = {
    email: React.memo(() => {
        const { t } = useTranslation();
        return <Input placeholder={t('components.inputs.email')} />;
    }),
    password: React.memo(() => {
        const { t } = useTranslation();
        return <Input placeholder={t('components.inputs.password')} secureTextEntry={true} />;
    }),
    name: React.memo(() => {
        const { t } = useTranslation();
        return <Input placeholder={t('components.inputs.name')} />;
    })
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
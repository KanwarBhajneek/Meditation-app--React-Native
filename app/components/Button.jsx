
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const Button = (props) => {
    const { text, onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

export const PrimaryButton = React.memo(Button);


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 63,
        borderRadius: 38,
        backgroundColor: '#8E97FD',
        width: '100%'
    },
    text: {
        fontSize: 14,
        color: 'white'
    }
})
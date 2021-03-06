import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

export default function StyledButton(props) {

    const { type, content, onPress } = props

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={onPress}
            >
                <Text style={[styles.txt, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

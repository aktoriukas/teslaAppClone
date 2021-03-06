import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import Button from '../StyledButton'

export default function CarItem(props) {

    const { name, tagline, image, taglineCTA } = props.car

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {`${tagline} `}
                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button
                    type='primary'
                    content='Custom Order'
                    onPress={() => { console.warn('custom order') }} />

                <Button
                    type='secondary'
                    content='Existing Inventory'
                    onPress={() => { console.warn('existin order') }} />

            </View>
        </View>
    )
}

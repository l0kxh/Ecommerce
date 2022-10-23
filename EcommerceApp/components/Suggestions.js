import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Suggestions = ({ items, data }) => {
    const [sameCategory, setSameCategory] = useState();
    items.map((it, index) => {
        const name = it.category.name
        if (name === data.category.name) {
            setSameCategory({ ...sameCategory,name })
        }
    })
    console.log(sameCategory)
    return (
        <View>
        </View>
    )
}

export default Suggestions
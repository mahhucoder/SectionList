import React from 'react'
import { Text } from 'react-native'

function Title(props) {

    const {title} = props

    return (
            <Text style={{fontSize:20,fontWeight:'700',backgroundColor:'rgba(193, 193, 193,0.2)',paddingLeft:10}}>
                {title}
            </Text>
    )
}

export default Title
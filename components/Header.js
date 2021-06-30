import React from 'react'
import {View,Text,TextInput, StyleSheet,Pressable} from 'react-native'

function Header(props) {

    return (
        <View style={styles.header}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:23,marginTop:5}}>
                <Text style={{fontSize:18,color:'green',marginTop:10}}>Chọn</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Pressable style={{marginRight:30}}>
                        <Text style={{fontSize:30,color:'green'}}>+</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{fontSize:24,color:'green'}}>⚙</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.navbar}>
                <Text style={{fontSize:20,fontWeight:'700',marginBottom:10}}>
                    Điện thoại
                </Text>

                <Text style={{fontSize:20,fontWeight:'700',paddingBottom:10,borderBottomColor:'green',borderBottomWidth:2,color:'green'}}>
                    Danh bạ
                </Text>

                <Text style={{fontSize:20,fontWeight:'700',marginBottom:10}}>
                    Yêu thích
                </Text>
            </View>
            <TextInput style={{borderColor:'rgba(193, 193, 193,0.5)',borderWidth:1,marginTop:10,marginHorizontal:10,borderRadius:7,fontSize:14,height:40,paddingLeft:10,backgroundColor:'rgba(193, 193, 193,0.5)',fontWeight:"700"}} placeholder="Tìm trong 3 liên hệ" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingBottom:10
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth:1,
    }
})

export default Header
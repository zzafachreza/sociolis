import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton } from '../../components'
import { TouchableOpacity } from 'react-native'

export default function SCek({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.primary,
        }}>
            <View style={{
                justifyContent: 'center',
                flex: 1,
                padding: 10,
                alignItems: 'center'
            }}>


                <Text style={{
                    color: colors.white,
                    marginVertical: 20,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 20,
                    textAlign: 'center'
                }}> I am join Sociolis as a</Text>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 10,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register2')} style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/student.png')} style={{
                            height: 100,
                            width: 100,

                        }} />
                        <Text style={{
                            color: colors.white,
                            marginVertical: 10,
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 20,
                            textAlign: 'center'
                        }}> Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('SCek')} style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../../assets/teacher.png')} style={{
                            height: 100,
                            width: 100,

                        }} />
                        <Text style={{
                            marginVertical: 10,
                            color: colors.white,
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 20,
                            textAlign: 'center'
                        }}> Teacher</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
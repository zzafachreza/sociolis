import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'
import { TouchableOpacity } from 'react-native'

export default function SCek({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.primary,
        }}>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                padding: 10,
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/teacher_getstarted.png')} style={{
                    height: 280,
                    width: '100%',

                }} />



                <Text style={{
                    color: colors.white,
                    marginVertical: 20,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 10,
                    textAlign: 'center'
                }}>J O I N   U S !</Text>

                <Text style={{
                    color: colors.white,
                    marginVertical: 10,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 20,
                    textAlign: 'center'
                }}>A social science quiz platform based on
                    Minimum Competency Assessment
                    for 8th grade junior high school students</Text>

            </View>
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 30,
            }}>
                <MyButton onPress={() => navigation.navigate('Login')} colorText={colors.primary} warna={colors.secondary} title="LOGIN" />
                <MyGap jarak={20} />
                <MyButton onPress={() => navigation.navigate('Register')} colorText={colors.white} warna={colors.primary} borderSize={1} borderColor={colors.white} title="SIGN UP" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
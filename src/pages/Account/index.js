import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'
import { TouchableOpacity } from 'react-native'
import { getData } from '../../utils/localStorage'

export default function ({ navigation }) {

    const [user, setUser] = useState({});

    useState(() => {

        getData('user').then(x => {
            setUser(x);
        })
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.secondary,
        }}>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                padding: 10,
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/student_getstarted.png')} style={{
                    height: 200,
                    resizeMode: 'contain',


                }} />

                <Text style={{
                    color: colors.black,
                    marginVertical: 10,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 25,
                    textAlign: 'center'
                }}>Hi Rizka! Are ready for joining a game in Socialis? The game will run for 60 minutes. You have 3 levels consisting of level 1 which will start at numbers 1 to 10,
                    level 2 numbers 11 to 15, and level 3 numbers 16 to 20. Before start the game please check your identity. Make sure it is correct. If you are ready, click “start” and Good luck!</Text>

            </View>

            <View style={{
                paddingHorizontal: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>Name</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>{user.nama_lengkap}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>School</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>{user.sekolah}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>Class Code</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.black,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25,
                    }}>{user.kelas}</Text>
                </View>
            </View>


            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 30,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    paddingRight: 5,
                }}>
                    <MyButton onPress={() => {
                        storeData('user', null);
                        navigation.replace('Jenis')
                    }} colorText={colors.black} warna={colors.btn_secondary} borderColor={colors.btn_secondary} title="BACK" />

                </View>
                <View style={{
                    flex: 1,
                    paddingLeft: 5,
                }}>
                    <MyButton onPress={() => navigation.navigate('Menu2')} colorText={colors.black} warna={colors.btn_secondary} borderColor={colors.btn_secondary} title="START" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
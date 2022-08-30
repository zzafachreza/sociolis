import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton, MyGap } from '../../components'
import { TouchableOpacity } from 'react-native'
import axios from 'axios';
import { apiURL, storeData } from '../../utils/localStorage'

export default function ({ navigation, route }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.post(apiURL + 'get_nilai.php', {
            id_murid: route.params.id_murid
        }).then(x => {
            console.log(x.data);
            setUser(x.data);
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
                <Image source={require('../../assets/nilai.png')} style={{
                    height: 250,
                    resizeMode: 'contain'

                }} />




                <Text style={{
                    color: colors.black,
                    marginVertical: 10,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 20,
                    textAlign: 'center'
                }}>Congrats you’ve finished the game.
                    Whatever score you get, you’ve been do really well.
                    Take a rest and see you on the next game!</Text>

            </View>

            <View style={{
                alignSelf: 'center',
                borderRadius: 50,
                width: 100,
                height: 100,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: colors.black,
                    marginVertical: 10,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 10,
                }}>{parseFloat(user.nilai_1) + parseFloat(user.nilai_2) + parseFloat(user.nilai_3)}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>



                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignSelf: 'center',
                        borderRadius: 25,
                        width: 50,
                        height: 50,
                        backgroundColor: colors.border,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: colors.black,
                            marginVertical: 10,
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 20,
                        }}>{parseFloat(user.nilai_1) + parseFloat(user.nilai_2) + parseFloat(user.nilai_3)}</Text>
                    </View>
                    <Text style={{
                        color: colors.black,
                        marginVertical: 10,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 30,
                    }}>Correct Answers</Text>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        alignSelf: 'center',
                        borderRadius: 25,
                        width: 50,
                        height: 50,
                        backgroundColor: colors.border,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: colors.black,
                            marginVertical: 10,
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 20,
                        }}>{(100 - (parseFloat(user.nilai_1) + parseFloat(user.nilai_2) + parseFloat(user.nilai_3))) / 5}</Text>
                    </View>
                    <Text style={{
                        color: colors.black,
                        marginVertical: 10,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 30,
                    }}>Wrong Answers</Text>
                </View>

            </View>

            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 30,
            }}>

                <MyButton onPress={() => {
                    navigation.navigate('Jenis');
                    storeData('user', null)
                }} colorText={colors.primary} warna={colors.btn_secondary} borderSize={1} borderColor={colors.btn_secondary} title="QUIT" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
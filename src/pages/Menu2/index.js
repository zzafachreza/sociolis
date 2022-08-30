import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { apiURL, dataHijaiyah, dataLagu, dataSambung, datasambungSuara, dataSuara, getData } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { useIsFocused } from '@react-navigation/native';

export default function ({ navigation }) {

    const isFocused = useIsFocused();

    // console.log(dataHijaiyah);
    const [open, setOpen] = useState({});
    const [item, setItem] = useState({});
    useEffect(() => {

        if (isFocused) {
            getData('user').then(x => {
                setItem(x);
                console.log(x);
                axios.post(apiURL + 'level.php', {
                    id_user: x.id_murid
                }).then(xx => {
                    console.log(xx.data);
                    setOpen(xx.data);
                })
            })
        }
    }, [isFocused])






    return (
        <SafeAreaView style={{
            padding: 10,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>

            <TouchableOpacity onPress={() => {

                if (open.level_1 > 0) {

                    navigation.navigate('Menu2Sub', {
                        user: item,
                        level: 1
                    })
                } else {
                    showMessage({
                        type: 'danger',
                        message: 'Maaf Anda Tidak bisa membuka level ini'
                    })
                }

            }} style={styles.kotak}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 1</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {

                if (open.nilai_1 >= 35 > 0) {

                    navigation.navigate('Menu2Sub', {
                        user: item,
                        level: 2
                    })
                } else {
                    showMessage({
                        type: 'danger',
                        message: 'Your score on level 1 is ' + open.nilai_1 / 5 + ' you must get score minimal ' + 7
                    })
                }

            }} style={open.nilai_1 >= 35 ? styles.kotak : styles.kotak2}>

                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 2</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity

                onPress={() => {

                    if (open.nilai_2 >= 15) {

                        navigation.navigate('Menu2Sub', {
                            user: item,
                            level: 3
                        })
                    } else {
                        showMessage({
                            type: 'danger',
                            message: 'Kamu harus berhasil dulu di level sebelumnya'
                        })
                    }

                }} style={open.nilai_2 >= 15 ? styles.kotak : styles.kotak2}>



                <View style={{
                    flex: 1,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 15,
                        color: colors.black
                    }}>LEVEL 3</Text>
                </View>
            </TouchableOpacity>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    kotak: {

        backgroundColor: colors.white,
        padding: 15,
        borderBottomWidth: 2,
        height: windowHeight / 8.5,
        elevation: 2,
        borderBottomColor: colors.primary,
        marginVertical: 5,

        flexDirection: 'row'

    },
    kotak2: {

        backgroundColor: colors.white,
        padding: 15,
        borderBottomWidth: 2,
        height: windowHeight / 8.5,
        backgroundColor: colors.border,
        elevation: 2,
        borderBottomColor: colors.black,
        marginVertical: 5,

        flexDirection: 'row'

    }

})
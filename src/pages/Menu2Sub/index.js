import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import { apiURL, dataLagu, dataSambung, datasambungSuara, dataSuara, getData } from '../../utils/localStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Sound from 'react-native-sound';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';


export default function ({ navigation, route }) {

    const [soal, setSoal] = useState([]);


    navigation.setOptions({
        title: 'LEVEL ' + route.params.level
    })

    const user = route.params.user;
    const level = route.params.level;

    useEffect(() => {
        axios.post(apiURL + 'soal.php', {
            level: level,
        }).then(res => {
            console.log('response', res.data);
            setSoal(res.data);
        })
    }, [])



    const [jawaban, setJawaban] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const [pilih, setPilih] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
    });

    const kirimJawaban = () => {
        console.warn(jawaban);

        if (level == 3) {

            let total = 0;

            for (let i = 1; i <= 10; i++) {
                total += parseInt(jawaban[i]);

            }

            axios.post(apiURL + 'add.php', {
                fid_murid: user.id_murid,
                level: level,
                nilai: total,

            }).then(res => {
                navigation.navigate('STentang', user);
            })
        } else {
            navigation.navigate('SHasil', {
                jawaban: jawaban,
                level: level,
                user: user
            })
        }
    }





    const MySoal = ({ no, tanya, a, b, c, d, jawab, gambar, sumber }) => {
        return (
            <View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25
                    }}>{no}. </Text>
                    <View>
                        {gambar != 'https://sociolis.zavalabs.com/' && <Image style={{
                            width: '100%',
                            height: 200,
                            borderRadius: 10,
                            resizeMode: 'contain'
                        }} source={{
                            uri: gambar
                        }} />}

                        {gambar != 'https://sociolis.zavalabs.com/' && <TouchableOpacity onPress={() => Linking.openURL(sumber)}><Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            color: colors.primary,
                            marginVertical: 5
                        }}>Sumber : {sumber}</Text></TouchableOpacity>}
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 25
                        }}>{tanya}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 5, }}>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'a' ? 5 : 0
                        })

                        setPilih({
                            ...pilih,
                            [no]: a
                        })
                    }} style={pilih[no] == a ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == a ? styles.txtOK : styles.txt}>A. {a}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'b' ? 5 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: b
                        })
                    }} style={pilih[no] == b ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == b ? styles.txtOK : styles.txt}>B. {b}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'c' ? 5 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: c
                        })
                    }} style={pilih[no] == c ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == c ? styles.txtOK : styles.txt}>C. {c}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setJawaban({
                            ...jawaban,
                            [no]: jawab == 'd' ? 5 : 0
                        })
                        setPilih({
                            ...pilih,
                            [no]: d
                        })
                    }} style={pilih[no] == d ? styles.cek : styles.bulat}>
                        <Text style={pilih[no] == d ? styles.txtOK : styles.txt}>D. {d}</Text>
                    </TouchableOpacity>

                </View>
            </View >

        )
    }

    return (
        <SafeAreaView style={{
            padding: 10,
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {soal.map((item, index) => {
                    return (
                        <MySoal no={index + 1} gambar={item.image} sumber={item.sumber} tanya={item.pertanyaan} jawab={item.betul} a={item.a} b={item.b} c={item.c} d={item.d} />
                    )
                })}



                <MyGap jarak={10} />
                <MyButton onPress={kirimJawaban} title="Lihat Skor Saya" warna={colors.primary} Icons="ribbon-outline" />
            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bulat: {
        padding: 10,
        backgroundColor: colors.white,
        overflow: 'hidden',
        borderWidth: 1,
        marginVertical: 2,
        borderRadius: 10,
        // borderColor: colors.primary
    },
    cek: {
        padding: 10,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    txt: {
        fontFamily: fonts.secondary[400],
        color: colors.black,
        fontSize: windowWidth / 25
    },
    txtOK: {
        fontFamily: fonts.secondary[600],
        color: colors.white,
        fontSize: windowWidth / 25
    }
})
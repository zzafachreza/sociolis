import axios from 'axios';
import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
} from 'react-native';
import { MyGap } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { apiURL, getData } from '../../utils/localStorage';


export default function ({ navigation, route }) {

    const top = new Animated.Value(0.3);

    const animasi = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(top, {
                    toValue: 1,
                    duration: 800,
                }),
                Animated.timing(top, {
                    toValue: 200,
                    duration: 800,
                }),
            ]),
            {
                iterations: 1,
            },
        ).start();
    };



    useEffect(() => {
        animasi();
        axios.post(apiURL + 'add.php', {
            fid_murid: route.params.user.id_murid,
            level: level,
            nilai: total,

        }).then(res => {
            console.warn('response server', res.data);
            setTimeout(() => {
                navigation.replace('Menu2')
            }, 2000)
        })

    }, [])
    const user = route.params.user.id_murid;
    const jawaban = route.params.jawaban;
    const level = route.params.level;
    console.warn('fid_murid', route.params)

    let total = 0;


    if (level == 1) {
        for (let i = 1; i <= 10; i++) {
            total += parseInt(route.params.jawaban[i]);

        }
    } else {
        for (let i = 1; i <= 5; i++) {
            total += parseInt(route.params.jawaban[i]);

        }
    }








    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Animated.Image
                source={total >= 35 && route.params.level == 1 ? require('../../assets/lulus.png') : total >= 15 && route.params.level == 2 ? require('../../assets/lulus.png') : require('../../assets/gagal.png')}
                style={
                    {
                        width: top,
                        height: top,
                        aspectRatio: 1,
                        resizeMode: "contain"
                    }

                }
            />
            <Text style={{
                marginTop: 10,
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20
            }}>YOUR SCORE ON THIS LEVEL {level}</Text>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 5
            }}>{total}</Text>

            <MyGap jarak={10} />


        </View >
    );
}

const styles = StyleSheet.create({});

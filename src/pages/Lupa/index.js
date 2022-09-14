import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MyPicker, MyGap, MyInput, MyButton } from '../../components';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { Image } from 'react-native';
import { apiURL, getData, urlAPI } from '../../utils/localStorage';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { showMessage } from 'react-native-flash-message';

export default function ({ navigation, route }) {

    const user = route.params;
    const [data, setData] = useState([]);
    const [kirim, setKirim] = useState({
        email: ''
    });

    const [loading, setLoading] = useState(false);
    const __sendServer = () => {
        setLoading(true);

        setTimeout(() => {
            axios.post(apiURL + '/lupa.php', kirim).then(res => {
                console.log(res.data);
                setLoading(false);
                showMessage({
                    type: 'success',
                    message: 'Sent Successfully !'
                });
                // navigation.replace('MainApp');
            })
        }, 1200)
    }

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            backgroundColor: colors.primary
        }}>


            <MyInput value={kirim.email} onChangeText={x => {
                setKirim({
                    ...kirim,
                    email: x
                })
            }} autoFocus label="Masukan Email" iconname="mail" />
            <MyGap jarak={10} />
            {!loading && <MyButton onPress={__sendServer} title="Reset Password" Icons="cloud-upload" iconColor={colors.primary} warna={colors.secondary}
                colorText={colors.primary} />}
            {loading && <ActivityIndicator color={colors.secondary} size="large" />}

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})
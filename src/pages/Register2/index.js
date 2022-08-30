import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { Icon, ListItem, Button } from 'react-native-elements';

export default function ({ navigation }) {

    const [kirim, setKirim] = useState({
        nama_lengkap: null,
        sekolah: null,
        kelas: null,

    });
    const [loading, setLoading] = useState(false);



    const masuk = () => {



        if (kirim.nama_lengkap == null) {
            alert('name is requied !');
        } else if (kirim.sekolah == null) {
            alert('school is requied !');
        } else if (kirim.kelas == null) {
            alert('class is requied !');
        } else {


            setLoading(true);
            console.log(kirim);
            setTimeout(() => {
                axios
                    .post(apiURL + 'register_murid.php', kirim)
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                        if (res.data.kode == 50) {

                            alert(res.data.msg);

                        } else {
                            showMessage({
                                message: 'your registration is successful',
                                type: 'success'
                            });
                            storeData('user', res.data)
                            navigation.replace('Account');
                        }
                    });
            }, 1200);


        }




    }

    return (
        <>
            <ScrollView style={{ padding: 10, flex: 1, backgroundColor: colors.primary }}>


                <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>


                    <Image source={require('../../assets/student.png')} style={{
                        height: 100,
                        width: 100,
                        marginVertical: 30,
                        alignSelf: 'center'

                    }} />
                    <MyInput opacity={1} label="My name is" onChangeText={val => setKirim({
                        ...kirim,
                        nama_lengkap: val
                    })} />
                    <MyGap jarak={20} />

                    <MyInput opacity={1} label="I am a student at" onChangeText={val => setKirim({
                        ...kirim,
                        sekolah: val
                    })} />
                    <MyGap jarak={20} />

                    <MyInput opacity={1} label="My class code is" onChangeText={val => setKirim({
                        ...kirim,
                        kelas: val
                    })} />
                    <MyGap jarak={20} />



                    <MyGap jarak={40} />
                    {!loading && <MyButton
                        onPress={masuk}

                        title="SUBMIT"
                        warna={colors.secondary}
                        colorText={colors.primary}

                    />}

                </View>
                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.secondary} size="large" />
                </View>}
            </ScrollView>


        </>
    );
}

const styles = StyleSheet.create({});

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
        username: null,
        sekolah: null,
        email: null,
        password: null
    });
    const [loading, setLoading] = useState(false);



    const masuk = () => {



        if (kirim.password == null) {
            alert('Passwoord tidak boleh kosong !');
        } else {


            // setLoading(true);
            console.log(kirim);
            setTimeout(() => {
                axios
                    .post(apiURL + 'register_guru.php', kirim)
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                        if (res.data.kode == 50) {

                            alert(res.data.msg);

                        } else {
                            showMessage({
                                message: res.data,
                                type: 'success'
                            })
                            navigation.replace('Login');
                        }
                    });
            }, 1200);


        }




    }

    return (
        <>
            <ScrollView style={{ padding: 10, flex: 1, backgroundColor: colors.primary }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginBottom: 25,
                }}>
                    <Icon type='ionicon' name='chevron-back' size={windowWidth / 15} color={colors.white} />
                </TouchableOpacity>
                <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>

                    <Text style={{
                        color: colors.white,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 10,
                    }}>Hai!</Text>
                    <Text style={{
                        marginVertical: 10,
                        color: colors.white,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>Create a new account</Text>


                    <MyInput label="Username" onChangeText={val => setKirim({
                        ...kirim,
                        username: val
                    })} placeholder="Enter your name" />
                    <MyGap jarak={20} />

                    <MyInput label="School" onChangeText={val => setKirim({
                        ...kirim,
                        sekolah: val
                    })} placeholder="Enter your school" />
                    <MyGap jarak={20} />

                    <MyInput label="Email" onChangeText={val => setKirim({
                        ...kirim,
                        email: val
                    })} placeholder="Enter your email" />
                    <MyGap jarak={20} />
                    <MyInput
                        onChangeText={val => setKirim({
                            ...kirim,
                            password: val
                        })}
                        secureTextEntry={true}
                        label="Password"

                        placeholder="Enter your password"
                    />
                    <MyGap jarak={40} />
                    {!loading && <MyButton
                        onPress={masuk}

                        title="SIGNUP"
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
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Login')} style={{
                backgroundColor: colors.primary,
                paddingBottom: 30,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}><Text style={{
                marginTop: 10,
                fontSize: windowWidth / 25,
                fontFamily: fonts.primary[400],
                textAlign: 'center',
                color: colors.secondary
            }}>Already have an account? <Text style={{
                color: '#8A9BD6'
            }}>Sign in</Text></Text></TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({});

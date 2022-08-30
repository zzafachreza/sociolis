import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    FlatList,
    SafeAreaView,
    RefreshControl,
    Image,
    TouchableOpacity,
} from 'react-native';
import { storeData, getData, urlAPI, apiURL } from '../../utils/localStorage';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { windowWidth, fonts } from '../../utils/fonts';
import { Icon, ListItem, Button } from 'react-native-elements';

import 'intl';
import 'intl/locale-data/jsonp/en';
const wait = timeout => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
};
export default function ({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = useState([]);

    console.log('fid', route.params.kelas)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getDataTransaction();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {




        getDataTransaction();

    }, []);

    const getDataTransaction = () => {

        axios
            .post(apiURL + 'murid.php', {
                kelas: route.params.kelas
            })
            .then(x => {
                console.log(x.data);
                setData(x.data);
            });
    };

    const renderItem = ({ item, index }) => (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 5,
        }}>
            <Text style={{
                fontFamily: fonts.primary[400],
                fontSize: windowWidth / 20,
                color: colors.black,
            }}>{index + 1}. </Text>
            <Text style={{
                flex: 1,
                fontFamily: fonts.primary[600],
                fontSize: windowWidth / 20,
                color: colors.black,
            }}>{item.nama_lengkap}</Text>
            <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: windowWidth / 20,
                color: colors.black,
            }}>{item.nilai}</Text>
        </View>
    );

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[colors.primary]}
                />
            }
            style={{
                padding: 20,
                backgroundColor: colors.secondary
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: 25,
            }}>
                <Icon type='ionicon' name='chevron-back' size={windowWidth / 15} color={colors.black} />
            </TouchableOpacity>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Image source={require('../../assets/logo3.png')} style={{
                    height: 100,
                    width: 100,
                    marginVertical: 10,
                }} />

                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 15,
                }}>{route.params.nama_kelas}</Text>
            </View>
            <View style={{
                marginVertical: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>Teacher</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>{route.params.username}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>School</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>{route.params.sekolah}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5,
                }}>
                    <Text style={{
                        flex: 0.5,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>Class Code</Text>
                    <Text style={{
                        flex: 0.1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>:</Text>
                    <Text style={{
                        flex: 1,
                        color: colors.border,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                    }}>{route.params.kelas}</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

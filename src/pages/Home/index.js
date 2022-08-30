import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FlatList } from 'react-native';
import Modal from "react-native-modal";
import { Pressable } from 'react-native';

export default function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [user, setUser] = useState({});
  const [kirim, setKirim] = useState({});
  // const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getDataTransaction();

  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const getDataTransaction = () => {

    getData('user').then(res => {
      setUser(res);
      setOpen(true);
      setKirim({
        ...kirim,
        fid_user: res.id,

      })
      axios.post(apiURL + 'kelas.php', {
        fid_user: res.id
      }).then(x => {
        console.log(x.data);
        setData(x.data)
      })
    })
  }

  const [data, setData] = useState([])


  const __renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Menu1', item)} style={{
        flex: 1,
        backgroundColor: colors.success,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row'
      }}>
        <Text style={{
          fontFamily: fonts.primary[400],
          fontSize: windowWidth / 20,
          color: colors.white,
        }}>{index + 1}. </Text>
        <Text style={{
          flex: 1,
          fontFamily: fonts.primary[600],
          fontSize: windowWidth / 20,
          color: colors.white,
        }}>{item.nama_kelas}</Text>
        <Text style={{
          fontFamily: fonts.primary[600],
          fontSize: windowWidth / 20,
          color: colors.white,
        }}>{item.jumlah} students</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
      backgroundColor: colors.secondary,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={{
          flex: 1,
        }}>
          <Image source={require('../../assets/logo2.png')} style={{
            height: 80,
            width: 80,

          }} />
        </View>
        <TouchableOpacity onPress={() => {
          storeData('user', null);
          navigation.replace('Jenis')
        }} style={{
          justifyContent: 'center',
          backgroundColor: colors.primary,
          padding: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}>
          <Text style={{
            color: colors.white,
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 30,


          }}>Log out</Text>
        </TouchableOpacity>
      </View>


      {
        open && <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: colors.white,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
            <Text style={{
              color: colors.black,
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 7,

            }}>{user.username.substr(0, 1)}</Text>
          </View>
          <Text style={{
            color: colors.black,
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 20,
            textAlign: 'center'
          }}>{user.username}</Text>
          <Text style={{
            color: colors.black,
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 20,
            textAlign: 'center'
          }}>{user.sekolah}</Text>
        </View>
      }
      <View style={{
        flexDirection: 'row',
        marginTop: 20,
      }}>
        <Text style={{
          color: colors.black,
          fontFamily: fonts.primary[600],
          fontSize: windowWidth / 20,
          flex: 1,
        }}>Class</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', paddingLeft: 5 }}>
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 20,
            color: colors.border,
            right: 5,
          }}>Add new class</Text>
          <Icon type='ionicon' name='add-circle' color={colors.border} />
        </TouchableOpacity>
      </View>


      <View style={{
        flex: 1,

      }}>
        <FlatList data={data} renderItem={__renderItem} />
      </View>



      <Modal isVisible={isModalVisible}>
        <Pressable onPress={() => setModalVisible(false)} style={{
          padding: 0,
          width: 30, height: 30,
          backgroundColor: colors.black,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          alignSelf: 'flex-end',
        }}>
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: windowWidth / 30,
            color: colors.white,

          }}>X</Text>
        </Pressable>
        <View style={{ height: windowHeight / 1.6, marginHorizontal: 20, backgroundColor: colors.primary, borderRadius: 10, padding: 10, }}>



          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              fontSize: windowWidth / 20,
              color: colors.white,

            }}>NEW CLASS</Text>



          </View>

          <ScrollView>
            <MyInput label="Class Name" onChangeText={x => {
              setKirim({
                ...kirim,
                nama_kelas: x
              })
            }} />
            <MyGap jarak={20} />
            <MyInput label="Class Code" onChangeText={x => {
              setKirim({
                ...kirim,
                kelas: x
              })
            }} />
            <MyGap jarak={20} />
            <MyButton title="SUBMIT" warna={colors.secondary} colorText={colors.primary} onPress={() => {

              console.log(kirim);
              axios.post(apiURL + 'add_kelas.php', kirim).then(x => {
                setModalVisible(false);
                console.log(x.data)
                getDataTransaction();
              })

            }} />
          </ScrollView>

        </View>
      </Modal>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  judul: {
    fontFamily: fonts.secondary[600],
    fontSize: windowWidth / 35
  },
  item: {
    fontFamily: fonts.secondary[400],
    fontSize: windowWidth / 35
  }
})
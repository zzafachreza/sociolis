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
import { useIsFocused } from '@react-navigation/native';

export default function ({ navigation, route }) {
    const isFocused = useIsFocused();

    const [soal, setSoal] = useState([]);


    navigation.setOptions({
        title: 'LEVEL ' + route.params.level
    })

    const user = route.params.user;
    const level = route.params.level;

    useEffect(() => {
        if (isFocused) {
            axios.post(apiURL + 'soal.php', {
                level: route.params.level,
            }).then(res => {
                console.log('response', res.data);
                setSoal(res.data);
            })
        }
    }, [isFocused])



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
            setSoal([]);
            navigation.navigate('SHasil', {
                jawaban: jawaban,
                level: level,
                user: user
            })
        }
    }





    const MySoal = ({ no, tanya, a, b, c, d, jawab, gambar, sumber }) => {
        return (
            <View style={{
                marginVertical: 15,
            }}>


                {level == 3 && no == 1 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 1-3</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,
                            textAlign: 'center',
                        }}>Geografi ASEAN sebuah Perhimpunan Bangsa-bangsa di Asia Tenggara</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,

                        }}>Letak Geografis</Text>

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>

                            wilayah Asia Tenggara berada di antara dua benua yaitu Benua Asia dan Benua Australia serta dua samudera yaitu Samudera Hindiadan Samudera Pasifik. Batas-batas wilayah Asia Tenggara sebagai berikut:{"\n"}
                            1. Sebelah utara	: Tiongkok {"\n"}
                            2. Sebelah selatan	: Samudera Hindia dan Australia {"\n"}
                            3. Sebelah barat	: Samudera Hindia, Teluk Benggala {"\n"}
                            4. Sebelah timur	: Papua New Guinea dan Samudera Pasifik {"\n"}
                            Sebagaian besar wilayah berupa laut dengan luas sekira 5.060.100 km persegi. Luas daratan wilayah negara-negara di Asia Tenggara sekira 4.812.000 km persegi. Kondisi tersebut menyebabkan negara-negara di Asia Tenggara memiliki hasil laut melimpah. Akan tetapi, terdapat satu negara anggota yang tidak memiliki kenampakan alam laut yaitu Laos. Berdasarkan bentuk geografis, negara-negara di Asia Tenggara dapat dibagi menjadi empat tipe. Adapun keempat tipe tersebut sebagai berikut:{"\n"}
                            1. Berbentuk hampir seperti lingkaran (compact), seperti Kamboja{"\n"}
                            2. Berbentuk kepulauan yang terpisah-pisah (fragmented), seperti Indonesia dan Filipina{"\n"}
                            3. Berbentuk memanjang (elongated), seperti Vietnam{"\n"}
                            4. Berbentuk lebih kompleks dan beragam, biasanya terdapat "tangan" yang memanjang (protuted), misalnya Thailand dan Myanmar{"\n"}

                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,

                        }}>Letak Astronomis Negara ASEAN</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>

                            Berdasarkan letak astronomis, kawasan Asia Tenggara terletak pada 28 LU - 11 LS dan 93 BT - 141 BT. Sebagian besar wilayah negara-negara di Asia Tenggara terletak di belahan bumi utara dan berada pada lintang rendah yang sangat dekat dengan garis khatulistiwa, menyebabkan sebagian besar negara ASEAN memiliki iklim tropis. Iklim tropis terjadi karena wilayah ASEAN mendapat pengaruh dari angin musim yang datang dari gurun di Australia dan daratan Asia. Selain itu, ada juga angin pasat yang bertiup dari daerah subtropis menuju ekuator. Wilayah Myanmar bagian utara merupakan satu-satunya negara yang beriklim subtropis (karena wilayah tropis hanya sampai 23, 5 Lintang Utara). Negara-negara beriklim tropis mengalami dua musim sepanjang tahun, yaitu musim hujan dan kemarau. Sementara itu, negara-negara beriklim subtropismengalami empat musim sepanjang tahun, yaitu musim semi, musim panas, musim gugur dan musim dingin. Perbedaan inilah yang mempengaruhi keanekaragaman kehidupan di negara-negara Asia Tenggara.
                        </Text>

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 20,
                        }}>Sumber: : Artikel berjudul Geografi ASEAN sebuah Perhimpunan Bangsa-bangsa di Asia Tenggara, di unduh dari <Text style={{
                            color: colors.primary
                        }}>https://www.geografi.org/2022/02/geografi-asean-sebuah-perhimpunan.html  </Text></Text>
                    </>
                )}

                {level == 3 && no == 4 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 4-5</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,
                            textAlign: 'center',
                        }}>Jumlah Penduduk Menurut Jenjang Pendidikan (Jun 2021)</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,

                        }}>Letak Geografis</Text>

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            Berdasarkan data Direktorat Kependudukan dan Pencatatan Sipil (Dukcapil) Kementerian Dalam Negeri, jumlah penduduk Indonesia mencapai 272, 23 juta jiwa pada Juni 2021.
                        </Text>
                        <Image source={require('../../assets/gbr6.png')}
                            style={{
                                width: '100%',
                                height: 250,
                                resizeMode: 'contain'
                            }}
                        />

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 20,
                        }}>Sumber: : Artikel berjudul Jumlah Penduduk Menurut Jenjang Pendidikan (Jun 2021), di unduh  <Text style={{
                            color: colors.primary
                        }}>https://databoks.katadata.co.id/datapublish/2021/11/20/hanya-002-penduduk-indonesia-berpendidikan-hingga-s3-pada-juni-2021#</Text></Text>
                    </>
                )}



                {level == 2 && no == 3 && (

                    <>

                        <Image source={require('../../assets/gbr4.jpg')}
                            style={{
                                width: '100%',
                                height: 450,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 20,
                        }}>Sumber: : Poster MEA berdampak positif jika Kita Siap, di unduh dari   <Text style={{
                            color: colors.primary
                        }}>https://www.kominfo.go.id/index.php/content/detail/6206/Dampak-Positif-MEA/0/infografis</Text></Text>
                    </>
                )}


                {level == 2 && no == 4 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 4-5</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            Malaysia adalah sebuah negara federal yang terdiri dari tiga belas negeri dan tiga wilayah federal di Asia Tenggara dengan ibu kotanya adalah Kuala Lumpur. Malaysia memiliki jumlah penduduk mencapai 32.730.000 jiwa. Mayoritas penduduk Malaysia berasal dari tiga kelompok etnis. Adapun presentase setiap etnisnya digambarkan oleh grafik sebagai berikut :
                        </Text>
                        <Image source={require('../../assets/gbr5.png')}
                            style={{
                                width: '100%',
                                height: 300,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 20,
                        }}>Sumber: : Informasi tentang Etnis Penduduk Malaysia, di unduh dari    <Text style={{
                            color: colors.primary
                        }}>https://id.wikipedia.org/wiki/Malaysia </Text></Text>
                    </>
                )}

                {level == 2 && no == 1 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 5-6</Text>
                        <Image source={require('../../assets/gbr3.jpg')}
                            style={{
                                width: '100%',
                                height: 450,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 20,
                        }}>Sumber: Poster berjudul Potensi Sumber Daya Alam Negara-negara ASEAN, di unduh dari  <Text style={{
                            color: colors.primary
                        }}>https://www.ruangguru.com/blog/potensi-sumber-daya-alam-negara-asean </Text></Text>
                    </>
                )}

                {level == 1 && no == 5 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 5-6</Text>
                        <Image source={require('../../assets/gbr2.jpg')}
                            style={{
                                width: '100%',
                                height: 250,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>Sumber: Poster, di unduh dari <Text style={{
                            color: colors.primary
                        }}>https://www.ruangguru.com/blog/ips-kelas-8-interaksi-antar-ruang-indonesia-dan-asean </Text></Text>
                    </>
                )}
                {level == 1 && no == 8 && (

                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 8-10</Text>

                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 30,
                            textAlign: 'center'
                        }}>
                            Keragaman Sosial Budaya Jadi Pintu Keluar dari Kesulitan Akibat Disrupsi
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}KEMENKO PMK - Selama dua dekade terakhir, kondisi politik dan sosial ekonomi di banyak negara termasuk Asia Tenggara telah mengalami perubahan dramatis yang mempengaruhi kehidupan masyarakat. Tidak hanya krisis politik dan konflik sosial, serta efek raksasa dari perkembangan digital, tetapi juga dampak luar biasa dari perubahan iklim dan COVID-19. Perubahan itu juga dipicu dari dampak transformasi digital dan diperkuat oleh tren global yang sedang berlangsung, seperti perubahan demografis, urbanisasi yang cepat, peningkatan migrasi internasional, dan ketergantungan yang kuat pada teknologi digital.Menurut Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Menko PMK) Muhadjir Effendy, ketahanan Sosial dan Budaya di Asia Tenggara sangat diperlukan untuk mengidentifikasi masalah dan mencari solusi, terutama dalam mengatasi krisis-krisis yang terjadi di banyak tempat.
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Adapun Asia Tenggara adalah wilayah yang kaya dan padat penduduk serta terdiri dari banyak variasi sosial dan budaya. Negara-negara ASEAN adalah rumah bagi berbagai kelompok sosial dan etnis dan agama. Keragaman sosial budaya beserta kekayaan sumber daya alam dan masyarakatnya ini merupakan aset potensial untuk keluar dari kesulitan yang terjadi akibat disrupsi. “Dengan pengalaman dari berbagai negara, kawasan ini memberikan banyak contoh bagaimana negara dan orang-orang dengan karakteristik seperti itu dapat mengatasi situasi dan kerentanan ini dengan mengandalkan aset mereka dan membangun ketahanan mereka,” ungkap Muhadjir saat menjadi Keynote Speaker pada melalui kegiatan The 4th SEASIA (Southeast Asian Studies in Asia) Biennial Conference 2022 di Hotel Le Meridien Jakarta, Kamis (9/6).
                        </Text>

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Keberhasilan Asia Tenggara dalam melewati kesulitan tidak diragukan lagi telah banyak dipengaruhi oleh ketahanan sosial dan budaya mereka. Upaya pemerintah di semua tingkatan untuk meningkatkan kewaspadaan virus dan masyarakat yang divaksinasi, misalnya, banyak didukung oleh peran aspek sosial dan budaya. “Apalagi, atmosfer di Asia Tenggara dihasilkan dari keragaman budaya, etnis, dan agama di kawasan itu. Oleh karena itu, manusia dan budayanya terkait erat atau memainkan peran penting dalam keberlanjutan masyarakat,” tambahnya. Kebudayaan merupakan akar dan salah satu unsur penting untuk membangun ikatan dan ketahanan sosial, termasuk dalam meminimalisir konflik sosial yang berpotensi menghambat pencapaian kemajuan. Di negara-negara Asia Tenggara, baik individu maupun komunitas dengan ikatan dan komunitas mereka telah bekerja keras untuk mengatasi tantangan dan menghindari jebakan yang lebih buruk, sehingga membangun ketahanan.
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Banyak contoh telah menunjukkan bahwa ketahanan yang terbentuk dari masyarakat, bahkan dari masyarakat yang beragam, adalah hal yang penting untuk menghadapi perkembangan, transformasi, dan adaptasi terhadap keadaan baru. Oleh karena itu, daripada mengkambinghitamkan keragaman dan menyoroti masyarakat yang lemah sebagai hambatan untuk mencapai perbaikan, lebih fokus pada keragaman dan inklusivitas masyarakat akan jauh lebih penting dan bermanfaat dalam pembangunan masa depan. Sudah saatnya mengubah cara pandang dan paradigma lebih ke aspek 'manusia' dan masyarakat. “Saya berharap akan ada lebih banyak kesempatan, seperti konferensi SEASIA ini dapat dijadikan sebagai peluang positif, tidak hanya untuk berbagi pengetahuan dan pengalaman tetapi juga untuk mempelajari strategi yang lebih baik yang akan berkontribusi pada perbaikan di Asia Tenggara,” tutupnya.
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',

                        }}>
                            {' '} {' '} {' '}Turut hadir dalam acara tersebut, Kepala BRIN Dr. Laksana Tri Handoko, Mendikbudristekdikti Nadiem Makarim,  Kepala Badan Strategi Kebijakan Luar Negeri, Kementerian Luar Negeri Dr. Yayan GH Mulyana, Leiden Institute of Cultural Anthropology and Sociology Prof. Bart Barendregt, Chairman of SEASIA Consortium Prof. Hsin-Huang Michael Hsiao, dan the Organizing Committee of the 4' SEASIA Biennial Conference 2022 Dr. Yanu Endar Prasetyo.
                        </Text>

                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify',
                            marginBottom: 10
                        }}>Sumber: Artikel Keragaman Sosial Budaya Jadi Pintu Keluar dari Kesulitan Akibat Disrupsi, di unduh dari <Text style={{
                            color: colors.primary
                        }}>https://www.kemenkopmk.go.id/keragaman-sosial-budaya-jadi-pintu-keluar-dari-kesulitan-akibat-disrupsi </Text></Text>
                    </>
                )}
                {level == 1 && no == 1 && (
                    <>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 25
                        }}>Soal Nomor 1-4</Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Pada bulan Agustus 1967, di Laem Thaen, Bang Saen Beach, Thailand, 5 (lima) negarawan dari Indonesia, Malaysia, Filipina, Thailand, dan Singapura, selanjutnya dikenal sebagai “The Founding fathers of ASEAN” berkumpul bersama-sama, memelopori teks singkat dan sederhana dari sebuah dokumen berisi hanya lima artikel yang menandai embrio terbentuknya kerjasama di kawasan. Mereka duduk bersama-sama untuk membuat sejarah pada 8 Agustus 1967, di ruang utama Gedung Departemen Luar Negeri, Thailand. Pidato dan pesan mereka pergi jauh melampaui masanya, karena mereka mewakili negara mereka dan impian serta aspirasi dari lima ratus juta orang dari negara masing-masing.
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}“… Kita tidak bisa bertahan lama sebagai orang-orang independen tetapi terisolasi kecuali kita berpikir dan bertindak bersama-sama dan kecuali kita membuktikan perbuatan yang kita milik sebagai keluarga bangsa-bangsa Asia Tenggara…” Tun Abdul Razak, Deputi Perdana Menteri Malaysia. “Ekonomi terfragmentasi Asia Tenggara, dengan masing-masing negara mengejar sendiri terbatas tujuan dan menghilangkan daya dalam upaya saling tumpang tindih atau bahkan bertentangan yaqng akhirnya membawa benih kelemahan.  Untuk itu ASEAN karena masih belum dimanfaatkan potensi wilayah yang kaya ini melalui tindakan membuka peluang lebih besar” Narciso Ramos, Sekretaris Kementerian Luar negeri Filipina. Adam Malik, Presidium Menteri untuk Urusan Politik dan Menteri Luar Negeri Indonesia membayangkan, “wilayah ASEAN yang dapat berdiri di atas kaki sendiri, cukup kuat untuk mempertahankan diri melawan pengaruh negatif dari luar wilayah.” Rajaratnam, Menteri Luar Negeri Republik Singapura: “kita harus tidak hanya memikirkan kepentingan nasional kita tetapi menempatkan mereka terhadap kepentingan kawasan: itu adalah cara baru untuk berpikir tentang masalah kami…”
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Pada hari itu, 8 Agustus 1967, mereka para pendiri ASEAN menandatangani Deklarasi Bangkok yang ditetapkan dalam gerakan pembentukan organisasi regional yang dikenal sebagai Association South East Asian Nations (ASEAN) sebagai “kerjasama kolektif yang mewakili bangsa-bangsa Asia Tenggara” untuk mengikat diri bersama-sama dalam persahabatan dan kerjasama dan melalui usaha dan pengorbanan bersama, aman untuk bangsa mereka dan generasi mendatang berkat perdamaian, kebebasan dan kesejahteraan. Menteri luar negeri Kerajaan Thailand, Thanat Khoman yang membesarkan ide ASEAN untuk rekan-rekannya dari Malaysia dan Indonesia mengatakan “Apa yang kita telah putuskan hari ini adalah hanya permulaan kecil dari apa yang kita harapkan akan menjadi keberlangsungan yang lama dan terus menerus, serta orang-orang yang akan bergabung dengan kami kemudian dan generasi yang akan datang dapat dibanggakan.”
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>
                            {' '} {' '} {' '}Selanjutnya Brunei Darussalam kemudian bergabung pada 7 Januari 1984, Viet Nam pada tanggal 28 Juli 1995, Laos dan Myanmar pada tanggal 23 Juli 1997, dan Kamboja pada tanggal 30 April 1999, menandakan lengkapnya lengkapnya kesepuluh negara di Asia Tenggara bergabung dalam ASEAN. Pada KTT ASEAN Pertama di Bali tahun 1976, salah satunya menyepakati Agreement on the Estabilishment of the ASEAN Secretariat. Inti dari keputusan sidang tersebut di antaranya adalah penetapan kedudukan Sekretariat ASEAN di Jakarta, Indonesia. Secara resmi Sekretariat ASEAN berfungsi sejak tanggal 7 Juni 1976. Sebagai bangsa Indonesia, kita patut berbangga dengan adanya Sekretariat ASEAN di Jakarta, hal ini menandakan Jakarta berkedudukan sejajar dengan kota-kota lain di dunia yang menjadi pusat sebuah organisasi internasional.
                        </Text>
                        <Text style={{
                            fontFamily: fonts.secondary[400],
                            fontSize: windowWidth / 30,
                            textAlign: 'justify'
                        }}>Sumber: Artikel berjudul Sejarah Berdirinya ASEAN, di unduh dari <Text style={{
                            color: colors.primary
                        }}>https://meaindonesia.ekon.go.id/sejarah-berdirinya-asean/ </Text></Text>
                    </>

                )}
                <View style={{
                    flexDirection: 'row',

                    paddingHorizontal: 10,
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
                            fontSize: windowWidth / 28,
                            textAlign: 'justify',
                            maxWidth: '98%'
                        }}>{tanya}</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 5, marginHorizontal: 20, }}>

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
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: colors.primary,
        backgroundColor: colors.primary
    },
    txt: {
        fontFamily: fonts.secondary[400],
        color: colors.black,
        fontSize: windowWidth / 28
    },
    txtOK: {
        fontFamily: fonts.secondary[600],
        color: colors.white,
        fontSize: windowWidth / 28
    }
})
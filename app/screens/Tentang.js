import React from 'react';
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet, Image, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modhist: {
                title: 'Tentang Game Modh1st',
                desc: 'Pernahkah Kalian bermain Monopoli? Jika pernah, maka Kalian akan sangat mudah untuk memainkan Modh1st. Modh1st merupakan permainan yang dikembangkan untuk seluruh kalangan sebagai media pembelajaran Riwayat Hidup Buddha Gautama sejak beliau lahir hingga mencapai parinibbana. Permainan Modh1st memuat STUDI, AKSI, dan tempat-tempat yang berhubungan dengan riwayat Pangeran Sidharta hingga menjadi Sang Buddha.\nAyooo lebih mengenal dan paham Riwayat Hidup Buddha Gautama sambil bermain. Ajak lebih banyak teman Kalian untuk ikut bermain bersama. Nikmati perjalanan seru melalui Modh1st. Kumpulkan koin sebanyak mungkin dan jadilah juara.'
            },
            studi: {
                title: 'Tentang STUDI',
                desc: 'STUDI memuat berbagai pengetahuan mengenai Riwayat Hidup Buddha Gautama sejak beliau lahir hingga mencapai parinibbana. Seru kan? Makin banyak tahu dan tahu lebih banyak bersama Modh1st.'
            },
            aksi: {
                title: 'Tentang AKSI',
                desc: 'AKSI memuat perintah yang harus dilakukan dalam permainan. Tentu saja AKSI yang dilakukan berdasarkan nilai-nilai Buddhis. Seru kan? Tidak hanya dapat ilmu, kalian juga bisa memperkuat nilai-nilai Buddhis.'
            }
        }
    }

    render() {
        const { modhist, studi, aksi } = this.state;
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/covernew.png')} resizeMode="stretch">
                <TouchableOpacity
                    onPress={() => this.props.navigation.pop()}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            margin: 16,
                            borderRadius: 20,
                            tintColor: '#FFFFFF',
                            backgroundColor: 'rgba(0,0,0,0.35)'
                        }}
                        source={require('../assets/images/back.png')}
                    />
                </TouchableOpacity>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 20, paddingHorizontal: 50 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Info', { data: modhist })}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_modhist.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Info', { data: studi })}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_studi.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Info', { data: aksi })}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_aksi.png')} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height
    },
    button: {
        width: '20%',
        height: 50,
        borderRadius: 12,
        marginHorizontal: 20
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
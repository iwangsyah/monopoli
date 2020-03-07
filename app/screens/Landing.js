import React from 'react';
import { ImageBackground, TouchableOpacity, Dimensions, StyleSheet, BackHandler, Image, View } from 'react-native';
import Sound from 'react-native-sound';
import Orientation from 'react-native-orientation-locker';

const { width, height } = Dimensions.get('window');

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petunjuk: {
                title: 'Petunjuk Permainan :',
                desc: '1.	Permainan ini dapat dimainkan oleh 2-4 pemain.\n\n2.	Setiap pemain diberikan modal sebanyak 100 koin.\n\n3.	Permainan dilengkapi dengan dua buah dadu.\n\n4.	Permainan dimulai dari kotak START.\n\n5.	Jika pemain berhenti di suatu tempat, maka pemain akan memperoleh pertanyaan yang berkaitan dengan tempat tersebut.\n\n6.	Jika pemain berhasil menjawab pertanyaan, maka pemain berhak memperoleh 100 koin tambahan. Jika pemain gagal menjawab pertanyaan, maka pemain akan mengalami pengurangan 50 koin.\n\n7.	Pemain dapat menggunakan fasilitas bantuan jika mengalami kesulitan dalam menjawab pertanyaan (Bantuan Pilihan, Bantuan Karakter, dan Tanya Teman).\n\n8.	Permainan akan berakhir jika salah satu pemain kehabisan koin atau ketika pertanyaan sudah habis.'
            }
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        console.log('kena');

        BackHandler.exitApp();
        return true;
    }

    componentDidMount() {
        Orientation.lockToLandscape()
        let url = require('../assets/sounds/background_music_02.mp3')
        window.sounds = new Sound(url, '', (error) => {
            console.log('err: ', error)
        });
        setTimeout(() => {
            window.sounds.play((success) => {
                console.log('suc: ', success)
            });
            window.sounds.setVolume(0.5);
        }, 1000);
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/images/covernew.png')} resizeMode="stretch">
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 20, paddingHorizontal: 50 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('PilihJumlah')}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_mulai.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Tentang')}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_tentang.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Info', { data: this.state.petunjuk })}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_petunjuk.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.handleBackButtonClick()}
                    >
                        <Image style={styles.image} source={require('../assets/images/tmbl_keluar.png')} />
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
        borderRadius: 12
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
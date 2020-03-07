import React, { Component } from 'react';
import { ImageBackground, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Sound from 'react-native-sound';
import Modal from "react-native-modal";
import _ from "lodash";

const dice = [
  require('../assets/images/dadu1.png'),
  require('../assets/images/dadu2.png'),
  require('../assets/images/dadu3.png'),
  require('../assets/images/dadu4.png'),
  require('../assets/images/dadu5.png'),
  require('../assets/images/dadu6.png')
]

const audioTests = [
  {
    title: 'dadu 3',
    url: require('../assets/sounds/dadu_3.m4a')
  },
  {
    title: 'dadu 4',
    url: require('../assets/sounds/dadu_4.m4a')
  },
  {
    title: 'dadu 5',
    url: require('../assets/sounds/dadu_5.m4a')
  },
  {
    title: 'dadu 6',
    url: require('../assets/sounds/dadu_6.m4a')
  },
  {
    title: 'dadu 7',
    url: require('../assets/sounds/dadu_7.m4a')
  },
  {
    title: 'dadu 8',
    url: require('../assets/sounds/dadu_8.m4a')
  },
  {
    title: 'dadu 9',
    url: require('../assets/sounds/dadu_9.m4a')
  },
  {
    title: 'dadu 10',
    url: require('../assets/sounds/dadu_10.m4a')
  },
  {
    title: 'dadu 11',
    url: require('../assets/sounds/dadu_11.m4a')
  },
  {
    title: 'double dadu 2',
    url: require('../assets/sounds/double_dadu_2.m4a')
  },
  {
    title: 'double dadu 4',
    url: require('../assets/sounds/double_dadu_4.m4a')
  },
  {
    title: 'double dadu 6',
    url: require('../assets/sounds/double_dadu_6.m4a')
  },
  {
    title: 'double dadu 8',
    url: require('../assets/sounds/double_dadu_8.m4a')
  },
  {
    title: 'double dadu 10',
    url: require('../assets/sounds/double_dadu_10.m4a')
  },
  {
    title: 'double dadu 12',
    url: require('../assets/sounds/double_dadu_12.m4a')
  },
];

const dataImages = [
  { id: 1, name: 'start', uri: require('../assets/images/start.png'), url: {}, categoryId: 0 },

  { id: 2, name: 'kapilavatu', uri: require('../assets/images/kapilavatthu_1.png'), url: require('../assets/sounds/kappilavattu_01.m4a'), categoryId: 1 },

  { id: 3, name: 'studi', uri: require('../assets/images/studi.png'), url: {}, categoryId: 50 },

  { id: 4, name: 'pajak', uri: require('../assets/images/pajak.png'), url: {}, categoryId: 55 },

  { id: 5, name: 'sungai anoma', uri: require('../assets/images/taman_lumbini_2.jpg'), url: require('../assets/sounds/taman_lumbini_02.m4a'), categoryId: 2 },

  { id: 6, name: 'aksi', uri: require('../assets/images/aksi.png'), url: {}, categoryId: 51 },

  { id: 7, name: 'sungai anoma', uri: require('../assets/images/sungai_anoma_3.png'), url: require('../assets/sounds/sungai_anoma_03.m4a'), categoryId: 3 },

  { id: 8, name: 'rajagaha', uri: require('../assets/images/rajagaha_4.jpg'), url: require('../assets/sounds/raja_gaha_04.m4a'), categoryId: 4 },

  { id: 9, name: 'sugati', uri: require('../assets/images/kotak_surga.jpg'), url: {}, categoryId: 53 },

  { id: 10, name: 'vesali', uri: require('../assets/images/vesali_5.jpg'), url: require('../assets/sounds/vesalli_05.m4a'), categoryId: 5 },

  { id: 11, name: 'studi', uri: require('../assets/images/studi.png'), categoryId: 50 },

  { id: 12, name: 'magadha', uri: require('../assets/images/magadha_6.jpg'), url: require('../assets/sounds/magadha_06.m4a'), categoryId: 6 },

  { id: 13, name: 'uruvela', uri: require('../assets/images/uruvela_7.jpg'), url: require('../assets/sounds/uruvella_07.m4a'), categoryId: 7 },

  { id: 14, name: 'aksi', uri: require('../assets/images/aksi.png'), url: {}, categoryId: 51 },

  { id: 15, name: 'sesanigama', uri: require('../assets/images/sesanigamaaa_8.jpg'), url: require('../assets/sounds/sesanigama_08.m4a'), categoryId: 8 },

  { id: 16, name: 'hutan gaya', uri: require('../assets/images/hutan_gaya.jpg'), url: require('../assets/sounds/hutan_gaya_09.m4a'), categoryId: 9 },

  { id: 17, name: 'bebas', uri: require('../assets/images/bebas.jpg'), url: {}, categoryId: 54 },

  { id: 18, name: 'migadaya', uri: require('../assets/images/migadaya_10.jpg'), url: require('../assets/sounds/migadhaya_10.m4a'), categoryId: 10 },

  { id: 19, name: 'baranasi', uri: require('../assets/images/baranasi1.jpg'), url: require('../assets/sounds/baranasi_11.m4a'), categoryId: 11 },

  { id: 20, name: 'studi', uri: require('../assets/images/studi.png'), url: {}, categoryId: 50 },

  { id: 21, name: 'hutan bambu', uri: require('../assets/images/hutan_bambu_12.jpg'), url: require('../assets/sounds/hutan_bambu_12.m4a'), categoryId: 12 },

  { id: 22, name: 'savatthi', uri: require('../assets/images/savatthi_13.jpg'), url: require('../assets/sounds/savatti_13.m4a'), categoryId: 13 },

  { id: 23, name: 'aksi', uri: require('../assets/images/aksi.png'), url: {}, categoryId: 51 },

  { id: 24, name: 'kerajaan kosala', uri: require('../assets/images/kerajaan_kosala_14.jpg'), url: require('../assets/sounds/kerajaan_kosala_14.m4a'), categoryId: 14 },

  { id: 25, name: 'empat apaya', uri: require('../assets/images/kotak_apaya.jpg'), url: {}, categoryId: 52 },

  { id: 26, name: 'tavatimsa', uri: require('../assets/images/tavatimsa_15.jpg'), url: require('../assets/sounds/tavatimsa_15.m4a'), categoryId: 15 },

  { id: 27, name: 'kota bhaddiya', uri: require('../assets/images/kota_bhaddiya1.jpg'), url: require('../assets/sounds/kota_badhiya_16.m4a'), categoryId: 16 },

  { id: 28, name: 'studi', uri: require('../assets/images/studi.png'), url: {}, categoryId: 50 },

  { id: 29, name: 'kerajaan alavi', uri: require('../assets/images/kerajaan_alavi_17.jpg'), url: require('../assets/sounds/kerajaan_alavi_17.m4a'), categoryId: 17 },

  { id: 30, name: 'berdana', uri: require('../assets/images/berdana.png'), url: {}, categoryId: 56 },

  { id: 31, name: 'aksi', uri: require('../assets/images/aksi.png'), url: {}, categoryId: 51 },

  { id: 32, name: 'karma baik', uri: require('../assets/images/karmabaik.png'), url: {}, categoryId: 57 },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      winner: '',
      activePlayer: 0,
      randomNumber: 0,
      random1: 1,
      random2: 1,
      run: false,
      jawabanUser: [],
      isPress: false,
      isVisible: false,
      isVisibleAksi: false,
      isVisibleBebas: false,
      isVisibleStudi: false,
      isVisibleHabis: false,
      isVisibleWinner: false,
      isVisiblePenjara: false,
      isBebasPilih: false,
      aksi: {},
      studi: {},
      pajak: {
        category: 2, description: 'Anda harus bayar pajak 30 poin', point: -30
      },
      berdana: {
        category: 2, description: 'Anda harus berdana sebanyak 30 poin', point: -30
      },
      karmabaik: {
        category: 2, description: ' Karma Baik, Anda mendapatkan 60 poin', point: 60
      },
      karakter: false,
      pilihan: false,
      teman: false,
      pilih: '',
      benar: false,
      isJawab: false,
      isTrue: false,
      players: props.navigation.state.params.players,
      pilihTeman: {},
      pilihTemanList: [],
      pertanyaanActive: {},
      listPertanyaan: [
        {
          id: 1, name: "kapilavatu", list: [
            { id: 1, pertanyaan: "Nama Ayah dari Pangeran Siddharta", jawaban: ['s', 'u', 'd', 'd', 'h', 'o', 'd', 'a', 'n', 'a'], karakter: ['', '', '', '', '', '', '', 'a', '', 'a'], pilihan1: 'suddhodana', pilihan2: 'bimbhisara' },
            { id: 2, pertanyaan: "Nama Ibu dari Pangeran Siddharta", jawaban: ['m', 'a', 'h', 'a', 'm', 'a', 'y', 'a'], karakter: ['', 'a', '', '', '', 'a', '', ''], pilihan1: 'yasodara', pilihan2: 'mahamaya' },
            { id: 3, pertanyaan: "Warna Teratai yang Tumbuh di Kolam Paduma", jawaban: ['m', 'e', 'r', 'a', 'h'], karakter: ['', 'e', '', '', 'h'], pilihan1: 'putih', pilihan2: 'merah' },
            { id: 4, pertanyaan: "Lengkapi Pernyataan Berikut!\nPangerah Siddharta Berusia ... Hari Ketika Sang Ibu Wafat", jawaban: ['t', 'u', 'j', 'u', 'h'], karakter: ['', 'u', '', '', 'h'], pilihan1: 'empat', pilihan2: 'tujuh' },
            { id: 5, pertanyaan: "Nama Lain dari Petapa Asita", jawaban: ['k', 'a', 'l', 'a', 'd', 'e', 'v', 'a', 'l', 'a'], karakter: ['k', '', '', '', '', '', '', 'a', '', ''], pilihan1: 'kaladevala', pilihan2: 'kaladevata' }
          ]
        },
        {
          id: 2, name: "taman lumbini", list: [
            { id: 1, pertanyaan: "Lengkapi Pernyataan Berikut!\nRatu Mahamaya Mengandung Selama ... Bulan", jawaban: ['s', 'e', 'p', 'u', 'l', 'u', 'h'], karakter: ['s', '', '', '', 'l', '', ''], pilihan1: 'sepuluh', pilihan2: 'sebelas' },
            { id: 2, pertanyaan: "Tempat Pangeran Siddharta Dilahirkan", jawaban: ['l', 'u', 'm', 'b', 'i', 'n', 'i'], karakter: ['', 'u', '', '', '', 'n', ''], pilihan1: 'uruvela', pilihan2: 'lumbini' },
            { id: 3, pertanyaan: "Jumlah Langkah Pangeran Siddharta Berjalan", jawaban: ['t', 'u', 'j', 'u', 'h'], karakter: ['', '', 'j', '', 'h'], pilihan1: 'tujuh', pilihan2: 'empat' },
            { id: 4, pertanyaan: "Lengkapi Pernyataan Berikut!\nPangeran Siddharta Dilahirkan di Bawah Pohon ....", jawaban: ['s', 'a', 'l', 'a'], karakter: ['s', '', '', 'a'], pilihan1: 'sala', pilihan2: 'apel' },
            { id: 5, pertanyaan: "Hari Raya untuk Memperingati Kelahiran Pangeran Siddharta", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], karakter: ['v', '', '', 'a', '', '', ''], pilihan1: 'kathina', pilihan2: 'vesakha' }
          ]
        },
        {
          id: 3, name: "sungai anoma", list: [
            { id: 1, pertanyaan: "Lengkapi Pernyataan Berikut!\nRatu Mahamaya Mengandung Selama ... Bulan", jawaban: ['t', 'i', 'd', 'a', 'k', 's', 'i', 'a', 's', 'i', 'a'], karakter: ['t', '', '', '', '', 's', 'i', '', 's', '', ''], pilihan1: 'tidaksiasia', pilihan2: 'tidakpernah' },
            { id: 2, pertanyaan: "Alat yang Digunakan Pangeran Siddharta untuk Memotong Rambut", jawaban: ['p', 'e', 'd', 'a', 'n', 'g'], karakter: ['', '', 'd', 'a', '', ''], pilihan1: 'shotel', pilihan2: 'pedang' },
            { id: 3, pertanyaan: "Nama Dewa yang Menangkap Rambut Pangeran Siddharta", jawaban: ['s', 'a', 'k', 'k', 'a'], karakter: ['', '', 'k', 'k', ''], pilihan1: 'tujuh', pilihan2: 'delapan' },
            { id: 4, pertanyaan: "Nama Cetiya Tempat Disemayamkannya Rambut Pangeran Siddharta", jawaban: ['c', 'u', 'l', 'a', 'm', 'a', 'n', 'i'], karakter: ['c', '', 'l', '', '', '', '', 'i'], pilihan1: 'culamani', pilihan2: 'mahacula' },
            { id: 5, pertanyaan: "Nama tempat kuda istana Kanthaka berhenti itu akhirnya didirikan", jawaban: ['k', 'a', 'n', 't', 'h', 'a', 'k', 'a', 'n', 'i', 'v', 'a', 't', 't', 'a'], karakter: ['k', '', '', '', 'h', '', '', '', '', '', 'v', '', '', '', 'a'], pilihan1: 'kanthakanavitha', pilihan2: 'kanthakanivatta' }
          ]
        },
        {
          id: 4, name: "rajagaha", list: [
            { id: 1, pertanyaan: "Raja yang Menemui Petapa Gotama di Kota Rajagaha", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], karakter: ['', 'i', '', '', '', '', '', '', 'a'], pilihan1: 'bimbisara', pilihan2: 'visvamita' },
            { id: 2, pertanyaan: "Nama Ratu yang Terkenal di Rajagaha atas Kecantikkannya", jawaban: ['k', 'h', 'e', 'm', 'a'], karakter: ['k', '', '', 'm', ''], pilihan1: 'khema', pilihan2: 'khemi' },
            { id: 3, pertanyaan: "Nama Raja yang Memiliki Selir Utama Bernama Khema", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], karakter: ['', '', '', 'b', '', '', 'a', '', ''], pilihan1: 'bimbisara', pilihan2: 'ajatasatu' },
            { id: 4, pertanyaan: "Nama Wihara Tempat Ratu Khema Bertemu dengan Sang Buddha", jawaban: ['v', 'e', 'l', 'u', 'v', 'a', 'n', 'a'], karakter: ['v', '', 'l', '', '', '', '', ''], pilihan1: 'jetavana', pilihan2: 'veluvana' },
            { id: 5, pertanyaan: "Bhikkhuni yang Paling Piawai dalam Kebijaksanaan", jawaban: ['k', 'h', 'e', 'm', 'a'], karakter: ['', '', 'e', 'm', ''], pilihan1: 'khema', pilihan2: 'khemi' }
          ]
        },
        {
          id: 5, name: "vesali", list: [
            { id: 1, pertanyaan: "Tempat Petapa Gotama Berguru kepada Alara Kalama", jawaban: ['r', 'a', 'j', 'a', 'g', 'a', 'h', 'a'], karakter: ['r', 'a', 'j', 'a', 'g', 'a', 'h', 'a'], pilihan1: 'rajagaha', pilihan2: 'veluvana' },
            { id: 2, pertanyaan: "Hasrat yang Meliputi diri Anathapindika saat Mendengar Kata 'Buddha'", jawaban: ['k', 'e', 'g', 'i', 'u', 'r', 'a', 'n'], karakter: ['', 'e', 'g', '', '', '', '', ''], pilihan1: 'kesukaan', pilihan2: 'kegiuran' },
            { id: 3, pertanyaan: "Nama Putri Anathapindika selain Maha Subhadda dan Cula Subhadda", jawaban: ['s', 'u', 'm', 'a', 'n', 'a'], karakter: ['', '', '', 'a', '', 'a'], pilihan1: 'munasa', pilihan2: 'sumana' },
            { id: 4, pertanyaan: "Nama Wihara yang Dibangun oleh Anathapindika", jawaban: ['j', 'e', 't', 'a', 'v', 'a', 'n', 'a'], karakter: ['', '', '', '', 'v', '', 'n', ''], pilihan1: 'jetavana', pilihan2: 'veluvana' },
            { id: 5, pertanyaan: "Sebutan untuk Hutan Sejuk Tempat Anathapindika Menemui Sang Buddha", jawaban: ['s', 'i', 't', 'a', 'v', 'a', 'n', 'a'], karakter: ['s', '', 't', '', '', '', '', ''], pilihan1: 'sitavana', pilihan2: 'satavana' }
          ]
        },
        {
          id: 6, name: "magadha", list: [
            { id: 1, pertanyaan: "Tempat Petapa Gotama Berguru Kepada Uddaka Ramaputta", jawaban: ['m', 'a', 'g', 'a', 'd', 'h', 'a'], karakter: ['', '', 'g', '', 'd', '', ''], pilihan1: 'magadha', pilihan2: 'bodgaya' },
            { id: 2, pertanyaan: "Sungai yang Diseberangi oleh Petapa Gotama dari Vesali ke Magadha", jawaban: ['m', 'a', 'h', 'i'], karakter: ['', '', 'h', ''], pilihan1: 'mali', pilihan2: 'mahi' },
            { id: 3, pertanyaan: "Arah yang Disembah oleh Singalaka untuk Melambangkan Orangtua", jawaban: ['t', 'i', 'm', 'u', 'r'], karakter: ['t', '', '', '', ''], pilihan1: 'timur', pilihan2: 'barat' },
            { id: 4, pertanyaan: "Arah yang Disembah oleh Singalaka untuk Melambangkan Guru", jawaban: ['s', 'e', 'l', 'a', 't', 'a', 'n'], karakter: ['', '', '', '', 't', '', 'n'], pilihan1: 'selatan', pilihan2: 'bawahan' },
            { id: 5, pertanyaan: "Pelambangan 'Arah Timur' ketika Singalaka Menyembah Enam Arah", jawaban: ['o', 'r', 'a', 'n', 'g', 't', 'u', 'a'], karakter: ['o', '', '', '', 'g', '', '', ''], pilihan1: 'anakmuda', pilihan2: 'orangtua' }
          ]
        },
        {
          id: 7, name: "uruvela", list: [
            { id: 1, pertanyaan: "Tempat Petapa Gotama Menyiksa Diri", jawaban: ['u', 'r', 'u', 'v', 'e', 'l', 'a'], karakter: ['u', '', '', '', '', '', 'a'], pilihan1: 'uruvela', pilihan2: 'urumala' },
            { id: 2, pertanyaan: "Lengkapi Pernyataan Berikut!\nPetapa Gotama Menyiksa Diri Selama ... Tahun", jawaban: ['e', 'n', 'a', 'm'], karakter: ['e', '', '', ''], pilihan1: 'lima', pilihan2: 'enam' },
            { id: 3, pertanyaan: "Nama Sungai Bersih dan Jernih yang Mengalir di Dalam Hutan Uruvela", jawaban: ['n', 'e', 'r', 'a', 'n', 'j', 'a', 'r', 'a'], karakter: ['', 'e', '', '', '', 'j', 'a', '', ''], pilihan1: 'neranjara', pilihan2: 'neranjana' },
            { id: 4, pertanyaan: "Sebutan untuk Pasukan Mara yang Pertama (Napsu Indrawi)", jawaban: ['k', 'a', 'm', 'a'], karakter: ['', '', 'm', ''], pilihan1: 'kama', pilihan2: 'mara' },
            { id: 5, pertanyaan: "Sebutan untuk Pasukan Mara yang Kedua (Kebencian terhadap Hidup Suci) ", jawaban: ['a', 'r', 'a', 't', 'i'], karakter: ['', 'r', '', 't', ''], pilihan1: 'arita', pilihan2: 'arati' }
          ]
        },
        {
          id: 8, name: "senanigama", list: [
            { id: 1, pertanyaan: "Sosok yang Mempersembahkan Nasi Susu kepada Buddha Gotama", jawaban: ['s', 'u', 'j', 'a', 't', 'a'], karakter: ['s', '', 'j', '', '', ''], pilihan1: 'sujata', pilihan2: 'katiya' },
            { id: 2, pertanyaan: "Nama Pohon Tempat Petapa Gotama Berdiam Diri", jawaban: ['b', 'a', 'n', 'y', 'a', 'n'], karakter: ['b', '', '', 'y', '', ''], pilihan1: 'banyan', pilihan2: 'mangga' },
            { id: 3, pertanyaan: "Nama Sungai yang Dituju oleh Petapa Gotama Sambil Membawa Mangkuk Emas yang Didanakan oleh Sujata", jawaban: ['n', 'e', 'r', 'a', 'n', 'j', 'a', 'r', 'a'], karakter: ['n', '', '', '', 'n', 'j', '', '', 'a'], pilihan1: 'neranjara', pilihan2: 'neranjana' },
            { id: 4, pertanyaan: "Hari Ketika Sujata Mempersembahkan Nasi Susu kepada Dewa Pohon Banyan", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], karakter: ['', 'e', 's', '', '', '', ''], pilihan1: 'kathina', pilihan2: 'vesakha' },
            { id: 5, pertanyaan: "Dewa yang Mendanakan Mangkuk Emas kepada Boddhisatta", jawaban: ['g', 'h', 'a', 't', 'i', 'k', 'a', 'r', 'a'], karakter: ['g', 'h', '', '', '', 'k', '', '', ''], pilihan1: 'ghatikara', pilihan2: 'sahampati' }
          ]
        },
        {
          id: 9, name: "hutan gaya", list: [
            { id: 1, pertanyaan: "Bulan Ketika Petapa Gotama Mencapai Pencerahan", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], karakter: ['', '', '', '', 'k', 'h', ''], pilihan1: 'vesakha', pilihan2: 'kathina' },
            { id: 2, pertanyaan: "Nama Dewa yang Melarikan Diri dengan Kerucut Kerang Vijayuttara", jawaban: ['s', 'a', 'k', 'k', 'a'], karakter: ['s', '', 'k', '', ''], pilihan1: 'sakya', pilihan2: 'sakka' },
            { id: 3, pertanyaan: "Petapa Gotama Mencapai Kebuddhaan di Bawah Pohon ....", jawaban: ['b', 'o', 'd', 'h', 'i'], karakter: ['', 'o', 'd', '', ''], pilihan1: 'bodhi', pilihan2: 'boddi' },
            { id: 4, pertanyaan: "Sebutan untuk 'Semangat Tanpa Letih'", jawaban: ['v', 'i', 'r', 'i', 'y', 'a'], karakter: ['', '', 'r', '', 'y', ''], pilihan1: 'saddha', pilihan2: 'viriya' },
            { id: 5, pertanyaan: "Sebutan untuk 'Perhatian Murni'", jawaban: ['s', 'a', 't', 'i'], karakter: ['', '', 't', ''], pilihan1: 'sati', pilihan2: 'piti' }
          ]
        },
        {
          id: 10, name: "migadaya", list: [
            { id: 1, pertanyaan: "Dana Makanan yang Diterima oleh Sang Buddha dari Tapussa dan Bhallika selain Kue Nasi", jawaban: ['m', 'a', 'd', 'u'], karakter: ['m', '', '', 'u'], pilihan1: 'gula', pilihan2: 'madu' },
            { id: 2, pertanyaan: "Siswa Awam Pertama Sang Buddha selain Tapussa", jawaban: ['b', 'h', 'a', 'l', 'l', 'i', 'k', 'a'], karakter: ['b', 'h', '', '', 'l', '', '', ''], pilihan1: 'bhallika', pilihan2: 'bhalikka' },
            { id: 3, pertanyaan: "Siswa Awam Pertama Sang Buddha selain Bhallika", jawaban: ['t', 'a', 'p', 'u', 's', 's', 'a'], karakter: ['', '', 'p', '', 's', 's', ''], pilihan1: 'tapussa', pilihan2: 'tappusa' },
            { id: 4, pertanyaan: "Pekerjaan/Profesi dari Tapussa dan Bhallika", jawaban: ['p', 'e', 'd', 'a', 'g', 'a', 'n', 'g'], karakter: ['p', 'e', '', '', '', '', '', 'g'], pilihan1: 'pedagang', pilihan2: 'pengemis' },
            { id: 5, pertanyaan: "Sebutan untuk 'Perasaan'", jawaban: ['v', 'e', 'd', 'a', 'n', 'a'], karakter: ['v', '', 'd', '', '', ''], pilihan1: 'vinana', pilihan2: 'vedana' }
          ]
        },
        {
          id: 11, name: "baranasi", list: [
            { id: 1, pertanyaan: "Nama Putra dari Saudagar Kaya di Baranasi", jawaban: ['y', 'a', 's', 'a'], karakter: ['y', '', '', ''], pilihan1: 'yasa', pilihan2: 'tasa' },
            { id: 2, pertanyaan: "Nama Putra dari Sujata", jawaban: ['y', 'a', 's', 'a'], karakter: ['', 'a', 's', ''], pilihan1: 'yasa', pilihan2: 'yasi' },
            { id: 3, pertanyaan: "Nama Ibu dari Yasa", jawaban: ['s', 'u', 'j', 'a', 't', 'a'], karakter: ['s', '', 'j', '', '', ''], pilihan1: 'sutaja', pilihan2: 'sujata' },
            { id: 4, pertanyaan: "Lengkapi Pernyataan Berikut!\nYang Terberkahi Ceramah tentang Kedermawanan Disebut ... katha", jawaban: ['d', 'a', 'n', 'a'], karakter: ['d', '', '', 'a'], pilihan1: 'dana', pilihan2: 'sila' },
            { id: 5, pertanyaan: "Lengkapi Pernyataan Berikut!\Yang Terberkahi Ceramah tentang Moralitas Disebut ... katha", jawaban: ['s', 'i', 'l', 'a'], karakter: ['', 'i', 'l', ''], pilihan1: 'dana', pilihan2: 'sila' }
          ]
        },
        {
          id: 12, name: "hutan bambu", list: [
            { id: 1, pertanyaan: "Raja yang Mempersembahkan Hutan Bambu kepada para Bhikkhu", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], karakter: ['b', '', 'm', 'b', '', '', '', '', ''], pilihan1: 'bimbisara', pilihan2: 'ajatasatu' },
            { id: 2, pertanyaan: "Tempat Dilaksanakannya Hari Maghapuja ", jawaban: ['v', 'e', 'l', 'u', 'v', 'a', 'n', 'a'], karakter: ['v', '', 'l', '', 'v', '', '', ''], pilihan1: 'jetayana', pilihan2: 'veluvana' },
            { id: 3, pertanyaan: "Sebutan Lain dari Desa Upatissa ", jawaban: ['n', 'a', 'l', 'a', 'k', 'a'], karakter: ['', '', 'l', '', 'k', ''], pilihan1: 'nalaka', pilihan2: 'nakala' },
            { id: 4, pertanyaan: "Nama Putra yang Berasal dari Desa Upatissa", jawaban: ['u', 'p', 'a', 't', 'i', 's', 's', 'a'], karakter: ['', 'p', '', 't', '', 's', '', ''], pilihan1: 'upathisa', pilihan2: 'upatissa' },
            { id: 5, pertanyaan: "Nama Ibu dari Upatissa", jawaban: ['r', 'u', 'p', 'a', 's', 'a', 'r', 'i'], karakter: ['', '', 'p', 'a', '', '', 'r', ''], pilihan1: 'rupasari', pilihan2: 'runasari' }
          ]
        },
        {
          id: 13, name: "savatthi", list: [
            { id: 1, pertanyaan: "Bhikkhu yang Terserang Penyakit Kulit (Bisul)", jawaban: ['t', 'i', 's', 's', 'a'], karakter: ['t', '', 's', 's', ''], pilihan1: 'tissa', pilihan2: 'tassa' },
            { id: 2, pertanyaan: "Tingkat Kesucian yang Dicapai oleh Bhikkhu Tissa setelah Mendengarkan Khotbah dari Sang Buddha", jawaban: ['a', 'r', 'a', 'h', 'a', 't', 't', 'a'], karakter: ['a', '', 'a', '', '', 't', 't', ''], pilihan1: 'arahatta', pilihan2: 'arahatha' },
            { id: 3, pertanyaan: "Buddha dan Mematahkan Semua Belenggu", jawaban: ['a', 'r', 'a', 'h', 'a', 't', 't', 'a'], karakter: ['a', '', 'a', '', 'a', '', '', 'a'], pilihan1: 'arahatta', pilihan2: 'arahatha' },
            { id: 4, pertanyaan: "Dewa yang Menjadi Panas Ketika Sang Buddha Difitnah", jawaban: ['s', 'a', 'k', 'k', 'a'], karakter: ['', '', 'k', 'k', ''], pilihan1: 'yamma', pilihan2: 'sakka' },
            { id: 5, pertanyaan: "Jumlah Tikus yang Diutus oleh Dewa Sakka untuk Menggigit Tali Cincamanavika", jawaban: ['e', 'm', 'p', 'a', 't'], karakter: ['e', '', '', '', 't'], pilihan1: 'empat', pilihan2: 'tujuh' }
          ]
        },
        {
          id: 14, name: "kerajaan kosala", list: [
            { id: 1, pertanyaan: "Wanita Terkenal yang Hidup di Negeri Kuru", jawaban: ['m', 'a', 'g', 'a', 'n', 'd', 'i', 'y', 'a'], karakter: ['m', '', 'g', '', '', '', '', 'y', ''], pilihan1: 'magandiya', pilihan2: 'magadhiya' },
            { id: 2, pertanyaan: "Negeri di mana Magandiya Berasal", jawaban: ['k', 'u', 'r', 'u'], karakter: ['k', '', 'r', ''], pilihan1: 'kuru', pilihan2: 'saka' },
            { id: 3, pertanyaan: "Nama Istri dari Raja Udena", jawaban: ['s', 'a', 'm', 'v', 'a', 't', 'i'], karakter: ['s', '', 'm', 'v', '', '', ''], pilihan1: 'samavita', pilihan2: 'samavati' },
            { id: 4, pertanyaan: "Nama Raja yang Salah Satu Selirnya Bernama Magandiya ", jawaban: ['u', 'd', 'e', 'n', 'a'], karakter: ['', '', '', 'n', 'a'], pilihan1: 'udena', pilihan2: 'udana' },
            { id: 5, pertanyaan: "Ratu yang Akan Dibunuh oleh Magandiya dan Pamannya", jawaban: ['s', 'a', 'm', 'v', 'a', 't', 'i'], karakter: ['s', '', 'm', 'v', '', '', ''], pilihan1: 'samavati', pilihan2: 'samavta' }
          ]
        },
        {
          id: 15, name: "tavatimsa", list: [
            { id: 1, pertanyaan: "Bulan di mana Sang Buddha ke Surga Tavatimsa ", jawaban: ['a', 's', 'a', 'l', 'h', 'a'], karakter: ['', 's', '', 'l', '', ''], pilihan1: 'asalha', pilihan2: 'katina' },
            { id: 2, pertanyaan: "Surga yang Menjadi Tempat Dilahirkannya Kembali Ratu Mahayama", jawaban: ['t', 'u', 's', 'i', 't', 'a'], karakter: ['t', '', 's', '', 't', ''], pilihan1: 'tusita', pilihan2: 'tasita' },
            { id: 3, pertanyaan: "Bhavana untuk mencapai ketenangan batin", jawaban: ['s', 'a', 'm', 'a', 't', 'h', 'a'], karakter: ['s', '', 'm', '', 't', '', ''], pilihan1: 'samatha', pilihan2: 'samatta' },
            { id: 4, pertanyaan: "Nama alam 33 dewa", jawaban: ['t', 'a', 'v', 'a', 't', 'i', 'm', 's', 'a'], karakter: ['t', '', '', '', 't', '', 'm', 's', ''], pilihan1: 'tavatissa', pilihan2: 'tavatimsa' },
            { id: 5, pertanyaan: "Sang buddha selama beberapa bulan menetap di surga tavatimsa ", jawaban: ['t', 'i', 'g', 'a'], karakter: ['t', '', '', 'a'], pilihan1: 'tiga', pilihan2: 'lima' }
          ]
        },
        {
          id: 16, name: "kota bhaddiya", list: [
            { id: 1, pertanyaan: "Kota Kelahiran Visakha", jawaban: ['b', 'h', 'a', 'd', 'd', 'i', 'y', 'a'], karakter: ['b', 'h', '', '', 'd', '', '', ''], pilihan1: 'badhiyya', pilihan2: 'bhaddiya' },
            { id: 2, pertanyaan: "Nama Putri dari Dhananjaya dan Sumanadevi", jawaban: ['v', 'i', 's', 'a', 'k', 'h', 'a'], karakter: ['v', '', '', '', 'k', 'h', ''], pilihan1: 'visakha', pilihan2: 'vasakhi' },
            { id: 3, pertanyaan: "Nama Kakek Visakh", jawaban: ['m', 'e', 'n', 'd', 'a', 'k', 'a'], karakter: ['', 'e', '', 'd', '', 'k', ''], pilihan1: 'mendaka', pilihan2: 'mendaki' },
            { id: 4, pertanyaan: "Nama Ayah Mertua Visakha", jawaban: ['m', 'i', 'g', 'a', 'r', 'a'], karakter: ['', 'i', 'g', '', '', ''], pilihan1: 'miggha', pilihan2: 'migara' },
            { id: 5, pertanyaan: "Nama Menantu Migara", jawaban: ['v', 'i', 's', 'a', 'k', 'h', 'a'], karakter: ['v', '', 's', '', 'k', '', ''], pilihan1: 'visakha', pilihan2: 'visakhi' }
          ]
        },
        {
          id: 17, name: "kerajaan alavi", list: [
            { id: 1, pertanyaan: "Pemimpin Kerajaan Alavi", jawaban: ['a', 'l', 'a', 'v', 'a', 'k', 'a'], karakter: ['', 'l', '', '', '', 'k', 'a'], pilihan1: 'alakkha', pilihan2: 'alavaka' },
            { id: 2, pertanyaan: "Sosok dari Alavaka ", jawaban: ['v', 'a', 'k', 'k', 'h', 'a'], karakter: ['', '', 'k', 'k', '', 'a'], pilihan1: 'vakkha', pilihan2: 'sakkha' },
            { id: 3, pertanyaan: "Hewan yang Diburu oleh Alavaka saat di Hutan ", jawaban: ['k', 'i', 'j', 'a', 'n', 'g'], karakter: ['', '', '', '', 'n', 'g'], pilihan1: 'kijang', pilihan2: 'musang' },
            { id: 4, pertanyaan: "Nama Penjaga Pintu dari Yaksa Alavaka", jawaban: ['g', 'a', 'd', 'r', 'a', 'b', 'a'], karakter: ['g', '', '', '', '', 'b', 'a'], pilihan1: 'gadraba', pilihan2: 'gandaba' },
            { id: 5, pertanyaan: "Yaksa Mulia selain Satagira", jawaban: ['h', 'e', 'm', 'a', 'v', 't', 'a'], karakter: ['h', '', 'm', '', 'v', '', ''], pilihan1: 'hemavata', pilihan2: 'hemavati' }
          ]
        },
        {
          id: 18, name: "kusinara", list: [
            { id: 1, pertanyaan: "Tempat Sang Buddha Parinibbana", jawaban: ['k', 'u', 's', 'i', 'n', 'a', 'r', 'a'], karakter: ['k', '', 's', 'i', '', '', '', ''], pilihan1: 'kusigara', pilihan2: 'kusinara' },
            { id: 2, pertanyaan: "Nama putra si pandai besi", jawaban: ['c', 'u', 'n', 'd', 'a'], karakter: ['c', '', 'n', '', 'a'], pilihan1: 'canda', pilihan2: 'cunda' },
            { id: 3, pertanyaan: "Nama seorang pangeran Malla yang merupakan siswa Alara Kalama", jawaban: ['p', 'u', 'k', 'k', 'u', 's', 'a'], karakter: ['p', 'u', '', '', '', '', ''], pilihan1: 'pukkusa', pilihan2: 'pussaku' },
            { id: 4, pertanyaan: "Dana yang dipersembahkan oleh cunda kepada Sang Buddha", jawaban: ['m', 'a', 'k', 'a', 'n', 'a', 'n'], karakter: ['m', '', '', '', '', '', 'n'], pilihan1: 'makanan', pilihan2: 'minuman' },
            { id: 5, pertanyaan: "Persembahan Pukkusa Kepada Sang Buddha", jawaban: ['j', 'u', 'b', 'a', 'h'], karakter: ['', '', '', 'a', ''], pilihan1: 'pisau', pilihan2: 'jubah' }
          ]
        }
      ],
      listAksi: [
        { category: 0, description: 'Maju Sampai START' },
        { category: 1, description: 'Maju 8 (Delapan) Langkah', langkah: 8 },
        { category: 1, description: 'Maju 3 (Delapan) Langkah', langkah: 3 },
        { category: 1, description: 'Maju 5 (Lima) Langkah', langkah: 5 },
        { category: 2, description: 'Karena Anda Membuang Sampah Sembarangan,\nAnda Didenda Sebesar 15 Koin', point: -15 },
        { category: 2, description: 'Karena Anda Sedang Terkena Musibah,\nAnda Mendapatkan 20 Koin', point: 20 },
        { category: 2, description: 'Karena Anda Melanggar Sila Kesatu,\nAnda Kena Denda Sebesar 50 Koin', point: -50 },
        { category: 2, description: 'Karena Anda Melanggar Sila Kedua,\nAnda Kena Denda Sebesar 50 Koin.', point: -50 },
        { category: 2, description: 'Karena Anda Menjalankan Sila Kesatu,\nAnda Memperoleh 50 Koin', point: 50 },
        { category: 2, description: 'Karena Anda Menjalankan Sila Kedua,\nAnda Memperoleh 50 Koin', point: 50 },
        { category: 2, description: 'Karena Anda Menjalankan Sila Ketiga,\nAnda Memperoleh 50 Koin', point: 50 },
        { category: 2, description: 'Karena Anda Menjalankan Sila Keempat,\nAnda Memperoleh 50 Koin', point: 50 },
        { category: 2, description: 'Karena Anda Berbuat Baik Selama Sehari Penuh,\nAnda Memperoleh 75 Koin', point: 75 },
        { category: 2, description: 'Karena Anda Melanggar Sila Ketiga,\nAnda Kena Denda Sebesar 50 Koin', point: -50 },
        { category: 2, description: 'Karena Anda Melanggar Sila Keempat,\nAnda Kena Denda Sebesar 50 Koin', point: -50 },
        { category: 2, description: 'Silakan Membayar 25 Koin\nuntuk Menyokong Keperluan Hidup Bhikkhu', point: -25 },
        { category: 2, description: 'Dalam Memperingati Hari Kathina,\nAnda Harus Berdana Kepada Bhikkhu Sangha Sebesar 25 Koin', point: -25 }
      ],
      listStudi: [
        'Pangeran Siddharta berasal dari suku Sakya. Nama ibunya adalah Mahamaya dan nama ayahnya adalah Suddhodana.',
        'Pangeran Siddharta memiliki tiga istana yaitu: istana musim dingin (Ramma), istana musim hujan (Subha), dan istana musim panas (Suramma).',
        'Pangeran Siddharta memiliki ibu tiri bernama Mahapajapati Gotami. Pangeran Siddharta memiliki istri bernama Yasodhara dan dikaruniai anak bernama Rahula yang berarti belenggu.',
        'Asita (Kaladevala) adalah petapa yang menangis dan tertawa saat melihat Pangeran Siddharta, sementara Brahmin yang meramalkan Pangeran Siddharta kelak akan menjadi Buddha adalah Kondanna.',
        'Pangeran Siddharta memperoleh pendidikan pada usia tujuh tahun dari guru bernama Sabbamitta. Pangeran Siddharta mampu menyelesaikan pendidikan pada usia 16 tahun.',
        'Pangeran Siddharta dilahirkan di Taman Lumbini. Saat lahir, beliau berjalan tujuh langkah dan di setiap langkahnya muncul teratai serta memiliki 32 tanda manusia agung.',
        'Sebelum hamil, Ratu Mahamaya bermimpi didatangi oleh seekor gajah putih kemudian hamil dan mengandung selama 10 bulan. Setelah tujuh hari Pangeran Siddharta lahir, Ratu Mahamaya meninggal dan terlahir di Surga Tusita dengan nama Dewa Santusita.',
        'Sebagai bukti keseriusan Pangeran Siddharta untuk meminang Yasodhara putri Raja Suppabuddha, beliau menghadiahkan kalung emas yang sangat menawan.',
        'Pangeran Siddharta memiliki 3 (tiga) kolam yaitu kolam teratai putih (Pundarika), kolam teratai merah (Paduma), dan kolam teratai biru (Uppala).',
        'Pangeran Siddharta menyelamatkan seekor angsa yang dipanah oleh Devadatta.',
        'Pangeran Siddharta melihat empat peristiwa agung yaitu orangtua, orang sakit, orang mati dan petapa. Setelah melihat empat hal tersebut, Pangeran Siddharta meninggalkan istana pada usia 29 tahun dan dihalangi oleh Mara Vasavatti.',
        'Pengeran Siddharta melepas keduniawian di Sungai Anoma ditemani oleh Channa (kusir) dan Kanthaka (kuda putih). Rambut Pangeran Siddharta ditangkap oleh Dewa Sakka dan disemayamkan di Cetiya Culamani.',
        'Pangeran Siddharta melakukan meditasi pada usia tujuh tahun di bawah pohon jambu dan mencapai jhana 1 pada saat pembajakkan sawah.',
        'Hari vesakha memperingati tiga peristiwa, yaitu lahirnya pangeran siddharta (623 SM), petapa Gotama mencapai penerangan sempurna (588 SM), dan Buddha parinibbana (543 SM).',
        'Raja Bimbisara menemui Petapa Gotama di Kota Rajagaha Ibu Kota Kerajaan Magadha. Di Rajagaha tepatnya di hutan palma terdapat Cetiya Supatittha.',
        'Sang Buddha memiliki siswa utama yaitu Bhikkhuni Khema dan Bhikkhuni Uppalavanna. Bhikkhuni Khema paling piawai dalam kebijaksanaan dan dikenal dengan sebutan Mahapannanam Agga.',
        'Ratu Khema bertemu Sang Buddha di Wihara Veluvana dan setelah mendengarkan Dhamma dari Sang Buddha, Beliau mencapai Sotapatti.',
        'Raja Bimbisara memiliki Selir Utama bernama Ratu Khema yang terkenal atas kecantikkannya dan kulitnya yang berwarna keemasan.',
        'Guru pertama Petapa Gotama adalah Alara Kalama. Di Rajagaha Alara Kalama mengajarkan tentang tujuh pencapaian duniawi sampai pada Akincannayatana Jhana. Alara Kalama telah mencapai Akincannayatana (Konsentrasi Tinggi).',
        'Anathapindika adalah seorang hartawan terkenal di Savatthi, memiliki istri bernama Punnalakkhana dan tiga putri bernama Maha Subhadda, Sumana, dan Cula Subhadda.',
        'Guru kedua Petapa Gotama adalah Uddaka Ramaputta yang berada di Magadha. Uddaka Ramaputta berhasil mencapai Nevasannanasannayatana Jhana. Setelah berguru kepada Beliau Petapa Gotama pergi dari Vesali ke Magadha menyeberangi Sungai Mahi.',
        'Petapa Gotama melakukan petapaan yang paling berat (dukkaracariya) dan menyatakan tekad usaha kuat beruas empat (Padhana-viriya). Petapa Gotama Memiliki 5 pengikut atau 5 petapa yang disebut Pancavaggiya.',
        'Seorang pemuda bernama Sigalaka menghormat ke enam arah yaitu arah timur (orangtua); arah selatan (guru); arah barat (istri dan anak); arah utara (sahabat); arah bawah (pelayan); dan arah atas (bhikkhu).',
        'Petapa Gotama menyiksa diri di Uruvela selama enam tahun. Di dalam Hutan Uruvela, terdapat Sungai Neranjara yang bersih dan jernih.',
        'Petapa Gotama membersihkan diri di Teluk Suppatitthita, kemudian mengapungkan mangkuk emas di Sungai Neranjara. Mangkuk tersebut melawan arus dan terhisap oleh pusaran air sampai turun ke kediaman Kala.',
        'Petapa Gotama mendapatkan persembahan susu kambing dari Nanda dan nasi susu dari Sujata. Di Senanigama tepatnya di Pohon Banyan, Petapa Gotama berdiam diri. Saat hari vesakha, Sujata mempersembahkan mangkuk emas senilai 100000 yang berisikan nasi susu.',
        'Saat Mara datang, semua dewa dan brahma yang berkumpul tiba-tiba pergi meninggalkan Petapa Gotama. Pada saat itu, Dewa Sakka melarikan diri menggunakan kerucut kerang Vijayuttara.',
        'Seorang pemuda bernama Sotthiya memberikan rumput Kusa kepada Petapa Gotama sejumlah 8 genggaman. Petapa Gotama menerima persembahan mangkuk emas dari Dewa Ghatikara.',
        'Pada saat Petapa Gotama duduk bersila mengadap ke arah timur di bawah pohon Bodhi, datanglah Dewa Sakka, Dewa Pancasikha, Dewa Suyama, Dewa Santusita, Brahma Sahampati, Sang Raja Naga Mahakala dengan iringan 8000 naga penari dan Brahma dari 10000 tata dunia.',
        'Petapa Gotama mencapai pencerahan pada usia 35 tahun saat bulan Vesakha Kebuddhaan tahun 588 SM di bawah pohon Bodhi.',
        'Setelah mencapai pencerahan, Sang Buddha berdiam selama 7 minggu. Pada minggu pertama Sang Buddha menetap di bawah pohon Bodhi.',
        'Tapussa dan Bhallika berasal dari Pokkharavati sebagai pedagang. Tapussa dan Bhallika menggunakan peti emas untuk menyimpan Relik Buddha.',
        'lah satu minggu mencapai pencerahan, pada minggu kedua (Animisa Sattaha), Sang Buddha menatapi pohon Bodhi dan melangkah ke arah timur laut. Saat minggu ketiga(Cankama Sattaha), Sang Buddha mondar-mandir di atas jembatan permata.',
        'Setelah tiga minggu mencapai pencerahan, pada minggu keempat (Ratanaghara Sattaha) diisi dengan perenungan Abhidhamma Pitaka. Saat minggu kelima (Ajapala Sattaha), anak Mara yang datang yaitu Tanha, Raga, dan Arati.',
        'Sang Buddha menerima dana kue nasi dan madu dari Tapussa dan Bhallika. Mereka kemudian menjadi siswa awam pertama Sang Buddha. Setelah Sang Buddha membabarkan Dhamma, Tapussa mencapai tingkat kesucian Sotapatti dan Bhallika mencapai tingkat kesucian Arahatta.',
        'Brahma Sahampati berasal dari alam Brahma memohon kepada Sang Buddha untuk membabarkan Dhamma sebanyak 3 kali, Sang Buddha menerima permintaan Brahma Sahampati.',
        'Khotbah yang pertama kali dibabarkan oleh Sang Buddha dikenal dengan Dhammacakkappavattana Sutta (Pemutaran Roda Dhamma). Kondanna yang pertama kali memahami Dhamma dari Sang Buddha (Annata Kondanna)'
      ]
    }
  }

  componentWillMount() {
    if (window.sounds) {
      // window.sounds.stop()
    }
  }

  componentDidMount() {
    this.state.listPertanyaan.map((o) => {
      o.list = _.shuffle(o.list)
    })

    _.shuffle(this.state.listAksi);
    _.shuffle(this.state.listStudi);
  }

  playSound(testInfo, component) {
    setTimeout(() => {
      if (testInfo) {
        var sound = new Sound(testInfo.url, '', (error) => {
          console.log('err: ', error)
        });

        setTimeout(() => {
          sound.play((success) => {
            console.log('suc: ', success)
          });
          sound.setVolume(5);
        }, 500);
      }
    }, 500);
  }

  pindahTempat(location) {
    let { players, activePlayer } = this.state;
    let active;
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    players[activePlayer].location = location

    if (players[active].stop) {
      playerActive = _.filter(players, function (item) { return !item.stop; });

      playerNext = playerActive[0];
      playerLast = playerActive[playerActive.length - 1]
      if (players[activePlayer].image.color == playerNext.image.color) {
        playerNext = playerActive[1]
      } else if (playerActive.length > 2 && players[activePlayer].image.color == playerActive[1].image.color) {
        playerNext = playerActive[2]
      } else if (players[activePlayer].image.color == playerLast.image.color) {
        playerNext = playerActive[0]
      }

      let isNext = _.findIndex(players, function (o) { return o.image.color == playerNext.image.color; });
      this.setState({ activePlayer: isNext })
    } else {
      this.setState({ activePlayer: active })
    }

    this.setState({ players, isBebasPilih: false, run: false })
  }


  boxHorizontal(position) {
    let { players, isBebasPilih } = this.state;
    let start = position == 'top' ? 16 : 8;
    let end = position == 'top' ? 24 : 0;
    let boxs = [];
    for (let i = start; position == 'top' ? i <= end : i >= end; position == 'top' ? i++ : i--) {
      let data = dataImages.find(function (item) {
        return item.id == i + 1;
      });
      let box;
      if (players.length) {
        box = (
          <TouchableOpacity key={i} disabled={!isBebasPilih} onPress={() => this.pindahTempat(i)}>
            <ImageBackground style={[styles.box, { backgroundColor: '#FFF' }]} source={data.uri}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[0] && !players[0].stop && players[0].location == i ? 'flex' : 'none',
                  borderWidth: players[0] && players[0].location == i ? 1 : 0,
                  backgroundColor: players[0].image.color, borderColor: players[0].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
                <View style={[styles.player, {
                  display: players[1] && !players[1].stop && players[1].location == i ? 'flex' : 'none',
                  borderWidth: players[1] && players[1].location == i ? 1 : 0,
                  backgroundColor: players[1].image.color, borderColor: players[1].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[2] && !players[2].stop && !players[2].stop && players[2].location == i ? 'flex' : 'none',
                  borderWidth: players[2] && players[2].location == i ? 1 : 0,
                  backgroundColor: players[2] ? players[2].image.color : 'transparent', borderColor: players[2] && players[2].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
                <View style={[styles.player, {
                  display: players[3] && !players[3].stop && players[3].location == i ? 'flex' : 'none',
                  borderWidth: players[3] && players[3].location == i ? 1 : 0,
                  backgroundColor: players[3] ? players[3].image.color : 'transparent', borderColor: players[3] && players[3].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
      }

      boxs.push(box)
    }
    return boxs;
  }

  boxVertical(position) {
    let { players, isBebasPilih } = this.state;
    let start = position == 'left' ? 15 : 25;
    let end = position == 'left' ? 9 : 31;
    let boxs = [];

    for (let i = start; position == 'left' ? i >= end : i <= end; position == 'left' ? i-- : i++) {
      let data = dataImages.find(function (item) {
        return item.id == i + 1;
      });
      let box;
      if (players.length) {
        box = (
          <TouchableOpacity key={i} disabled={!isBebasPilih} onPress={() => this.pindahTempat(i)}>
            <ImageBackground style={[styles.box, { backgroundColor: '#FFF' }]} source={data.uri}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[0] && !players[0].stop && players[0].location == i ? 'flex' : 'none',
                  borderWidth: players[0] && players[0].location == i ? 1 : 0,
                  backgroundColor: players[0].image.color, borderColor: players[0].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
                <View style={[styles.player, {
                  display: players[1] && !players[1].stop && players[1].location == i ? 'flex' : 'none',
                  borderWidth: players[1] && players[1].location == i ? 1 : 0,
                  backgroundColor: players[1].image.color, borderColor: players[1].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[2] && !players[2].stop && players[2].location == i ? 'flex' : 'none',
                  borderWidth: players[2] && players[2].location == i ? 1 : 0,
                  backgroundColor: players[2] ? players[2].image.color : 'transparent', borderColor: players[2] && players[2].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
                <View style={[styles.player, {
                  display: players[3] && !players[3].stop && players[3].location == i ? 'flex' : 'none',
                  borderWidth: players[3] && players[3].location == i ? 1 : 0,
                  backgroundColor: players[3] ? players[3].image.color : 'transparent', borderColor: players[3] && players[3].image.color == 'yellow' ? '#000' : '#FFF'
                }]} />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )
      }
      boxs.push(box)
    }
    return boxs;
  }

  onPressRoll() {
    let { players, activePlayer, random1, random2, pilihTemanList } = this.state;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ random1, random2, isPress: false });

    let random = random1 + random2;

    if (players[activePlayer].isPenjara) {
      let active;
      if (activePlayer == players.length - 1) {
        active = 0;
      } else {
        active = activePlayer + 1;
      }
      if (random1 == random2) {
        players[activePlayer].isPenjara = false;
        players[activePlayer].location = 0;
        this.setState({ players })
      }
      this.setState({ activePlayer: active })
    } else {
      let testInfo = audioTests.find(function (element) {
        return element.title == `dadu ${random}`;
      });
      if (random1 == random2) {
        testInfo = audioTests.find(function (element) {
          return element.title == `double dadu ${random}`;
        });
      }
      this.playSound(testInfo, this);


      pilihTemanList = players.filter((obj) => {
        return obj.image.id !== players[activePlayer].image.id;
      })

      pilihTemanList = _.filter(pilihTemanList, function (item) { return !item.stop; });


      let randomPilihTeman = Math.floor(Math.random() * pilihTemanList.length);

      this.setState({ pilihTemanList, pilihTeman: pilihTemanList[randomPilihTeman] })


      this.setState({ random1, random2, randomNumber: random, run: true })
      setTimeout(() => {
        this.moveCircle(random)
      }, 1500)
    }
  }

  moveCircle(random) {
    let { activePlayer, players } = this.state
    let player = _.clone(players[activePlayer]);

    let interval = setInterval(() => {
      let loc = player.location + random - 1
      if (player.location + random - 1 == 32) {
        loc = 0
      } else if (player.location + random - 1 > 32) {
        loc = player.location + random - 32
      }

      if (players[activePlayer].isPenjara) {
        clearInterval(interval)
        this.setState({ run: false })
      } else if (players[activePlayer].location == loc) {
        clearInterval(interval)
        this.setState({ run: false })
        this.openModal();
      }

      let location = players[activePlayer].location == 31 ? 0 : players[activePlayer].location + 1;
      players[activePlayer].location = location

      this.setState({ players })
    }, 500)
  }


  boardRender() {
    return (
      <View style={{ width: 380, height: 290, alignItems: 'center', backgroundColor: '#fff', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          {this.boxHorizontal('top')}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            {this.boxVertical('left')}
          </View>


          <View style={{
            width: 280,
            height: 210,
            backgroundColor: '#f8c291',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image style={{ width: 270, height: 200 }} source={require('../assets/images/tengah.png')} />
          </View>


          <View>
            {this.boxVertical('right')}
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.boxHorizontal('bottom')}
        </View>
      </View>
    )
  }

  onChangeText(text, index) {
    let { jawabanUser } = this.state;
    jawabanUser[index] = text.toLowerCase();
    this.setState({ jawabanUser: jawabanUser })
  }

  openModal() {
    let { activePlayer, listPertanyaan, players, listAksi, listStudi, aksi, pajak, berdana, karmabaik } = this.state;
    let player = players[activePlayer];
    let location = player.location + 2;

    let active;
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    if (location == 33) {
      location = 1;
    }

    let item = _.find(dataImages, function (obj) {
      return obj.id == location;
    });

    if (item.categoryId == 50) {
      let random = Math.floor(Math.random() * (listStudi.length - 1)) + 1;
      studi = listStudi[random];
      this.setState({ studi, isVisibleStudi: true, run: true })
    } else if (item.categoryId == 51) {
      let random = Math.floor(Math.random() * (listAksi.length - 1)) + 1;
      aksi = listAksi[random];
      this.setState({ aksi, isVisibleAksi: true, run: true })
    } else if (item.categoryId == 52) {
      players[activePlayer].isPenjara = true;
      if (players[active].stop) {
        playerActive = _.filter(players, function (item) { return !item.stop; });

        playerNext = playerActive[0];
        playerLast = playerActive[playerActive.length - 1]
        if (players[activePlayer].image.color == playerNext.image.color) {
          playerNext = playerActive[1]
        } else if (playerActive.length > 2 && players[activePlayer].image.color == playerActive[1].image.color) {
          playerNext = playerActive[2]
        } else if (players[activePlayer].image.color == playerLast.image.color) {
          playerNext = playerActive[0]
        }

        let isNext = _.findIndex(players, function (o) { return o.image.color == playerNext.image.color; });
        this.setState({ activePlayer: isNext })
      } else {
        this.setState({ activePlayer: active })
      }
      this.setState({ players, isVisiblePenjara: true })
      setTimeout(() => {
        this.setState({ isVisiblePenjara: false })
      }, 2000)
    } else if (item.categoryId == 54) {
      this.setState({ isVisibleBebas: true, isBebasPilih: true, run: true })
    } else if (item.categoryId == 53) {
      this.setState({ isVisible: false, activePlayer: active, run: false })
    } else if (item.categoryId == 55) {
      aksi = pajak;
      this.setState({ aksi, isVisibleAksi: true, run: true })
    } else if (item.categoryId == 56) {
      aksi = berdana;
      this.setState({ aksi, isVisibleAksi: true, run: true })
    } else if (item.categoryId == 57) {
      aksi = karmabaik;
      this.setState({ aksi, isVisibleAksi: true, run: true })
    } else if (item.categoryId == 0) {
      this.setState({ activePlayer: active })
    } else if (listPertanyaan.length) {
      if (listPertanyaan[item.categoryId].list[0]) {
        let pertanyaan = listPertanyaan[item.categoryId];
        let jawaban = pertanyaan.list[0].jawaban;
        let jawab = _.clone(jawaban);
        jawab[0] = '';
        jawab[1] = '';
        jawab[2] = '';
        this.playSound(item, this);
        this.setState({ jawabanUser: jawab, pertanyaanActive: pertanyaan, isVisible: true, run: true })
      } else {
        this.setState({ isVisibleHabis: true, activePlayer: active })
        setTimeout(() => {
          this.setState({ isVisibleHabis: false, run: false })
        }, 1500)
      }
    }
  }

  openModalWinner(winner) {
    this.setState({ isVisibleWinner: true, winner })
  }

  onJawab(nilai) {
    let { teman, pilihan, karakter, pertanyaanActive, activePlayer, players, jawabanUser, pilihTeman } = this.state
    let point = 10;
    let sisaPertanyaan = 10;
    let playerActive = [];
    if (nilai) {
      point = nilai;
      players[activePlayer].score += point;
      players[activePlayer].score = players[activePlayer].score < 0 ? 0 : players[activePlayer].score;
    } else {
      let jawaban = pertanyaanActive.list[0].jawaban;
      let benar = false;
      let isTrue = true
      let pointKurang = 0
      if (pilihan) {
        pointKurang = pointKurang + 10
      }
      if (karakter) {
        pointKurang = pointKurang + 10
      }
      if (_.isEqual(jawabanUser, jawaban)) {
        benar = true
        point = 50;
      } else {
        point = -20;
      }

      point = point - pointKurang;

      players[activePlayer].score += point;


      players[activePlayer].score = players[activePlayer].score < 0 ? 0 : players[activePlayer].score;

      if (teman && _.isEqual(jawabanUser, jawaban)) {
        let pemainPilihan = _.findIndex(players, function (o) { return o.image.color == pilihTeman.image.color }) + 1
        players[pemainPilihan].score += point;
      }

      if (players[activePlayer].score <= 0) {
        players[activePlayer].stop = true;
      }

      if (teman && _.isEqual(jawabanUser, jawaban)) {
        let pemainPilihan = _.findIndex(players, function (o) { return o.image.color == pilihTeman.image.color }) + 1
        if (players[pemainPilihan].score > 0) {
          players[pemainPilihan].stop = true;
        }
      }

      this.state.listPertanyaan.map((o) => {
        sisaPertanyaan += o.list.length
      })

      playerActive = _.filter(players, function (item) { return !item.stop; });

      if (playerActive.length == 1) {
        let winner = _.findIndex(players, function (o) { return o.image.color == playerActive[0].image.color }) + 1;
        setTimeout(() => {
          this.openModalWinner(winner);
        }, 2500)
      }

      if (sisaPertanyaan == 0) {
        let max = _.maxBy(playersActive, 'score');
        let winner = _.findIndex(players, function (o) { return o.image.color == max }) + 1
        setTimeout(() => {
          this.openModalWinner(winner);
        }, 2500)
      }

      pertanyaanActive.list.shift();

      this.setState({
        benar,
        isTrue
      })
    }

    this.setState({
      players,
      jawabanUser: [],
      karakter: false,
      pilihan: false,
      teman: false,
      pilih: '',
      isJawab: true
    })

    let active;
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    if (players[active].stop) {
      playerActive = _.filter(players, function (item) { return !item.stop; });

      playerNext = playerActive[0];
      playerLast = playerActive[playerActive.length - 1]
      if (players[activePlayer].image.color == playerNext.image.color) {
        playerNext = playerActive[1]
      } else if (playerActive.length > 2 && players[activePlayer].image.color == playerActive[1].image.color) {
        playerNext = playerActive[2]
      } else if (players[activePlayer].image.color == playerLast.image.color) {
        playerNext = playerActive[0]
      }

      let isNext = _.findIndex(players, function (o) { return o.image.color == playerNext.image.color; });
      this.setState({ activePlayer: isNext })
    } else {
      this.setState({ activePlayer: active })
    }
    setTimeout(() => {
      let running = true
      if (sisaPertanyaan == 0 || playerActive.length == 1) {
        running = true
      } else {
        running = false
      }
      this.setState({ isVisible: false, isJawab: false, run: running })
    }, 1500)
  }

  renderModal() {
    let { activePlayer, players, listPertanyaan, pertanyaanActive, isVisible, karakter, pilihan, teman, pilih, isJawab, benar, pilihTeman } = this.state

    let pemainPilihan;
    if (teman) {
      pemainPilihan = _.findIndex(players, function (o) { return o.image.color == pilihTeman.image.color }) + 1
    }

    let pertanyaan = listPertanyaan[0];
    if (!_.isEmpty(pertanyaanActive)) {
      pertanyaan = pertanyaanActive;
    }

    pertanyaan = pertanyaan.list[0];

    let enabled = true;

    let kosong = !karakter && !pilihan && !teman;

    let kotak = []
    for (let index = 0; index < pertanyaan.jawaban.length; index++) {
      if (karakter && pertanyaan.karakter[index]) {
        kotak.push(
          <TextInput
            key={index}
            disableFullscreenUI
            style={{ backgroundColor: 'rgb(146,216,249)', width: 40, height: 40, marginHorizontal: 5, borderRadius: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
            editable={false}
            maxLength={1}
            value={pertanyaan.karakter[index]}
          />
        )
      } else {
        kotak.push(
          <TextInput
            key={index}
            disableFullscreenUI
            style={{ backgroundColor: 'rgb(203,203,203)', width: 40, height: 40, marginHorizontal: 5, borderRadius: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
            editable={true}
            autoCapitalize={false}
            onChangeText={(text) => this.onChangeText(text, index)}
            maxLength={1}
          />
        )
      }
    }

    if (pilih) {
      let kotakPilih = []
      pilihan = pilih.split("")
      for (let index = 0; index < pilihan.length; index++) {
        kotakPilih.push(
          <TextInput
            key={index}
            disableFullscreenUI
            style={{ backgroundColor: 'rgb(146,216,249)', width: 40, height: 40, marginHorizontal: 5, borderRadius: 5, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}
            editable={false}
            maxLength={1}
            value={pilihan[index]}
          />
        )
      }
      kotak = kotakPilih;
    }

    let content = (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30 }}>~~~ Pertanyaan ~~~</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', textAlign: 'center' }}>{pertanyaan.pertanyaan}</Text>
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
          {kotak}
        </View>

        <Text style={{ fontWeight: 'bold', marginTop: 10, display: teman ? 'flex' : 'none' }}>Pilihan Teman (Pemain)</Text>
        {teman && (
          <View style={{ alignItems: 'center', top: 5 }}>
            <Text style={{ fontWeight: "500" }}>{pilihTeman.image.name}</Text>
            <Text style={{ fontSize: 12 }}>{pilihTeman.image.description}</Text>
            <Image style={{ width: 50, height: 50, bottom: 5, marginHorizontal: 30 }} source={pilihTeman.image.source} />
            <Text>Player {pemainPilihan}</Text>
          </View>
        )}

        <Text style={{ fontWeight: 'bold', marginTop: 10, display: pilihan ? 'flex' : 'none' }}>Bantuan Pilihan</Text>
        {pilihan && <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <TouchableOpacity
              style={{
                borderColor: 'rgb(0,115,195)', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
              }
              }
              onPress={() => this.setState({ pilih: pertanyaan.pilihan1, jawabanUser: pertanyaan.pilihan1.split("") })}
            >
              <View style={{ backgroundColor: pilih == pertanyaan.pilihan1 ? 'rgb(0,115,195)' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
            </TouchableOpacity>
            <Text>{pertanyaan.pilihan1}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <TouchableOpacity
              style={{
                borderColor: 'rgb(0,115,195)', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
              }}
              onPress={() => this.setState({ pilih: pertanyaan.pilihan2, jawabanUser: pertanyaan.pilihan2.split("") })}
            >
              <View style={{ backgroundColor: pilih == pertanyaan.pilihan2 ? 'rgb(0,115,195)' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
            </TouchableOpacity>
            <Text>{pertanyaan.pilihan2}</Text>
          </View>
        </View>}

        <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
          <View style={{ display: players[activePlayer].karakter == 0 ? 'none' : kosong || karakter ? 'flex' : 'none' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
              <TouchableOpacity
                disabled={karakter}
                style={{
                  borderColor: 'green', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
                }}
                onPress={() => {
                  players[activePlayer].karakter -= 1;
                  this.setState({ karakter: true, players })
                }}
              >
                <View style={{ backgroundColor: karakter ? 'green' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
              </TouchableOpacity>
              <Text>Bantuan Karakter</Text>
            </View>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{`sisa ${players[activePlayer].karakter} kesempatan`}</Text>
          </View>

          <View style={{ display: players[activePlayer].pilihan == 0 ? 'none' : kosong || pilihan ? 'flex' : 'none' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
              <TouchableOpacity
                disabled={pilihan}
                style={{
                  borderColor: 'green', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
                }}
                onPress={() => {
                  players[activePlayer].pilihan -= 1;
                  this.setState({ pilihan: true, players })
                }}
              >
                <View style={{ backgroundColor: pilihan ? 'green' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
              </TouchableOpacity>
              <Text>Bantuan Pilihan</Text>
            </View>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{`sisa ${players[activePlayer].pilihan} kesempatan`}</Text>
          </View>

          <View style={{ display: players[activePlayer].teman == 0 ? 'none' : kosong || teman ? 'flex' : 'none' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
              <TouchableOpacity
                disabled={teman}
                style={{
                  borderColor: 'green', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
                }}
                onPress={() => {
                  players[activePlayer].teman -= 1;
                  this.setState({ teman: true, players })
                }}
              >
                <View style={{ backgroundColor: teman ? 'green' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
              </TouchableOpacity>
              <Text>Tanya Teman</Text>
            </View>
            <Text style={{ fontSize: 10, textAlign: 'center' }}>{`sisa ${players[activePlayer].teman} kesempatan`}</Text>
          </View>

        </View>
        <TouchableOpacity disabled={!enabled} style={{ padding: 10, backgroundColor: enabled ? 'rgb(0,115,195)' : 'grey', borderRadius: 5, marginTop: 10 }} onPress={() => this.onJawab()}>
          <Text style={{ color: enabled ? '#FFF' : '#000', fontWeight: 'bold' }}>JAWAB</Text>
        </TouchableOpacity>
      </View>
    )

    if (isJawab) {
      content = (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{benar ? 'BENAR' : 'SALAH'}</Text>
      )
    }


    return (
      <Modal
        isVisible={isVisible}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <KeyboardAwareScrollView>
          <ScrollView>
            <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
              {content}
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }

  onJawabAksi(aksi) {
    let { activePlayer, players } = this.state;
    let active;
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    if (aksi.category == 0) {
      players[activePlayer].location = 0;
      if (players[active].stop) {
        playerActive = _.filter(players, function (item) { return !item.stop; });

        playerNext = playerActive[0];
        playerLast = playerActive[playerActive.length - 1]
        if (players[activePlayer].image.color == playerNext.image.color) {
          playerNext = playerActive[1]
        } else if (playerActive.length > 2 && players[activePlayer].image.color == playerActive[1].image.color) {
          playerNext = playerActive[2]
        } else if (players[activePlayer].image.color == playerLast.image.color) {
          playerNext = playerActive[0]
        }

        let isNext = _.findIndex(players, function (o) { return o.image.color == playerNext.image.color; });
        this.setState({ activePlayer: isNext })
      } else {
        this.setState({ activePlayer: active })
      }
      this.setState({ players });
    } else if (aksi.category == 1) {
      this.moveCircle(aksi.langkah);
    } else {
      this.onJawab(aksi.point);
    }
    this.setState({ isVisibleAksi: false, run: false })
  }

  renderModalWinner() {
    let { isVisibleWinner, winner } = this.state;

    return (
      <Modal
        isVisible={isVisibleWinner}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
            PERMAINAN SELESAI
          </Text>
          <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30 }}>--- Player {winner} Menang ---</Text>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(0,115,195)', borderRadius: 5, marginTop: 20 }} onPress={() => {
            this.setState({ isVisibleWinner: false, run: false })
            this.props.navigation.navigate('Landing')
          }
          }>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Mulai Ulang</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  renderModalAksi() {
    let { isVisibleAksi, aksi } = this.state;
    return (
      <Modal
        isVisible={isVisibleAksi}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>AKSI</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            {aksi ? aksi.description : ''}
          </Text>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(0,115,195)', borderRadius: 5, marginTop: 20 }} onPress={() => this.onJawabAksi(aksi)}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>TERIMA KASIH</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  onCloseStudi() {
    let { players, activePlayer } = this.state;
    let active;
    this.setState({ isPress: true })
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    if (players[active].stop) {
      playerActive = _.filter(players, function (item) { return !item.stop; });

      playerNext = playerActive[0];
      playerLast = playerActive[playerActive.length - 1]
      if (players[activePlayer].image.color == playerNext.image.color) {
        playerNext = playerActive[1]
      } else if (playerActive.length > 2 && players[activePlayer].image.color == playerActive[1].image.color) {
        playerNext = playerActive[2]
      } else if (players[activePlayer].image.color == playerLast.image.color) {
        playerNext = playerActive[0]
      }

      let isNext = _.findIndex(players, function (o) { return o.image.color == playerNext.image.color; });
      this.setState({ activePlayer: isNext })
    } else {
      this.setState({ activePlayer: active })
    }
    setTimeout(() => {
      this.setState({ isVisibleStudi: false, run: false })
    }, 1500)
  }

  renderModalPenjara() {
    let { isVisiblePenjara, studi, isPress } = this.state;
    return (
      <Modal
        isVisible={isVisiblePenjara}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Kamu dipenjara</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            {`anda perlu mendapatkan dadu kembar\nuntuk keluar penjara`}
          </Text>
        </View>
      </Modal >
    )
  }

  renderModalStudi() {
    let { isVisibleStudi, studi, isPress } = this.state;
    return (
      <Modal
        isVisible={isVisibleStudi}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Tahukah Kamu ?</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>
            {studi}
          </Text>
          <TouchableOpacity disabled={isPress} style={{ padding: 10, backgroundColor: 'rgb(0,115,195)', borderRadius: 5, marginTop: 20 }} onPress={() => this.onCloseStudi()}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>TERIMA KASIH</Text>
          </TouchableOpacity>
        </View>
      </Modal >
    )
  }

  renderModalBebas() {
    let { isVisibleBebas } = this.state;
    return (
      <Modal
        isVisible={isVisibleBebas}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
            ~~ BEBAS PILIH TEMPAT ~~
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
            silahkan klik kotak dimana saja anda ingin pindah tempat
          </Text>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(0,115,195)', borderRadius: 5, marginTop: 20 }} onPress={() => this.setState({ isVisibleBebas: false })}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>TERIMA KASIH</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  renderModalHabis() {
    return (
      <Modal
        isVisible={this.state.isVisibleHabis}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <KeyboardAwareScrollView>
          <ScrollView>
            <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SOAL HABIS</Text>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </Modal>
    )
  }

  playersLeft() {
    let { players, activePlayer } = this.state;
    let playersLeft = []
    let length = players.length;
    if (length == 4) {
      length = length - 1;
    }

    for (let index = 0; index < length; index++) {
      player = (
        <View key={index} style={styles.boxContainer}>
          <View style={{ width: '100%', height: 35, backgroundColor: players[index].score <= 0 ? 'red' : activePlayer == index ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
          <View style={[styles.boxImage, { backgroundColor: players[index].score <= 0 ? 'grey' : '#FFF' }]}>
            <Image style={styles.imageUser} source={players[index].image.source} />
          </View>
          <Text style={styles.boxValue}>{players[index].score}</Text>
        </View>
      )
      playersLeft.push(player);
    }
    return playersLeft;
  }

  playersRight() {
    let { players, activePlayer } = this.state;
    let right = _.clone(players);

    if (right.length == 4) {
      right = right[3]
      return (
        <View style={styles.boxContainer}>
          <View style={{ width: '100%', height: 35, backgroundColor: players[3].score <= 0 ? 'red' : activePlayer == 3 ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
          <View style={[styles.boxImage, { backgroundColor: players[3].score <= 0 ? 'grey' : '#FFF' }]}>
            <Image style={styles.imageUser} source={right.image.source} />
          </View>
          <Text style={styles.boxValue}>{right.score}</Text>
        </View>
      )
    } else {
      return (
        <View style={{ height: 35 }} />
      )
    }
  }

  render() {
    let { random1, random2, run } = this.state;
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/backgroundscreen.jpg')} blurRadius={2}>
        <View style={{ justifyContent: 'space-between' }}>
          {this.playersLeft()}
        </View>
        {this.boardRender()}

        <View style={{ justifyContent: 'space-between' }}>
          {this.playersRight()}

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 50, height: 50, marginRight: 5 }} source={dice[random1 - 1]} />
              <Image style={{ width: 50, height: 50, marginLeft: 5 }} source={dice[random2 - 1]} />
            </View>
            <TouchableOpacity disabled={run} onPress={() => this.onPressRoll()} style={{ width: 100, paddingVertical: 5, backgroundColor: run ? 'grey' : '#304ffe', borderRadius: 5, alignItems: 'center', marginTop: 20, borderWidth: 2, borderColor: run ? '#000' : '#FFF' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>ROLL</Text>
            </TouchableOpacity>
          </View>

          <View />
        </View>

        {this.renderModal()}
        {this.renderModalAksi()}
        {this.renderModalStudi()}
        {this.renderModalBebas()}
        {this.renderModalWinner()}
        {this.renderModalHabis()}
        {this.renderModalPenjara()}

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  box: {
    width: 40,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  player: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 1,
    borderColor: '#FFF'
  },
  playerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  playerText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 35,
    width: 100,
    borderRadius: 40
  },
  boxImage: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 40,
    borderRightWidth: 3,
    borderColor: '#000'
  },
  boxValue: {
    marginLeft: 15,
    fontSize: 15,
    color: '#000',
    right: 5,
    fontWeight: 'bold'
  },
  imageUser: {
    width: 60,
    height: 40
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent'
  }
});

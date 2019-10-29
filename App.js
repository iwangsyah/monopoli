import React, { Component } from 'react';
import { ImageBackground, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Orientation from 'react-native-orientation-locker';
import Sound from 'react-native-sound';
import Modal from "react-native-modal";
import _ from "lodash";

const dice = [
  require('./assets/images/dadu1.png'),
  require('./assets/images/dadu2.png'),
  require('./assets/images/dadu3.png'),
  require('./assets/images/dadu4.png'),
  require('./assets/images/dadu5.png'),
  require('./assets/images/dadu6.png')
]

const audioTests = [
  {
    title: 'dadu 3',
    url: require('./assets/sounds/dadu_3.m4a')
  },
  {
    title: 'dadu 4',
    url: require('./assets/sounds/dadu_4.m4a')
  },
  {
    title: 'dadu 5',
    url: require('./assets/sounds/dadu_5.m4a')
  },
  {
    title: 'dadu 6',
    url: require('./assets/sounds/dadu_6.m4a')
  },
  {
    title: 'dadu 7',
    url: require('./assets/sounds/dadu_7.m4a')
  },
  {
    title: 'dadu 8',
    url: require('./assets/sounds/dadu_8.m4a')
  },
  {
    title: 'dadu 9',
    url: require('./assets/sounds/dadu_9.m4a')
  },
  {
    title: 'dadu 10',
    url: require('./assets/sounds/dadu_10.m4a')
  },
  {
    title: 'double dadu 2',
    url: require('./assets/sounds/double_dadu_2.m4a')
  },
  {
    title: 'double dadu 4',
    url: require('./assets/sounds/double_dadu_4.m4a')
  },
  {
    title: 'double dadu 6',
    url: require('./assets/sounds/double_dadu_6.m4a')
  },
  {
    title: 'double dadu 8',
    url: require('./assets/sounds/double_dadu_8.m4a')
  },
  {
    title: 'double dadu 10',
    url: require('./assets/sounds/double_dadu_10.m4a')
  },
  {
    title: 'double dadu 12',
    url: require('./assets/sounds/double_dadu_12.m4a')
  },
];

const dataImages = [
  { id: 1, name: 'start', uri: {}, url: {}, categoryId: 0 },
  { id: 2, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png'), url: require('./assets/sounds/kappilavattu_01.m4a'), categoryId: 1 },
  { id: 3, name: 'studi', uri: {}, url: {}, categoryId: 50 },
  { id: 4, name: 'taman lumbini', uri: require('./assets/images/taman_lumbini_2.jpg'), url: require('./assets/sounds/taman_lumbini_02.m4a'), categoryId: 2 },
  { id: 5, name: 'sungai anoma', uri: require('./assets/images/sungai_anoma_3.png'), url: require('./assets/sounds/sungai_anoma_03.m4a'), categoryId: 3 },
  { id: 6, name: 'aksi', uri: {}, url: {}, categoryId: 51 },
  { id: 7, name: 'rajagaha', uri: require('./assets/images/rajagaha_4.jpg'), url: require('./assets/sounds/raja_gaha_04.m4a'), categoryId: 4 },
  { id: 8, name: 'vesali', uri: require('./assets/images/vesali_5.jpg'), url: require('./assets/sounds/vesalli_05.m4a'), categoryId: 5 },
  { id: 9, name: 'sugati', uri: {}, url: {}, categoryId: 53 },
  { id: 10, name: 'magadha', uri: require('./assets/images/magadha_6.jpg'), url: require('./assets/sounds/magadha_06.m4a'), categoryId: 6 },
  { id: 11, name: 'studi', uri: {}, categoryId: 50 },
  { id: 12, name: 'uruvela', uri: require('./assets/images/uruvela_7.jpg'), url: require('./assets/sounds/uruvella_07.m4a'), categoryId: 7 },
  { id: 13, name: 'sesanigama', uri: require('./assets/images/sesanigamaaa_8.jpg'), url: require('./assets/sounds/sesanigama_08.m4a'), categoryId: 8 },
  { id: 14, name: 'aksi', uri: {}, url: {}, categoryId: 51 },
  { id: 15, name: 'hutan gaya', uri: require('./assets/images/hutan_gaya.jpg'), url: require('./assets/sounds/hutan_gaya_09.m4a'), categoryId: 9 },
  { id: 16, name: 'digadaya', uri: require('./assets/images/migadaya_10.jpg'), url: require('./assets/sounds/digadhaya_10.m4a'), categoryId: 10 },
  { id: 17, name: 'bebas', uri: {}, url: {}, categoryId: 54 },
  { id: 18, name: 'baranasi', uri: require('./assets/images/baranasi1.jpg'), url: require('./assets/sounds/baranasi_11.m4a'), categoryId: 11 },
  { id: 19, name: 'hutan bambu', uri: require('./assets/images/hutan_bambu_12.jpg'), url: require('./assets/sounds/hutan_bambu_12.m4a'), categoryId: 12 },
  { id: 20, name: 'studi', uri: {}, url: {}, categoryId: 50 },
  { id: 21, name: 'savatthi', uri: require('./assets/images/savatthi_13.jpg'), url: require('./assets/sounds/savatti_13.m4a'), categoryId: 13 },
  { id: 22, name: 'kerajaan kosala', uri: require('./assets/images/kerajaan_kosala_14.jpg'), url: require('./assets/sounds/kerajaan_kosala_14.m4a'), categoryId: 14 },
  { id: 23, name: 'aksi', uri: {}, url: {}, categoryId: 51 },
  { id: 24, name: 'tavatimsa', uri: require('./assets/images/tavatimsa_15.jpg'), url: require('./assets/sounds/tavatimsa_15.m4a'), categoryId: 15 },
  { id: 25, name: 'empat apaya', uri: {}, url: {}, categoryId: 52 },
  { id: 26, name: 'kota bhaddiya', uri: require('./assets/images/kota_bhaddiya1.jpg'), url: require('./assets/sounds/kota_badhiya_16.m4a'), categoryId: 16 },
  { id: 27, name: 'kerajaan alavi', uri: require('./assets/images/kerajaan_alavi_17.jpg'), categoryId: 17 },
  { id: 28, name: 'studi', uri: {}, url: {}, categoryId: 50 },
  { id: 29, name: 'kusinara', uri: require('./assets/images/kusinara1.jpg'), url: require('./assets/sounds/kusinara_18.m4a'), categoryId: 18 },
  { id: 30, name: 'kapilavatu', uri: require('./assets/images/kapilavatthu_1.png'), url: require('./assets/sounds/kappilavattu_01.m4a'), categoryId: 1 },
  { id: 31, name: 'aksi', uri: {}, url: {}, categoryId: 51 },
  { id: 32, name: 'taman lumbini', uri: require('./assets/images/taman_lumbini_2.jpg'), url: require('./assets/sounds/taman_lumbini_02.m4a'), categoryId: 2 },
  { id: 33, name: 'sungai anoma', uri: require('./assets/images/sungai_anoma_3.png'), url: require('./assets/sounds/sungai_anoma_03.m4a'), categoryId: 3 }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      activePlayer: 1,
      randomNumber: 0,
      random1: 1,
      random2: 1,
      run: false,
      jawabanUser: [],
      isVisible: false,
      karakter: false,
      pilihan: false,
      pilih: '',
      benar: false,
      isJawab: false,
      isTrue: false,
      player1: { score: 100, location: 0, penjara: false },
      player2: { score: 100, location: 0, penjara: false },
      player3: { score: 100, location: 0, penjara: false },
      player4: { score: 100, location: 0, penjara: false },
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
            { id: 1, pertanyaan: "Lengkapi Pernyataan Berikut!\nRatu Mahamaya Mengandung Selama ... Bulan", jawaban: ['s', 'e', 'p', 'u', 'l', 'u', 'h'], pilihan1: 'sepuluh', pilihan2: 'sebelas' },
            { id: 2, pertanyaan: "Tempat Pangeran Siddharta Dilahirkan", jawaban: ['l', 'u', 'm', 'b', 'i', 'n', 'i'], pilihan1: 'uruvela', pilihan2: 'lumbini' },
            { id: 3, pertanyaan: "Jumlah Langkah Pangeran Siddharta Berjalan", jawaban: ['t', 'u', 'j', 'u', 'h'], pilihan1: 'tujuh', pilihan2: 'empat' },
            { id: 4, pertanyaan: "Lengkapi Pernyataan Berikut!\nPangeran Siddharta Dilahirkan di Bawah Pohon ....", jawaban: ['s', 'a', 'l', 'a'], pilihan1: 'sala', pilihan2: 'apel' },
            { id: 5, pertanyaan: "Hari Raya untuk Memperingati Kelahiran Pangeran Siddharta", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], pilihan1: 'kathina', pilihan2: 'vesakha' }
          ]
        },
        {
          id: 3, name: "sungai anoma", list: [
            { id: 1, pertanyaan: "Lengkapi Pernyataan Berikut!\nRatu Mahamaya Mengandung Selama ... Bulan", jawaban: ['t', 'i', 'd', 'a', 'k', 's', 'i', 'a', 's', 'i', 'a'], pilihan1: 'tidaksiasia', pilihan2: 'tidakpernah' },
            { id: 2, pertanyaan: "Alat yang Digunakan Pangeran Siddharta untuk Memotong Rambut", jawaban: ['p', 'e', 'd', 'a', 'n', 'g'], pilihan1: 'shotel', pilihan2: 'pedang' },
            { id: 3, pertanyaan: "Nama Dewa yang Menangkap Rambut Pangeran Siddharta", jawaban: ['s', 'a', 'k', 'k', 'a'], pilihan1: 'tujuh', pilihan2: 'delapan' },
            { id: 4, pertanyaan: "Nama Cetiya Tempat Disemayamkannya Rambut Pangeran Siddharta", jawaban: ['c', 'u', 'l', 'a', 'm', 'a', 'n', 'i'], pilihan1: 'culamani', pilihan2: 'mahacula' },
            { id: 5, pertanyaan: "Nama tempat kuda istana Kanthaka berhenti itu akhirnya didirikan", jawaban: ['k', 'a', 'n', 't', 'h', 'a', 'k', 'a', 'n', 'i', 'v', 'a', 't', 't', 'a'], pilihan1: 'kanthakanavitha', pilihan2: 'kanthakanivatta' }
          ]
        },
        {
          id: 4, name: "rajagaha", list: [
            { id: 1, pertanyaan: "Raja yang Menemui Petapa Gotama di Kota Rajagaha", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], pilihan1: 'bimbisara', pilihan2: 'visvamita' },
            { id: 2, pertanyaan: "Nama Ratu yang Terkenal di Rajagaha atas Kecantikkannya", jawaban: ['k', 'h', 'e', 'm', 'a'], pilihan1: 'khema', pilihan2: 'khemi' },
            { id: 3, pertanyaan: "Nama Raja yang Memiliki Selir Utama Bernama Khema", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], pilihan1: 'bimbisara', pilihan2: 'ajatasatu' },
            { id: 4, pertanyaan: "Nama Wihara Tempat Ratu Khema Bertemu dengan Sang Buddha", jawaban: ['v', 'e', 'l', 'u', 'v', 'a', 'n', 'a'], pilihan1: 'jetavana', pilihan2: 'veluvana' },
            { id: 5, pertanyaan: "Bhikkhuni yang Paling Piawai dalam Kebijaksanaan", jawaban: ['k', 'h', 'e', 'm', 'a'], pilihan1: 'khema', pilihan2: 'khemi' }
          ]
        },
        {
          id: 5, name: "vesali", list: [
            { id: 1, pertanyaan: "Tempat Petapa Gotama Berguru kepada Alara Kalama", jawaban: ['r', 'a', 'j', 'a', 'g', 'a', 'h', 'a'], pilihan1: 'rajagaha', pilihan2: 'veluvana' },
            { id: 2, pertanyaan: "Hasrat yang Meliputi diri Anathapindika saat Mendengar Kata 'Buddha'", jawaban: ['k', 'e', 'g', 'i', 'u', 'r', 'a', 'n'], pilihan1: 'kesukaan', pilihan2: 'kegiuran' },
            { id: 3, pertanyaan: "Nama Putri Anathapindika selain Maha Subhadda dan Cula Subhadda", jawaban: ['s', 'u', 'm', 'a', 'n', 'a'], pilihan1: 'munasa', pilihan2: 'sumana' },
            { id: 4, pertanyaan: "Nama Wihara yang Dibangun oleh Anathapindika", jawaban: ['j', 'e', 't', 'a', 'v', 'a', 'n', 'a'], pilihan1: 'jetavana', pilihan2: 'veluvana' },
            { id: 5, pertanyaan: "Sebutan untuk Hutan Sejuk Tempat Anathapindika Menemui Sang Buddha", jawaban: ['s', 'i', 't', 'a', 'v', 'a', 'n', 'a'], pilihan1: 'sitavana', pilihan2: 'satavana' }
          ]
        },
        {
          id: 6, name: "magadha", list: [
            { id: 1, pertanyaan: "Tempat Petapa Gotama Berguru Kepada Uddaka Ramaputta", jawaban: ['m', 'a', 'g', 'a', 'd', 'h', 'a'], pilihan1: 'magadha', pilihan2: 'bodgaya' },
            { id: 2, pertanyaan: "Sungai yang Diseberangi oleh Petapa Gotama dari Vesali ke Magadha", jawaban: ['m', 'a', 'h', 'i'], pilihan1: 'mali', pilihan2: 'mahi' },
            { id: 3, pertanyaan: "Arah yang Disembah oleh Singalaka untuk Melambangkan Orangtua", jawaban: ['t', 'i', 'm', 'u', 'r'], pilihan1: 'timur', pilihan2: 'barat' },
            { id: 4, pertanyaan: "Arah yang Disembah oleh Singalaka untuk Melambangkan Guru", jawaban: ['s', 'e', 'l', 'a', 't', 'a', 'n'], pilihan1: 'selatan', pilihan2: 'bawahan' },
            { id: 5, pertanyaan: "Pelambangan 'Arah Timur' ketika Singalaka Menyembah Enam Arah", jawaban: ['o', 'r', 'a', 'n', 'g', 't', 'u', 'a'], pilihan1: 'anakmuda', pilihan2: 'orangtua' }
          ]
        },
        {
          id: 7, name: "uruvela", list: [
            { id: 1, pertanyaan: "TTempat Petapa Gotama Menyiksa Diri", jawaban: ['u', 'r', 'u', 'v', 'e', 'l', 'a'], pilihan1: 'uruvela', pilihan2: 'urumala' },
            { id: 2, pertanyaan: "Lengkapi Pernyataan Berikut!\nPetapa Gotama Menyiksa Diri Selama ... Tahun", jawaban: ['e', 'n', 'a', 'm'], pilihan1: 'lima', pilihan2: 'enam' },
            { id: 3, pertanyaan: "Nama Sungai Bersih dan Jernih yang Mengalir di Dalam Hutan Uruvela", jawaban: ['n', 'e', 'r', 'a', 'n', 'j', 'a', 'r', 'a'], pilihan1: 'neranjara', pilihan2: 'neranjana' },
            { id: 4, pertanyaan: "Sebutan untuk Pasukan Mara yang Pertama (Napsu Indrawi)", jawaban: ['k', 'a', 'm', 'a'], pilihan1: 'kama', pilihan2: 'mara' },
            { id: 5, pertanyaan: "Sebutan untuk Pasukan Mara yang Kedua (Kebencian terhadap Hidup Suci) ", jawaban: ['a', 'r', 'a', 't', 'i'], pilihan1: 'arita', pilihan2: 'arati' }
          ]
        },
        {
          id: 8, name: "senanigama", list: [
            { id: 1, pertanyaan: "Sosok yang Mempersembahkan Nasi Susu kepada Buddha Gotama", jawaban: ['s', 'u', 'j', 'a', 't', 'a'], pilihan1: 'sujata', pilihan2: 'katiya' },
            { id: 2, pertanyaan: "Nama Pohon Tempat Petapa Gotama Berdiam Diri", jawaban: ['b', 'a', 'n', 'y', 'a', 'n'], pilihan1: 'banyan', pilihan2: 'mangga' },
            { id: 3, pertanyaan: "Nama Sungai yang Dituju oleh Petapa Gotama Sambil Membawa Mangkuk Emas yang Didanakan oleh Sujata", jawaban: ['n', 'e', 'r', 'a', 'n', 'j', 'a', 'r', 'a'], pilihan1: 'neranjara', pilihan2: 'neranjana' },
            { id: 4, pertanyaan: "Hari Ketika Sujata Mempersembahkan Nasi Susu kepada Dewa Pohon Banyan", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], pilihan1: 'kathina', pilihan2: 'vesakha' },
            { id: 5, pertanyaan: "Dewa yang Mendanakan Mangkuk Emas kepada Boddhisatta", jawaban: ['g', 'h', 'a', 't', 'i', 'k', 'a', 'r', 'a'], pilihan1: 'ghatikara', pilihan2: 'sahampati' }
          ]
        },
        {
          id: 9, name: "hutan gaya", list: [
            { id: 1, pertanyaan: "Bulan Ketika Petapa Gotama Mencapai Pencerahan", jawaban: ['v', 'e', 's', 'a', 'k', 'h', 'a'], pilihan1: 'vesakha', pilihan2: 'kathina' },
            { id: 2, pertanyaan: "Nama Dewa yang Melarikan Diri dengan Kerucut Kerang Vijayuttara", jawaban: ['s', 'a', 'k', 'k', 'a'], pilihan1: 'sakya', pilihan2: 'sakka' },
            { id: 3, pertanyaan: "Petapa Gotama Mencapai Kebuddhaan di Bawah Pohon ....", jawaban: ['b', 'o', 'd', 'h', 'i'], pilihan1: 'bodhi', pilihan2: 'boddi' },
            { id: 4, pertanyaan: "Sebutan untuk 'Semangat Tanpa Letih'", jawaban: ['v', 'i', 'r', 'i', 'y', 'a'], pilihan1: 'saddha', pilihan2: 'viriya' },
            { id: 5, pertanyaan: "Sebutan untuk 'Perhatian Murni'", jawaban: ['s', 'a', 't', 'i'], pilihan1: 'sati', pilihan2: 'piti' }
          ]
        },
        {
          id: 10, name: "migadaya", list: [
            { id: 1, pertanyaan: "Dana Makanan yang Diterima oleh Sang Buddha dari Tapussa dan Bhallika selain Kue Nasi", jawaban: ['m', 'a', 'd', 'u'], pilihan1: 'gula', pilihan2: 'madu' },
            { id: 2, pertanyaan: "Siswa Awam Pertama Sang Buddha selain Tapussa", jawaban: ['b', 'h', 'a', 'l', 'l', 'i', 'k', 'a'], pilihan1: 'bhallika', pilihan2: 'bhalikka' },
            { id: 3, pertanyaan: "Siswa Awam Pertama Sang Buddha selain Bhallika", jawaban: ['t', 'a', 'p', 'u', 's', 's', 'a'], pilihan1: 'tapussa', pilihan2: 'tappusa' },
            { id: 4, pertanyaan: "Pekerjaan/Profesi dari Tapussa dan Bhallika", jawaban: ['p', 'e', 'd', 'a', 'g', 'a', 'n', 'g'], pilihan1: 'pedagang', pilihan2: 'pengemis' },
            { id: 5, pertanyaan: "Sebutan untuk 'Perasaan'", jawaban: ['v', 'e', 'd', 'a', 'n', 'a'], pilihan1: 'vinana', pilihan2: 'vedana' }
          ]
        },
        {
          id: 11, name: "baranasi", list: [
            { id: 1, pertanyaan: "Nama Putra dari Saudagar Kaya di Baranasi", jawaban: ['y', 'a', 's', 'a'], pilihan1: 'yasa', pilihan2: 'tasa' },
            { id: 2, pertanyaan: "Nama Putra dari Sujata", jawaban: ['y', 'a', 's', 'a'], pilihan1: 'yasa', pilihan2: 'yasi' },
            { id: 3, pertanyaan: "Nama Ibu dari Yasa", jawaban: ['s', 'u', 'j', 'a', 't', 'a'], pilihan1: 'sutaja', pilihan2: 'sujata' },
            { id: 4, pertanyaan: "Lengkapi Pernyataan Berikut!\nYang Terberkahi Ceramah tentang Kedermawanan Disebut ... katha", jawaban: ['d', 'a', 'n', 'a'], pilihan1: 'dana', pilihan2: 'sila' },
            { id: 5, pertanyaan: "Lengkapi Pernyataan Berikut!\Yang Terberkahi Ceramah tentang Moralitas Disebut ... katha", jawaban: ['s', 'i', 'l', 'a'], pilihan1: 'dana', pilihan2: 'sila' }
          ]
        },
        {
          id: 12, name: "hutan bambu", list: [
            { id: 1, pertanyaan: "Raja yang Mempersembahkan Hutan Bambu kepada para Bhikkhu", jawaban: ['b', 'i', 'm', 'b', 'i', 's', 'a', 'r', 'a'], pilihan1: 'bimbisara', pilihan2: 'ajatasatu' },
            { id: 2, pertanyaan: "Tempat Dilaksanakannya Hari Maghapuja ", jawaban: ['v', 'e', 'l', 'u', 'v', 'a', 'n', 'a'], pilihan1: 'jetayana', pilihan2: 'veluvana' },
            { id: 3, pertanyaan: "Sebutan Lain dari Desa Upatissa ", jawaban: ['n', 'a', 'l', 'a', 'k', 'a'], pilihan1: 'nalaka', pilihan2: 'nakala' },
            { id: 4, pertanyaan: "Nama Putra yang Berasal dari Desa Upatissa", jawaban: ['u', 'p', 'a', 't', 'i', 's', 's', 'a'], pilihan1: 'upathisa', pilihan2: 'upatissa' },
            { id: 5, pertanyaan: "Nama Ibu dari Upatissa", jawaban: ['r', 'u', 'p', 'a', 's', 'a', 'r', 'i'], pilihan1: 'rupasari', pilihan2: 'runasari' }
          ]
        },
        {
          id: 13, name: "savatthi", list: [
            { id: 1, pertanyaan: "Bhikkhu yang Terserang Penyakit Kulit (Bisul)", jawaban: ['t', 'i', 's', 's', 'a'], pilihan1: 'tissa', pilihan2: 'tassa' },
            { id: 2, pertanyaan: "Tingkat Kesucian yang Dicapai oleh Bhikkhu Tissa setelah Mendengarkan Khotbah dari Sang Buddha", jawaban: ['a', 'r', 'a', 'h', 'a', 't', 't', 'a'], pilihan1: 'arahatta', pilihan2: 'arahatha' },
            { id: 3, pertanyaan: "Buddha dan Mematahkan Semua Belenggu", jawaban: ['a', 'r', 'a', 'h', 'a', 't', 't', 'a'], pilihan1: 'arahatta', pilihan2: 'arahatha' },
            { id: 4, pertanyaan: "Dewa yang Menjadi Panas Ketika Sang Buddha Difitnah", jawaban: ['s', 'a', 'k', 'k', 'a'], pilihan1: 'yamma', pilihan2: 'sakka' },
            { id: 5, pertanyaan: "Jumlah Tikus yang Diutus oleh Dewa Sakka untuk Menggigit Tali Cincamanavika", jawaban: ['e', 'm', 'p', 'a', 't'], pilihan1: 'empat', pilihan2: 'tujuh' }
          ]
        },
        {
          id: 14, name: "kerajaan kosala", list: [
            { id: 1, pertanyaan: "Wanita Terkenal yang Hidup di Negeri Kuru", jawaban: ['m', 'a', 'g', 'a', 'n', 'd', 'i', 'y', 'a'], pilihan1: 'magandiya', pilihan2: 'magadhiya' },
            { id: 2, pertanyaan: "Negeri di mana Magandiya Berasal", jawaban: ['k', 'u', 'r', 'u'], pilihan1: 'kuru', pilihan2: 'saka' },
            { id: 3, pertanyaan: "Nama Istri dari Raja Udena", jawaban: ['s', 'a', 'm', 'v', 'a', 't', 'i'], pilihan1: 'samavita', pilihan2: 'samavati' },
            { id: 4, pertanyaan: "Nama Raja yang Salah Satu Selirnya Bernama Magandiya ", jawaban: ['u', 'd', 'e', 'n', 'a'], pilihan1: 'udena', pilihan2: 'udana' },
            { id: 5, pertanyaan: "Ratu yang Akan Dibunuh oleh Magandiya dan Pamannya", jawaban: ['s', 'a', 'm', 'v', 'a', 't', 'i'], pilihan1: 'samavati', pilihan2: 'samavta' }
          ]
        },
        {
          id: 15, name: "tavatimsa", list: [
            { id: 1, pertanyaan: "Bulan di mana Sang Buddha ke Surga Tavatimsa ", jawaban: ['a', 's', 'a', 'l', 'h', 'a'], pilihan1: 'asalha', pilihan2: 'katina' },
            { id: 2, pertanyaan: "Surga yang Menjadi Tempat Dilahirkannya Kembali Ratu Mahayama", jawaban: ['t', 'u', 's', 'i', 't', 'a'], pilihan1: 'tusita', pilihan2: 'tasita' },
            { id: 3, pertanyaan: "Bhavana untuk mencapai ketenangan batin", jawaban: ['s', 'a', 'm', 'a', 't', 'h', 'a'], pilihan1: 'samatha', pilihan2: 'samatta' },
            { id: 4, pertanyaan: "Nama alam 33 dewa", jawaban: ['t', 'a', 'v', 'a', 't', 'i', 'm', 's', 'a'], pilihan1: 'tavatissa', pilihan2: 'tavatimsa' },
            { id: 5, pertanyaan: "Sang buddha selama beberapa bulan menetap di surga tavatimsa ", jawaban: ['t', 'i', 'g', 'a'], pilihan1: 'tiga', pilihan2: 'lima' }
          ]
        },
        {
          id: 16, name: "kota bhaddiya", list: [
            { id: 1, pertanyaan: "Kota Kelahiran Visakha", jawaban: ['b', 'h', 'a', 'd', 'd', 'i', 'y', 'a'], pilihan1: 'badhiyya', pilihan2: 'bhaddiya' },
            { id: 2, pertanyaan: "Nama Putri dari Dhananjaya dan Sumanadevi", jawaban: ['v', 'i', 's', 'a', 'k', 'h', 'a'], pilihan1: 'visakha', pilihan2: 'vasakhi' },
            { id: 3, pertanyaan: "Nama Kakek Visakh", jawaban: ['m', 'e', 'n', 'd', 'a', 'k', 'a'], pilihan1: 'mendaka', pilihan2: 'mendhaka' },
            { id: 4, pertanyaan: "Nama Ayah Mertua Visakha", jawaban: ['m', 'i', 'g', 'a', 'r', 'a'], pilihan1: 'miggha', pilihan2: 'migara' },
            { id: 5, pertanyaan: "Nama Menantu Migara", jawaban: ['v', 'i', 's', 'a', 'k', 'h', 'a'], pilihan1: 'visakha', pilihan2: 'visakhi' }
          ]
        },
        {
          id: 17, name: "kerajaan alavi", list: [
            { id: 1, pertanyaan: "Pemimpin Kerajaan Alavi", jawaban: ['a', 'l', 'a', 'v', 'a', 'k', 'a'], pilihan1: 'alakkha', pilihan2: 'alavaka' },
            { id: 2, pertanyaan: "Sosok dari Alavaka ", jawaban: ['v', 'a', 'k', 'k', 'h', 'a'], pilihan1: 'vakkha', pilihan2: 'sakkha' },
            { id: 3, pertanyaan: "Hewan yang Diburu oleh Alavaka saat di Hutan ", jawaban: ['k', 'i', 'j', 'a', 'n', 'g'], pilihan1: 'kijang', pilihan2: 'musang' },
            { id: 4, pertanyaan: "Nama Penjaga Pintu dari Yaksa Alavaka", jawaban: ['g', 'a', 'd', 'r', 'a', 'b', 'a'], pilihan1: 'gadraba', pilihan2: 'gandaba' },
            { id: 5, pertanyaan: "Yaksa Mulia selain Satagira", jawaban: ['h', 'e', 'm', 'a', 'v', 't', 'a'], pilihan1: 'hemavata', pilihan2: 'hemavati' }
          ]
        },
        {
          id: 18, name: "kusinara", list: [
            { id: 1, pertanyaan: "Tempat Sang Buddha Parinibbana", jawaban: ['k', 'u', 's', 'i', 'n', 'a', 'r', 'a'], pilihan1: 'kusigara', pilihan2: 'kusinara' },
            { id: 2, pertanyaan: "Nama putra si pandai besi", jawaban: ['c', 'u', 'n', 'd'], pilihan1: 'canda', pilihan2: 'cunda' },
            { id: 3, pertanyaan: "Nama seorang pangeran Malla yang merupakan siswa Alara Kalama", jawaban: ['p', 'u', 'k', 'k', 'u', 's', 'a'], pilihan1: 'pukkusa', pilihan2: 'pussaku' },
            { id: 4, pertanyaan: "Dana yang dipersembahkan oleh cunda kepada Sang Buddha", jawaban: ['m', 'a', 'k', 'a', 'n', 'a', 'n'], pilihan1: 'makanan', pilihan2: 'minuman' },
            { id: 5, pertanyaan: "Persembahan Pukkusa Kepada Sang Buddha", jawaban: ['j', 'u', 'b', 'a', 'h'], pilihan1: 'pisau', pilihan2: 'jubah' }
          ]
        }
      ]
    }
  }

  componentWillMount() {
    Orientation.lockToLandscape()
  }

  componentDidMount() {
    this.state.listPertanyaan.map((o) => {
      o.list = _.shuffle(o.list)
    })
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
        }, 100);
      }
    }, 100);
  }


  boxHorizontal(position) {
    let { player1, player2, player3, player4 } = this.state;
    let start = position == 'top' ? 16 : 8;
    let end = position == 'top' ? 24 : 0;
    let boxs = [];
    for (let i = start; position == 'top' ? i <= end : i >= end; position == 'top' ? i++ : i--) {
      let data = dataImages.find(function (item) {
        return item.id == i + 1;
      });

      let box = (
        <ImageBackground key={i} style={[styles.box, { backgroundColor: data.categoryId == 50 ? 'yellow' : data.categoryId == 52 ? 'red' : data.categoryId == 53 ? 'green' : data.categoryId == 51 ? 'rgb(30,177,237)' : '#94aa2a' }]} source={data.uri}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.player1, { display: player1.location == i ? 'flex' : 'none' }]} />
            <View style={[styles.player2, { display: player2.location == i ? 'flex' : 'none' }]} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.player3, { display: player3.location == i ? 'flex' : 'none' }]} />
            <View style={[styles.player4, { display: player4.location == i ? 'flex' : 'none' }]} />
          </View>
        </ImageBackground>
      )
      boxs.push(box)
    }
    return boxs;
  }

  boxVertical(position) {
    let { player1, player2, player3, player4 } = this.state;
    let start = position == 'left' ? 15 : 25;
    let end = position == 'left' ? 9 : 31;
    let boxs = [];

    for (let i = start; position == 'left' ? i >= end : i <= end; position == 'left' ? i-- : i++) {
      let data = dataImages.find(function (item) {
        return item.id == i + 1;
      });

      let box = (
        <ImageBackground key={i} style={[styles.box, { backgroundColor: data.categoryId == 50 ? 'yellow' : data.categoryId == 52 ? 'red' : data.categoryId == 53 ? 'green' : data.categoryId == 51 ? 'rgb(30,177,237)' : '#94aa2a' }]} source={data.uri}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.player1, { display: player1.location == i ? 'flex' : 'none' }]} />
            <View style={[styles.player2, { display: player2.location == i ? 'flex' : 'none' }]} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.player3, { display: player3.location == i ? 'flex' : 'none' }]} />
            <View style={[styles.player4, { display: player4.location == i ? 'flex' : 'none' }]} />
          </View>
        </ImageBackground>
      )
      boxs.push(box)
    }
    return boxs;
  }

  onPressRoll() {
    let { random1, random2 } = this.state;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ random1, random2 });
    let random = random1 + random2;

    let testInfo = audioTests.find(function (element) {
      return element.title == `dadu ${random}`;
    });
    if (random1 == random2) {
      testInfo = audioTests.find(function (element) {
        return element.title == `double dadu ${random}`;
      });
    }
    this.playSound(testInfo, this);

    this.setState({ random1, random2, randomNumber: random, run: true })
    setTimeout(() => {
      this.moveCircle(random)
    }, 1000)
  }

  moveCircle(random) {
    let { activePlayer, player1, player2, player3, player4 } = this.state

    if (activePlayer == 1) {
      let interval = setInterval(() => {
        if (player1.penjara) {
          clearInterval(interval)
          this.setState({ run: false })
        } else if (this.state.player1.location == player1.location + random - 1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player1: { ...player1, location: player1.location == 39 ? 0 : this.state.player1.location + 1 } })
      }, 500)
    } else if (activePlayer == 2) {
      let interval = setInterval(() => {
        if (player2.penjara) {
          clearInterval(interval)
          this.setState({ run: false })
        } else if (this.state.player2.location == player2.location + random - 1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player2: { ...player2, location: player2.location == 39 ? 0 : this.state.player2.location + 1 } })
      }, 500)
    } else if (activePlayer == 3) {
      let interval = setInterval(() => {
        if (player3.penjara) {
          clearInterval(interval)
          this.setState({ run: false })
        } else if (this.state.player3.location == player3.location + random - 1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player3: { ...player3, location: player3.location == 39 ? 0 : this.state.player3.location + 1 } })
      }, 500)
    } else {
      let interval = setInterval(() => {
        if (player4.penjara) {
          clearInterval(interval)
          this.setState({ run: false })
        } else if (this.state.player4.location == player4.location + random - 1) {
          clearInterval(interval)
          this.setState({ activePlayer: activePlayer == 4 ? 1 : activePlayer + 1, run: false })
        }
        this.setState({ player4: { ...player4, location: player4.location == 39 ? 0 : this.state.player4.location + 1 } })
      }, 500)
    }
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
          <View style={{ width: 280, height: 210, backgroundColor: '#f8c291' }}>
            <View style={{ width: 100, height: 40, backgroundColor: 'yellow', transform: [{ rotate: '-50deg' }], position: 'absolute', left: 20, top: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>STUDI</Text>
            </View>
            <Text style={{ transform: [{ rotate: '-50deg' }], width: 200, fontSize: 40, fontWeight: 'bold', position: 'absolute', left: 50, top: 70 }}>MODH1st</Text>
            <View style={{ width: 100, height: 40, backgroundColor: 'rgb(30,177,237)', transform: [{ rotate: '-50deg' }], position: 'absolute', right: 20, bottom: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>AKSI</Text>
            </View>
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

  componentDidUpdate(prevProps, prevState) {
    let { activePlayer, listPertanyaan, player1, player2, player3, player4 } = this.state;
    if (prevState.run && !this.state.run) {
      let player = `player${activePlayer - 1}`
      if (activePlayer == 1) {
        player = 'player4';
      }
      let location = this.state[player].location + 1
      let a = _.find(dataImages, function (o) {
        return o.id == location + 1;
      });

      if (a.categoryId == 52) {
        if (activePlayer == 1) {
          this.setState({ player4: { ...player4, penjara: true } })
        } else if (activePlayer == 2) {
          this.setState({ player1: { ...player1, penjara: true } })
        } else if (activePlayer == 3) {
          this.setState({ player2: { ...player2, penjara: true } })
        } else {
          this.setState({ player3: { ...player3, penjara: true } })
        }
      } else if ([50, 51, 53, 54].includes(a.categoryId)) {
        this.setState({ isVisible: false })
      } else {
        let pertanyaan = listPertanyaan[a.categoryId - 1];
        let jawaban = pertanyaan.list[0].jawaban;
        let jawab = _.clone(jawaban);
        jawab[0] = "";
        jawab[1] = "";
        jawab[2] = "";
        this.setState({ jawabanUser: jawab, pertanyaanActive: pertanyaan })
        this.setState({ isVisible: true })
        console.log('a: ', a);

        this.playSound(a, this);
      }
    }
  }

  onJawab() {
    let { pilihan, karakter, pertanyaanActive, activePlayer, player1, player2, player3, player4, jawabanUser } = this.state

    let jawaban = pertanyaanActive.list[0].jawaban;
    let benar = false;
    let point = 0
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

    pertanyaanActive.list.shift()

    if (activePlayer == 1) {
      this.setState({ player4: { ...player4, score: player4.score + point } })
    } else if (activePlayer == 2) {
      this.setState({ player1: { ...player1, score: player1.score + point } })

    } else if (activePlayer == 3) {
      this.setState({ player2: { ...player2, score: player2.score + point } })
    } else {
      this.setState({ player3: { ...player3, score: player3.score + point } })
    }

    this.setState({
      jawabanUser: [],
      karakter: false,
      pilihan: false,
      pilih: '',
      benar,
      isJawab: true,
      isTrue
    })
    setTimeout(() => {
      this.setState({ isVisible: false, isJawab: false })
    }, 2000)
  }

  renderModal() {
    let { listPertanyaan, pertanyaanActive, isVisible, karakter, pilihan, pilih, isJawab, benar } = this.state

    let pertanyaan = listPertanyaan[0];
    if (!_.isEmpty(pertanyaanActive)) {
      pertanyaan = pertanyaanActive;
    }

    pertanyaan = pertanyaan.list[0];

    let enabled = true;

    let kotak = []
    for (let index = 0; index < pertanyaan.jawaban.length; index++) {
      if (karakter && pertanyaan.karakter[index]) {
        kotak.push(
          <TextInput
            key={index}
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

        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          {pertanyaan.karakter && <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <TouchableOpacity
              style={{
                borderColor: 'green', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
              }
              }
              onPress={() => this.setState({ karakter: true })}
            >
              <View style={{ backgroundColor: karakter ? 'green' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
            </TouchableOpacity>
            <Text>Bantuan Karakter</Text>
          </View>}

          <TouchableOpacity disabled={!enabled} style={{ padding: 10, backgroundColor: enabled ? 'rgb(0,115,195)' : 'grey', borderRadius: 5 }} onPress={() => this.onJawab()}>
            <Text style={{ color: enabled ? '#FFF' : '#000', fontWeight: 'bold' }}>JAWAB</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
            <TouchableOpacity
              style={{
                borderColor: 'green', borderWidth: 2, width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10
              }}
              onPress={() => this.setState({ pilihan: true })}
            >
              <View style={{ backgroundColor: pilihan ? 'green' : 'transparent', width: 10, height: 10, borderRadius: 5 }} />
            </TouchableOpacity>
            <Text>Bantuan Pilihan</Text>
          </View>
        </View>
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

  render() {
    let { random1, random2, activePlayer, run, player1, player2, player3, player4 } = this.state;

    return (
      <ImageBackground style={styles.container} source={require('./assets/images/backgroundscreen.jpg')} blurRadius={2}>
        <View style={{ justifyContent: 'space-between' }}>
          <View style={styles.boxContainer}>
            <View style={{ width: '100%', height: 35, backgroundColor: activePlayer == 1 ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
            <View style={styles.boxImage}>
              <Image style={styles.imageUser} source={require('./assets/images/pion_jubah_merah.png')} />
            </View>
            <Text style={styles.boxValue}>{player1.score}</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={{ width: '100%', height: 35, backgroundColor: activePlayer == 2 ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
            <View style={styles.boxImage}>
              <Image style={styles.imageUser} source={require('./assets/images/pion_jubah_coklat_tua.png')} />
            </View>
            <Text style={styles.boxValue}>{player2.score}</Text>
          </View>
          <View style={styles.boxContainer}>
            <View style={{ width: '100%', height: 35, backgroundColor: activePlayer == 3 ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
            <View style={styles.boxImage}>
              <Image style={styles.imageUser} source={require('./assets/images/pion_jubah_abu_abu.png')} />
            </View>
            <Text style={styles.boxValue}>{player3.score}</Text>
          </View>
        </View>
        {this.boardRender()}

        <View style={{ justifyContent: 'space-between' }}>
          <View style={styles.boxContainer}>
            <View style={{ width: '100%', height: 35, backgroundColor: activePlayer == 4 ? 'transparent' : 'rgba(123,123,123,0.8)', borderRadius: 40, position: 'absolute' }} />
            <View style={styles.boxImage}>
              <Image style={styles.imageUser} source={require('./assets/images/pion_jubah_jingga.png')} />
            </View>
            <Text style={styles.boxValue}>{player4.score}</Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 50, height: 50, marginRight: 5 }} source={dice[random1 - 1]} />
              <Image style={{ width: 50, height: 50, marginLeft: 5 }} source={dice[random2 - 1]} />
            </View>
            <TouchableOpacity disabled={run} onPress={() => this.onPressRoll()} style={{ width: 100, paddingVertical: 5, backgroundColor: run ? 'grey' : 'red', borderRadius: 5, alignItems: 'center', marginTop: 20 }}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>ROLL</Text>
            </TouchableOpacity>
          </View>

          <View />
        </View>

        {this.renderModal()}

        {/* <View style={{alignSelf: 'center', height: 80, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Player {activePlayer} Play</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', display: run ? 'flex' : 'none'}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{random1}</Text>
            <Text>+</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{random2}</Text>
          </View>
          <Text style={{fontSize: 12, fontWeight: 'bold', margin: 5}}>{run ? `${randomNumber} Langkah` : ''}</Text>
          <TouchableOpacity disabled={run} onPress={() => this.onPressRoll()} style={{ width: 100, paddingVertical: 5, backgroundColor: run ? 'grey' : '#3c6382', borderRadius: 5, alignItems : 'center'}}>
            <Text style={{ color: '#fff', fontWeight: 'bold'}}>ROLL</Text>
          </TouchableOpacity>
        </View> */}


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
  player1: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 1
  },
  player2: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(112, 60, 29)',
    borderRadius: 5,
    margin: 1
  },
  player3: {
    width: 10,
    height: 10,
    backgroundColor: 'rgb(218,212,216)',
    borderRadius: 5,
    margin: 1
  },
  player4: {
    width: 10,
    height: 10,
    backgroundColor: '#FF7F00',
    borderRadius: 5,
    margin: 1
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
    backgroundColor: '#FFF',
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
  }
});

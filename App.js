import React, { Component } from 'react';
import { ImageBackground, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
  { id: 9, name: 'sugati', uri: require('./assets/images/kotak_surga.jpg'), url: {}, categoryId: 53 },
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
  { id: 25, name: 'empat apaya', uri: require('./assets/images/kotak_apaya.jpg'), url: {}, categoryId: 52 },
  { id: 26, name: 'kota bhaddiya', uri: require('./assets/images/kota_bhaddiya1.jpg'), url: require('./assets/sounds/kota_badhiya_16.m4a'), categoryId: 16 },
  { id: 27, name: 'kerajaan alavi', uri: require('./assets/images/kerajaan_alavi_17.jpg'), categoryId: 17 },
  { id: 28, name: 'studi', uri: {}, url: {}, categoryId: 50 },
  { id: 29, name: 'kusinara', uri: require('./assets/images/kusinara1.jpg'), url: require('./assets/sounds/kusinara_18.m4a'), categoryId: 18 },
  { id: 30, name: 'tavatimsa', uri: require('./assets/images/tavatimsa_15.jpg'), url: require('./assets/sounds/tavatimsa_15.m4a'), categoryId: 15 },
  { id: 31, name: 'aksi', uri: {}, url: {}, categoryId: 51 },
  { id: 32, name: 'savatthi', uri: require('./assets/images/savatthi_13.jpg'), url: require('./assets/sounds/savatti_13.m4a'), categoryId: 13 },
]

export default class App extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      activePlayer: 0,
      randomNumber: 0,
      random1: 1,
      random2: 1,
      run: false,
      jawabanUser: [],
      isVisible: false,
      isVisibleAksi: false,
      isVisibleBebas: false,
      isBebasPilih: false,
      aksi: [],
      karakter: false,
      pilihan: false,
      pilih: '',
      benar: false,
      isJawab: false,
      isTrue: false,
      players: [],
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
            { id: 1, pertanyaan: "Tempat Petapa Gotama Menyiksa Diri", jawaban: ['u', 'r', 'u', 'v', 'e', 'l', 'a'], pilihan1: 'uruvela', pilihan2: 'urumala' },
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
      ],
      listAksi: [
        { category: 0, description: 'Maju Sampai START' },
        { category: 1, description: 'Maju 8 (Delapan) Langkah', langkah: 8 },
        { category: 1, description: 'Maju 3 (Delapan) Langkah', langkah: 8 },
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
      ]
    }
  }

  componentWillMount() {
    if (window.sounds) {
      window.sounds.stop()
      window.sounds.setCurrentTime(0.0)
    }
  }

  componentDidMount() {
    let { players } = this.props.navigation.state.params

    this.setState({ players });

    this.state.listPertanyaan.map((o) => {
      o.list = _.shuffle(o.list)
    })

    _.shuffle(this.state.listAksi);
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

    this.setState({ players })
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
            <ImageBackground style={[styles.box, { backgroundColor: data.categoryId == 50 ? 'yellow' : data.categoryId == 51 ? 'rgb(30,177,237)' : data.categoryId == 54 ? 'green' : '#FFF' }]} source={data.uri}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[0] && !players[0].stop && players[0].location == i ? 'flex' : 'none',
                  borderWidth: players[0] && players[0].location == i ? 1 : 0,
                  backgroundColor: players[0].image.color
                }]} />
                <View style={[styles.player, {
                  display: players[1] && !players[1].stop && players[1].location == i ? 'flex' : 'none',
                  borderWidth: players[1] && players[1].location == i ? 1 : 0,
                  backgroundColor: players[1].image.color
                }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[2] && !players[2].stop && !players[2].stop && players[2].location == i ? 'flex' : 'none',
                  borderWidth: players[2] && players[2].location == i ? 1 : 0,
                  backgroundColor: players[2] ? players[2].image.color : 'transparent'
                }]} />
                <View style={[styles.player, {
                  display: players[3] && !players[3].stop && players[3].location == i ? 'flex' : 'none',
                  borderWidth: players[3] && players[3].location == i ? 1 : 0,
                  backgroundColor: players[3] ? players[3].image.color : 'transparent'
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
            <ImageBackground style={[styles.box, { backgroundColor: data.categoryId == 50 ? 'yellow' : data.categoryId == 51 ? 'rgb(30,177,237)' : data.categoryId == 54 ? 'green' : '#FFF' }]} source={data.uri}>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[0] && !players[0].stop && players[0].location == i ? 'flex' : 'none',
                  borderWidth: players[0] && players[0].location == i ? 1 : 0,
                  backgroundColor: players[0].image.color
                }]} />
                <View style={[styles.player, {
                  display: players[1] && !players[1].stop && players[1].location == i ? 'flex' : 'none',
                  borderWidth: players[1] && players[1].location == i ? 1 : 0,
                  backgroundColor: players[1].image.color
                }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={[styles.player, {
                  display: players[2] && !players[2].stop && players[2].location == i ? 'flex' : 'none',
                  borderWidth: players[2] && players[2].location == i ? 1 : 0,
                  backgroundColor: players[2] ? players[2].image.color : 'transparent'
                }]} />
                <View style={[styles.player, {
                  display: players[3] && !players[3].stop && players[3].location == i ? 'flex' : 'none',
                  borderWidth: players[3] && players[3].location == i ? 1 : 0,
                  backgroundColor: players[3] ? players[3].image.color : 'transparent'
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
    let { players, activePlayer, random1, random2 } = this.state;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ random1, random2 });
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

      this.setState({ random1, random2, randomNumber: random, run: true })
      setTimeout(() => {
        this.moveCircle(random)
      }, 1000)
    }
  }

  moveCircle(random) {
    let { activePlayer, players } = this.state
    let player = _.clone(players[activePlayer]);

    let interval = setInterval(() => {
      if (players[activePlayer].isPenjara) {
        clearInterval(interval)
        this.setState({ run: false })
      } else if (players[activePlayer].location == player.location + random - 1) {
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

  openModal() {
    let { activePlayer, listPertanyaan, players, listAksi, aksi } = this.state;

    let player = players[activePlayer];
    let location = player.location + 2;

    let active;
    if (activePlayer == players.length - 1) {
      active = 0;
    } else {
      active = activePlayer + 1;
    }

    let item = _.find(dataImages, function (obj) {
      return obj.id == location;
    });

    if (item.categoryId == 51) {
      let random = Math.floor(Math.random() * listAksi.length) + 1;
      aksi = listAksi[random];
      this.setState({ aksi, isVisibleAksi: true })
    } else if (item.categoryId == 52) {
      players[activePlayer].isPenjara = true;
      this.setState({ players, activePlayer: active })
      this.setState({ players })
    } else if (item.categoryId == 54) {
      this.setState({ isVisibleBebas: true, isBebasPilih: true })
    } else if ([50, 53].includes(item.categoryId)) {
      this.setState({ isVisible: false, activePlayer: active })
    } else {
      let pertanyaan = listPertanyaan[item.categoryId];
      let jawaban = pertanyaan.list[0].jawaban;
      let jawab = _.clone(jawaban);
      jawab[0] = '';
      jawab[1] = '';
      jawab[2] = '';
      this.playSound(item, this);

      this.setState({ jawabanUser: jawab, pertanyaanActive: pertanyaan, isVisible: true })
    }
  }

  onJawab(nilai) {
    let { pilihan, karakter, pertanyaanActive, activePlayer, players, jawabanUser } = this.state
    let point = 0;

    if (nilai) {
      point = nilai;
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
      if (players[activePlayer].score <= 0) {
        players[activePlayer].stop = true;
      }

      pertanyaanActive.list.shift()
      this.setState({
        benar,
        isTrue
      })
    }

    players[activePlayer].score += point;

    this.setState({
      players,
      jawabanUser: [],
      karakter: false,
      pilihan: false,
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
    this.setState({ isVisibleAksi: false })
  }

  renderModalStudiAksi() {
    let { isVisibleAksi, aksi } = this.state;
    return (
      <Modal
        isVisible={isVisibleAksi}
        style={{ flex: 1, alignItems: 'center' }}
      >
        <View style={{ backgroundColor: '#FFF', alignItems: 'center', borderRadius: 10, padding: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
            {aksi.description}
          </Text>
          <TouchableOpacity style={{ padding: 10, backgroundColor: 'rgb(0,115,195)', borderRadius: 5, marginTop: 20 }} onPress={() => this.onJawabAksi(aksi)}>
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>JAWAB</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>JAWAB</Text>
          </TouchableOpacity>
        </View>
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
      <ImageBackground style={styles.container} source={require('./assets/images/backgroundscreen.jpg')} blurRadius={2}>
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
        {this.renderModalStudiAksi()}
        {this.renderModalBebas()}

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
  }
});

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
const allCountries = [
  [
    'Afghanistan (‫افغانستان‬‎)',
    'translation': {
      'it': 'Afghanistan',
    },
    'af',
    '93',
  ],
  [
    'Albania (Shqipëri)',
    'translation': {
      'it': 'Albania',
    },
    'al',
    '355',
  ],
  [
    'Algeria (‫الجزائر‬‎)',
    'translation': {
      'it': 'Algeria',
    },
    'dz',
    '213',
  ],
  [
    'American Samoa',
    'translation': {
      'it': 'Samoa Americane',
    },
    'as',
    '1684',
  ],
  [
    'Andorra',
    'translation': {
      'it': 'Andorra',
    },
    'ad',
    '376',
  ],
  [
    'Angola',
    'translation': {
      'it': 'Angola',
    },
    'ao',
    '244',
  ],
  [
    'Anguilla',
    'translation': {
      'it': 'SAnguilla',
    },
    'ai',
    '1264',
  ],
  [
    'Antigua and Barbuda',
    'translation': {
      'it': 'Antigua e Barbuda',
    },
    'ag',
    '1268',
  ],
  [
    'Argentina',
    'translation': {
      'it': 'Argentina',
    },
    'ar',
    '54',
  ],
  [
    'Armenia (Հայաստան)',
    'translation': {
      'it': 'Armenia',
    },
    'am',
    '374',
  ],
  [
    'Aruba',
    'translation': {
      'it': 'Aruba',
    },
    'aw',
    '297',
  ],
  [
    'Australia',
    'translation': {
      'it': 'Australia',
    },
    'au',
    '61',
    '+.. ... ... ...',
  ],
  [
    'Austria (Österreich)',
    'translation': {
      'it': 'Austria',
    },
    'at',
    '43',
  ],
  [
    'Azerbaijan (Azərbaycan)',
    'translation': {
      'it': 'Azerbaigian',
    },
    'az',
    '994',
  ],
  [
    'Bahamas',
    'translation': {
      'it': 'Bahamas',
    },
    'bs',
    '1242',
  ],
  [
    'Bahrain (‫البحرين‬‎)',
    'translation': {
      'it': 'Bahrein',
    },
    'bh',
    '973',
  ],
  [
    'Bangladesh (বাংলাদেশ)',
    'translation': {
      'it': 'Bagladesh',
    },
    'bd',
    '880',
  ],
  [
    'Barbados',
    'translation': {
      'it': 'Barbados',
    },
    'bb',
    '1246',
  ],
  [
    'Belarus (Беларусь)',
    'translation': {
      'it': 'Bielorussia',
    },
    'by',
    '375',
  ],
  [
    'Belgium (België)',
    'translation': {
      'it': 'Belgio',
    },
    'be',
    '32',
    '+.. ... .. .. ..',
  ],
  [
    'Belize',
    'translation': {
      'it': 'Belize',
    },
    'bz',
    '501',
  ],
  [
    'Benin (Bénin)',
    'translation': {
      'it': 'Benin',
    },
    'bj',
    '229',
  ],
  [
    'Bermuda',
    'translation': {
      'it': 'Bermuda',
    },
    'bm',
    '1441',
  ],
  [
    'Bhutan (འབྲུག)',
    'translation': {
      'it': 'Bhutan',
    },
    'bt',
    '975',
  ],
  [
    'Bolivia',
    'translation': {
      'it': 'Bolivia',
    },
    'bo',
    '591',
  ],
  [
    'Bosnia and Herzegovina (Босна и Херцеговина)',
    'translation': {
      'it': 'Bosnia ed Erzegovina',
    },
    'ba',
    '387',
  ],
  [
    'Botswana',
   'translation': {
      'it': 'Botswana',
    },
    'bw',
    '267',
  ],
  [
    'Brazil (Brasil)',
    'translation': {
      'it': 'Brasile',
    },
    'br',
    '55',
  ],
  [
    'British Indian Ocean Territory',
    'translation': {
      'it': 'Territorio britannico dell\'Oceano Indiano',
    },
    'io',
    '246',
  ],
  [
    'British Virgin Islands',
    'translation': {
      'it': 'Isole Vergini britanniche',
    },
    'vg',
    '1284',
  ],
  [
    'Brunei',
    'translation': {
      'it': 'Brunei',
    },
    'bn',
    '673',
  ],
  [
    'Bulgaria (България)',
    'translation': {
      'it': 'Bulgraia',
    },
    'bg',
    '359',
  ],
  [
    'Burkina Faso',
    'translation': {
      'it': 'Burkina Faso',
    },
    'bf',
    '226',
  ],
  [
    'Burundi (Uburundi)',
    'translation': {
      'it': 'Burundi',
    },
    'bi',
    '257',
  ],
  [
    'Cambodia (កម្ពុជា)',
    'translation': {
      'it': 'Cambogia',
    },
    'kh',
    '855',
  ],
  [
    'Cameroon (Cameroun)',
    'translation': {
      'it': 'Camerun',
    },
    'cm',
    '237',
  ],
  [
    'Canada',
    'translation': {
      'it': 'Canada',
    },
    'ca',
    '1',
    '+. (...) ...-....',
    1,
    ['204', '236', '249', '250', '289', '306', '343', '365', '387', '403',
     '416', '418', '431', '437', '438', '450', '506', '514', '519', '548',
     '579', '581', '587', '604', '613', '639', '647', '672', '705', '709',
     '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905'],
  ],
  [
    'Cape Verde (Kabu Verdi)',
    'translation': {
      'it': 'Capo Verde',
    },
    'cv',
    '238',
  ],
  [
    'Caribbean Netherlands',
    'translation': {
      'it': 'Isole BES',
    },
    'bq',
    '599',
    '',
    1,
  ],
  [
    'Cayman Islands',
    'translation': {
      'it': 'Isole Cayman',
    },
    'ky',
    '1345',
  ],
  [
    'Central African Republic (République centrafricaine)',
    'translation': {
      'it': 'Repubblica Centrafricana',
    },
    'cf',
    '236',
  ],
  [
    'Chad (Tchad)',
    'translation': {
      'it': 'Ciad',
    },
    'td',
    '235',
  ],
  [
    'Chile',
    'translation': {
      'it': 'Cile',
    },
    'cl',
    '56',
  ],
  [
    'China (中国)',
    'translation': {
      'it': 'Cina',
    },
    'cn',
    '86',
    '+.. ..-........',
  ],
  [
    'Colombia',
    'translation': {
      'it': 'Colombia',
    },
    'co',
    '57',
  ],
  [
    'Comoros (‫جزر القمر‬‎)',
    'translation': {
      'it': 'Comore',
    },
    'km',
    '269',
  ],
  [
    'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
    'translation': {
      'it': 'Repubblica Democratica del Congo',
    },
    'cd',
    '243',
  ],
  [
    'Congo (Republic) (Congo-Brazzaville)',
    'translation': {
      'it': 'Repubblica del Congo',
    },
    'cg',
    '242',
  ],
  [
    'Cook Islands',
    'translation': {
      'it': 'Isole Cook',
    },
    'ck',
    '682',
  ],
  [
    'Costa Rica',
    'translation': {
      'it': 'Costa Rica',
    },
    'cr',
    '506',
    '+... ....-....',
  ],
  [
    'Côte d’Ivoire',
    'translation': {
      'it': 'Costa d\'Avorio',
    },
    'ci',
    '225',
  ],
  [
    'Croatia (Hrvatska)',
    'translation': {
      'it': 'Croazia',
    },
    'hr',
    '385',
  ],
  [
    'Cuba',
    'translation': {
      'it': 'Cuba',
    },
    'cu',
    '53',
  ],
  [
    'Curaçao',
    'translation': {
      'it': 'Curaçao',
    },
    'cw',
    '599',
    '',
    0,
  ],
  [
    'Cyprus (Κύπρος)',
    'translation': {
      'it': 'Cipro',
    },
    'cy',
    '357',
  ],
  [
    'Czech Republic (Česká republika)',
    'translation': {
      'it': 'Repubblica Ceca',
    },
    'cz',
    '420',
  ],
  [
    'Denmark (Danmark)',
    'translation': {
      'it': 'Danimarca',
    },
    'dk',
    '45',
    '+.. .. .. .. ..',
  ],
  [
    'Djibouti',
    'translation': {
      'it': 'Gibuti',
    },
    'dj',
    '253',
  ],
  [
    'Dominica',
    'translation': {
      'it': 'Dominica',
    },
    'dm',
    '1767',
  ],
  [
    'Dominican Republic (República Dominicana)',
    'translation': {
      'it': 'Repubblica Domenicana',
    },
    'do',
    '1',
    '',
    2,
    ['809', '829', '849'],
  ],
  [
    'Ecuador',
    'translation': {
      'it': 'Ecuador',
    },
    'ec',
    '593',
  ],
  [
    'Egypt (‫مصر‬‎)',
    'translation': {
      'it': 'Egitto',
    },
    'eg',
    '20',
  ],
  [
    'El Salvador',
    'translation': {
      'it': 'El Salvador',
    },
    'sv',
    '503',
    '+... ....-....',
  ],
  [
    'Equatorial Guinea (Guinea Ecuatorial)',
    'translation': {
      'it': 'Guinea Equatoriale',
    },
    'gq',
    '240',
  ],
  [
    'Eritrea',
    'translation': {
      'it': 'Eritrea',
    },
    'er',
    '291',
  ],
  [
    'Estonia (Eesti)',
    'translation': {
      'it': 'Estonia',
    },
    'ee',
    '372',
  ],
  [
    'Ethiopia',
    'translation': {
      'it': 'Etiopia',
    },
    'et',
    '251',
  ],
  [
    'Falkland Islands (Islas Malvinas)',
    'translation': {
      'it': 'Isole Falkland',
    },
    'fk',
    '500',
  ],
  [
    'Faroe Islands (Føroyar)',
    'translation': {
      'it': 'Isole Faroe',
    },
    'fo',
    '298',
  ],
  [
    'Fiji',
    'translation': {
      'it': 'Figi',
    },
    'fj',
    '679',
  ],
  [
    'Finland (Suomi)',
    'translation': {
      'it': 'Finlandia',
    },
    'fi',
    '358',
    '+... .. ... .. ..',
  ],
  [
    'France',
    'translation': {
      'it': 'Francia',
    },
    'fr',
    '33',
    '+.. . .. .. .. ..',
  ],
  [
    'French Guiana (Guyane française)',
    'translation': {
      'it': 'Guyana francese',
    },
    'gf',
    '594',
  ],
  [
    'French Polynesia (Polynésie française)',
    'translation': {
      'it': 'Polinesia francese',
    },
    'pf',
    '689',
  ],
  [
    'Gabon',
    'translation': {
      'it': 'Gabon',
    },
    'ga',
    '241',
  ],
  [
    'Gambia',
    'translation': {
      'it': 'Gambia',
    },
    'gm',
    '220',
  ],
  [
    'Georgia (საქართველო)',
    'translation': {
      'it': 'Georgia',
    },
    'ge',
    '995',
  ],
  [
    'Germany (Deutschland)',
    'translation': {
      'it': 'Germania',
    },
    'de',
    '49',
    '+.. ... .......',
  ],
  [
    'Ghana (Gaana)',
    'translation': {
      'it': 'Ghana',
    },
    'gh',
    '233',
  ],
  [
    'Gibraltar',
    'translation': {
      'it': 'Gibilterra',
    },
    'gi',
    '350',
  ],
  [
    'Greece (Ελλάδα)',
    'translation': {
      'it': 'Grecia',
    },
    'gr',
    '30',
  ],
  [
    'Greenland (Kalaallit Nunaat)',
    'translation': {
      'it': 'Groenlandia',
    },
    'gl',
    '299',
  ],
  [
    'Grenada',
    'translation': {
      'it': 'Grenada',
    },'gd',
    '1473',
  ],
  [
    'Guadeloupe',
    'translation': {
      'it': 'Guadalupa',
    },
    'gp',
    '590',
    '',
    0,
  ],
  [
    'Guam',
    'translation': {
      'it': 'Guam',
    },
    'gu',
    '1671',
  ],
  [
    'Guatemala',
    'translation': {
      'it': 'Guatemala',
    },
    'gt',
    '502',
    '+... ....-....',
  ],
  [
    'Guinea (Guinée)',
    'translation': {
      'it': 'Guinea',
    },
    'gn',
    '224',
  ],
  [
    'Guinea-Bissau (Guiné Bissau)',
    'translation': {
      'it': 'Guinea-Bissau',
    },
    'gw',
    '245',
  ],
  [
    'Guyana',
    'translation': {
      'it': 'Guyana',
    },
    'gy',
    '592',
  ],
  [
    'Haiti',
    'translation': {
      'it': 'Haiti',
    },
    'ht',
    '509',
    '+... ....-....',
  ],
  [
    'Honduras',
    'translation': {
      'it': 'Honduras',
    },
    'hn',
    '504',
  ],
  [
    'Hong Kong (香港)',
    'translation': {
      'it': 'Hong Kong',
    },
    'hk',
    '852',
    '+... .... ....',
  ],
  [
    'Hungary (Magyarország)',
    'translation': {
      'it': 'Ungeria',
    },
    'hu',
    '36',
  ],
  [
    'Iceland (Ísland)',
    'translation': {
      'it': 'Islanda',
    },
    'is',
    '354',
    '+... ... ....',
  ],
  [
    'India (भारत)',
    'translation': {
      'it': 'India',
    },
    'in',
    '91',
    '+.. .....-.....',
  ],
  [
    'Indonesia',
    'translation': {
      'it': 'Indonesia',
    },
    'id',
    '62',
  ],
  [
    'Iran (‫ایران‬‎)',
    'translation': {
      'it': 'Indonesia',
    },
    'ir',
    '98',
  ],
  [
    'Iraq (‫العراق‬‎)',
    'translation': {
      'it': 'Iraq',
    },
    'iq',
    '964',
  ],
  [
    'Ireland',
    'translation': {
      'it': 'Irlanda',
    },
    'ie',
    '353',
    '+... .. .......',
  ],
  [
    'Israel (‫ישראל‬‎)',
    'translation': {
      'it': 'Israele',
    },
    'il',
    '972',
  ],
  [
    'Italy (Italia)',
    
    'translation': {
      'it': 'Italia',
    },'it',
    '39',
    '+.. ... ......',
    0,
  ],
  [
    'Jamaica',
    'translation': {
      'it': 'Giamaica',
    },
    'jm',
    '1876',
  ],
  [
    'Japan (日本)',
    'translation': {
      'it': 'Giappone',
    },
    'jp',
    '81',
    '+.. ... .. ....',
  ],
  [
    'Jordan (‫الأردن‬‎)',
    'translation': {
      'it': 'Giordania',
    },
    'jo',
    '962',
  ],
  [
    'Kazakhstan (Казахстан)',
    'translation': {
      'it': 'Kazakistan',
    },
    'kz',
    '7',
    '+. ... ...-..-..',
    1,
  ],
  [
    'Kenya',
    'translation': {
      'it': 'Kenya',
    },
    'ke',
    '254',
  ],
  [
    'Kiribati',
    'translation': {
      'it': 'Kiribati',
    },
    'ki',
    '686',
  ],
  [
    'Kuwait (‫الكويت‬‎)',
    'translation': {
      'it': 'Kuwait',
    },
    'kw',
    '965',
  ],
  [
    'Kyrgyzstan (Кыргызстан)',
    'translation': {
      'it': 'Kirghizistan',
    },
    'kg',
    '996',
  ],
  [
    'Laos (ລາວ)',
    'translation': {
      'it': 'Laos',
    },
    'la',
    '856',
  ],
  [
    'Latvia (Latvija)',
    'translation': {
      'it': 'Lettonia',
    },
    'lv',
    '371',
  ],
  [
    'Lebanon (‫لبنان‬‎)',
    'translation': {
      'it': 'Libano',
    },
    'lb',
    '961',
  ],
  [
    'Lesotho',
    'translation': {
      'it': 'Lesotho',
    },
    'ls',
    '266',
  ],
  [
    'Liberia',
    'translation': {
      'it': 'Liberia',
    },
    'lr',
    '231',
  ],
  [
    'Libya (‫ليبيا‬‎)',
    'translation': {
      'it': 'Libia',
    },
    'ly',
    '218',
  ],
  [
    'Liechtenstein',
    'translation': {
      'it': 'Liechtenstein',
    },
    'li',
    '423',
  ],
  [
    'Lithuania (Lietuva)',
    'translation': {
      'it': 'Lituania',
    },
    'lt',
    '370',
  ],
  [
    'Luxembourg',
    'translation': {
      'it': 'Lussemburgo',
    },
    'lu',
    '352',
  ],
  [
    'Macau (澳門)',
    'translation': {
      'it': 'Macao',
    },
    'mo',
    '853',
  ],
  [
    'Macedonia (FYROM) (Македонија)',
    'translation': {
      'it': 'Macedonia',
    },
    'mk',
    '389',
  ],
  [
    'Madagascar (Madagasikara)',
    'translation': {
      'it': 'Madacascar',
    },
    'mg',
    '261',
  ],
  [
    'Malawi',
    'translation': {
      'it': 'Malawi',
    },
    'mw',
    '265',
  ],
  [
    'Malaysia',
    'translation': {
      'it': 'Malesia',
    },
    'my',
    '60',
    '+.. ..-....-....',
  ],
  [
    'Maldives',
    'translation': {
      'it': 'Maldive',
    },
    'mv',
    '960',
  ],
  [
    'Mali',
    'translation': {
      'it': 'Mali',
    },
    'ml',
    '223',
  ],
  [
    'Malta',
    'translation': {
      'it': 'Malta',
    },
    'mt',
    '356',
  ],
  [
    'Marshall Islands',
    'translation': {
      'it': 'Isole Marshall',
    },
    'mh',
    '692',
  ],
  [
    'Martinique',
    'translation': {
      'it': 'Martinica',
    },
    'mq',
    '596',
  ],
  [
    'Mauritania (‫موريتانيا‬‎)',
    'translation': {
      'it': 'Mauritiana',
    },
    'mr',
    '222',
  ],
  [
    'Mauritius (Moris)',
    'translation': {
      'it': 'Mauritius',
    },
  'mu',
    '230',
  ],
  [
    'Mexico (México)',
    'translation': {
      'it': 'Messico',
    },
    'mx',
    '52',
  ],
  [
    'Micronesia',
    'translation': {
      'it': 'Micronesia',
    },
    'fm',
    '691',
  ],
  [
    'Moldova (Republica Moldova)',
    'translation': {
      'it': 'Moldavia',
    },
    'md',
    '373',
  ],
  [
    'Monaco',
    'translation': {
      'it': 'Monaco',
    },
    'mc',
    '377',
  ],
  [
    'Mongolia (Монгол)',
    'translation': {
      'it': 'Mongolia',
    },
    'mn',
    '976',
  ],
  [
    'Montenegro (Crna Gora)',
    'translation': {
      'it': 'Montenegro',
    },
    'me',
    '382',
  ],
  [
    'Montserrat',
    'translation': {
      'it': 'Montserrat',
    },
    'ms',
    '1664',
  ],
  [
    'Morocco (‫المغرب‬‎)',
    'translation': {
      'it': 'Marocco',
    },
    'ma',
    '212',
  ],
  [
    'Mozambique (Moçambique)',
    'translation': {
      'it': 'Mozambico',
    },
    'mz',
    '258',
  ],
  [
    'Myanmar (Burma) (မြန်မာ)',
    'translation': {
      'it': 'Birmania',
    },
    'mm',
    '95',
  ],
  [
    'Namibia (Namibië)',
    'translation': {
      'it': 'Namibia',
    },
    'na',
    '264',
  ],
  [
    'Nauru',
    'translation': {
      'it': 'Nauru',
    },
    'nr',
    '674',
  ],
  [
    'Nepal (नेपाल)',
    'translation': {
      'it': 'Nepal',
    },
    'np',
    '977',
  ],
  [
    'Netherlands (Nederland)',
    'translation': {
      'it': 'Paesi Bassi',
    },
    'nl',
    '31',
    '+.. .. ........',
  ],
  [
    'New Caledonia (Nouvelle-Calédonie)',
    'translation': {
      'it': 'PNuova Caledonia',
    },
    'nc',
    '687',
  ],
  [
    'New Zealand',
    'translation': {
      'it': 'Nuova Zelanda',
    },
    'nz',
    '64',
    '+.. ...-...-....',
  ],
  [
    'Nicaragua',
    'translation': {
      'it': 'Nicaragua',
    },
    'ni',
    '505',
  ],
  [
    'Niger (Nijar)',
    'translation': {
      'it': 'Niger',
    },
    'ne',
    '227',
  ],
  [
    'Nigeria',
    'translation': {
      'it': 'Nigeria',
    },
    'ng',
    '234',
  ],
  [
    'Niue',
    'translation': {
      'it': 'Niue',
    },
    'nu',
    '683',
  ],
  [
    'Norfolk Island',
    'translation': {
      'it': 'Isola Norfolk',
    },
    'nf',
    '672',
  ],
  [
    'North Korea (조선 민주주의 인민 공화국)',
    'translation': {
      'it': 'Corea del Nord',
    },
    'kp',
    '850',
  ],
  [
    'Northern Mariana Islands',
    'translation': {
      'it': 'Isole Marianne Settentrionali',
    },
    'mp',
    '1670',
  ],
  [
    'Norway (Norge)',
    'translation': {
      'it': 'Norvegia',
    },
    'no',
    '47',
    '+.. ... .. ...',
  ],
  [
    'Oman (‫عُمان‬‎)',
    'translation': {
      'it': 'Oman',
    },
    'om',
    '968',
  ],
  [
    'Pakistan (‫پاکستان‬‎)',
    'translation': {
      'it': 'Pakistan',
    },
    'pk',
    '92',
    '+.. ...-.......',
  ],
  [
    'Palau',
    'translation': {
      'it': 'Palau',
    },
    'pw',
    '680',
  ],
  [
    'Palestine (‫فلسطين‬‎)',
    'translation': {
      'it': 'Palestina',
    },
    'ps',
    '970',
  ],
  [
    'Panama (Panamá)',
    'translation': {
      'it': 'Panama',
    },
    'pa',
    '507',
  ],
  [
    'Papua New Guinea',
    'translation': {
      'it': 'Papua Nuova Guinea',
    },
    'pg',
    '675',
  ],
  [
    'Paraguay',
    'translation': {
      'it': 'Paraguay',
    },
    'py',
    '595',
  ],
  [
    'Peru (Perú)',
    'translation': {
      'it': 'Perù',
    },
    'pe',
    '51',
  ],
  [
    'Philippines',
    'translation': {
      'it': 'Filippine',
    },
    'ph',
    '63',
    '+.. ... ....',
  ],
  [
    'Poland (Polska)',
    'translation': {
      'it': 'Polonia',
    },
    'pl',
    '48',
    '+.. ...-...-...',
  ],
  [
    'Portugal',
    'translation': {
      'it': 'Portogallo',
    },
    'pt',
    '351',
  ],
  [
    'Puerto Rico',
    'translation': {
      'it': 'Porto Rico',
    },
    'pr',
    '1',
    '',
    3,
    ['787', '939'],
  ],
  [
    'Qatar (‫قطر‬‎)',
    'translation': {
      'it': 'Qatar',
    },
    'qa',
    '974',
  ],
  [
    'Réunion (La Réunion)',
    'translation': {
      'it': 'Riunione',
    },
    're',
    '262',
  ],
  [
    'Romania (România)',
    'translation': {
      'it': 'Romania',
    },
    'ro',
    '40',
  ],
  [
    'Russia (Россия)',
    'translation': {
      'it': 'Russia',
    },
    'ru',
    '7',
    '+. ... ...-..-..',
    0,
  ],
  [
    'Rwanda',
    'translation': {
      'it': 'Ruanda',
    },
    'rw',
    '250',
  ],
  [
    'Saint Barthélemy (Saint-Barthélemy)',
    'translation': {
      'it': 'Saint-Barthélemy',
    },
    'bl',
    '590',
    '',
    1,
  ],
  [
    'Saint Helena',
    'translation': {
      'it': 'Sant\'Elena'
    },
    'sh',
    '290',
  ],
  [
    'Saint Kitts and Nevis',
    'translation': {
      'it': 'Saint Kitts e Nevis',
    },
    'kn',
    '1869',
  ],
  [
    'Saint Lucia',
    'translation': {
      'it': 'Santa-Lucia',
    },
    'lc',
    '1758',
  ],
  [
    'Saint Martin (Saint-Martin (partie française))',
    'translation': {
      'it': 'Saint Martin',
    },
    'mf',
    '590',
    '',
    2,
  ],
  [
    'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    'translation': {
      'it': 'Saint-Pierre e Miquelon',
    },
    'pm',
    '508',
  ],
  [
    'Saint Vincent and the Grenadines',
    'translation': {
      'it': 'Saint Vincent e Grenadine'
    },
    'vc',
    '1784',
  ],
  [
    'Samoa',
    'translation': {
      'it': 'Samoa',
    },
    'ws',
    '685',
  ],
  [
    'San Marino',
    'translation': {
      'it': 'San Marino',
    },
    'sm',
    '378',
  ],
  [
    'São Tomé and Príncipe (São Tomé e Príncipe)',
    'translation': {
      'it': 'São Tomé e Príncipe',
    },
    'st',
    '239',
  ],
  [
    'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    'translation': {
      'it': 'Arabia Saudita',
    },
    'sa',
    '966',
  ],
  [
    'Senegal (Sénégal)',
    'translation': {
      'it': 'Senegal',
    },
    'sn',
    '221',
  ],
  [
    'Serbia (Србија)',
    'translation': {
      'it': 'Serbia',
    },
    'rs',
    '381',
  ],
  [
    'Seychelles',
    'translation': {
      'it': 'Seychelles',
    },
    'sc',
    '248',
  ],
  [
    'Sierra Leone',
    'translation': {
      'it': 'Sierra Leone',
    },
    'sl',
    '232',
  ],
  [
    'Singapore',
    'translation': {
      'it': 'Singapore',
    },
    'sg',
    '65',
    '+.. ....-....',
  ],
  [
    'Sint Maarten',
    'translation': {
      'it': 'Sint Maarten',
    },
    'sx',
    '1721',
  ],
  [
    'Slovakia (Slovensko)',
    'translation': {
      'it': 'Slovacchia',
    },
    'sk',
    '421',
  ],
  [
    'Slovenia (Slovenija)',
    'translation': {
      'it': 'Slovenia',
    },
    'si',
    '386',
  ],
  [
    'Solomon Islands',
    'translation': {
      'it': 'Isole Salomone',
    },
    'sb',
    '677',
  ],
  [
    'Somalia (Soomaaliya)',
    'translation': {
      'it': 'Somalia',
    },
    'so',
    '252',
  ],
  [
    'South Africa',
    'translation': {
      'it': 'Sudafrica',
    },
    'za',
    '27',
  ],
  [
    'South Korea (대한민국)',
    'translation': {
      'it': 'Corea del Sud',
    },
    'kr',
    '82',
  ],
  [
    'South Sudan (‫جنوب السودان‬‎)',
    'translation': {
      'it': 'Sudan del Sud',
    },
    'ss',
    '211',
  ],
  [
    'Spain (España)',
    'translation': {
      'it': 'Spagna',
    },
    'es',
    '34',
    '+.. ... ... ...',
  ],
  [
    'Sri Lanka (ශ්‍රී ලංකාව)',
    'translation': {
      'it': 'Sri Lanka',
    },
    'lk',
    '94',
  ],
  [
    'Sudan (‫السودان‬‎)',
    'translation': {
      'it': 'Sudan',
    },
    'sd',
    '249',
  ],
  [
    'Suriname',
    'translation': {
      'it': 'Suriname',
    },
    'sr',
    '597',
  ],
  [
    'Swaziland',
    'translation': {
      'it': 'Swazinalnd',
    },
    'sz',
    '268',
  ],
  [
    'Sweden (Sverige)',
    'translation': {
      'it': 'Svezia',
    },
    'se',
    '46',
    '+.. .. ... .. ..',
  ],
  [
    'Switzerland (Schweiz)',
    'translation': {
      'it': 'Svizzera',
    },
    'ch',
    '41',
    '+.. .. ... .. ..',
  ],
  [
    'Syria (‫سوريا‬‎)',
    'translation': {
      'it': 'Siria',
    },
    'sy',
    '963',
  ],
  [
    'Taiwan (台灣)',
    'translation': {
      'it': 'Taiwan',
    },
    'tw',
    '886',
  ],
  [
    'Tajikistan',
    'translation': {
      'it': 'Tajikistan',
    },
    'tj',
    '992',
  ],
  [
    'Tanzania',
    'translation': {
      'it': 'Tanzania',
    },
    'tz',
    '255',
  ],
  [
    'Thailand (ไทย)',
    'translation': {
      'it': 'Tailandia',
    },
    'th',
    '66',
  ],
  [
    'Timor-Leste',
    'translation': {
      'it': 'Timor est',
    },
    'tl',
    '670',
  ],
  [
    'Togo',
    'translation': {
      'it': 'Togo',
    },
    'tg',
    '228',
  ],
  [
    'Tokelau',
    'translation': {
      'it': 'Tokelau',
    },
    'tk',
    '690',
  ],
  [
    'Tonga',
    'translation': {
      'it': 'Tonga',
    },
    'to',
    '676',
  ],
  [
    'Trinidad and Tobago',
    'translation': {
      'it': 'Trinidad e Tobago',
    },
    'tt',
    '1868',
  ],
  [
    'Tunisia (‫تونس‬‎)',
    'translation': {
      'it': 'Tunisia',
    },
    'tn',
    '216',
  ],
  [
    'Turkey (Türkiye)',
    'translation': {
      'it': 'Turchia',
    },
    'tr',
    '90',
    '+.. ... ... .. ..',
  ],
  [
    'Turkmenistan',
    'translation': {
      'it': 'Turkmenistan',
    },
    'tm',
    '993',
  ],
  [
    'Turks and Caicos Islands',
    'translation': {
      'it': 'Turks e Caicos',
    },
    'tc',
    '1649',
  ],
  [
    'Tuvalu',
    'translation': {
      'it': 'Tuvalu',
    },
    'tv',
    '688',
  ],
  [
    'U.S. Virgin Islands',
    'translation': {
      'it': 'Isole Vergini americane',
    },
    'vi',
    '1340',
  ],
  [
    'Uganda',
     'translation': {
      'it': 'Uganda',
    },
    'ug',
    '256',
  ],
  [
    'Ukraine (Україна)',
     'translation': {
      'it': 'Ucraina',
    },
    'ua',
    '380',
  ],
  [
    'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
     'translation': {
      'it': 'Emirati Arabi Uniti',
    },
    'ae',
    '971',
  ],
  [
    'United Kingdom',
     'translation': {
      'it': 'Regno Unito',
    },
    'gb',
    '44',
    '+.. .... ......',
  ],
  [
    'United States',
    'translation': {
      'it': 'Stati Uniti',
    },
    'us',
    '1',
    '+. (...) ...-....',
    0,
  ],
  [
    'Uruguay',
    'translation': {
      'it': 'Uruguay',
    },
    'uy',
    '598',
  ],
  [
    'Uzbekistan (Oʻzbekiston)',
    'translation': {
      'it': 'Uzbekistan',
    },
    'uz',
    '998',
  ],
  [
    'Vanuatu',
    'translation': {
      'it': 'Vanuatu',
    },
    'vu',
    '678',
  ],
  [
    'Vatican City (Città del Vaticano)',
    'translation': {
      'it': 'Ciità del Vaticano',
    },
    'va',
    '39',
    '+.. .. .... ....',
    1,
  ],
  [
    'Venezuela',
    'translation': {
      'it': 'Venezuela',
    },
    've',
    '58',
  ],
  [
    'Vietnam (Việt Nam)',
    'translation': {
      'it': 'Vietnam',
    },
    'vn',
    '84',
  ],
  [
    'Wallis and Futuna',
    'translation': {
      'it': 'Wallis e Futuna',
    },
    'wf',
    '681',
  ],
  [
    'Yemen (‫اليمن‬‎)',
    'translation': {
      'it': 'Yemen',
    },
    'ye',
    '967',
  ],
  [
    'Zambia',
    'translation': {
      'it': 'Zambia',
    },
    'zm',
    '260',
  ],
  [
    'Zimbabwe',
    'translation': {
      'it': 'Zimbabwe',
    },
    'zw',
    '263',
  ],
];

for (let i = 0; i < allCountries.length; i++) {
  // countries
  const c = allCountries[i];
  allCountries[i] = {
    name: c[0],
    iso2: c[1],
    dialCode: c[2],
    priority: c[4] || 0,
  };
  // format
  if (c[3]) {
    allCountries[i].format = c[3];
  }
}

export default allCountries;

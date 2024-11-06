import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationDataService {
  locations = [
    {
      Longitude: 7.29298,
      Latitude: 5.14986,
      Location: 'South Gate',
    },
    {
      Longitude: 7.29295,
      Latitude: 5.14952,
      Location: 'South Gate Car Park',
    },
    {
      Longitude: 7.29331,
      Latitude: 5.14934,
      Location: 'Naat Office',
    },
    {
      Longitude: 7.29305,
      Latitude: 5.1489,
      Location: 'Futa Sec.',
    },
    {
      Longitude: 7.29366,
      Latitude: 5.14827,
      Location: 'Fat Laboratory',
    },
    {
      Longitude: 7.29326,
      Latitude: 5.14792,
      Location: 'Maintenance Workshop',
    },
    {
      Longitude: 7.29333,
      Latitude: 5.14791,
      Location: 'Csp Laboratory',
    },
    {
      Longitude: 7.29323,
      Latitude: 5.14827,
      Location: 'Aph Laboratory',
    },
    {
      Longitude: 7.29389,
      Latitude: 5.14835,
      Location: 'Age Laboratory',
    },
    {
      Longitude: 7.2945,
      Latitude: 5.14898,
      Location: 'Futa Step-B Office',
    },
    {
      Longitude: 7.29469,
      Latitude: 5.1493,
      Location: 'Akindeko 1',
    },
    {
      Longitude: 7.29515,
      Latitude: 5.14843,
      Location: 'Akindeko 2',
    },
    {
      Longitude: 7.29466,
      Latitude: 5.14952,
      Location: 'Microbiology Office Annex',
    },
    {
      Longitude: 7.2951,
      Latitude: 5.1498,
      Location: 'Obakekere Mosque',
    },
    {
      Longitude: 7.29529,
      Latitude: 5.1493,
      Location: 'Old Health Centre',
    },
    {
      Longitude: 7.29585,
      Latitude: 5.1491,
      Location: 'Chemistry Laboratory',
    },
    {
      Longitude: 7.2957,
      Latitude: 5.14893,
      Location: 'Uabs Classroom',
    },
    {
      Longitude: 7.29604,
      Latitude: 5.14893,
      Location: 'Met. & Mat. Laboratory',
    },
    {
      Longitude: 7.29601,
      Latitude: 5.14858,
      Location: 'Physics Laboratory',
    },
    {
      Longitude: 7.29577,
      Latitude: 5.14843,
      Location: 'Old Library',
    },
    {
      Longitude: 5.14843,
      Latitude: 5.14843,
      Location: 'Microbiology Laboratory',
    },
    {
      Longitude: 7.2968,
      Latitude: 5.1491,
      Location: 'Idd Studio',
    },
    {
      Longitude: 7.29603,
      Latitude: 5.14786,
      Location: 'Futa Primary School Pta Building',
    },
    {
      Longitude: 7.2962,
      Latitude: 5.14751,
      Location: 'Futa Primary School',
    },
    {
      Longitude: 7.29623,
      Latitude: 5.14925,
      Location: 'Great Hall',
    },
    {
      Longitude: 7.29593,
      Latitude: 5.14925,
      Location: 'Ict Building',
    },
    {
      Longitude: 7.29761,
      Latitude: 5.14624,
      Location: 'Pgd Hostel',
    },
    {
      Longitude: 7.29706,
      Latitude: 5.14764,
      Location: 'Staff Quarters',
    },
    {
      Longitude: 7.29872,
      Latitude: 5.14756,
      Location: 'Futa Staff Quarters',
    },
    {
      Longitude: 7.29877,
      Latitude: 5.1449,
      Location: 'Feed Mill',
    },
    {
      Longitude: 7.30409,
      Latitude: 5.12771,
      Location: 'Senior Staff Club Building',
    },
    {
      Longitude: 7.30416,
      Latitude: 5.12791,
      Location: 'Senior Staff Club Bar',
    },
    {
      Longitude: 7.30433,
      Latitude: 5.12778,
      Location: 'Senior Staff Club Extension',
    },
    {
      Longitude: 7.30441,
      Latitude: 5.12721,
      Location: 'International Scholars Lodge Phase 1',
    },
    {
      Longitude: 7.30353,
      Latitude: 5.12649,
      Location: 'Futa Hatchry',
    },
    {
      Longitude: 7.30269,
      Latitude: 5.12459,
      Location: 'Futa Vc Lodge',
    },
    {
      Longitude: 7.30667,
      Latitude: 5.13956,
      Location: 'North Gate',
    },
    {
      Longitude: 7.30688,
      Latitude: 5.13861,
      Location: 'Futa Ssanu Co-Operative Building',
    },
    {
      Longitude: 7.30714,
      Latitude: 5.13759,
      Location: 'Assu Secretariat',
    },
    {
      Longitude: 7.30776,
      Latitude: 5.13315,
      Location: 'Futa Central Mosque',
    },
    {
      Longitude: 7.30624,
      Latitude: 5.13371,
      Location: 'Chapel Of Faith',
    },
    {
      Longitude: 7.30494,
      Latitude: 5.13371,
      Location: 'Department Of Computer Science',
    },
    {
      Longitude: 7.3047,
      Latitude: 5.1342,
      Location: 'The University Bookshop',
    },
    {
      Longitude: 7.30447,
      Latitude: 5.13491,
      Location: 'Computer Resource Centre',
    },
    {
      Longitude: 7.30415,
      Latitude: 5.13542,
      Location: 'Cce Auditorium',
    },
    {
      Longitude: 7.30387,
      Latitude: 5.13604,
      Location: 'Cce Office Block',
    },
    {
      Longitude: 7.30419,
      Latitude: 5.13659,
      Location: '2500 Capacity Auditorium',
    },
    {
      Longitude: 5.13658,
      Latitude: 5.13609,
      Location: 'Cce Hilltop Auditorium',
    },
    {
      Longitude: 7.30536,
      Latitude: 5.13658,
      Location: 'Futa Stadium',
    },
    {
      Longitude: 7.30595,
      Latitude: 5.13645,
      Location: 'Futa Tennis Court',
    },
    {
      Longitude: 7.30626,
      Latitude: 5.13894,
      Location: 'Futa Basketball And Volleyball Court',
    },
    {
      Longitude: 7.29924,
      Latitude: 5.13648,
      Location: 'SET',
    },
    {
      Longitude: 7.29981,
      Latitude: 5.13909,
      Location: 'First Bank',
    },
    {
      Longitude: 7.30022,
      Latitude: 5.1392,
      Location: 'Heritage Bank',
    },
    {
      Longitude: 7.30104,
      Latitude: 5.13913,
      Location: 'Wema Bank',
    },
    {
      Longitude: 7.30108,
      Latitude: 5.13872,
      Location: 'Directorate Of Physical Planning',
    },
    {
      Longitude: 7.30105,
      Latitude: 5.13832,
      Location: 'Student Affairs Division',
    },
    {
      Longitude: 7.30117,
      Latitude: 5.13809,
      Location: 'T.I. Francis Hall',
    },
    {
      Longitude: 7.30228,
      Latitude: 5.13893,
      Location: 'Old Senate',
    },
    {
      Longitude: 7.30201,
      Latitude: 5.13933,
      Location: 'New Senate',
    },
    {
      Longitude: 7.30233,
      Latitude: 5.1402,
      Location: 'Futa Alumni',
    },
    {
      Longitude: 7.30037,
      Latitude: 5.14472,
      Location: 'Futa Farm Area',
    },
    {
      Longitude: 7.30128,
      Latitude: 5.14377,
      Location: 'New Unfinished Student Hostel',
    },
    {
      Longitude: 7.30185,
      Latitude: 5.14318,
      Location: 'Jadesola Female Hostel',
    },
    {
      Longitude: 7.30187,
      Latitude: 5.14313,
      Location: 'Adeniyi Male Hostel',
    },
    {
      Longitude: 7.30258,
      Latitude: 5.14266,
      Location: 'Jibowu Annex Iii',
    },
    {
      Longitude: 7.30496,
      Latitude: 5.14151,
      Location: 'Jibowu Annex Ii',
    },
    {
      Longitude: 7.30642,
      Latitude: 5.13965,
      Location: 'Futa North Gate',
    },
    {
      Longitude: 7.30429,
      Latitude: 5.13981,
      Location: 'Gymnasium',
    },
    {
      Longitude: 7.30377,
      Latitude: 5.14088,
      Location: 'Hostels Power Room',
    },
    {
      Longitude: 7.3038,
      Latitude: 5.14139,
      Location: 'Jibowu Hostel',
    },
    {
      Longitude: 7.30385,
      Latitude: 5.14233,
      Location: 'Abiola Hostel',
    },
    {
      Longitude: 7.30458,
      Latitude: 5.14187,
      Location: 'Jibowu Annex I',
    },
    {
      Longitude: 7.30496,
      Latitude: 5.14151,
      Location: 'Jibowu Annex Ii',
    },
    {
      Longitude: 7.30423,
      Latitude: 5.13947,
      Location: 'Chess And Sport Room',
    },
    {
      Longitude: 7.30372,
      Latitude: 5.13881,
      Location: 'Roundabout',
    },
    {
      Longitude: 7.2988,
      Latitude: 5.12501,
      Location: 'School Of Post Graduate Studies',
    },
    {
      Longitude: 7.29905,
      Latitude: 5.134,
      Location: 'Post Graduate Laboratory Phase 2',
    },
    {
      Longitude: 7.29913,
      Latitude: 5.13359,
      Location: 'Saat Annex',
    },
    {
      Longitude: 7.29944,
      Latitude: 5.13272,
      Location: 'Gns Building',
    },
    {
      Longitude: 7.29959,
      Latitude: 5.13272,
      Location: 'Recreation Centre 1',
    },
    {
      Longitude: 7.29966,
      Latitude: 5.13191,
      Location: 'Recreation Centre 2',
    },
    {
      Longitude: 7.30149,
      Latitude: 5.1318,
      Location: 'Uba Fire Station',
    },
    {
      Longitude: 7.30196,
      Latitude: 5.13192,
      Location: 'Security Building',
    },
    {
      Longitude: 7.30424,
      Latitude: 5.13243,
      Location: 'Academic Building',
    },
    {
      Longitude: 7.3029,
      Latitude: 5.13238,
      Location: 'Foundry Workshop',
    },
    {
      Longitude: 7.3059,
      Latitude: 5.13283,
      Location: 'Geotechnical Lab',
    },
    {
      Longitude: 7.30231,
      Latitude: 5.13311,
      Location: 'General Ogomudia (Rtd) Elect/Elect',
    },
    {
      Longitude: 7.30205,
      Latitude: 5.13347,
      Location: 'Sos Building Extension',
    },
    {
      Longitude: 7.30255,
      Latitude: 5.13431,
      Location: 'Sos Building',
    },
    {
      Longitude: 7.3025,
      Latitude: 5.13434,
      Location: 'Seet Central Workshop',
    },
    {
      Longitude: 7.303226,
      Latitude: 5.135743,
      Location: 'SEET',
    },
    {
      Longitude: 7.301444,
      Latitude: 5.135442,
      Location: 'SAAT',
    },
    {
      Longitude: 7.297143,
      Latitude: 5.135062,
      Location: 'School of Mineral Scinces',
    },
    {
      Longitude: 7.297832,
      Latitude: 5.132523,
      Location: '1000 CAPACITY',
    },
    {
      Longitude: null,
      Latitude: null,
      Location: 'OLD 3 IN 1 ',
    },
    {
      Longitude: 7.298488,
      Latitude: 5.136521,
      Location: '2 IN 1 A Lecture Room ',
    },
    {
      Longitude: null,
      Latitude: null,
      Location: '2 IN 1 B Lecture Room ',
    },
    {
      Longitude: 7.302317,
      Latitude: 5.133964,
      Location: 'School of Life Sciences',
    },
    {
      Longitude: 7.298167,
      Latitude: 5.134896,
      Location: 'Schoool of Management Technology',
    },
    {
      Longitude: 7.298289,
      Latitude: 5.135002,
      Location: '3 in 1 Lecture Hall',
    },
    {
      Longitude: 7.297465,
      Latitude: 5.131598,
      Location: 'Block of Classroom 1',
    },
    {
      Longitude: 7.298016,
      Latitude: 5.132938,
      Location: 'FBN Lecture theater',
    },
    {
      Longitude: 7.295168,
      Latitude: 5.134682,
      Location: 'Pastor EA Adeboye Hostel',
    },
    {
      Longitude: 7.300734,
      Latitude: 5.141106,
      Location: 'Akure Tech Hub',
    },
    {
      Longitude: 7.301447,
      Latitude: 5.138082,
      Location: 'T I Francis Auditorium',
    },
    {
      Longitude: 7.296036,
      Latitude: 5.131595,
      Location: 'FUTA Post graduate Hostel',
    },
    {
      Longitude: 7.305043,
      Latitude: 5.127611,
      Location: 'FUTA International Scholars Lodge',
    },
    {
      Longitude: 7.305611,
      Latitude: 5.127784,
      Location: "VC's Lodge",
    },
    {
      Longitude: 7.304199,
      Latitude: 5.12786,
      Location: 'Staff Club',
    },
    {
      Longitude: 7.301991,
      Latitude: 5.143108,
      Location: 'Adeniyi Hostel',
    },
    {
      Longitude: 7.301213,
      Latitude: 5.143782,
      Location: 'Futascoop Hotel',
    },
    {
      Longitude: 7.302162,
      Latitude: 5.143755,
      Location: 'Professor Jadesola Akande hall of residence',
    },
    {
      Longitude: 7.304187,
      Latitude: 5.141826,
      Location: 'Jibowu Annex 2',
    },
    {
      Longitude: 7.298123,
      Latitude: 5.145181,
      Location: 'FUTA Health Centre',
    },
    {
      Longitude: 7.286761,
      Latitude: 5.14336,
      Location: 'FUTA Wildlife Park',
    },
    {
      Longitude: 7.294891,
      Latitude: 5.146269,
      Location: 'FUTA Fish Farm',
    },
    {
      Longitude: 7.307597,
      Latitude: 5.133253,
      Location: 'NEW FUTA CENTRAL MOSQUE',
    },
    {
      Longitude: 7.307341,
      Latitude: 5.134517,
      Location: 'Centre for Entrepreneurship Development',
    },
    {
      Longitude: 7.307771,
      Latitude: 5.13207,
      Location: 'University Advancement Centre, FUTA Nigeria',
    },
    {
      Longitude: 7.307702,
      Latitude: 5.12989,
      Location: 'WASCAL',
    },
    {
      Longitude: 7.304886,
      Latitude: 5.129507,
      Location: 'FUTA Bakery',
    },
    {
      Longitude: 7.297767,
      Latitude: 5.135034,
      Location: 'International Office Block',
    },
    {
      Longitude: 7.298069,
      Latitude: 5.134333,
      Location: 'Professor Julius A. Okojie Central Research Laboratory',
    },
    {
      Longitude: 7.297568,
      Latitude: 5.1326,
      Location: 'Block of Classroom 2',
    },
    {
      Longitude: 7.298488,
      Latitude: 5.136521,
      Location: "Chiken 'n' Tinz",
    },
    {
      Longitude: 7.29831,
      Latitude: 5.1309,
      Location: 'School of Physical Sciences',
    },
  ];
  constructor() {}
}

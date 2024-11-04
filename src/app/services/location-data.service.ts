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
      Latitude: 5.1389,
      Location: 'New Senate',
    },
    {
      Longitude: 7.29844,
      Latitude: 5.13886,
      Location: 'Registrar Office',
    },
    {
      Longitude: 7.29828,
      Latitude: 5.13896,
      Location: 'Futa Guest House',
    },
    {
      Longitude: 7.29824,
      Latitude: 5.13901,
      Location: 'Canteen',
    },
    {
      Longitude: 7.29802,
      Latitude: 5.13901,
      Location: 'Health Centre',
    },
    {
      Longitude: 7.29833,
      Latitude: 5.139,
      Location: 'University Chaplaincy',
    },
    {
      Longitude: 7.29961,
      Latitude: 5.13954,
      Location: 'University Main Entrance',
    },
    {
      Longitude: 7.29298,
      Latitude: 5.14986,
      Location: 'University Environment',
    },
  ];

  constructor() {}
}

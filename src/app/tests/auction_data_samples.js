var current_time = new Date()

var auction = {
  current_stage: -100,
  current_phase: 'bestbid',
  value: {
   'currency': 'UAH',
   'amount': 3500809,
   'valueAddedTaxIncluded': false
  },
  stages: [
    {
      'start': '2018-01-16T15:39:58.607427+02:00',
      'type': 'pause',
      'passed': true
    },
    {
      'start': '2018-01-16T15:40:28.607427+02:00',
      'amount': 3500809,
      'type': 'dutch_0',
      'passed': true,
      'time': '2018-01-16T15:40:28.619475+02:00'
    },
    {
      'bidder_id': 'e4456d02263441ffb2f00ceafa661bb2',
      'label': {
        'ru': 'Участник №2',
        'en': 'Bidder #2',
        'uk': 'Учасник №2'
      },
      'dutch_winner': true,
      'start': '2018-01-16T15:40:33.607427+02:00',
      'amount': 3465800.91,
      'passed': true,
      'time': '2018-01-16T15:40:36.101102+02:00',
      'type': 'dutch_1'
    },
    {
      'start': '2018-01-16T15:40:38.607427+02:00',
      'amount': 3430792.82,
      'type': 'dutch_2',
      'time': ''
    },
    {
      'start': '2018-01-16T15:40:43.607427+02:00',
      'amount': 3395784.73,
      'type': 'dutch_3',
      'time': ''
    },
    {
      'start': '2018-01-16T15:40:48.607427+02:00',
      'amount': 3360776.64,
      'type': 'dutch_4',
      'time': ''
    },
    {
      'start': '2018-01-16T15:40:53.607427+02:00',
      'amount': 3325768.55,
      'type': 'dutch_5',
      'time': ''
    },
    {
      'start': '2018-01-16T15:40:58.607427+02:00',
      'amount': 3290760.46,
      'type': 'dutch_6',
      'time': ''
    },
    {
      'start': '2018-01-16T15:41:03.607427+02:00',
      'amount': 3255752.37,
      'type': 'dutch_7',
      'time': ''
    },
    {
      'start': '2018-01-16T15:41:08.607427+02:00',
      'amount': 3220744.28,
      'type': 'dutch_8',
      'time': ''
    },
    {
      'start': '2018-01-16T15:41:13.607427+02:00',
      'amount': 3185736.19,
      'type': 'dutch_9',
      'time': ''
    },
    {
      'start': '2018-01-16T15:41:18.607427+02:00',
      'type': 'pre-sealedbid',
      'time': ''
    },
    {
      'sealedbid_winner': true,
      'bidder_id': 'e4456d02263441ffb3f00ceafa661bb2',
      'label': {
        'ru': 'Участник №1',
        'en': 'Bidder #1',
        'uk': 'Учасник №1'
      },
      'start': '2018-01-16T15:41:38.607427+02:00',
      'amount': 4465800.09,
      'time': '2018-01-16T15:41:57.144796+02:00',
      'type': 'sealedbid'
    },
    {
      'start': '2018-01-16T15:42:08.607427+02:00',
      'type': 'pre-bestbid',
      'time': '2018-01-16T15:42:08.626819+02:00'
    },
    {
      'start': '2018-01-16T15:42:28.607427+02:00',
      'type': 'bestbid',
      'time': '2018-01-16T15:42:28.618677+02:00'
    },
    {
      'start': '2018-01-16T16:02:28.607427+02:00',
      'type': 'announcement',
      'time': ''
    }
  ]
}

var bidder_id = 'id_1',
    Rounds = [0, 3, 9]
var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "USE",
    "r": 130
  },
  {
    "name": "RESEARCH",
    "r": 220
  },
  {
    "name": "PHASE OUT",
    "r": 310
  },
  {
    "name": "AVOID",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Tools",
    "left"  : w-300+30,
    "top"   : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "Ansible",
    "pc": {
      "r": 80,
      "t": 49
    },
    "movement": "c",
    "url": "https://www.ansible.com/"
  },
  {
    "name": "Concerto",
    "pc": {
      "r": 83,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 51,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Elasticsearch 1.5",
    "pc": {
      "r": 77,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "FreeIPA",
    "pc": {
      "r": 113,
      "t": 75
    },
    "movement": "c"
  },
  {
    "name": "Grafana",
    "pc": {
      "r": 52,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 68,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 50,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "MongoDB 2.6",
    "pc": {
      "r": 82,
      "t": 29
    },
    "movement": "c"
  },
  {
    "name": "Prometheus",
    "pc": {
      "r": 98,
      "t": 42
    },
    "movement": "c"
  },
  {
    "name": "Elasticsearch 5.x+",
    "pc": {
      "r": 171,
      "t": 20
    },
    "movement": "c"
  },
  {
    "name": "Hashicorp Vault",
    "pc": {
      "r": 150,
      "t": 80
    },
    "movement": "c"
  },
  {
    "name": "MongoDB 3.x",
    "pc": {
      "r": 167,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Postgres",
    "pc": {
      "r": 143,
      "t": 68
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages & Frameworks",
    "color" : "#B70062",
    "left"  : 45,
    "top"   : 188,
    "items" : [
  {
    "name": "Android API 16 -> 25",
    "pc": {
      "r": 66,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 118,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 80,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Java 7",
    "pc": {
      "r": 104,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Javascript (stage 2+)",
    "pc": {
      "r": 113,
      "t": 113
    },
    "movement": "t",
    "url": "http://2ality.com/2015/11/tc39-process.html"
  },
  {
    "name": "Kotlin 1.1",
    "pc": {
      "r": 55,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Node 7",
    "pc": {
      "r": 51,
      "t": 158
    },
    "movement": "t"
  },
  {
    "name": "Node 8",
    "pc": {
      "r": 97,
      "t": 132
    },
    "movement": "t"
  },
  {
    "name": "PHP 7.*",
    "pc": {
      "r": 68,
      "t": 119
    },
    "movement": "c",
    "url": "http://www.php.net"
  },
  {
    "name": "Python 2.x",
    "pc": {
      "r": 55,
      "t": 145
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 89,
      "t": 106
    },
    "movement": "c",
    "url": "https://facebook.github.io/react/"
  },
  {
    "name": "SCSS",
    "pc": {
      "r": 101,
      "t": 90
    },
    "movement": "t"
  },
  {
    "name": "Swift 3.1",
    "pc": {
      "r": 63,
      "t": 90
    },
    "movement": "c",
    "url": "https://swift.org/blog/swift-3-1-released/"
  },
  {
    "name": "Swift 3.2",
    "pc": {
      "r": 115,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Swift 4.0",
    "pc": {
      "r": 73,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Symfony",
    "pc": {
      "r": 120,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 70,
      "t": 90
    },
    "movement": "c",
    "url": "http://www.typescriptlang.org/"
  },
  {
    "name": "Javascript ES5",
    "pc": {
      "r": 141,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "Angular 1",
    "pc": {
      "r": 253,
      "t": 126
    },
    "movement": "c",
    "url": "https://angularjs.org/"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 290,
      "t": 136
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 299,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "KnockoutJS",
    "pc": {
      "r": 289,
      "t": 156
    },
    "movement": "c"
  },
  {
    "name": "LESS",
    "pc": {
      "r": 241,
      "t": 96
    },
    "movement": "t"
  },
  {
    "name": "PHP 5.*",
    "pc": {
      "r": 244,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "Objective-c",
    "pc": {
      "r": 336,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 330,
      "t": 174
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left"  : 45,
    "top"   : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Android 4.1 -> 7.1",
    "pc": {
      "r": 104,
      "t": 229
    },
    "movement": "c"
  },
  {
    "name": "AWS",
    "pc": {
      "r": 52,
      "t": 190
    },
    "movement": "c",
    "url": "https://aws.amazon.com/"
  },
  {
    "name": "iOS 10",
    "pc": {
      "r": 115,
      "t": 216
    },
    "movement": "c"
  },
  {
    "name": "iOS 9",
    "pc": {
      "r": 51,
      "t": 203
    },
    "movement": "c"
  },
  {
    "name": "iOS 11",
    "pc": {
      "r": 183,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "iOS 8",
    "pc": {
      "r": 161,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 144,
      "t": 224
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Techniques",
    "left"  : (w-300+30),
    "top"   : (h/2 + 38),
    "color" : "#8FA227",
    "items" : [
  {
    "name": "RFC3339",
    "pc": {
      "r": 116,
      "t": 319
    },
    "movement": "c"
  },
  {
    "name": "Timestamps",
    "pc": {
      "r": 298,
      "t": 306
    },
    "movement": "c"
  }
]
  }
];

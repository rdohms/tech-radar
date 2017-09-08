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
      "t": 75
    },
    "movement": "c",
    "url": "https://www.ansible.com/"
  },
  {
    "name": "Concerto",
    "pc": {
      "r": 63,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Docker",
    "pc": {
      "r": 69,
      "t": 23
    },
    "movement": "c"
  },
  {
    "name": "Elasticsearch 1.5",
    "pc": {
      "r": 80,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "FreeIPA",
    "pc": {
      "r": 89,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "Grafana",
    "pc": {
      "r": 113,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "InfluxDB",
    "pc": {
      "r": 67,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 82,
      "t": 42
    },
    "movement": "c"
  },
  {
    "name": "MongoDB 2.6",
    "pc": {
      "r": 109,
      "t": 29
    },
    "movement": "c"
  },
  {
    "name": "Prometheus",
    "pc": {
      "r": 100,
      "t": 16
    },
    "movement": "c"
  },
  {
    "name": "Elasticsearch 5.x+",
    "pc": {
      "r": 201,
      "t": 32
    },
    "movement": "c"
  },
  {
    "name": "Hashicorp Vault",
    "pc": {
      "r": 203,
      "t": 68
    },
    "movement": "c"
  },
  {
    "name": "MongoDB 3.x",
    "pc": {
      "r": 155,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Postgres",
    "pc": {
      "r": 145,
      "t": 44
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
      "r": 59,
      "t": 126
    },
    "movement": "c"
  },
  {
    "name": "Go",
    "pc": {
      "r": 100,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Groovy",
    "pc": {
      "r": 56,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "Java 7",
    "pc": {
      "r": 73,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "Javascript (stage 2+)",
    "pc": {
      "r": 69,
      "t": 139
    },
    "movement": "t",
    "url": "http://2ality.com/2015/11/tc39-process.html"
  },
  {
    "name": "Kotlin 1.1",
    "pc": {
      "r": 76,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Node 7",
    "pc": {
      "r": 83,
      "t": 132
    },
    "movement": "t"
  },
  {
    "name": "Node 8",
    "pc": {
      "r": 112,
      "t": 119
    },
    "movement": "t"
  },
  {
    "name": "PHP 7.*",
    "pc": {
      "r": 68,
      "t": 158
    },
    "movement": "c",
    "url": "http://www.php.net"
  },
  {
    "name": "Python 2.x",
    "pc": {
      "r": 117,
      "t": 106
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 84,
      "t": 145
    },
    "movement": "c",
    "url": "https://facebook.github.io/react/"
  },
  {
    "name": "SCSS",
    "pc": {
      "r": 81,
      "t": 90
    },
    "movement": "t"
  },
  {
    "name": "Swift 3.1",
    "pc": {
      "r": 62,
      "t": 90
    },
    "movement": "c",
    "url": "https://swift.org/blog/swift-3-1-released/"
  },
  {
    "name": "Swift 3.2",
    "pc": {
      "r": 113,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Swift 4.0",
    "pc": {
      "r": 112,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Symfony",
    "pc": {
      "r": 51,
      "t": 90
    },
    "movement": "c"
  },
  {
    "name": "Typescript",
    "pc": {
      "r": 90,
      "t": 90
    },
    "movement": "c",
    "url": "http://www.typescriptlang.org/"
  },
  {
    "name": "Javascript ES5",
    "pc": {
      "r": 149,
      "t": 110
    },
    "movement": "t"
  },
  {
    "name": "Angular 1",
    "pc": {
      "r": 277,
      "t": 156
    },
    "movement": "c",
    "url": "https://angularjs.org/"
  },
  {
    "name": "Coffeescript",
    "pc": {
      "r": 264,
      "t": 146
    },
    "movement": "c"
  },
  {
    "name": "jQuery",
    "pc": {
      "r": 280,
      "t": 116
    },
    "movement": "c"
  },
  {
    "name": "KnockoutJS",
    "pc": {
      "r": 288,
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "LESS",
    "pc": {
      "r": 259,
      "t": 106
    },
    "movement": "t"
  },
  {
    "name": "PHP 5.*",
    "pc": {
      "r": 263,
      "t": 96
    },
    "movement": "c"
  },
  {
    "name": "Objective-c",
    "pc": {
      "r": 379,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 378,
      "t": 166
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
      "r": 113,
      "t": 255
    },
    "movement": "c"
  },
  {
    "name": "AWS",
    "pc": {
      "r": 93,
      "t": 203
    },
    "movement": "c",
    "url": "https://aws.amazon.com/"
  },
  {
    "name": "iOS 10",
    "pc": {
      "r": 93,
      "t": 242
    },
    "movement": "c"
  },
  {
    "name": "iOS 9",
    "pc": {
      "r": 117,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "iOS 11",
    "pc": {
      "r": 182,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "iOS 8",
    "pc": {
      "r": 172,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 183,
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
      "r": 69,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Timestamps",
    "pc": {
      "r": 290,
      "t": 346
    },
    "movement": "c"
  }
]
  }
];

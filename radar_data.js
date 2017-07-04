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
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "RFC3339",
    "pc": {
      "r": 99,
      "t": 152
    },
    "movement": "c"
  },
  {
    "name": "Symfony",
    "pc": {
      "r": 67,
      "t": 100
    },
    "movement": "c"
  },
  {
    "name": "Timestamps",
    "pc": {
      "r": 247,
      "t": 126
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "MongoDB",
    "pc": {
      "r": 65,
      "t": 49
    },
    "movement": "c"
  },
  {
    "name": "Postgres",
    "pc": {
      "r": 193,
      "t": 8
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Prometheus",
    "pc": {
      "r": 64,
      "t": 255
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "PHP 7.*",
    "pc": {
      "r": 95,
      "t": 345
    },
    "movement": "c",
    "url": "http://www.php.net"
  },
  {
    "name": "PHP 5.*",
    "pc": {
      "r": 257,
      "t": 316
    },
    "movement": "c"
  }
]
  }
];

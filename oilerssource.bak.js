$(window).load(function(){

            var tip = $("#tip").hide();
            var tipText = "";
            var over = false;

			var tip2 = $("#tip").hide();
            var tipText2 = "";
            var over2 = false;

			var tip3 = $("#tip").hide();
            var tipText3 = "";
            var over3 = false;

            var R = Raphael("paper", 940, 1448); //set height and width of svg
            var attr = {
                fill: "#E46B1F",
                stroke: "#E46B1F",
                "stroke-width": 0,
                "stroke-linejoin": "round"
            };
			var attr2 = {
                fill: "#00285D",
                stroke: "#E46B1F",
                "stroke-width": .5,
                "stroke-linejoin": "round"
            };
			var attr3 = {
                fill: "#FFFFFF",
                stroke: "#E46B1F",
                "stroke-width": .5,
                "stroke-linejoin": "round"
            };
			var cup = {
                fill: "#C0C0C0",
                stroke: "#000000",
                "stroke-width": 1,
                "stroke-linejoin": "round"
            };
			var attrblank = {
                fill: "#FFFFFF",
				opacity: "0",
                stroke: "#E46B1F",
                "stroke-width": .5,
                "stroke-linejoin": "round"
            };

			var blue = {
                fill: "#0E265D",
                stroke: "#666",
                "stroke-width": 0,
                "stroke-linejoin": "round"
            };
			var blue2 = {
                fill: "#003876",
                stroke: "#666",
                "stroke-width": 0,
                "stroke-linejoin": "round"
            };
			var largetext = {
				"font-size":28.4368,
				"font-family": "Verdana",
				"fill":"#FFFFFF",
				"text-anchor":"start",
				"stroke":"none"
            };
			var texthead = {
				"font-size":11,
				"font-family": "Verdana",
				"fill":"#FFFFFF",
				"text-anchor":"start",
				"stroke":"none"
            };
			var textsmall = {
				"font-size":8,
				"font-family": "Verdana",
				"fill":"#FFFFFF",
				"text-anchor":"start",
				"stroke":"none"
            };
			var textmiddlewhite = {
				"font-size":9.4789,
				"font-family": "Verdana",
				"fill":"#FFFFFF",
				"text-anchor":"start",
				"stroke":"none"
            };
			var textmiddleorange = {
				"font-size":9.4789,
				"font-family": "Verdana",
				"fill":"#00285D",
				"text-anchor":"start",
				"stroke":"none"
            };
			//BACKGROUND START
			var backbox = {};

			backbox.box = R.rect(0,0,936,1448).attr(blue);

			backbox.year41 = R.rect(900.366,86.448,17.057, 1321.74).attr(blue2);
			backbox.year40 = R.rect(878.916,86.448,17.057, 1321.74).attr(blue2);
			backbox.year39 = R.rect(857.466,86.448,17.058, 1321.74).attr(blue2);
			backbox.year38 = R.rect(836.016,86.448,17.057, 1321.74).attr(blue2);
			backbox.year37 = R.rect(814.566,86.448,17.058, 1321.74).attr(blue2);
			backbox.year36 = R.rect(793.116,86.448,17.057, 1321.74).attr(blue2);
			backbox.year35 = R.rect(771.666,86.448,16.716, 1321.74).attr(blue2);
			backbox.year34 = R.rect(750.216,86.448,17.057, 1321.74).attr(blue2);
			backbox.year33 = R.rect(728.766,86.448,17.739, 1321.74).attr(blue2);
			backbox.year32 = R.rect(707.316,86.448,17.058, 1321.74).attr(blue2);
			backbox.year31 = R.rect(685.866,86.448,17.057, 1321.74).attr(blue2);
			backbox.year30 = R.rect(664.416,86.448,16.716, 1321.74).attr(blue2);
			backbox.year29 = R.rect(642.966,86.448,17.398, 1321.74).attr(blue2);
			backbox.year28 = R.rect(621.516,86.448,17.057, 1321.74).attr(blue2);
			backbox.year27 = R.rect(600.066,86.448,17.058, 1321.74).attr(blue2);
			backbox.year26 = R.rect(578.616,86.448,17.057, 1321.74).attr(blue2);
			backbox.year25 = R.rect(557.166,86.448,17.057, 1321.74).attr(blue2);
			backbox.year24 = R.rect(535.716,86.448,17.058, 1321.74).attr(blue2);
			backbox.year23 = R.rect(514.266,86.448,16.716, 1321.74).attr(blue2);
			backbox.year22 = R.rect(492.816,86.448,17.397, 1321.74).attr(blue2);
			backbox.year21 = R.rect(471.366,86.448,17.057, 1321.74).attr(blue2);
			backbox.year20 = R.rect(449.916,86.448,17.057, 1321.74).attr(blue2);
			backbox.year19 = R.rect(428.466,86.448,17.058, 1321.74).attr(blue2);
			backbox.year18 = R.rect(407.016,86.448,16.374, 1321.74).attr(blue2);
			backbox.year17 = R.rect(385.566,86.448,17.739, 1321.74).attr(blue2);
			backbox.year16 = R.rect(364.116,86.448,17.058, 1321.74).attr(blue2);
			backbox.year15 = R.rect(342.666,86.448,16.716, 1321.74).attr(blue2);
			backbox.year14 = R.rect(321.216,86.448,17.398, 1321.74).attr(blue2);
			backbox.year13 = R.rect(299.766,86.448,17.057, 1321.74).attr(blue2);
			backbox.year12 = R.rect(278.316,86.448,16.716, 1321.74).attr(blue2);
			backbox.year11 = R.rect(256.866,86.448,17.398, 1321.74).attr(blue2);
			backbox.year10 = R.rect(235.416,86.448,17.057, 1321.74).attr(blue2);
			backbox.year9 = R.rect(213.966,86.448,16.716, 1321.74).attr(blue2);
			backbox.year8 = R.rect(192.516,86.448,17.057, 1321.74).attr(blue2);
			backbox.year7 = R.rect(171.066,86.448,16.716, 1321.74).attr(blue2);
			backbox.year6 = R.rect(149.616,86.448,17.398, 1321.74).attr(blue2);
			backbox.year5 = R.rect(128.166,86.448,17.043, 1321.74).attr(blue2);
			backbox.year4 = R.rect(106.716,86.448,17.071, 1321.74).attr(blue2);
			backbox.year3 = R.rect(85.2664,86.448,17.057, 1321.74).attr(blue2);
			backbox.year2 = R.rect(63.8164,86.448,17.071, 1321.74).attr(blue2);
			backbox.year1 = R.rect(42.3664,86.448,17.057, 1321.74).attr(blue2);


			var uninter = {};
			uninter.playoff1 = R.rect(42.3664,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff2 = R.rect(42.3664,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff3 = R.rect(42.3664,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff4 = R.rect(63.8164,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff5 = R.rect(63.8164,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff6 = R.rect(63.8164,1194.467,16.775,21.062).attr(attr);
			uninter.playoff7 = R.rect(85.2664,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff8 = R.rect(85.2664,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff9 = R.rect(85.2664,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff10 = R.rect(106.716,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff11 = R.rect(106.716,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff12 = R.rect(106.716,1194.467,16.775,21.062).attr(attr);
			uninter.playoff13 = R.rect(106.716,1173.139,16.775,21.063).attr(attr);
			uninter.playoff14 = R.rect(128.166,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff15 = R.rect(128.166,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff16 = R.rect(128.166,1194.467,16.775,21.062).attr(attr);
			uninter.playoff17 = R.rect(149.616,1173.139,17.281,21.063).attr(attr2);
			uninter.playoff18 = R.rect(149.616,1151.812,17.281,21.062).attr(attr2);
			uninter.playoff19 = R.rect(149.616,1194.467,17.281,21.062).attr(attr);
			uninter.playoff20 = R.rect(171.066,1194.467,16.775,21.062).attr(attr);
			uninter.playoff21 = R.rect(171.066,1173.139,16.775,21.063).attr(attr);
			uninter.playoff22 = R.rect(171.066,1151.812,16.775,21.062).attr(attr);
			uninter.playoff23 = R.rect(192.516,1173.139,17.051,21.063).attr(attr2);
			uninter.playoff24 = R.rect(192.516,1151.812,17.051,21.062).attr(attr2);
			uninter.playoff25 = R.rect(192.516,1130.483,17.051,21.063).attr(attr2);
			uninter.playoff26 = R.rect(192.516,1194.467,17.051,21.062).attr(attr);
			uninter.playoff27 = R.rect(213.966,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff28 = R.rect(213.966,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff29 = R.rect(213.966,1194.467,16.775,21.062).attr(attr);
			uninter.playoff30 = R.rect(213.966,1173.139,16.775,21.063).attr(attr);
			uninter.playoff31 = R.rect(235.416,1173.139,17.095,21.063).attr(attr2);
			uninter.playoff32 = R.rect(235.416,1151.812,17.095,21.062).attr(attr2);
			uninter.playoff33 = R.rect(235.416,1130.483,17.095,21.063).attr(attr2);
			uninter.playoff34 = R.rect(235.416,1194.467,17.095,21.062).attr(attr);
			uninter.playoff35 = R.rect(256.866,1194.467,17.246,21.062).attr(attr);
			uninter.playoff36 = R.rect(256.866,1173.139,17.246,21.063).attr(attr);
			uninter.playoff37 = R.rect(256.866,1151.812,17.246,21.062).attr(attr);
			uninter.playoff38 = R.rect(256.866,1130.483,17.246,21.063).attr(attr);
			uninter.playoff39 = R.rect(278.316,1194.467,16.775,21.062).attr(attr);
			uninter.playoff40 = R.rect(278.316,1173.139,16.775,21.063).attr(attr);
			uninter.playoff41 = R.rect(278.316,1151.812,16.775,21.062).attr(attr);
			uninter.playoff42 = R.rect(278.316,1130.483,16.775,21.063).attr(attr);
			uninter.playoff43 = R.rect(299.766,1194.467,17.095,21.062).attr(attr);
			uninter.playoff44 = R.rect(299.766,1173.139,17.095,21.063).attr(attr);
			uninter.playoff45 = R.rect(299.766,1151.812,17.095,21.062).attr(attr);
			uninter.playoff46 = R.rect(299.766,1130.483,17.095,21.063).attr(attr);
			uninter.playoff47 = R.rect(321.216,1151.812,17.05,21.062).attr(attr2);
			uninter.playoff48 = R.rect(321.216,1130.483,17.05,21.063).attr(attr2);
			uninter.playoff49 = R.rect(321.216,1194.467,17.05,21.062).attr(attr);
			uninter.playoff50 = R.rect(321.216,1173.139,17.05,21.063).attr(attr);
			uninter.playoff51 = R.rect(342.666,1194.467,16.775,21.062).attr(attr);
			uninter.playoff52 = R.rect(342.666,1173.139,16.775,21.063).attr(attr);
			uninter.playoff53 = R.rect(342.666,1151.812,16.775,21.062).attr(attr);
			uninter.playoff54 = R.rect(342.666,1130.483,16.775,21.063).attr(attr);
			uninter.playoff55 = R.rect(364.116,1194.467,17.198,21.062).attr(attr);
			uninter.playoff56 = R.rect(364.116,1173.139,17.198,21.063).attr(attr);
			uninter.playoff57 = R.rect(364.116,1151.812,17.198,21.062).attr(attr);
			uninter.playoff58 = R.rect(364.116,1130.483,17.198,21.063).attr(attr);
			uninter.playoff59 = R.rect(385.566,1173.139,17.771,21.063).attr(attr2);
			uninter.playoff60 = R.rect(385.566,1151.812,17.771,21.062).attr(attr2);
			uninter.playoff61 = R.rect(385.566,1130.483,17.771,21.063).attr(attr2);
			uninter.playoff62 = R.rect(385.566,1194.467,17.771,21.062).attr(attr);
			uninter.playoff63 = R.rect(407.016,1194.467,16.478,21.062).attr(attr);
			uninter.playoff64 = R.rect(407.016,1173.139,16.478,21.063).attr(attr);
			uninter.playoff65 = R.rect(407.016,1151.812,16.478,21.062).attr(attr);
			uninter.playoff66 = R.rect(407.016,1130.483,16.478,21.063).attr(attr);
			uninter.playoff67 = R.rect(428.466,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff68 = R.rect(428.466,1194.467,16.775,21.062).attr(attr);
			uninter.playoff69 = R.rect(428.466,1173.139,16.775,21.063).attr(attr);
			uninter.playoff70 = R.rect(428.466,1151.812,16.775,21.062).attr(attr);
			uninter.playoff71 = R.rect(449.916,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff72 = R.rect(449.916,1194.467,16.775,21.062).attr(attr);
			uninter.playoff73 = R.rect(449.916,1173.139,16.775,21.063).attr(attr);
			uninter.playoff74 = R.rect(449.916,1151.812,16.775,21.062).attr(attr);
			uninter.playoff75 = R.rect(471.366,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff76 = R.rect(471.366,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff77 = R.rect(471.366,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff78 = R.rect(471.366,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff79 = R.rect(492.816,1194.467,17.246,21.062).attr(attr2);
			uninter.playoff80 = R.rect(492.816,1173.139,17.246,21.063).attr(attr2);
			uninter.playoff81 = R.rect(492.816,1151.812,17.246,21.062).attr(attr2);
			uninter.playoff82 = R.rect(492.816,1130.483,17.246,21.063).attr(attr2);
			uninter.playoff83 = R.rect(514.266,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff84 = R.rect(514.266,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff85 = R.rect(514.266,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff86 = R.rect(514.266,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff87 = R.rect(535.716,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff88 = R.rect(535.716,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff89 = R.rect(535.716,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff90 = R.rect(535.716,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff91 = R.rect(557.166,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff92 = R.rect(557.166,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff93 = R.rect(557.166,1194.467,16.775,21.062).attr(attr);
			uninter.playoff94 = R.rect(557.166,1173.139,16.775,21.063).attr(attr);
			uninter.playoff95 = R.rect(578.616,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff96 = R.rect(578.616,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff97 = R.rect(578.616,1194.467,16.775,21.062).attr(attr);
			uninter.playoff98 = R.rect(578.616,1173.139,16.775,21.063).attr(attr);
			uninter.playoff99 = R.rect(600.066,1173.139,17.096,21.063).attr(attr2);
			uninter.playoff100 = R.rect(600.066,1151.812,17.096,21.062).attr(attr2);
			uninter.playoff101 = R.rect(600.066,1130.483,17.096,21.063).attr(attr2);
			uninter.playoff102 = R.rect(600.066,1194.467,17.096,21.062).attr(attr);
			uninter.playoff103 = R.rect(621.516,1173.139,16.774,21.063).attr(attr2);
			uninter.playoff104 = R.rect(621.516,1151.812,16.774,21.062).attr(attr2);
			uninter.playoff105 = R.rect(621.516,1130.483,16.774,21.063).attr(attr2);
			uninter.playoff106 = R.rect(621.516,1194.467,16.774,21.062).attr(attr);
			uninter.playoff107 = R.rect(642.966,1173.139,17.246,21.063).attr(attr2);
			uninter.playoff108 = R.rect(642.966,1151.812,17.246,21.062).attr(attr2);
			uninter.playoff109 = R.rect(642.966,1130.483,17.246,21.063).attr(attr2);
			uninter.playoff110 = R.rect(642.966,1194.467,17.246,21.062).attr(attr);
			uninter.playoff111 = R.rect(664.416,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff112 = R.rect(664.416,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff113 = R.rect(664.416,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff114 = R.rect(664.416,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff115 = R.rect(685.866,1173.139,17.096,21.063).attr(attr2);
			uninter.playoff116 = R.rect(685.866,1151.812,17.096,21.062).attr(attr2);
			uninter.playoff117 = R.rect(685.866,1130.483,17.096,21.063).attr(attr2);
			uninter.playoff118 = R.rect(685.866,1194.467,17.096,21.062).attr(attr);
			uninter.playoff119 = R.rect(707.316,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff120 = R.rect(707.316,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff121 = R.rect(707.316,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff122 = R.rect(707.316,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff123 = R.rect(750.216,1194.467,17.53,21.062).attr(attr);
			uninter.playoff124 = R.rect(750.216,1173.139,17.53,21.063).attr(attr);
			uninter.playoff125 = R.rect(750.216,1151.812,17.53,21.062).attr(attr);
			uninter.playoff126 = R.rect(750.216,1130.483,17.53,21.063).attr(attr);
			uninter.playoff127 = R.rect(771.666,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff128 = R.rect(771.666,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff129 = R.rect(771.666,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff130 = R.rect(771.666,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff131 = R.rect(793.116,1194.467,17.051,21.062).attr(attr2);
			uninter.playoff132 = R.rect(793.116,1173.139,17.051,21.063).attr(attr2);
			uninter.playoff133 = R.rect(793.116,1151.812,17.051,21.062).attr(attr2);
			uninter.playoff134 = R.rect(793.116,1130.483,17.051,21.063).attr(attr2);
			uninter.playoff135 = R.rect(814.566,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff136 = R.rect(814.566,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff137 = R.rect(814.566,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff138 = R.rect(814.566,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff139 = R.rect(836.016,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff140 = R.rect(836.016,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff141 = R.rect(836.016,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff142 = R.rect(836.016,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff143 = R.rect(857.466,1194.467,16.775,21.062).attr(attr2);
			uninter.playoff144 = R.rect(857.466,1173.139,16.775,21.063).attr(attr2);
			uninter.playoff145 = R.rect(857.466,1151.812,16.775,21.062).attr(attr2);
			uninter.playoff146 = R.rect(857.466,1130.483,16.775,21.063).attr(attr2);
			uninter.playoff147 = R.rect(878.916,1194.467,17.096,21.062).attr(attr2);
			uninter.playoff148 = R.rect(878.916,1173.139,17.096,21.063).attr(attr2);
			uninter.playoff149 = R.rect(878.916,1151.812,17.096,21.062).attr(attr2);
			uninter.playoff150 = R.rect(878.916,1130.483,17.096,21.063).attr(attr2);


			uninter.divx = R.rect(191.823,1069.97,293.853,1.138).attr(attr);
			uninter.divy = R.rect(600.659,1069.97,316.173,1.138).attr(attr);
			uninter.divz = R.rect(491.741,1069.97,102.557,1.138).attr(attr);
			uninter.div1 = R.rect(42.3664,1069.97,145.492,1.138).attr(attr);
			uninter.div2 = R.rect(42.3664,1002.681,17.314,10.663).attr(attr2);
			uninter.div3 = R.rect(42.3664,1013.486,17.314,10.664).attr(attr2);
			uninter.div4 = R.rect(42.3664,1024.292,17.314,10.664).attr(attr2);
			uninter.div5 = R.rect(42.3664,1035.099,17.314,10.663).attr(attr2);
			uninter.div6 = R.rect(42.3664,1045.904,17.314,10.664).attr(attr);
			uninter.div7 = R.rect(42.3664,1056.71,17.314,10.664).attr(attr2);
			uninter.div8 = R.rect(63.8164,1002.681,17.461,10.663).attr(attr2);
			uninter.div9 = R.rect(63.8164,1013.486,17.461,10.664).attr(attr2);
			uninter.div10 = R.rect(63.8164,1024.292,17.461,10.664).attr(attr);
			uninter.div11 = R.rect(63.8164,1035.099,17.461,10.663).attr(attr2);
			uninter.div12 = R.rect(63.8164,1045.904,17.461,10.664).attr(attr2);
			uninter.div13 = R.rect(63.8164,1056.71,17.461,10.664).attr(attr2);
			uninter.div14 = R.rect(85.2664,1013.486,17.474,10.664).attr(attr2);
			uninter.div15 = R.rect(85.2664,1024.292,17.474,10.664).attr(attr2);
			uninter.div16 = R.rect(85.2664,1035.099,17.474,10.663).attr(attr2);
			uninter.div17 = R.rect(85.2664,1045.904,17.474,10.664).attr(attr2);
			uninter.div18 = R.rect(85.2664,1056.71,17.474,10.664).attr(attr);
			uninter.div19 = R.rect(106.716,1002.681,17.341,10.663).attr(attr2);
			uninter.div20 = R.rect(106.716,1013.486,17.341,10.664).attr(attr2);
			uninter.div21 = R.rect(106.716,1024.292,17.341,10.664).attr(attr2);
			uninter.div22 = R.rect(106.716,1035.099,17.341,10.663).attr(attr);
			uninter.div23 = R.rect(106.716,1045.904,17.341,10.664).attr(attr2);
			uninter.div24 = R.rect(106.716,1056.71,17.341,10.664).attr(attr2);
			uninter.div25 = R.rect(128.166,1002.681,17.225,10.663).attr(attr2);
			uninter.div26 = R.rect(128.166,1013.486,17.225,10.664).attr(attr2);
			uninter.div27 = R.rect(128.166,1024.292,17.225,10.664).attr(attr2);
			uninter.div28 = R.rect(128.166,1035.099,17.225,10.663).attr(attr);
			uninter.div29 = R.rect(128.166,1045.904,17.225,10.664).attr(attr2);
			uninter.div30 = R.rect(128.166,1056.71,17.225,10.664).attr(attr2);
			uninter.div31 = R.rect(149.616,981.068,17.225,10.664).attr(attr2);
			uninter.div32 = R.rect(149.616,991.874,17.225,10.664).attr(attr2);
			uninter.div33 = R.rect(149.616,1002.681,17.225,10.663).attr(attr2);
			uninter.div34 = R.rect(149.616,1013.486,17.225,10.664).attr(attr2);
			uninter.div35 = R.rect(149.616,1024.292,17.225,10.664).attr(attr);
			uninter.div36 = R.rect(149.616,1035.099,17.225,10.663).attr(attr2);
			uninter.div37 = R.rect(149.616,1045.904,17.225,10.664).attr(attr2);
			uninter.div38 = R.rect(149.616,1056.71,17.225,10.664).attr(attr2);
			uninter.div39 = R.rect(171.066,1056.71,17.225,10.664).attr(attr2);
			uninter.div40 = R.rect(171.066,1045.904,17.225,10.664).attr(attr2);
			uninter.div41 = R.rect(171.066,1035.099,17.225,10.663).attr(attr2);
			uninter.div42 = R.rect(171.066,1024.292,17.225,10.664).attr(attr2);
			uninter.div43 = R.rect(171.066,1013.486,17.225,10.664).attr(attr2);
			uninter.div44 = R.rect(171.066,1002.681,17.225,10.663).attr(attr2);
			uninter.div45 = R.rect(171.066,991.874,17.225,10.664).attr(attr);
			uninter.div46 = R.rect(192.516,1056.71,17.225,10.664).attr(attr2);
			uninter.div47 = R.rect(192.516,1045.904,17.225,10.664).attr(attr2);
			uninter.div48 = R.rect(192.516,1035.099,17.225,10.663).attr(attr);
			uninter.div49 = R.rect(192.516,1024.292,17.225,10.664).attr(attr2);
			uninter.div50 = R.rect(192.516,1013.486,17.225,10.664).attr(attr2);
			uninter.div51 = R.rect(192.516,1002.681,17.225,10.663).attr(attr2);
			uninter.div52 = R.rect(213.966,1056.71,17.226,10.664).attr(attr2);
			uninter.div53 = R.rect(213.966,1045.904,17.226,10.664).attr(attr2);
			uninter.div54 = R.rect(213.966,1035.099,17.226,10.663).attr(attr);
			uninter.div55 = R.rect(213.966,1024.292,17.226,10.664).attr(attr2);
			uninter.div56 = R.rect(213.966,1013.486,17.226,10.664).attr(attr2);
			uninter.div57 = R.rect(213.966,1002.681,17.226,10.663).attr(attr2);
			uninter.div58 = R.rect(235.416,1056.71,17.226,10.664).attr(attr2);
			uninter.div59 = R.rect(235.416,1045.904,17.226,10.664).attr(attr2);
			uninter.div60 = R.rect(235.416,1035.099,17.226,10.663).attr(attr2);
			uninter.div61 = R.rect(235.416,1024.292,17.226,10.664).attr(attr2);
			uninter.div62 = R.rect(235.416,1013.486,17.226,10.664).attr(attr);
			uninter.div63 = R.rect(256.866,1056.71,17.225,10.664).attr(attr2);
			uninter.div64 = R.rect(256.866,1045.904,17.225,10.664).attr(attr2);
			uninter.div65 = R.rect(256.866,1035.099,17.225,10.663).attr(attr2);
			uninter.div66 = R.rect(256.866,1024.292,17.225,10.664).attr(attr2);
			uninter.div67 = R.rect(256.866,1013.486,17.225,10.664).attr(attr);
			uninter.div68 = R.rect(278.316,1056.71,17.225,10.664).attr(attr2);
			uninter.div69 = R.rect(278.316,1045.904,17.225,10.664).attr(attr2);
			uninter.div70 = R.rect(278.316,1035.099,17.225,10.663).attr(attr2);
			uninter.div71 = R.rect(278.316,1024.292,17.225,10.664).attr(attr2);
			uninter.div72 = R.rect(278.316,1013.486,17.225,10.664).attr(attr);
			uninter.div73 = R.rect(299.766,1056.71,17.225,10.664).attr(attr2);
			uninter.div74 = R.rect(299.766,1045.904,17.225,10.664).attr(attr2);
			uninter.div75 = R.rect(299.766,1035.099,17.225,10.663).attr(attr2);
			uninter.div76 = R.rect(299.766,1024.292,17.225,10.664).attr(attr2);
			uninter.div77 = R.rect(299.766,1013.486,17.225,10.664).attr(attr);
			uninter.div78 = R.rect(321.216,1056.71,17.226,10.664).attr(attr2);
			uninter.div79 = R.rect(321.216,1045.904,17.226,10.664).attr(attr2);
			uninter.div80 = R.rect(321.216,1035.099,17.226,10.663).attr(attr2);
			uninter.div81 = R.rect(321.216,1024.292,17.226,10.664).attr(attr2);
			uninter.div82 = R.rect(321.216,1013.486,17.226,10.664).attr(attr);
			uninter.div83 = R.rect(342.666,1056.71,17.226,10.664).attr(attr2);
			uninter.div84 = R.rect(342.666,1045.904,17.226,10.664).attr(attr2);
			uninter.div85 = R.rect(342.666,1035.099,17.226,10.663).attr(attr2);
			uninter.div86 = R.rect(342.666,1024.292,17.226,10.664).attr(attr2);
			uninter.div87 = R.rect(342.666,1013.486,17.226,10.664).attr(attr);
			uninter.div88 = R.rect(364.116,1056.71,17.226,10.664).attr(attr2);
			uninter.div89 = R.rect(364.116,1045.904,17.226,10.664).attr(attr2);
			uninter.div90 = R.rect(364.116,1035.099,17.226,10.663).attr(attr2);
			uninter.div91 = R.rect(364.116,1024.292,17.226,10.664).attr(attr);
			uninter.div92 = R.rect(364.116,1013.486,17.226,10.664).attr(attr2);
			uninter.div93 = R.rect(385.566,1056.71,17.226,10.664).attr(attr2);
			uninter.div94 = R.rect(385.566,1045.904,17.226,10.664).attr(attr2);
			uninter.div95 = R.rect(385.566,1035.099,17.226,10.663).attr(attr);
			uninter.div96 = R.rect(385.566,1024.292,17.226,10.664).attr(attr2);
			uninter.div97 = R.rect(385.566,1013.486,17.226,10.664).attr(attr2);
			uninter.div98 = R.rect(407.016,1056.71,17.226,10.664).attr(attr2);
			uninter.div99 = R.rect(407.016,1045.904,17.226,10.664).attr(attr2);
			uninter.div100 = R.rect(407.016,1035.099,17.226,10.663).attr(attr2);
			uninter.div101 = R.rect(407.016,1024.292,17.226,10.664).attr(attr);
			uninter.div102 = R.rect(407.016,1013.486,17.226,10.664).attr(attr2);
			uninter.div103 = R.rect(428.466,1056.71,17.226,10.664).attr(attr2);
			uninter.div104 = R.rect(428.466,1045.904,17.226,10.664).attr(attr2);
			uninter.div105 = R.rect(428.466,1035.099,17.226,10.663).attr(attr);
			uninter.div106 = R.rect(428.466,1024.292,17.226,10.664).attr(attr2);
			uninter.div107 = R.rect(428.466,1013.486,17.226,10.664).attr(attr2);
			uninter.div108 = R.rect(449.916,1056.71,17.226,10.664).attr(attr2);
			uninter.div109 = R.rect(449.916,1045.904,17.226,10.664).attr(attr2);
			uninter.div110 = R.rect(449.916,1035.099,17.226,10.663).attr(attr2);
			uninter.div111 = R.rect(449.916,1024.292,17.226,10.664).attr(attr);
			uninter.div112 = R.rect(449.916,1013.486,17.226,10.664).attr(attr2);
			uninter.div113 = R.rect(449.916,1002.681,17.226,10.663).attr(attr2);
			uninter.div114 = R.rect(471.366,1056.71,17.225,10.664).attr(attr2);
			uninter.div115 = R.rect(471.366,1045.904,17.225,10.664).attr(attr);
			uninter.div116 = R.rect(471.366,1035.099,17.225,10.663).attr(attr2);
			uninter.div117 = R.rect(471.366,1024.292,17.225,10.664).attr(attr2);
			uninter.div118 = R.rect(471.366,1013.486,17.225,10.664).attr(attr2);
			uninter.div119 = R.rect(471.366,1002.681,17.225,10.663).attr(attr2);
			uninter.div120 = R.rect(492.816,1056.71,17.225,10.664).attr(attr);
			uninter.div121 = R.rect(492.816,1045.904,17.225,10.664).attr(attr2);
			uninter.div122 = R.rect(492.816,1035.099,17.225,10.663).attr(attr2);
			uninter.div123 = R.rect(492.816,1024.292,17.225,10.664).attr(attr2);
			uninter.div124 = R.rect(492.816,1013.486,17.225,10.664).attr(attr2);
			uninter.div125 = R.rect(492.816,1002.681,17.225,10.663).attr(attr2);
			uninter.div126 = R.rect(514.266,1056.71,17.226,10.664).attr(attr2);
			uninter.div127 = R.rect(514.266,1045.904,17.226,10.664).attr(attr);
			//
			uninter.div128 = R.rect(514.266,1035.099,17.226,10.663).attr(attr2);
			uninter.div129 = R.rect(514.266,1024.292,17.226,10.664).attr(attr2);
			uninter.div130 = R.rect(514.266,1013.486,17.226,10.664).attr(attr2);
			uninter.div131 = R.rect(514.266,1002.681,17.226,10.663).attr(attr2);
			uninter.div132 = R.rect(535.716,1056.71,17.226,10.664).attr(attr2);
			uninter.div133 = R.rect(535.716,1045.904,17.226,10.664).attr(attr2);
			uninter.div134 = R.rect(535.716,1035.099,17.226,10.663).attr(attr);
			uninter.div135 = R.rect(535.716,1024.292,17.226,10.664).attr(attr2);
			uninter.div136 = R.rect(535.716,1013.486,17.226,10.664).attr(attr2);
			uninter.div137 = R.rect(535.716,1002.681,17.226,10.663).attr(attr2);
			uninter.div138 = R.rect(535.716,991.874,17.226,10.664).attr(attr2);
			uninter.div139 = R.rect(557.166,1056.71,17.226,10.664).attr(attr2);
			uninter.div140 = R.rect(557.166,1045.904,17.226,10.664).attr(attr2);
			uninter.div141 = R.rect(557.166,1035.099,17.226,10.663).attr(attr2);
			uninter.div142 = R.rect(557.166,1024.292,17.226,10.664).attr(attr2);
			uninter.div143 = R.rect(557.166,1013.486,17.226,10.664).attr(attr);
			uninter.div144 = R.rect(557.166,1002.681,17.226,10.663).attr(attr2);
			uninter.div145 = R.rect(557.166,991.874,17.226,10.664).attr(attr2);
			uninter.div146 = R.rect(578.616,1056.71,17.225,10.664).attr(attr2);
			uninter.div147 = R.rect(578.616,1045.904,17.225,10.664).attr(attr2);
			uninter.div148 = R.rect(578.616,1035.099,17.225,10.663).attr(attr2);
			uninter.div149 = R.rect(578.616,1024.292,17.225,10.664).attr(attr2);
			uninter.div150 = R.rect(578.616,1013.486,17.225,10.664).attr(attr);
			uninter.div151 = R.rect(578.616,1002.681,17.225,10.663).attr(attr2);
			uninter.div152 = R.rect(578.616,991.874,17.225,10.664).attr(attr2);
			uninter.div153 = R.rect(600.066,1056.71,17.225,10.664).attr(attr2);
			uninter.div154 = R.rect(600.066,1045.904,17.225,10.664).attr(attr2);
			uninter.div155 = R.rect(600.066,1035.099,17.225,10.663).attr(attr);
			uninter.div156 = R.rect(600.066,1024.292,17.225,10.664).attr(attr2);
			uninter.div157 = R.rect(621.516,1056.71,17.226,10.664).attr(attr2);
			uninter.div158 = R.rect(621.516,1045.904,17.226,10.664).attr(attr2);
			uninter.div159 = R.rect(621.516,1035.099,17.226,10.663).attr(attr);
			uninter.div160 = R.rect(621.516,1024.292,17.226,10.664).attr(attr2);
			uninter.div161 = R.rect(642.966,1056.71,17.226,10.664).attr(attr2);
			uninter.div162 = R.rect(642.966,1045.904,17.226,10.664).attr(attr2);
			uninter.div163 = R.rect(642.966,1035.099,17.226,10.663).attr(attr);
			uninter.div164 = R.rect(642.966,1024.292,17.226,10.664).attr(attr2);
			uninter.div165 = R.rect(642.966,1013.486,17.226,10.664).attr(attr2);
			uninter.div166 = R.rect(664.416,1056.71,17.225,10.664).attr(attr2);
			uninter.div167 = R.rect(664.416,1045.904,17.225,10.664).attr(attr2);
			uninter.div168 = R.rect(664.416,1035.099,17.225,10.663).attr(attr);
			uninter.div169 = R.rect(664.416,1024.292,17.225,10.664).attr(attr2);
			uninter.div170 = R.rect(664.416,1013.486,17.225,10.664).attr(attr2);
			uninter.div171 = R.rect(685.866,1056.71,17.225,10.664).attr(attr2);
			uninter.div172 = R.rect(685.866,1045.904,17.225,10.664).attr(attr);
			uninter.div173 = R.rect(685.866,1035.099,17.225,10.663).attr(attr2);
			uninter.div174 = R.rect(685.866,1024.292,17.225,10.664).attr(attr2);
			uninter.div175 = R.rect(685.866,1013.486,17.225,10.664).attr(attr2);
			uninter.div176 = R.rect(707.316,1056.71,17.225,10.664).attr(attr2);
			uninter.div177 = R.rect(707.316,1045.904,17.225,10.664).attr(attr);
			uninter.div178 = R.rect(707.316,1035.099,17.225,10.663).attr(attr2);
			uninter.div179 = R.rect(707.316,1024.292,17.225,10.664).attr(attr2);
			uninter.div180 = R.rect(707.316,1013.486,17.225,10.664).attr(attr2);
			uninter.div181 = R.rect(750.216,1056.71,17.226,10.664).attr(attr2);
			uninter.div182 = R.rect(750.216,1045.904,17.226,10.664).attr(attr2);
			uninter.div183 = R.rect(750.216,1035.099,17.226,10.663).attr(attr);
			uninter.div184 = R.rect(750.216,1024.292,17.226,10.664).attr(attr2);
			uninter.div185 = R.rect(750.216,1013.486,17.226,10.664).attr(attr2);
			uninter.div186 = R.rect(771.666,1056.71,17.225,10.664).attr(attr);
			uninter.div187 = R.rect(771.666,1045.904,17.225,10.664).attr(attr2);
			uninter.div188 = R.rect(771.666,1035.099,17.225,10.663).attr(attr2);
			uninter.div189 = R.rect(771.666,1024.292,17.225,10.664).attr(attr2);
			uninter.div190 = R.rect(771.666,1013.486,17.225,10.664).attr(attr2);
			uninter.div191 = R.rect(793.116,1056.71,17.226,10.664).attr(attr2);
			uninter.div192 = R.rect(793.116,1045.904,17.226,10.664).attr(attr);
			uninter.div193 = R.rect(793.116,1035.099,17.226,10.663).attr(attr2);
			uninter.div194 = R.rect(793.116,1024.292,17.226,10.664).attr(attr2);
			uninter.div195 = R.rect(793.116,1013.486,17.226,10.664).attr(attr2);
			uninter.div196 = R.rect(814.566,1056.71,17.226,10.664).attr(attr2);
			uninter.div197 = R.rect(814.566,1045.904,17.226,10.664).attr(attr);
			uninter.div198 = R.rect(814.566,1035.099,17.226,10.663).attr(attr2);
			uninter.div199 = R.rect(814.566,1024.292,17.226,10.664).attr(attr2);
			uninter.div200 = R.rect(814.566,1013.486,17.226,10.664).attr(attr2);
			uninter.div201 = R.rect(836.016,1056.71,17.226,10.664).attr(attr);
			uninter.div202 = R.rect(836.016,1045.904,17.226,10.664).attr(attr2);
			uninter.div203 = R.rect(836.016,1035.099,17.226,10.663).attr(attr2);
			uninter.div204 = R.rect(836.016,1024.292,17.226,10.664).attr(attr2);
			uninter.div205 = R.rect(836.016,1013.486,17.226,10.664).attr(attr2);
			uninter.div206 = R.rect(857.466,1056.71,17.226,10.664).attr(attr);
			uninter.div207 = R.rect(857.466,1045.904,17.226,10.664).attr(attr2);
			uninter.div208 = R.rect(857.466,1035.099,17.226,10.663).attr(attr2);
			uninter.div209 = R.rect(857.466,1024.292,17.226,10.664).attr(attr2);
			uninter.div210 = R.rect(857.466,1013.486,17.226,10.664).attr(attr2);
			uninter.div211 = R.rect(878.916,1056.71,17.225,10.664).attr(attr);
			uninter.div212 = R.rect(878.916,1045.904,17.225,10.664).attr(attr2);
			uninter.div213 = R.rect(878.916,1035.099,17.225,10.663).attr(attr2);
			uninter.div214 = R.rect(878.916,1024.292,17.225,10.664).attr(attr2);
			uninter.div215 = R.rect(878.916,1013.486,17.225,10.664).attr(attr2);

			uninter.battle1 = R.rect(192.516,1376.055,16.962,32.134).attr(attr);
			uninter.battle2 = R.rect(192.516,1312.072,16.962,64.077).attr(attr2);
			uninter.battle3 = R.rect(192.516,1280.081,16.962,32.425).attr(attr3);
			uninter.battle4 = R.rect(213.966,1376.055,16.962,32.134).attr(attr);
			uninter.battle5 = R.rect(213.966,1312.041,16.962,64.014).attr(attr2);
			uninter.battle6 = R.rect(213.966,1280.079,16.962,31.967).attr(attr3);
			uninter.battle7 = R.rect(235.416,1328.003,16.962,80.186).attr(attr);
			uninter.battle8 = R.rect(235.416,1296.014,16.962,32.059).attr(attr2);
			uninter.battle9 = R.rect(235.416,1280.08,16.962,16.501).attr(attr3);
			uninter.battle10 = R.rect(256.866,1280.082,16.962,20.146).attr(attr3);
			uninter.battle11 = R.rect(256.866,1328.951,16.962,79.237).attr(attr);
			uninter.battle12 = R.rect(256.866,1299.943,16.962,29.381).attr(attr2);
			uninter.battle13 = R.rect(278.316,1313.932,16.962,94.257).attr(attr);
			uninter.battle14 = R.rect(278.316,1288.621,16.962,25.59).attr(attr2);
			uninter.battle15 = R.rect(278.316,1280.081,16.962,8.823).attr(attr3);
			uninter.battle16 = R.rect(299.766,1311.94,16.962,96.248).attr(attr);
			uninter.battle17 = R.rect(299.766,1296.015,16.962,16.178).attr(attr2);
			uninter.battle18 = R.rect(299.766,1280.081,16.962,16.471).attr(attr3);
			uninter.battle19 = R.rect(321.216,1330.746,16.962,77.727).attr(attr);
			uninter.battle20 = R.rect(321.216,1288.623,16.962,42.732).attr(attr2);
			uninter.battle21 = R.rect(321.216,1280.081,16.962,8.824).attr(attr3);
			uninter.battle22 = R.rect(342.666,1392.264,16.962,15.925).attr(attr);
			uninter.battle23 = R.rect(342.666,1296.015,16.962,96.249).attr(attr2);
			uninter.battle24 = R.rect(342.666,1280.081,16.962,16.218).attr(attr3);
			uninter.battle25 = R.rect(364.116,1333.027,16.962,75.161).attr(attr);
			uninter.battle26 = R.rect(364.116,1290.94,16.962,42.539).attr(attr2);
			uninter.battle27 = R.rect(364.116,1280.081,16.962,11.144).attr(attr3);
			uninter.battle28 = R.rect(385.566,1376.151,16.962,32.037).attr(attr);
			uninter.battle29 = R.rect(385.566,1296.011,16.962,80.329).attr(attr2);
			uninter.battle30 = R.rect(385.566,1280.08,16.962,16.285).attr(attr3);
			uninter.battle31 = R.rect(407.016,1359.998,16.962,48.19).attr(attr);
			uninter.battle32 = R.rect(407.016,1296.016,16.962,64.115).attr(attr2);
			uninter.battle33 = R.rect(407.016,1280.081,16.962,16.324).attr(attr3);
			uninter.battle34 = R.rect(428.466,1348.339,16.962,59.85).attr(attr);
			uninter.battle35 = R.rect(428.466,1288.622,16.962,59.85).attr(attr2);
			uninter.battle36 = R.rect(428.466,1280.081,16.962,8.824).attr(attr3);
			uninter.battle37 = R.rect(449.916,1353.211,16.962,54.978).attr(attr);
			uninter.battle38 = R.rect(449.916,1298.328,16.962,54.978).attr(attr2);
			uninter.battle39 = R.rect(449.916,1280.082,16.962,18.527).attr(attr3);
			uninter.battle40 = R.rect(471.366,1389.8,16.962,18.389).attr(attr);
			uninter.battle41 = R.rect(471.366,1280.081,16.962,109.908).attr(attr2);
			uninter.battle42 = R.rect(492.816,1386.822,16.962,21.366).attr(attr);
			uninter.battle43 = R.rect(492.816,1280.098,16.962,106.764).attr(attr2);
			uninter.battle44 = R.rect(514.266,1382.505,16.962,25.684).attr(attr);
			uninter.battle45 = R.rect(514.266,1280.118,16.962,102.478).attr(attr2);
			uninter.battle46 = R.rect(535.716,1365.306,16.962,42.883).attr(attr);
			uninter.battle47 = R.rect(535.716,1280.23,16.962,85.303).attr(attr2);
			uninter.battle48 = R.rect(557.166,1330.993,16.962,77.195).attr(attr);
			uninter.battle49 = R.rect(557.166,1280.375,16.962,50.937).attr(attr2);
			uninter.battle50 = R.rect(578.616,1330.988,16.962,77.2).attr(attr);
			uninter.battle51 = R.rect(578.616,1305.779,16.962,25.497).attr(attr2);
			uninter.battle52 = R.rect(578.616,1280.08,16.962,25.887).attr(attr3);
			uninter.battle53 = R.rect(600.066,1322.878,16.962,85.311).attr(attr);
			uninter.battle54 = R.rect(600.066,1301.551,16.962,21.278).attr(attr2);
			uninter.battle55 = R.rect(600.066,1280.081,16.962,21.705).attr(attr3);
			uninter.battle56 = R.rect(621.516,1365.541,16.962,42.647).attr(attr);
			uninter.battle57 = R.rect(621.516,1280.122,16.962,85.411).attr(attr2);
			uninter.battle58 = R.rect(642.966,1305.252,16.962,103.221).attr(attr);
			uninter.battle59 = R.rect(642.966,1280.081,16.962,25.602).attr(attr3);
			uninter.battle60 = R.rect(664.416,1356.867,16.962,51.321).attr(attr);
			uninter.battle61 = R.rect(664.416,1305.778,16.962,51.371).attr(attr2);
			uninter.battle62 = R.rect(664.416,1280.08,16.962,25.982).attr(attr3);
			uninter.battle63 = R.rect(685.866,1356.87,16.962,51.318).attr(attr);
			uninter.battle64 = R.rect(685.866,1280.127,16.962,77.16).attr(attr2);
			uninter.battle65 = R.rect(707.316,1386.822,16.962,21.366).attr(attr);
			uninter.battle66 = R.rect(707.316,1301.41,16.962,85.451).attr(attr2);
			uninter.battle67 = R.rect(707.316,1280.081,16.962,21.612).attr(attr3);
			uninter.battle68 = R.rect(750.216,1360.093,16.962,48.096).attr(attr);
			uninter.battle69 = R.rect(750.216,1280.121,16.962,80.01).attr(attr2);
			uninter.battle70 = R.rect(771.666,1359.281,16.962,48.907).attr(attr);
			uninter.battle71 = R.rect(771.666,1280.218,16.962,79.913).attr(attr2);
			uninter.battle72 = R.rect(793.116,1344.206,16.962,63.982).attr(attr);
			uninter.battle73 = R.rect(793.116,1280.223,16.962,63.983).attr(attr2);
			uninter.battle74 = R.rect(814.566,1344.204,16.962,63.984).attr(attr);
			uninter.battle75 = R.rect(814.566,1280.221,16.962,63.985).attr(attr2);
			uninter.battle76 = R.rect(836.016,1280.131,16.962,128.058).attr(attr2);
			uninter.battle77 = R.rect(857.466,1386.822,16.962,21.366).attr(attr);
			uninter.battle78 = R.rect(857.466,1280.121,16.962,106.74).attr(attr2);
			uninter.battle79 = R.rect(878.916,1365.4,16.962,42.788).attr(attr);
			uninter.battle80 = R.rect(878.916,1280.127,16.962,85.406).attr(attr2);

			uninter.cup1 = R.path("M332.993,444.487c0,0.5,0,1,0,1.5c-9.603,7.019-44.896,8.806-52.493-0.75 c7.267-11.519-0.784-46.211,4.499-57.743c1.541-3.363,6.371-4.009,8.249-7.499c2.727-5.066,0.716-12.286,3-17.248 c-1.267-2.743-7.09-7.4-5.25-15.748c6.873-7.396,28.882-7.744,30.747,2.25c1.114,5.977-5.135,8.691-6,14.248 c-1.132,7.271,3.98,10.394,3.75,17.248c15.909,8.588,4.71,44.283,11.248,62.242C331.813,443.167,332.008,444.222,332.993,444.487z").attr(cup);
			uninter.cup2 = R.path("M332.993,444.487c0,0.5,0,1,0,1.5c-9.603,7.019-44.896,8.806-52.493-0.75 c7.267-11.519-0.784-46.211,4.499-57.743c1.541-3.363,6.371-4.009,8.249-7.499c2.727-5.066,0.716-12.286,3-17.248 c-1.267-2.743-7.09-7.4-5.25-15.748c6.873-7.396,28.882-7.744,30.747,2.25c1.114,5.977-5.135,8.691-6,14.248 c-1.132,7.271,3.98,10.394,3.75,17.248c15.909,8.588,4.71,44.283,11.248,62.242C331.813,443.167,332.008,444.222,332.993,444.487z").attr(cup);
			uninter.cup3 = R.path("M332.993,444.487c0,0.5,0,1,0,1.5c-9.603,7.019-44.896,8.806-52.493-0.75 c7.267-11.519-0.784-46.211,4.499-57.743c1.541-3.363,6.371-4.009,8.249-7.499c2.727-5.066,0.716-12.286,3-17.248 c-1.267-2.743-7.09-7.4-5.25-15.748c6.873-7.396,28.882-7.744,30.747,2.25c1.114,5.977-5.135,8.691-6,14.248 c-1.132,7.271,3.98,10.394,3.75,17.248c15.909,8.588,4.71,44.283,11.248,62.242C331.813,443.167,332.008,444.222,332.993,444.487z").attr(cup);
			uninter.cup4 = R.path("M332.993,444.487c0,0.5,0,1,0,1.5c-9.603,7.019-44.896,8.806-52.493-0.75 c7.267-11.519-0.784-46.211,4.499-57.743c1.541-3.363,6.371-4.009,8.249-7.499c2.727-5.066,0.716-12.286,3-17.248 c-1.267-2.743-7.09-7.4-5.25-15.748c6.873-7.396,28.882-7.744,30.747,2.25c1.114,5.977-5.135,8.691-6,14.248 c-1.132,7.271,3.98,10.394,3.75,17.248c15.909,8.588,4.71,44.283,11.248,62.242C331.813,443.167,332.008,444.222,332.993,444.487z").attr(cup);
			uninter.cup5 = R.path("M332.993,444.487c0,0.5,0,1,0,1.5c-9.603,7.019-44.896,8.806-52.493-0.75 c7.267-11.519-0.784-46.211,4.499-57.743c1.541-3.363,6.371-4.009,8.249-7.499c2.727-5.066,0.716-12.286,3-17.248 c-1.267-2.743-7.09-7.4-5.25-15.748c6.873-7.396,28.882-7.744,30.747,2.25c1.114,5.977-5.135,8.691-6,14.248 c-1.132,7.271,3.98,10.394,3.75,17.248c15.909,8.588,4.71,44.283,11.248,62.242C331.813,443.167,332.008,444.222,332.993,444.487z").attr(cup);
			uninter.cup1.transform("t-20,800s.3");
			uninter.cup2.transform("t1.5,800s.3");
			uninter.cup3.transform("t44.5,800s.3");
			uninter.cup4.transform("t66,800s.3");
			uninter.cup5.transform("t108.5,800s.3");



			//CONTENT BARS START
			var inter = {};
			var inter3 = {};
			var inter4 = {};

			inter4.divposi1 = R.rect(42.3664,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi2 = R.rect(63.8164,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi3 = R.rect(85.2664,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi4 = R.rect(106.716,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi5 = R.rect(128.166,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi6 = R.rect(149.616,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi7 = R.rect(171.066,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi8 = R.rect(192.516,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi9 = R.rect(213.966,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi10 = R.rect(235.416,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi11 = R.rect(256.866,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi12 = R.rect(278.316,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi13 = R.rect(299.766,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi14 = R.rect(321.216,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi15 = R.rect(342.666,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi16 = R.rect(364.116,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi17 = R.rect(385.566,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi18 = R.rect(407.016,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi19 = R.rect(428.466,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi20 = R.rect(449.916,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi21 = R.rect(471.366,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi22 = R.rect(492.816,981.068,17.314,86.663).attr(attrblank);
			//
			inter4.divposi23 = R.rect(514.266,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi24 = R.rect(535.716,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi25 = R.rect(557.166,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi26 = R.rect(578.616,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi27 = R.rect(600.066,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi28 = R.rect(621.516,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi29 = R.rect(642.966,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi30 = R.rect(664.416,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi31 = R.rect(685.866,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi32 = R.rect(707.316,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi33 = R.rect(750.216,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi34 = R.rect(771.666,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi35 = R.rect(793.116,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi36 = R.rect(814.566,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi37 = R.rect(836.016,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi38 = R.rect(857.466,981.068,17.314,86.663).attr(attrblank);
			inter4.divposi39 = R.rect(878.916,981.068,17.314,86.663).attr(attrblank);

			inter3.battlei1 = R.rect(192.516,1280.081,16.962,129).attr(attrblank);
			inter3.battlei2 = R.rect(213.966,1280.081,16.962,129).attr(attrblank);
			inter3.battlei3 = R.rect(235.416,1280.081,16.962,129).attr(attrblank);
			inter3.battlei4 = R.rect(256.866,1280.081,16.962,129).attr(attrblank);
			inter3.battlei5 = R.rect(278.316,1280.081,16.962,129).attr(attrblank);
			inter3.battlei6 = R.rect(299.766,1280.081,16.962,129).attr(attrblank);
			inter3.battlei7 = R.rect(321.216,1280.081,16.962,129).attr(attrblank);
			inter3.battlei8 = R.rect(342.666,1280.081,16.962,129).attr(attrblank);
			inter3.battlei9 = R.rect(364.116,1280.081,16.962,129).attr(attrblank);
			inter3.battlei10 = R.rect(385.566,1280.081,16.962,129).attr(attrblank);
			inter3.battlei11 = R.rect(407.016,1280.081,16.962,129).attr(attrblank);
			inter.battlei12 = R.rect(428.466,1280.081,16.962,129).attr(attrblank);
			inter.battlei13 = R.rect(449.916,1280.081,16.962,129).attr(attrblank);
			inter.battlei14 = R.rect(471.366,1280.081,16.962,129).attr(attrblank);
			inter.battlei15 = R.rect(492.816,1280.081,16.962,129).attr(attrblank);
			inter.battlei16 = R.rect(514.266,1280.081,16.962,129).attr(attrblank);
			inter.battlei17 = R.rect(535.716,1280.081,16.962,129).attr(attrblank);
			inter.battlei18 = R.rect(557.166,1280.081,16.962,129).attr(attrblank);
			inter.battlei19 = R.rect(578.616,1280.081,16.962,129).attr(attrblank);
			inter.battlei20 = R.rect(600.066,1280.081,16.962,129).attr(attrblank);
			inter.battlei21 = R.rect(621.516,1280.081,16.962,129).attr(attrblank);
			inter.battlei22 = R.rect(642.966,1280.081,16.962,129).attr(attrblank);
			inter.battlei23 = R.rect(664.416,1280.081,16.962,129).attr(attrblank);
			inter.battlei24 = R.rect(685.866,1280.081,16.962,129).attr(attrblank);
			inter.battlei25 = R.rect(707.316,1280.081,16.962,129).attr(attrblank);
			inter.battlei26 = R.rect(750.216,1280.081,16.962,129).attr(attrblank);
			inter.battlei27 = R.rect(771.666,1280.081,16.962,129).attr(attrblank);
			inter.battlei28 = R.rect(793.116,1280.081,16.962,129).attr(attrblank);
			inter.battlei29 = R.rect(814.566,1280.081,16.962,129).attr(attrblank);
			inter.battlei30 = R.rect(836.016,1280.081,16.962,129).attr(attrblank);
			inter.battlei31 = R.rect(857.466,1280.081,16.962,129).attr(attrblank);
			inter.battlei32 = R.rect(878.916,1280.081,16.962,129).attr(attrblank);

			inter3.playoffi1 = R.rect(42.3664,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi2 = R.rect(63.8164,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi3 = R.rect(85.2664,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi4 = R.rect(106.716,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi5 = R.rect(128.166,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi6 = R.rect(149.616,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi7 = R.rect(171.066,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi8 = R.rect(192.516,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi9 = R.rect(213.966,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi10 = R.rect(235.416,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi11 = R.rect(256.866,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi12 = R.rect(278.316,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi13 = R.rect(299.766,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi14 = R.rect(321.216,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi15 = R.rect(342.666,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi16 = R.rect(364.116,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi17 = R.rect(385.566,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi18 = R.rect(407.016,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi19 = R.rect(428.466,1131.812,16.775,84.248).attr(attrblank);
			inter3.playoffi20 = R.rect(449.916,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi21 = R.rect(471.366,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi22 = R.rect(492.816,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi23 = R.rect(514.266,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi24 = R.rect(535.716,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi25 = R.rect(557.166,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi26 = R.rect(578.616,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi27 = R.rect(600.066,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi28 = R.rect(621.516,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi29 = R.rect(642.966,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi30 = R.rect(664.416,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi31 = R.rect(685.866,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi32 = R.rect(707.316,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi33 = R.rect(750.216,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi34 = R.rect(771.666,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi35 = R.rect(793.116,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi36 = R.rect(814.566,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi37 = R.rect(836.016,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi38 = R.rect(857.466,1131.812,16.775,84.248).attr(attrblank);
			inter.playoffi39 = R.rect(878.916,1131.812,16.775,84.248).attr(attrblank);

						//attendance
			inter4.attend1 = R.rect(42.3664,901.729,16.87,36.812).attr(attr);
			inter4.attend2 = R.rect(63.8164,896.147,16.87,42.394).attr(attr);
			inter4.attend3 = R.rect(106.716,862.677,16.87,75.864).attr(attr);
			inter4.attend4 = R.rect(85.2664,835.838,16.87,102.559).attr(attr);
			inter4.attend5 = R.rect(128.166,858.316,16.87,80.225).attr(attr);
			inter4.attend6 = R.rect(149.616,840.686,17.06,97.855).attr(attr);
			inter4.attend7 = R.rect(171.066,830.638,16.87,107.903).attr(attr);
			inter4.attend8 = R.rect(192.516,771.275,16.87,167.153).attr(attr);
			inter4.attend9 = R.rect(213.966,771.275,16.87,167.153).attr(attr);
			inter4.attend10 = R.rect(235.416,790.826,16.87,147.57).attr(attr);
			inter4.attend11 = R.rect(256.866,771.275,16.87,167.153).attr(attr);
			inter4.attend12 = R.rect(278.316,770.993,16.87,167.399).attr(attr);
			inter4.attend13 = R.rect(299.766,770.993,16.87,167.545).attr(attr);
			inter4.attend14 = R.rect(321.216,773.997,16.87,164.541).attr(attr);
			inter4.attend15 = R.rect(342.666,770.441,16.87,167.955).attr(attr);
			inter4.attend16 = R.rect(364.116,771.276,16.87,167.12).attr(attr);
			inter4.attend17 = R.rect(385.566,771.276,16.87,167.12).attr(attr);
			inter4.attend18 = R.rect(407.016,775.826,16.87,162.57).attr(attr);
			inter4.attend19 = R.rect(428.466,776.964,16.87,161.578).attr(attr);
			inter4.attend20 = R.rect(449.916,783.504,16.87,155.038).attr(attr);
			inter4.attend21 = R.rect(471.366,796.229,16.87,142.313).attr(attr);
			inter4.attend22 = R.rect(492.816,810.155,16.87,128.388).attr(attr);
			inter4.attend23 = R.rect(514.266,812.999,16.87,125.393).attr(attr);
			inter4.attend24 = R.rect(535.716,820.393,16.87,118).attr(attr);
			inter4.attend25 = R.rect(557.166,784.927,16.87,153.465).attr(attr);
			inter4.attend26 = R.rect(578.616,782.936,16.87,155.456).attr(attr);
			inter4.attend27 = R.rect(600.066,782.936,16.87,155.456).attr(attr);
			inter4.attend28 = R.rect(621.516,787.409,16.87,150.982).attr(attr);
			inter4.attend29 = R.rect(642.966,789.403,16.87,148.988).attr(attr);
			inter4.attend30 = R.rect(664.416,779.45,16.87,158.94).attr(attr);
			inter4.attend31 = R.rect(685.866,778.953,16.87,159.438).attr(attr);
			inter4.attend32 = R.rect(707.316,768.074,16.87,170.316).attr(attr);
			inter4.attend33 = R.rect(750.216,777.531,16.87,160.851).attr(attr);
			inter4.attend34 = R.rect(771.666,777.531,16.87,160.851).attr(attr);
			inter4.attend35 = R.rect(793.116,777.531,16.87,160.851).attr(attr);
			inter4.attend36 = R.rect(814.566,777.531,16.87,160.851).attr(attr);
			inter4.attend37 = R.rect(836.016,777.531,16.87,160.851).attr(attr);
			inter4.attend38 = R.rect(857.466,777.531,16.87,160.851).attr(attr);
			inter4.attend39 = R.rect(878.916,777.531,16.87,160.851).attr(attr);




			//owners-

			inter3.huntero = R.rect(42.3664,106.354,59.713,21.816).attr(attr);
			inter3.skalbaniao = R.rect(106.716,106.354,38.404,21.816).attr(attr);
			inter.pocklingtono = R.rect(149.616,106.354,446.015,21.816).attr(attr);
			inter.eigo = R.rect(600.066,106.354,209.371,21.816).attr(attr);
			inter.katzo = R.rect(814.566,106.354,102.571,21.816).attr(attr);

			//gms
			inter3.hunterg = R.rect(42.3664,170.318,81.033,21.816).attr(attr);
			inter3.guidoling = R.rect(128.166,170.318,17.042,21.816).attr(attr);
			inter3.conacherg = R.rect(149.616,170.318,17.042,21.816).attr(attr);
			inter3.gordong = R.rect(171.066,170.318,37.789,21.816).attr(attr);
			inter.satherg = R.rect(213.966,170.318,424.983,21.816).attr(attr);
			inter.loweg = R.rect(642.966,170.318,167.664,21.816).attr(attr);
			inter.tambellinig = R.rect(814.566,170.318,103.664,21.816).attr(attr);

			//coaches
			inter3.kinasewichc = R.rect(42.3664,255.771,17.042,21.816).attr(attr);
			inter3.shawc = R.rect(63.8164,255.771,28.578,21.816).attr(attr);
			inter3.hunterc = R.rect(94.742,255.771,7.521,21.816).attr(attr);
			inter3.drakec = R.rect(106.716,255.771,17.042,21.816).attr(attr);
			inter3.gouidolinc = R.rect(128.166,255.771,6.209,21.816).attr(attr);
			inter3.satherc = R.rect(137.804,255.771,92,21.816).attr(attr);
			inter.satherc3 = R.rect(247,255.771,143,21.816).attr(attr);
			inter.watsonc = R.rect(235.416,255.771,7,21.816).attr(attr);
			inter.mucklerc = R.rect(394.835,255.771,50.123,21.816).attr(attr);
			inter.greenc = R.rect(449.916,255.771,49.737,21.816).attr(attr);
			inter.satherc2 = R.rect(503.025,255.771,7.215,21.816).attr(attr);
			inter.burnettc = R.rect(514.266,255.771,7.215,21.816).attr(attr);
			inter.lowc = R.rect(525.781,255.771,91.445,21.816).attr(attr);
			inter.lowec = R.rect(621.516,255.771,17.486,21.816).attr(attr);
			inter.mactavishc = R.rect(642.966,255.771,187.434,21.816).attr(attr);
			inter.quinnc = R.rect(836.016,255.771,17.487,21.816).attr(attr);
			inter.renneyc = R.rect(857.466,255.771,38.252,21.816).attr(attr);
			inter.kruegerc = R.rect(900.366,255.771,17.487,21.816).attr(attr);

			//arenas
			inter3.gardensa = R.rect(42.3664,426.552,38.404,21.816).attr(attr);
			inter3.northlandsa = R.rect(85.2664,426.552,446.415,21.816).attr(attr);
			inter.coliseum = R.rect(535.716,426.552,60.14,21.816).attr(attr);
			inter.skyreacha = R.rect(600.066,426.552,61.229,21.816).attr(attr);
			inter.rexalla = R.rect(664.416,426.552,253.041,21.816).attr(attr);

			//captains
			inter3.hamiltonca = R.rect(42.3664,341.508,102.34,21.816).attr(attr);
			inter3.satherca = R.rect(149.616,341.508,17.494,21.816).attr(attr);
			inter3.shmyrca = R.rect(171.066,341.508,17.494,21.816).attr(attr);
			inter3.chipperfieldca = R.rect(193.1,341.508,16.587,21.816).attr(attr);
			inter3.macdonaldca = R.rect(213.996,341.508,16.587,21.816).attr(attr);
			inter.fogolinac = R.rect(235.416,341.508,37.363,21.816).attr(attr);
			inter.gretzkyca = R.rect(278.566,341.508,103.061,21.816).attr(attr);
			inter.messierca = R.rect(386.0,341.508,58.711,21.816).attr(attr);
			inter.loweca = R.rect(451.0,341.508,16.587,21.816).attr(attr);
			inter.mactavishca = R.rect(471.2,341.508,38.273,21.816).attr(attr);
			inter.corsonca = R.rect(513.816,341.508,16.587,21.816).attr(attr);
			inter.buchbergerca = R.rect(536.4,341.508,81.141,21.816).attr(attr);
			inter.weightca = R.rect(621.516,341.508,38.532,21.816).attr(attr);
			inter.smithca = R.rect(664.366,341.508,123.905,21.816).attr(attr);
			inter.moreauca = R.rect(794.566,341.508,59.647,21.816).attr(attr);
			inter.horcoffca = R.rect(858.916,341.508,59.647,21.816).attr(attr);



			//allstars
			inter4.allstar1 = R.path("M51.473,714.003 45.735,712.901 42.915,707.784 \r\n\t\t\t\t40.094,712.901 34.356,714.003 38.35,718.268 37.625,724.065 42.915,721.584 48.204,724.065 47.479,718.268 \t\t\tz").attr(attr);
			inter4.allstar2 = R.path("M72.797,714.003 67.06,712.901 64.239,707.784 \r\n\t\t\t\t61.418,712.901 55.681,714.003 59.675,718.268 58.95,724.065 64.239,721.584 69.528,724.065 68.804,718.268 \t\t\tz").attr(attr);
			inter4.allstar3 = R.path("M94.406,714.003 88.669,712.901 85.848,707.784 \r\n\t\t\t\t83.027,712.901 77.29,714.003 81.283,718.268 80.559,724.065 85.848,721.584 91.137,724.065 90.412,718.268 \t\t\tz").attr(attr);
			inter4.allstar4 = R.path("M115.73,714.003 109.993,712.901 107.172,707.784 \r\n\t\t\t\t104.351,712.901 98.614,714.003 102.608,718.268 101.883,724.065 107.172,721.584 112.461,724.065 111.737,718.268 \t\t\tz").attr(attr);
			inter4.allstar5 = R.path("M137.055,714.003 131.317,712.901 128.497,707.784 \r\n\t\t\t\t125.676,712.901 119.938,714.003 123.932,718.268 123.207,724.065 128.497,721.584 133.786,724.065 133.061,718.268 \t\t\tz").attr(attr);
			inter4.allstar6 = R.path("M158.379,714.003 152.642,712.901 149.821,707.784 \r\n\t\t\t\t147,712.901 141.263,714.003 145.257,718.268 144.532,724.065 149.821,721.584 155.11,724.065 154.386,718.268 \t\t\tz").attr(attr);
			inter4.allstar7 = R.path("M179.988,714.003 174.251,712.901 171.43,707.784 \r\n\t\t\t\t168.609,712.901 162.872,714.003 166.865,718.268 166.141,724.065 171.43,721.584 176.719,724.065 175.994,718.268 \t\t\tz").attr(attr);
			inter4.allstar8 = R.path("M201.028,714.003 195.291,712.901 192.47,707.784 \r\n\t\t\t\t189.649,712.901 183.912,714.003 187.905,718.268 187.181,724.065 192.47,721.584 197.759,724.065 197.034,718.268 \t\t\tz").attr(attr);
			inter4.allstar9 = R.path("M222.068,714.003 216.331,712.901 213.51,707.784 \r\n\t\t\t\t210.689,712.901 204.952,714.003 208.946,718.268 208.221,724.065 213.51,721.584 218.799,724.065 218.075,718.268 \t\t\tz").attr(attr);
			inter4.allstar10 = R.path("M243.108,714.003 237.371,712.901 234.55,707.784 \r\n\t\t\t\t231.729,712.901 225.992,714.003 229.986,718.268 229.261,724.065 234.55,721.584 239.839,724.065 239.115,718.268 \t\t\tz").attr(attr);
			inter4.allstar11 = R.path("M264.433,714.003 258.695,712.901 255.875,707.784 \r\n\t\t\t\t253.054,712.901 247.316,714.003 251.31,718.268 250.585,724.065 255.875,721.584 261.164,724.065 260.439,718.268 \t\t\tz").attr(attr);
			inter4.allstar12 = R.path("M285.757,714.003 280.02,712.901 277.199,707.784 \r\n\t\t\t\t274.378,712.901 268.641,714.003 272.635,718.268 271.91,724.065 277.199,721.584 282.488,724.065 281.764,718.268 \t\t\tz").attr(attr);
			inter4.allstar13 = R.path("M307.082,714.003 301.344,712.901 298.523,707.784 \r\n\t\t\t\t295.703,712.901 289.965,714.003 293.959,718.268 293.234,724.065 298.523,721.584 303.813,724.065 303.088,718.268 \t\t\tz").attr(attr);
			inter4.allstar14 = R.path("M328.69,714.003 322.953,712.901 320.132,707.784 \r\n\t\t\t\t317.312,712.901 311.574,714.003 315.567,718.268 314.843,724.065 320.132,721.584 325.422,724.065 324.696,718.268 \t\t\tz").attr(attr);
			inter4.allstar15 = R.path("M371.055,714.003 365.317,712.901 362.497,707.784 \r\n\t\t\t\t359.676,712.901 353.938,714.003 357.933,718.268 357.207,724.065 362.497,721.584 367.786,724.065 367.062,718.268 \t\t\tz").attr(attr);
			inter4.allstar16 = R.path("M392.664,714.003 386.927,712.901 384.105,707.784 \r\n\t\t\t\t381.284,712.901 375.547,714.003 379.541,718.268 378.816,724.065 384.105,721.584 389.395,724.065 388.67,718.268 \t\t\tz").attr(attr);
			inter4.allstar17 = R.path("M413.988,714.003 408.251,712.901 405.43,707.784 \r\n\t\t\t\t402.609,712.901 396.872,714.003 400.865,718.268 400.141,724.065 405.43,721.584 410.719,724.065 409.994,718.268 \t\t\tz").attr(attr);
			inter4.allstar18 = R.path("M435.028,714.003 429.291,712.901 426.47,707.784 \r\n\t\t\t\t423.649,712.901 417.912,714.003 421.905,718.268 421.181,724.065 426.47,721.584 431.76,724.065 431.034,718.268 \t\t\tz").attr(attr);
			inter4.allstar19 = R.path("M456.353,714.003 450.615,712.901 447.794,707.784 \r\n\t\t\t\t444.974,712.901 439.236,714.003 443.229,718.268 442.505,724.065 447.794,721.584 453.084,724.065 452.358,718.268 \t\t\tz").attr(attr);
			inter4.allstar20 = R.path("M477.677,714.003 471.939,712.901 469.119,707.784 \r\n\t\t\t\t466.298,712.901 460.561,714.003 464.555,718.268 463.829,724.065 469.119,721.584 474.408,724.065 473.684,718.268 \t\t\tz").attr(attr);
			inter4.allstar21 = R.path("M499.286,714.003 493.549,712.901 490.728,707.784 \r\n\t\t\t\t487.906,712.901 482.169,714.003 486.163,718.268 485.438,724.065 490.728,721.584 496.017,724.065 495.292,718.268 \t\t\tz").attr(attr);
			inter4.allstar22 = R.path("M541.65,714.003 535.913,712.901 533.092,707.784 \r\n\t\t\t\t530.271,712.901 524.534,714.003 528.527,718.268 527.803,724.065 533.092,721.584 538.382,724.065 537.656,718.268 \t\t\tz").attr(attr);
			inter4.allstar23 = R.path("M562.975,714.003 557.237,712.901 554.416,707.784 \r\n\t\t\t\t551.596,712.901 545.858,714.003 549.852,718.268 549.127,724.065 554.416,721.584 559.706,724.065 558.98,718.268 \t\t\tz").attr(attr);
			inter4.allstar24 = R.path("M584.299,714.003 578.562,712.901 575.741,707.784 \r\n\t\t\t\t572.92,712.901 567.183,714.003 571.177,718.268 570.451,724.065 575.741,721.584 581.03,724.065 580.306,718.268 \t\t\tz").attr(attr);
			inter4.allstar25 = R.path("M605.624,714.003 599.887,712.901 597.065,707.784 \r\n\t\t\t\t594.244,712.901 588.507,714.003 592.501,718.268 591.776,724.065 597.065,721.584 602.354,724.065 601.63,718.268 \t\t\tz").attr(attr);
			inter4.allstar26 = R.path("M627.232,714.003 621.495,712.901 618.674,707.784 \r\n\t\t\t\t615.854,712.901 610.116,714.003 614.109,718.268 613.385,724.065 618.674,721.584 623.964,724.065 623.238,718.268 \t\t\tz").attr(attr);
			inter4.allstar27 = R.path("M648.557,714.003 642.819,712.901 639.998,707.784 \r\n\t\t\t\t637.178,712.901 631.44,714.003 635.434,718.268 634.709,724.065 639.998,721.584 645.288,724.065 644.562,718.268 \t\t\tz").attr(attr);
			inter4.allstar28 = R.path("M669.597,714.003 663.859,712.901 661.039,707.784 \r\n\t\t\t\t658.218,712.901 652.48,714.003 656.475,718.268 655.749,724.065 661.039,721.584 666.328,724.065 665.604,718.268 \t\t\tz").attr(attr);
			inter4.allstar29 = R.path("M690.921,714.003 685.184,712.901 682.363,707.784 \r\n\t\t\t\t679.542,712.901 673.805,714.003 677.799,718.268 677.073,724.065 682.363,721.584 687.652,724.065 686.928,718.268 \t\t\tz").attr(attr);
			inter4.allstar30 = R.path("M713.099,714.003 707.361,712.901 704.54,707.784 \r\n\t\t\t\t701.72,712.901 695.982,714.003 699.976,718.268 699.251,724.065 704.54,721.584 709.83,724.065 709.104,718.268 \t\t\tz").attr(attr);
			inter4.allstar31 = R.path("M775.935,714.003 770.197,712.901 767.376,707.784 \r\n\t\t\t\t764.556,712.901 758.818,714.003 762.812,718.268 762.087,724.065 767.376,721.584 772.666,724.065 771.94,718.268 \t\t\tz").attr(attr);
			inter4.allstar32 = R.path("M797.543,714.003 791.806,712.901 788.985,707.784 \r\n\t\t\t\t786.164,712.901 780.427,714.003 784.421,718.268 783.695,724.065 788.985,721.584 794.274,724.065 793.55,718.268 \t\t\tz").attr(attr);
			inter4.allstar33 = R.path("M818.868,714.003 813.131,712.901 810.31,707.784 \r\n\t\t\t\t807.488,712.901 801.751,714.003 805.745,718.268 805.021,724.065 810.31,721.584 815.599,724.065 814.874,718.268 \t\t\tz").attr(attr);
			inter4.allstar34 = R.path("M861.517,714.003 855.779,712.901 852.958,707.784 \r\n\t\t\t\t850.138,712.901 844.4,714.003 848.394,718.268 847.669,724.065 852.958,721.584 858.248,724.065 857.522,718.268 \t\t\tz").attr(attr);
			inter4.allstar35 = R.path("M883.125,714.003 877.388,712.901 874.567,707.784 \r\n\t\t\t\t871.746,712.901 866.009,714.003 870.003,718.268 869.277,724.065 874.567,721.584 879.856,724.065 879.132,718.268 \t\t\tz").attr(attr);

			inter4.allstar1.transform("t8,0");
			inter4.allstar2.transform("t8,0");
			inter4.allstar3.transform("t8,0");
			inter4.allstar4.transform("t9,0");
			inter4.allstar5.transform("t8,0");
			inter4.allstar6.transform("t9,0");
			inter4.allstar7.transform("t8,0");
			inter4.allstar8.transform("t9,0");
			inter4.allstar9.transform("t9,0");
			inter4.allstar10.transform("t10,0");
			inter4.allstar11.transform("t10,0");
			inter4.allstar12.transform("t10,0");
			inter4.allstar13.transform("t10,0");
			inter4.allstar14.transform("t10,0");
			inter4.allstar15.transform("t10,0");
			inter4.allstar16.transform("t10,0");
			inter4.allstar17.transform("t10,0");
			inter4.allstar18.transform("t10,0");
			inter4.allstar19.transform("t11,0");
			inter4.allstar20.transform("t11,0");
			inter4.allstar21.transform("t11,0");
			inter4.allstar22.transform("t12,0");
			inter4.allstar23.transform("t12,0");
			inter4.allstar24.transform("t12,0");
			inter4.allstar25.transform("t12,0");
			inter4.allstar26.transform("t12,0");
			inter4.allstar27.transform("t12,0");
			inter4.allstar28.transform("t12,0");
			inter4.allstar29.transform("t12,0");
			inter4.allstar30.transform("t12,0");
			inter4.allstar31.transform("t13,0");
			inter4.allstar32.transform("t13,0");
			inter4.allstar33.transform("t13,0");
			inter4.allstar34.transform("t13,0");
			inter4.allstar35.transform("t13,0");


			//winning percentage
			inter4.winper1 = R.rect(42.3664,558.106,16.659,102.968).attr(attr);
			inter4.winper2 = R.rect(63.8164,558.106,16.659,102.968).attr(attr);
			inter4.winper3 = R.rect(85.2664,563.39,16.659,97.685).attr(attr);
			inter4.winper4 = R.rect(106.716,590.7,16.659,70.374).attr(attr);
			inter4.winper5 = R.rect(128.166,571.83,16.659,89.244).attr(attr);
			inter4.winper6 = R.rect(149.616,560.32,16.659,100.754).attr(attr);
			inter4.winper7 = R.rect(171.066,534.985,16.659,126.089).attr(attr);
			inter4.winper8 = R.rect(192.516,587.252,16.659,73.822).attr(attr);
			inter4.winper9 = R.rect(213.966,584.422,16.659,76.652).attr(attr);
			inter4.winper10 = R.rect(235.416,533.85,16.659,127.225).attr(attr);
			inter4.winper11 = R.rect(256.866,536.868,16.659,124.206).attr(attr);
			inter4.winper12 = R.rect(278.316,510.264,16.659,150.811).attr(attr);
			inter4.winper13 = R.rect(299.766,531.585,16.659,129.489).attr(attr);
			inter4.winper14 = R.rect(321.216,512.523,16.659,148.551).attr(attr);
			inter4.winper15 = R.rect(342.666,528.805,16.659,132.27).attr(attr);
			inter4.winper16 = R.rect(364.116,544.891,16.659,116.184).attr(attr);
			inter4.winper17 = R.rect(385.566,560.318,16.659,100.756).attr(attr);
			inter4.winper18 = R.rect(407.016,560.318,16.659,100.756).attr(attr);
			inter4.winper19 = R.rect(428.466,563.384,16.659,97.69).attr(attr);
			inter4.winper20 = R.rect(449.916,565.6,16.659,95.475).attr(attr);
			inter4.winper21 = R.rect(471.366,595.697,16.659,65.396).attr(attr);
			inter4.winper22 = R.rect(492.816,598.217,16.659,62.857).attr(attr);
			inter4.winper23 = R.rect(514.266,585.669,16.659,75.424).attr(attr);
			inter4.winper24 = R.rect(535.716,583.983,16.659,77.109).attr(attr);
			inter4.winper25 = R.rect(557.166,568.185,16.659,92.907).attr(attr);
			inter4.winper26 = R.rect(578.616,570.774,16.659,90.3).attr(attr);
			inter4.winper27 = R.rect(600.066,575.849,16.659,85.226).attr(attr);
			inter4.winper28 = R.rect(621.516,578.798,16.659,82.276).attr(attr);
			inter4.winper29 = R.rect(642.966,560.323,16.659,100.751).attr(attr);
			inter4.winper30 = R.rect(664.416,563.179,16.659,97.896).attr(attr);
			inter4.winper31 = R.rect(685.866,568.182,16.659,92.893).attr(attr);
			inter4.winper32 = R.rect(707.316,568.182,16.659,92.893).attr(attr);
			inter4.winper33 = R.rect(750.216,555.313,16.659,105.761).attr(attr);
			inter4.winper34 = R.rect(771.666,578.792,16.659,82.282).attr(attr);
			inter4.winper35 = R.rect(793.116,555.313,16.659,105.761).attr(attr);
			inter4.winper36 = R.rect(814.566,563.179,16.659,97.896).attr(attr);
			inter4.winper37 = R.rect(836.016,590.7,16.659,70.374).attr(attr);
			inter4.winper38 = R.rect(857.466,596.539,16.659,64.535).attr(attr);
			inter4.winper39 = R.rect(878.916,578.792,16.659,82.282).attr(attr);


			var backgg = {};
			backgg.text1 = R.text(110, 35, "A VISUALIZED HISTORY OF THE EDMONTON OILERS").attr(largetext);

			backgg.text2 = R.text(42,697, "All Stars").attr(texthead);
			backgg.text3 = R.text(42,417, "Arena").attr(texthead);
			backgg.text4 = R.text(42,762, "Average Attendance").attr(texthead);
			backgg.text5 = R.text(42,1252, "Battle of Alberta").attr(texthead);
			backgg.text6 = R.text(42,333, "Captain").attr(texthead);
			backgg.text7 = R.text(42,247, "Coach").attr(texthead);
			backgg.text8 = R.text(42,965, "Divisional Position").attr(texthead);
			backgg.text9 = R.text(42,162, "General Manager").attr(texthead);
			backgg.text10 = R.text(680,1081, "Northwest division").attr(texthead);
			backgg.text11 = R.text(42,98, "Owner").attr(texthead);
			backgg.text12 = R.text(499,1081, "Pacific Division").attr(texthead);
			backgg.text13 = R.text(42,1120, "Playoffs").attr(texthead);
			backgg.text14 = R.text(294,1081, "Smythe Division").attr(texthead);
			backgg.text15 = R.text(77,1081, "WHA Divisions").attr(texthead);
			backgg.text16 = R.text(42,505, "Winning percentage").attr(texthead);

			backgg.text85 = R.text(43,135,"Bill Hunter").attr(textmiddlewhite);
			backgg.text17 = R.text(110,135,"NS").attr(textmiddlewhite);
			backgg.text95 = R.text(152,135,"Peter Pocklington").attr(textmiddlewhite);
			backgg.text89 = R.text(602,135,"Edmonton Investors Group LP").attr(textmiddlewhite);
			backgg.text88 = R.text(816,135,"Rexall Sports").attr(textmiddlewhite);


			backgg.text86 = R.text(43,200,"Bill Hunter").attr(textmiddlewhite);
			backgg.text18 = R.text(130,200,"BG").attr(textmiddlewhite);
			backgg.text19 = R.text(152,200,"BC").attr(textmiddlewhite);
			backgg.text20 = R.text(173,200,"LG").attr(textmiddlewhite);
			backgg.text91 = R.text(215,200,"Glen Sather").attr(textmiddlewhite);
			backgg.text93 = R.text(645,200,"Kevin Lowe").attr(textmiddlewhite);
			backgg.text21 = R.text(818,200,"ST").attr(textmiddlewhite);

			backgg.text22 = R.text(43,285,"RK").attr(textmiddlewhite);
			backgg.text23 = R.text(65,285,"BS").attr(textmiddlewhite);
			backgg.text24 = R.text(108,285,"CD").attr(textmiddlewhite);
			backgg.text90 = R.text(138,285,"Glen Sather").attr(textmiddlewhite);
			backgg.text90a = R.text(248,285,"Glen Sather").attr(textmiddlewhite);
			backgg.text25 = R.text(398,285,"JM").attr(textmiddlewhite);
			backgg.text26 = R.text(453,285,"TG").attr(textmiddlewhite);
			backgg.text97 = R.text(529,285,"Ron Low").attr(textmiddlewhite);
			backgg.text27 = R.text(623,285,"KL").attr(textmiddlewhite);
			backgg.text87 = R.text(645,285,"Craig MacTavish").attr(textmiddlewhite);
			backgg.text28 = R.text(838,285,"PQ").attr(textmiddlewhite);
			backgg.text29 = R.text(860,285,"TR").attr(textmiddlewhite);
			backgg.text30 = R.text(903,285,"RK").attr(textmiddlewhite);

			backgg.text84 = R.text(43,371,"Al Hamilton").attr(textmiddlewhite);
			backgg.text31 = R.text(150,371,"GS").attr(textmiddlewhite);
			backgg.text32 = R.text(173,371,"PS").attr(textmiddlewhite);
			backgg.text33 = R.text(195,371,"RC").attr(textmiddlewhite);
			backgg.text34 = R.text(215,371,"BM").attr(textmiddlewhite);
			backgg.text35 = R.text(237,371,"LF").attr(textmiddlewhite);
			backgg.text98 = R.text(283,371,"Wayne Gretzky").attr(textmiddlewhite);
			backgg.text36 = R.text(386,371,"MM").attr(textmiddlewhite);
			backgg.text37 = R.text(452,371,"KL").attr(textmiddlewhite);
			backgg.text38 = R.text(473,371,"CM").attr(textmiddlewhite);
			backgg.text39 = R.text(515,371,"SC").attr(textmiddlewhite);
			backgg.text40 = R.text(538,371,"KB").attr(textmiddlewhite);
			backgg.text41 = R.text(623,371,"DW").attr(textmiddlewhite);
			backgg.text92 = R.text(667,371,"Jason Smith").attr(textmiddlewhite);
			backgg.text42 = R.text(795,371,"EM").attr(textmiddlewhite);
			backgg.text43 = R.text(860,371,"SH").attr(textmiddlewhite);




			backgg.text44 = R.text(43,455,"EG").attr(textmiddlewhite);
			backgg.text94 = R.text(87,455,"Northlands Coliseum").attr(textmiddlewhite);
			backgg.text45 = R.text(537,455,"EC").attr(textmiddlewhite);
			backgg.text46 = R.text(602,455,"SC").attr(textmiddlewhite);
			backgg.text96 = R.text(667,455,"Rexall Place").attr(textmiddlewhite);

			backgg.textcredits1 = R.text(585,800,"Designed by: Lucas Timmons, edmontonjournal.com. Inspired by: Craig Robinson, Flip Flop Flyball, flipflopflyin.com/flipflopflyball/. Built using RaphaelJS ").attr(textmiddlewhite);
			backgg.textcredits1.transform("r90");


			backgg.text149 = R.text(624.516,1436,"00").attr(textmiddlewhite);
			backgg.text150 = R.text(624.516,80,"00").attr(textmiddlewhite);
			backgg.text151 = R.text(645.966,1426,"00").attr(textmiddlewhite);
			backgg.text152 = R.text(645.966,69,"00").attr(textmiddlewhite);
			backgg.text153 = R.text(645.966,1436,"01").attr(textmiddlewhite);
			backgg.text154 = R.text(645.966,80,"01").attr(textmiddlewhite);
			backgg.text155 = R.text(667.416,1426,"01").attr(textmiddlewhite);
			backgg.text156 = R.text(667.416,69,"01").attr(textmiddlewhite);
			backgg.text157 = R.text(667.416,1436,"02").attr(textmiddlewhite);
			backgg.text158 = R.text(667.416,80,"02").attr(textmiddlewhite);
			backgg.text159 = R.text(688.866,1426,"02").attr(textmiddlewhite);
			backgg.text160 = R.text(688.866,69,"02").attr(textmiddlewhite);
			backgg.text161 = R.text(688.866,1436,"03").attr(textmiddlewhite);
			backgg.text162 = R.text(688.866,80,"03").attr(textmiddlewhite);
			backgg.text163 = R.text(710.316,1426,"03").attr(textmiddlewhite);
			backgg.text164 = R.text(710.316,69,"03").attr(textmiddlewhite);
			backgg.text165 = R.text(710.316,1436,"04").attr(textmiddlewhite);
			backgg.text166 = R.text(710.316,80,"04").attr(textmiddlewhite);
			backgg.text167 = R.text(731,1426,"04").attr(textmiddlewhite);
			backgg.text168 = R.text(731,69,"04").attr(textmiddlewhite);
			backgg.text169 = R.text(731,1436,"05").attr(textmiddlewhite);
			backgg.text170 = R.text(731,80,"05").attr(textmiddlewhite);
			backgg.text171 = R.text(753.216,1426,"05").attr(textmiddlewhite);
			backgg.text172 = R.text(753.216,69,"05").attr(textmiddlewhite);
			backgg.text173 = R.text(753.216,1436,"06").attr(textmiddlewhite);
			backgg.text174 = R.text(753.216,80,"06").attr(textmiddlewhite);
			backgg.text175 = R.text(774.666,1426,"06").attr(textmiddlewhite);
			backgg.text176 = R.text(774.666,69,"06").attr(textmiddlewhite);
			backgg.text177 = R.text(774.666,1436,"07").attr(textmiddlewhite);
			backgg.text178 = R.text(774.666,80,"07").attr(textmiddlewhite);
			backgg.text179 = R.text(796.116,1426,"07").attr(textmiddlewhite);
			backgg.text180 = R.text(796.116,69,"07").attr(textmiddlewhite);
			backgg.text181 = R.text(796.116,1436,"08").attr(textmiddlewhite);
			backgg.text182 = R.text(796.116,80,"08").attr(textmiddlewhite);
			backgg.text183 = R.text(817.566,1426,"08").attr(textmiddlewhite);
			backgg.text184 = R.text(817.566,69,"08").attr(textmiddlewhite);
			backgg.text185 = R.text(817.566,1436,"09").attr(textmiddlewhite);
			backgg.text186 = R.text(817.566,80,"09").attr(textmiddlewhite);
			backgg.text187 = R.text(839.016,1426,"09").attr(textmiddlewhite);
			backgg.text188 = R.text(839.016,69,"09").attr(textmiddlewhite);
			backgg.text191 = R.text(839.016,1436,"10").attr(textmiddlewhite);
			backgg.text192 = R.text(839.016,80,"10").attr(textmiddlewhite);
			backgg.text193 = R.text(860.466,1426,"10").attr(textmiddlewhite);
			backgg.text194 = R.text(860.466,69,"10").attr(textmiddlewhite);
			backgg.text197 = R.text(860.466,1436,"11").attr(textmiddlewhite);
			backgg.text198 = R.text(860.466,80,"11").attr(textmiddlewhite);
			backgg.text199 = R.text(881.916,1426,"11").attr(textmiddlewhite);
			backgg.text200 = R.text(881.916,69,"11").attr(textmiddlewhite);
			backgg.text202 = R.text(881.916,1436,"12").attr(textmiddlewhite);
			backgg.text203 = R.text(881.916,80,"12").attr(textmiddlewhite);
			backgg.text204 = R.text(901.5,1426,"12").attr(textmiddlewhite);
			backgg.text205 = R.text(901.5,69,"12").attr(textmiddlewhite);
			backgg.text209 = R.text(901.5,1436,"13").attr(textmiddlewhite);
			backgg.text210 = R.text(901.5,80,"13").attr(textmiddlewhite);

			backgg.text251 = R.text(45.3664,1426,"72").attr(textmiddlewhite);
			backgg.text252 = R.text(45.3664,69,"72").attr(textmiddlewhite);
			backgg.text253 = R.text(45.3664,1436,"73").attr(textmiddlewhite);
			backgg.text254 = R.text(45.3664,80,"73").attr(textmiddlewhite);
			backgg.text255 = R.text(66.8164,1426,"73").attr(textmiddlewhite);
			backgg.text256 = R.text(66.8164,69,"73").attr(textmiddlewhite);
			backgg.text257 = R.text(66.8164,1436,"74").attr(textmiddlewhite);
			backgg.text258 = R.text(66.8164,80,"74").attr(textmiddlewhite);
			backgg.text259 = R.text(88.2664,1426,"74").attr(textmiddlewhite);
			backgg.text260 = R.text(88.2664,69,"74").attr(textmiddlewhite);
			backgg.text261 = R.text(88.2664,1436,"75").attr(textmiddlewhite);
			backgg.text262 = R.text(88.2664,80,"75").attr(textmiddlewhite);
			backgg.text263 = R.text(109.716,1426,"75").attr(textmiddlewhite);
			backgg.text264 = R.text(109.716,69,"75").attr(textmiddlewhite);
			backgg.text265 = R.text(131.166,1426,"76").attr(textmiddlewhite);
			backgg.text266 = R.text(131.166,69,"76").attr(textmiddlewhite);
			backgg.text267 = R.text(109.716,1436,"76").attr(textmiddlewhite);
			backgg.text268 = R.text(109.716,80,"76").attr(textmiddlewhite);
			backgg.text269 = R.text(131.166,1436,"77").attr(textmiddlewhite);
			backgg.text270 = R.text(131.166,80,"77").attr(textmiddlewhite);
			backgg.text271 = R.text(152.616,1426,"77").attr(textmiddlewhite);
			backgg.text272 = R.text(152.616,69,"77").attr(textmiddlewhite);
			backgg.text273 = R.text(152.616,1436,"78").attr(textmiddlewhite);
			backgg.text274 = R.text(152.616,80,"78").attr(textmiddlewhite);
			backgg.text275 = R.text(174.066,1426,"78").attr(textmiddlewhite);
			backgg.text276 = R.text(174.066,69,"78").attr(textmiddlewhite);
			backgg.text277 = R.text(174.066,1436,"79").attr(textmiddlewhite);
			backgg.text278 = R.text(174.066,80,"79").attr(textmiddlewhite);
			backgg.text279 = R.text(195.516,1426,"79").attr(textmiddlewhite);
			backgg.text280 = R.text(195.516,69,"79").attr(textmiddlewhite);
			backgg.text283 = R.text(195.516,1436,"80").attr(textmiddlewhite);
			backgg.text284 = R.text(195.516,80,"80").attr(textmiddlewhite);
			backgg.text285 = R.text(216.966,1426,"80").attr(textmiddlewhite);
			backgg.text286 = R.text(216.966,69,"80").attr(textmiddlewhite);
			backgg.text287 = R.text(216.966,1436,"81").attr(textmiddlewhite);
			backgg.text288 = R.text(216.966,80,"81").attr(textmiddlewhite);
			backgg.text289 = R.text(238.416,1426,"81").attr(textmiddlewhite);
			backgg.text290 = R.text(238.416,69,"81").attr(textmiddlewhite);
			backgg.text291 = R.text(238.416,1436,"82").attr(textmiddlewhite);
			backgg.text292 = R.text(238.416,80,"82").attr(textmiddlewhite);
			backgg.text293 = R.text(259.866,1426,"82").attr(textmiddlewhite);
			backgg.text294 = R.text(259.866,69,"82").attr(textmiddlewhite);
			backgg.text295 = R.text(259.866,1436,"83").attr(textmiddlewhite);
			backgg.text296 = R.text(259.866,80,"83").attr(textmiddlewhite);
			backgg.text297 = R.text(281.316,1426,"83").attr(textmiddlewhite);
			backgg.text298 = R.text(281.316,69,"83").attr(textmiddlewhite);
			backgg.text300 = R.text(281.316,1436,"84").attr(textmiddlewhite);
			backgg.text301 = R.text(281.316,80,"84").attr(textmiddlewhite);
			backgg.text302 = R.text(302.766,1426,"84").attr(textmiddlewhite);
			backgg.text303 = R.text(302.766,69,"84").attr(textmiddlewhite);
			backgg.text304 = R.text(302.766,1436,"85").attr(textmiddlewhite);
			backgg.text305 = R.text(302.766,80,"85").attr(textmiddlewhite);
			backgg.text306 = R.text(324.216,1426,"85").attr(textmiddlewhite);
			backgg.text307 = R.text(324.216,69,"85").attr(textmiddlewhite);
			backgg.text308 = R.text(324.216,1436,"86").attr(textmiddlewhite);
			backgg.text309 = R.text(324.216,80,"86").attr(textmiddlewhite);
			backgg.text310 = R.text(345.666,1426,"86").attr(textmiddlewhite);
			backgg.text311 = R.text(345.666,69,"86").attr(textmiddlewhite);
			backgg.text312 = R.text(345.666,1436,"87").attr(textmiddlewhite);
			backgg.text313 = R.text(345.666,80,"87").attr(textmiddlewhite);
			backgg.text314 = R.text(367.116,1426,"87").attr(textmiddlewhite);
			backgg.text315 = R.text(367.116,69,"87").attr(textmiddlewhite);
			backgg.text316 = R.text(367.116,1436,"88").attr(textmiddlewhite);
			backgg.text317 = R.text(367.116,80,"88").attr(textmiddlewhite);
			backgg.text318 = R.text(388.566,1426,"88").attr(textmiddlewhite);
			backgg.text319 = R.text(388.566,69,"88").attr(textmiddlewhite);
			backgg.text320 = R.text(388.566,1436,"89").attr(textmiddlewhite);
			backgg.text321 = R.text(388.566,80,"89").attr(textmiddlewhite);
			backgg.text322 = R.text(410.016,1426,"89").attr(textmiddlewhite);
			backgg.text323 = R.text(410.016,69,"89").attr(textmiddlewhite);
			backgg.text324 = R.text(410.016,1436,"90").attr(textmiddlewhite);
			backgg.text325 = R.text(410.016,80,"90").attr(textmiddlewhite);
			backgg.text326 = R.text(431.466,1426,"90").attr(textmiddlewhite);
			backgg.text327 = R.text(431.466,69,"90").attr(textmiddlewhite);
			backgg.text328 = R.text(431.466,1436,"91").attr(textmiddlewhite);
			backgg.text329 = R.text(431.466,80,"91").attr(textmiddlewhite);
			backgg.text330 = R.text(452.916,1426,"91").attr(textmiddlewhite);
			backgg.text331 = R.text(452.916,69,"91").attr(textmiddlewhite);
			backgg.text332 = R.text(452.916,1436,"92").attr(textmiddlewhite);
			backgg.text333 = R.text(452.916,80,"92").attr(textmiddlewhite);
			backgg.text334 = R.text(474.366,1426,"92").attr(textmiddlewhite);
			backgg.text335 = R.text(474.366,69,"92").attr(textmiddlewhite);
			backgg.text336 = R.text(474.366,1436,"93").attr(textmiddlewhite);
			backgg.text337 = R.text(474.366,80,"93").attr(textmiddlewhite);
			backgg.text338 = R.text(495.816,1426,"93").attr(textmiddlewhite);
			backgg.text339 = R.text(495.816,69,"93").attr(textmiddlewhite);
			backgg.text340 = R.text(495.816,1436,"94").attr(textmiddlewhite);
			backgg.text341 = R.text(495.816,80,"94").attr(textmiddlewhite);
			backgg.text342 = R.text(517.266,1426,"94").attr(textmiddlewhite);
			backgg.text343 = R.text(517.266,69,"94").attr(textmiddlewhite);
			backgg.text344 = R.text(517.266,1436,"95").attr(textmiddlewhite);
			backgg.text345 = R.text(517.266,80,"95").attr(textmiddlewhite);
			backgg.text346 = R.text(538.716,1426,"95").attr(textmiddlewhite);
			backgg.text347 = R.text(538.716,69,"95").attr(textmiddlewhite);
			backgg.text348 = R.text(538.716,1436,"96").attr(textmiddlewhite);
			backgg.text349 = R.text(538.716,80,"96").attr(textmiddlewhite);
			backgg.text350 = R.text(560.166,1426,"96").attr(textmiddlewhite);
			backgg.text351 = R.text(560.166,69,"96").attr(textmiddlewhite);
			backgg.text352 = R.text(560.166,1436,"97").attr(textmiddlewhite);
			backgg.text353 = R.text(560.166,80,"97").attr(textmiddlewhite);
			backgg.text354 = R.text(581.616,1426,"97").attr(textmiddlewhite);
			backgg.text355 = R.text(581.616,69,"97").attr(textmiddlewhite);
			backgg.text356 = R.text(581.616,1436,"98").attr(textmiddlewhite);
			backgg.text357 = R.text(581.616,80,"98").attr(textmiddlewhite);
			backgg.text358 = R.text(603.066,1426,"98").attr(textmiddlewhite);
			backgg.text359 = R.text(603.066,69,"98").attr(textmiddlewhite);
			backgg.text360 = R.text(603.066,1436,"99").attr(textmiddlewhite);
			backgg.text361 = R.text(603.066,80,"99").attr(textmiddlewhite);
			backgg.text362 = R.text(624.516,1426,"99").attr(textmiddlewhite);
			backgg.text363 = R.text(624.516,69,"99").attr(textmiddlewhite);


			backgg.text387 = R.text(150,1348,"LOSSES").attr(textmiddlewhite);
			backgg.text401 = R.text(158,1294,"TIES").attr(textmiddlewhite);
			backgg.text403 = R.text(154,1400,"WINS").attr(textmiddlewhite);


			inter3.ownertext = R.rect(42,93,50,10).attr(attrblank);
			inter3.gmtext = R.rect(42,157,100,10).attr(attrblank);
			inter3.coachtext = R.rect(42,242,50,10).attr(attrblank);
			inter3.captaintext = R.rect(42,328,50,10).attr(attrblank);
			inter3.arenatext = R.rect(42,412,50,10).attr(attrblank);
			inter3.winningtext = R.rect(42,500,130,10).attr(attrblank);
			inter3.allstartext = R.rect(42,692,50,10).attr(attrblank);
			inter3.attendancetext = R.rect(42,757,130,10).attr(attrblank);
			inter3.divisionaltext = R.rect(42,960,110,10).attr(attrblank);
			inter3.playofftext = R.rect(42,1115,50,10).attr(attrblank);
			inter3.battletext = R.rect(42,1247,100,10).attr(attrblank);

			function fixPageXY(e) {
			  if (e.pageX == null && e.clientX != null ) {
				var html = document.documentElement
				var body = document.body

				e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0)
				e.pageX -= html.clientLeft || 0

				e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0)
				e.pageY -= html.clientTop || 0
			  }
			}



			//TOOL TIP CODE STARTS
            var current = null;
            for (var state in inter) {
                inter[state].color = "#ffffff";
                (function (st, state) {
                    st[0].style.cursor = "pointer";

                    var stateID = '#'+state;
                    var stateContent = $(stateID).html();

                    $(st[0]).mouseover(function(){
                      current && inter[current].animate({fill: "#DE6A28", stroke: "#666"}, 500) && (document.getElementById(current).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        R.safari();


                        tipText = stateContent;

                        // tip.fadeIn();
                        $(tip).stop(true, true).fadeIn();

                        over = true;
                        current = state;

                    }).mouseout(function(){
                        st.animate({fill: "#DE6A28", stroke: "#666"}, 500);
                        R.safari();

                        $(tip).stop(true, true).fadeOut();

                        over = false;

                    });

                })(inter[state], state);
            }
             $(document).mousemove(function(e){
                  if (over){
                    $(tip).css("left", e.pageX-500).css("top", e.pageY-800).css("width", "500px");
                    $(tip).html(tipText);
                  }
              });


			var current3 = null;
            for (var state3 in inter3) {
                inter3[state3].color = "#ffffff";
                (function (st, state3) {
                    st[0].style.cursor = "pointer";

                    var state3ID = '#'+state3;
                    var state3Content = $(state3ID).html();

                    $(st[0]).mouseover(function(){
                      current3 && inter3[current3].animate({fill: "#DE6A38", stroke: "#666"}, 500) && (document.getElementById(current3).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        R.safari();


                        tipText = state3Content;

                        // tip.fadeIn();
                        $(tip).stop(true, true).fadeIn();

                        over3 = true;
                        current3 = state3;

                    }).mouseout(function(){
                        st.animate({fill: "#DE6A38", stroke: "#666"}, 500);
                        R.safari();

                        $(tip).stop(true, true).fadeOut();

                        over3 = false;

                    });

                })(inter3[state3], state3);
            }
             $(document).mousemove(function(e){
                  if (over3){
                    $(tip).css("left", e.pageX-100).css("top", e.pageY-800).css("width", "500px");
                    $(tip).html(tipText);
                  }
              });
//
			var current4 = null;
            for (var state4 in inter4) {
                inter4[state4].color = "#ffffff";
                (function (st, state4) {
                    st[0].style.cursor = "pointer";

                    var state4ID = '#'+state4;
                    var state4Content = $(state4ID).html();

                    $(st[0]).mouseover(function(){
                      current4 && inter4[current4].animate({fill: "#DE6A38", stroke: "#666"}, 500) && (document.getElementById(current4).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        R.safari();


                        tipText = state4Content;

                        // tip.fadeIn();
                        $(tip).stop(true, true).fadeIn();

                        over4 = true;
                        current4 = state4;

                    }).mouseout(function(){
                        st.animate({fill: "#DE6A38", stroke: "#666"}, 500);
                        R.safari();

                        $(tip).stop(true, true).fadeOut();

                        over4 = false;

                    });

                })(inter4[state4], state4);
            }
             $(document).mousemove(function(e){
                  if (over4){
                    $(tip).css("left", e.pageX-200).css("top", e.pageY-800).css("width", "200px");
                    $(tip).html(tipText);
                  }
              });





});

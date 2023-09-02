/* ###
	Building the big fat SVG file.
	! TODO: compile it in less nodes (no pixel by pixel, but bigger rectangles and lines, overwritten by following draws anyway).
*/
[16,24].forEach(function(value) {
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('viewBox', '0 0 '+value+' '+value);
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	svg.setAttribute('shape-rendering', 'crispEdges');
	svg.setAttribute('width', '0');
	svg.setAttribute('height', '0');
	var color = [];
	for(var i = 1, iMax = data.palette.length; i < iMax; i++){
		color.push('.c'+i+' {fill: #'+data.palette[i]+';}');
	}
	svg.innerHTML = '<defs><style>'+color.join('')+'</style></defs>';
	
	var rawSet = data['s'+value];
	for(var i = 0, iMax = rawSet.length; i < iMax; i++) {
		var muhPalette = rawSet[i][1];
		muhPalette.unshift(1);
		muhPalette.unshift(0);
		var muhSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
		muhSymbol.setAttribute('id', 'i'+value+'_'+i);
		muhSymbol.setAttribute('class', 'sprite');
		for(var j = 0, jMax = rawSet[i][0].length; j < jMax; j++) {
			if(rawSet[i][0][j]) {
				var muhPixel = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				muhPixel.setAttribute('x', j%value);
				muhPixel.setAttribute('y', Math.round((j - j%value)/value));
				muhPixel.setAttribute('width', 1);
				muhPixel.setAttribute('height', 1);
				muhPixel.setAttribute('class', 'c'+(rawSet[i][1][rawSet[i][0][j]+1]));
				muhSymbol.appendChild(muhPixel);
			}
		}
		svg.appendChild(muhSymbol);
	}
	document.getElementById('empty').appendChild(svg);
});

/* ### Building the menu
*/

var nav = create('nav', {className: 'menu'}), allA = [];
for(var linkName in data.menu) {
	allA.push(linkName);
	thisNode = create('ul', {id: 'ul_'+linkName});
	document.getElementById('body').appendChild(thisNode);
	document.getElementById('body').insertBefore(create('input', {type: 'radio', className: 'toggler', name: 'toggle_view', id: 'toggle_'+linkName}),
		thisNode
	);
	nav.appendChild(
		create('label', {className: 'menuItem', for: 'toggle_'+linkName},
			createSVG(24, data.menu[linkName][0]),
			create('span', {lang: data.menu[linkName][1]})
	));
}


var difficulty = create('div', {className: 'difficulty'});
for(var i = 0, iMax = 7; i < iMax; i++) {
	difficulty.appendChild(create('input', {type: 'radio', name: 'difficulty', id: 'difficulty_'+i}));
	var toggleNode = create('div', {className: 'toggle'});
	if(i > 0) {
		toggleNode.appendChild(create('label', {className: 'previous', for: 'difficulty_'+(i-1), onclick: setDifficulty}));
	}
	toggleNode.appendChild(create('span', {lang: data.difficulty[i]}));
	if(i < iMax-1) {
		toggleNode.appendChild(create('label', {className: 'next', for: 'difficulty_'+(i+1), onclick: setDifficulty}));
	}
	difficulty.appendChild(toggleNode);
}
document.getElementById('header').appendChild(difficulty);
document.getElementById('header').appendChild(nav);


/* ### Add filter buttons to the Unit and Item divs.
	dict tag 1-6 = races, 16-20 = class
	Counter, Doom (), Summon(+fill, +ally dies), Hope (+restore), Poison, Power, Armor, Kills (+summon an enemy), Scheme (+Lizardfolk?)
*/

keywords = [
	['armor'],
	['hope', '{kw-healthisrecovered}', 'restore'],
	['power', '{kw-charge}'],
	['doom', '{kw-otherunitdies}', 'summon an enemy'],
	['scheme', '{kw-scheme}'],
	['summon', '{kw-summon', 'fill', 'ally dies'],
	['poison', '{kw-poison}'],
	['kills', 'summon an enemy'],
	['counter', '{kw-counter}'],
	['soulcast','{kw-channelsoul}','max soul'],
	['bloodcast','{kw-channelblood}', 'beast takes'],
];

//Path Filter
var filterNode = create('div', {className: 'filter', textContent: '🔍 '});
	
for(var i = 0, iMax = 5; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_floor', type: 'checkbox', name: 'path_filter', id: 'path_path_'+i}));
	filterNode.appendChild(create('label', {lang: data.area[i], for: 'path_path_'+i, onclick: filter}));
}
document.getElementById('ul_path').appendChild(
	filterNode
);
//Unit Filter
var filterNode = create('div', {className: 'filter', textContent: '🔍 '});
for(var i = 1, iMax = 3; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_floor', type: 'checkbox', name: 'unit_floor_filter', id: 'unit_floor_'+i}));
	filterNode.appendChild(create('label', {lang: data.area[i], for: 'unit_floor_'+i, onclick: filter}));
}

for(var i = 0, iMax = keywords.length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_keyword', type: 'checkbox', name: 'unit_keyword_filter', id: 'unit_keyword_'+i}));
	for(var j in data.dict.keyword) {
		if(keywords[i][0] == data.L[data.dict.keyword[j][0]].toLowerCase()) {
			filterNode.appendChild(create('label', {lang: data.dict.keyword[j][0], langt: data.dict.keyword[j][1], for: 'unit_keyword_'+i, onclick: filter}));
			break;
		}
	}
	
}
for(var i = 1, iMax = 8; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'unit_race_filter', id: 'unit_race_'+i}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[i], for: 'unit_race_'+i, onclick: filter}));
}
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'unit_race_filter', id: 'unit_race_'+9}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[9], for: 'unit_race_'+9, onclick: filter}));
for(var i = 17, iMax = 20; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'unit_job_filter', id: 'unit_job_'+i}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[i], for: 'unit_job_'+i, onclick: filter}));
}
document.getElementById('ul_unit').appendChild(
	filterNode
);
//Item Filter
var filterNode = create('div', {className: 'filter', textContent: '🔍 '});
filterNode.appendChild(create('input', {className: 'filter_floor', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+0}));
filterNode.appendChild(create('label', {textContent: '-', for: 'item_filter_0', onclick: filter}));
for(var i = 1, iMax = 8; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+i}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[i], for: 'item_filter_'+i, onclick: filter}));
}
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+9}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[9], for: 'item_filter_'+9, onclick: filter}));
for(var i = 16, iMax = 20; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+i}));
	filterNode.appendChild(create('label', {lang: data.dict.tag[i], for: 'item_filter_'+i, onclick: filter}));
}
document.getElementById('ul_item').appendChild(
	filterNode
);


/* ### HERO Data. ["race","name","title","tooltip","attack","health","speed","sprite"]
// ❤ ♥ atk ⚔ spd ⪼
*/

var heroNode = document.getElementById('ul_hero');
for(var i = 1, iMax = data.hero.length; i < iMax; i++) {
	heroNode.appendChild(
		create('li', {className: 'sheet hero', id: 'hero_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.hero[i][7])),
			create('span', {className: 'name', lang: data.hero[i][1]}),
			create('span', {className: 'title', lang: data.hero[i][2]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.dict.tag[data.hero[i][0]]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.dict.tag[16]})
			),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.hero[i][4]}),
				create('span', {className: 'hp', textContent: data.hero[i][5]}),
				create('span', {className: 'spd', textContent: data.hero[i][6]})
			),
			create('span', {className: 'desc', lang: data.hero[i][3]})
		)
	);
}

/* ### ITEM Data. ["name","tag",["attack","health","speed"],"tooltip","price","upgrade","sprite"]
*/

var itemNode = document.getElementById('ul_item');
for(var i = 1, iMax = data.item.length; i < iMax; i++) {
	var elaborateTooltip = [];
	if(data.item[i][2].join) {
		
		['Attack','Health','Speed'].forEach(function(value,key,array) {
			if(data.item[i][2][key]) {
				elaborateTooltip.push((data.item[i][2][key]>0?'+':'')+data.item[i][2][key]+' <span lang="'+data.dict.bonus[key]+'"></span>. ');
			}
		});
	}
	itemNode.appendChild(
		create('li', {className: 'sheet item', id: 'item_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name', lang: data.item[i][0]}),
			create('span', {className: data.item[i][4] < 1?'':'cost', textContent: data.item[i][4] < 1?'':data.item[i][4]}),
			create('span', {className:'tag', lang: data.dict.tag[data.item[i][1]]}),
			create('span', {className: 'sprite_bg s16 upgrade', tooltip: data.item[i][5]?'item_'+data.item[i][5]:''}, data.item[i][5]?createSVG(16, data.item[data.item[i][5]][6]):create()),
			create('span', {className: 'desc', innerHTML: elaborateTooltip.join('')},
				create('span', {className: 'desc', lang: data.item[i][3]})
			)
		)
	);
}

/* ### ARTIFACT Data. ["name","tooltip","sprite"]
*/

var artifactNode = document.getElementById('ul_artifact');
data.artifact.shift();
data.artifact.sort();
for(var i = 0, iMax = data.artifact.length; i < iMax; i++) {
	artifactNode.appendChild(
		create('li', {className: 'sheet artifact', id: 'artifact_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.artifact[i][2])),
			create('span', {className: 'name', lang: data.artifact[i][0]}),
			create('span', {className: 'desc', lang: data.artifact[i][1]})
		)
	);
}

/* ### UNIT Data. ["race","class","name","attack","health","speed","reach","tooltip","unlock","sprite"]
*/

var unitNode = document.getElementById('ul_unit');
for(var i = 1, iMax = data.unit.length; i < iMax; i++) {
	unitNode.appendChild(
		create('li', {className: 'sheet unit', id: 'unit_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.unit[i][9])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.dict.reach[data.unit[i][6]] == '-'?'-':data.unit[i][3]}),
				create('span', {className: 'hp', textContent: data.unit[i][4]}),
				create('span', {className: 'spd', textContent: data.unit[i][5]})
			),
			create('span', {className: 'name', lang: data.unit[i][2]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.dict.tag[data.unit[i][0]]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.dict.tag[data.unit[i][1]]})
			),
			create('span', {className: 'reach', lang: data.dict.reach[data.unit[i][6]]}),
			create('span', {className: 'desc', lang: data.unit[i][7]})
		)
	);
}

/* ### CREATURE Data. ["race","class","name","attack","health","speed","reach","tooltip","sprite","is_24"]
*/

var unitNode2 = document.getElementById('ul_monster');
for(var i = 1, iMax = data.unit2.length; i < iMax; i++) {
	unitNode2.appendChild(
		create('li', {className: 'sheet unit', id: 'monster_'+i},
			create('span', {className: 'sprite_bg s'+(data.unit2[i][9]?24:16)}, createSVG(data.unit2[i][9]?24:16, data.unit2[i][8])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.dict.reach[data.unit2[i][6]] == '-'?'-':data.unit2[i][3]}),
				create('span', {className: 'hp', textContent: data.unit2[i][4].join?data.unit2[i][4][0]:data.unit2[i][4]}),
				create('span', {className: 'spd', textContent: data.unit2[i][5]})
			),
			create('span', {className: 'name', lang: data.unit2[i][2]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.dict.tag[data.unit2[i][0]]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.dict.tag[data.unit2[i][1]]})
			),
			create('span', {className: 'reach', lang: data.dict.reach[data.unit2[i][6]]}),
			create('span', {className: 'desc', lang: data.unit2[i][7]})
		)
	);
}


/* ### Upgrade cheap calculation.
*/

var itemUpgrade = [];		// [i, upgrade, tag]
for(var i = 1, iMax = data.item.length; i < iMax; i++) {
	itemUpgrade.push([i, (data.item[i][5]!=''&&data.item[i][5]!=-1)?data.item[i][5]:false, data.item[i][1]]);
}
itemUpgrade.sort(function(a, b) {	//sort by type and gold. Not foolproof.
	if(a[2] != b[2]) {
		return a[2] - b[2];
	}
	a = data.item[a[0]][4] > 0?data.item[a[0]][4]:999;
	b = data.item[b[0]][4] > 0?data.item[b[0]][4]:999;
	return a - b;
});

//main upgrade routine
var outputUpgrade = [];
for(var i = 0, iMax = itemUpgrade.length; i < iMax; i++) {
	var hasCollection = investigateUpgrade(i);
	if(hasCollection) {
		outputUpgrade.push([hasCollection]);
		while(hasCollection.into && data.item[hasCollection.into][5] && !hasCollection.reverse) {
			var itemUpgradePointer = false;
			for(var j = 0, jMax = itemUpgrade.length; j < jMax; j++) { // ! beware of infinite loop
				if(itemUpgrade[j][0] == hasCollection.into) {
					itemUpgradePointer = j;
					break;
				}
			}
			hasCollection = investigateUpgrade(itemUpgradePointer, true);
			if(hasCollection && hasCollection.into) {
				outputUpgrade[outputUpgrade.length -1].push(hasCollection);
			} else {
				break;
			}
		}
	}
}
//upgrade function helper
function investigateUpgrade(i, sameRestriction = true) {
	if(itemUpgrade[i][1] && itemUpgrade[i][1] != -1/*&& data.item[itemUpgrade[i][0]][4] > 0*/) {//it does upgrade into smth (and has a cost?)
		var reverseUpgrade = false, itemCollection = [];
		if(data.item[itemUpgrade[i][1]][5] == itemUpgrade[i][0]) { // UNO REVERSE
			reverseUpgrade = itemUpgrade[i][0];
			for(var k = 0, kMax = itemUpgrade.length; k < kMax; k++) {
				if(itemUpgrade[k][1] == itemUpgrade[i][0]) {
					itemUpgrade[k][1] = false;
					break;
				}
			}
		} else {
			itemCollection.push(itemUpgrade[i][0]);
		}
		for(var j = 0, jMax = itemUpgrade.length; j < jMax; j++) {
			if(i != j && itemUpgrade[j][1] && itemUpgrade[j][1] == itemUpgrade[i][1]
				//&& data.item[itemUpgrade[j][0]][4] >= data.item[itemUpgrade[i][0]][4]
				&& (!sameRestriction
					|| data.item[itemUpgrade[j][0]][1] == data.item[itemUpgrade[i][0]][1]
					|| data.item[itemUpgrade[i][0]][4] < 1
					)
				) {
				if(itemUpgrade[j][0] == data.item[itemUpgrade[i][1]][5]) { //UNO REVERSE
					reverseUpgrade = itemUpgrade[j][0];
					for(var k = 0, kMax = itemUpgrade.length; k < kMax; k++) {
						if(itemUpgrade[k][0] == itemUpgrade[j][1]) {
							itemUpgrade[k][1] = false;
							break;
						}
					}
				} else {
					itemCollection.push(itemUpgrade[j][0]);
				}
				itemUpgrade[j][1] = false;
			}
		}
		var saveInto = itemUpgrade[i][1];
		itemUpgrade[i][1] = false;
		return {reverse: reverseUpgrade, item: itemCollection, into: saveInto};
	}
	return false;
}

// Display the Upgrade results
var upgradeNode = document.getElementById('ul_upgrade');
for(var i = 0, iMax = outputUpgrade.length; i < iMax; i++) {
	var thisNode = create('p', {});
	for(var j = 0, jMax = outputUpgrade[i].length; j < jMax; j++) {
		for(var k = j==0?0:1, kMax = outputUpgrade[i][j].item.length; k < kMax; k++) {
			thisNode.appendChild(create('span', {className: 'sprite_bg s16', tooltip: 'item_'+outputUpgrade[i][j].item[k]}, createSVG(16, data.item[outputUpgrade[i][j].item[k]][6])));
		}
		if(outputUpgrade[i][j].reverse && outputUpgrade[i][j].item.length == 0) {
			thisNode.appendChild(create('span', {className: 'sprite_bg s16', tooltip: 'item_'+outputUpgrade[i][j].reverse}, createSVG(16, data.item[outputUpgrade[i][j].reverse][6])));
			thisNode.appendChild(create(' <=> '));
		} else {
			thisNode.appendChild(create(' => '));
		}
		thisNode.appendChild(create('span', {className: 'sprite_bg s16', tooltip: 'item_'+outputUpgrade[i][j].into}, createSVG(16, data.item[outputUpgrade[i][j].into][6])));
		
		if(outputUpgrade[i][j].reverse && outputUpgrade[i][j].item.length > 0) {
			thisNode.appendChild(create(' <=> '));
			thisNode.appendChild(create('span', {className: 'sprite_bg s16', tooltip: 'item_'+outputUpgrade[i][j].reverse}, createSVG(16, data.item[outputUpgrade[i][j].reverse][6])));
		}
	}
	upgradeNode.appendChild(thisNode);
}

//Pathing
var pathNode = document.getElementById('ul_path');
var currentRoom = 0;
for(var i = 1, iMax = data.path.length; i < iMax; i++) {
	var thisFloor = Math.floor(currentRoom / 13) +1;
	var thisRoom = currentRoom - (thisFloor-1)*13 +1;
	currentRoom++;
	var thisNode = create('li', {id: 'path_'+i, className: 'floor floor'+thisFloor+(thisRoom%2?' even':' odd')});
	thisNode.appendChild(create('span', {className: 'number',textContent: thisFloor + '/' + thisRoom}));
	for(var j = 0, jMax = data.path[i].length; j < jMax; j++) {
		var thisGroup = create('div', {langt: data.path[i][j].dsc?data.path[i][j].dsc:''});
		if(data.path[i][j].lnk && !data.path[i][j].img) {
			data.path[i][j].img = data.menu[data.path[i][j].lnk.split('#').shift()][0];
		}
		if(data.path[i][j].img == 0 || data.path[i][j].img) {
			thisGroup.appendChild(createSVG(i==2?16:24, data.path[i][j].img));
		} else if(data.path[i][j].empty) {
			
		} else if(data.path[i][j].bossPool == 0 || data.path[i][j].bossPool) {
			thisGroup.appendChild(createSVG(24, data.menu.path[0]));
			for(var k = 0, kMax = data.bossPool[data.path[i][j].bossPool].length; k < kMax; k++) {
				thisGroup.appendChild(create('span', {tooltip: 'monster_'+data.bossPool[data.path[i][j].bossPool][k], onclick: goToTooltip, className: data.unit2[data.bossPool[data.path[i][j].bossPool][k]][10]?'hard':''},
					//create(' '),
					createSVG(24, data.unit2[data.bossPool[data.path[i][j].bossPool][k]][8])
				));
			}
			if(data.path[i][j].choice) {
				thisGroup.appendChild(create(' '));
				thisGroup.appendChild(createSVG(24, data.menu.path[0]));
			}
		} else if(data.path[i][j].enemy) {
			thisGroup.appendChild(create('span', {tooltip: 'monster_'+data.path[i][j].enemy, onclick: goToTooltip},
				createSVG(24, data.unit2[data.path[i][j].enemy][8])
			));
		} else {
			console.log(JSON.stringify(data.path[i][j]));
		}
		thisNode.appendChild(thisGroup);
	}
	pathNode.appendChild(thisNode);
}

function goToTooltip() {
	document.querySelector('label[for="toggle_'+this.getAttribute('tooltip').split('_').shift()+'"]').click();
	window.location.hash = this.getAttribute('tooltip');
}

/*	TOOLTIP FUNCTION
	If functionality is to be added, better tooltip might be needed
	Beware not simulating the game by adding too much of it.
*/

var tooltipStatus = 0;
var tooltip = create('li', {id: 'tooltip', className: 'sheet'});
document.body.appendChild(tooltip);

document.getElementById('body').onmouseover = function(e){
	var node = e.target;
	while(!node.getAttribute('tooltip') && node.id != 'body') {
		node = node.parentNode;
	}
	if(node.id != 'body' && node.getAttribute('tooltip') && node.getAttribute('tooltip') != tooltipStatus) {
		//if(tooltipNode) tooltipNode.parentNode.removeChild(tooltipNode);
		tooltipStatus = node.getAttribute('tooltip');
		tooltip.className = document.getElementById(tooltipStatus).className;
		tooltip.innerHTML= document.getElementById(tooltipStatus).innerHTML;
		tooltip.style.display = 'inline-grid';
	} else if(tooltipStatus && node.getAttribute('tooltip') != tooltipStatus) {
		tooltip.className = '';
		tooltip.innerHTML = '';
		tooltip.style.display = 'none';
		tooltipStatus = 0;
	}
};

document.addEventListener('mousemove', fn, false);
function fn(e) {
	if(tooltipStatus) {
		if(e.clientX < window.screen.width/2) {
			tooltip.style.left = Math.max(0,Math.min(e.clientX, window.screen.width - tooltip.clientWidth)) + 'px';
		} else {
			tooltip.style.left = Math.max(0,Math.min(e.clientX - tooltip.clientWidth, window.screen.width - tooltip.clientWidth)) + 'px';
		}
		if(e.clientY < window.screen.height/2) {
			tooltip.style.top = (e.clientY+10) + 'px';
		} else {
			tooltip.style.top = (e.clientY - tooltip.clientHeight -10) + 'px';
		}
	}
}

/*	HELPER FUNCTIONS
*/

//Creating HTML Nodes.
function create() {
	switch(arguments.length) {
		case 1:
			var A = document.createTextNode(arguments[0]);
		break;
		default:
			var A = document.createElement(arguments[0]),
				B = arguments[1];
			for (var b in B) {
				if (b.indexOf("on") == 0) {
					A.addEventListener ? A.addEventListener(b.substring(2), B[b], false) : A.attachEvent(b,B[b]);
				} else if (",style,accesskey,id,name,src,href,for,value,tooltip,lang,langt".indexOf("," + b.toLowerCase()) != -1) {
					A.setAttribute(b, B[b]);
				} else {
					A[b] = B[b];
				}
			}
			for(var i = 2, len = arguments.length; i < len; ++i) {
				A.appendChild(arguments[i]);
			}
		}
	return A;
}

function createSVG(size, id){
	var svg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg2.setAttribute('viewBox', '0 0 '+size+' '+size);
	svg2.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	svg2.setAttribute('shape-rendering', 'crispEdges');
	svg2.setAttribute('width', size);
	svg2.setAttribute('height', size);
	var useNode = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	useNode.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#i'+size+'_'+id);
	svg2.appendChild(useNode);
	return svg2;
}

var filter_map = {
	//Path filter
	path: function(pointer, testValue) {return (parseInt(testValue) ? Math.floor((pointer-1)/13) == parseInt(testValue)-1 : true);},
	//Unit filters
	floor: function(pointer, testValue) {return pointer < data['lvl'+(parseInt(testValue)+1)]+1;},
	keyword: function(pointer, testValue) {
		var filter_regexp = new RegExp('('+keywords[testValue].join('|').replace('{','\\{').replace('}','\\}')+')','i');
		return filter_regexp.test(data.L[data.unit[pointer][7]]);
	},
	race: function(pointer, testValue) {return data.unit[pointer][0] == testValue;},
	job: function(pointer, testValue) {return data.unit[pointer][1] == testValue;},
	//Item filter
	tag: function(pointer, testValue) {return data.item[pointer][1] == testValue;}
};
function filter(e) {
	var filter_key = this.getAttribute('for'),
		inputNode = document.getElementById(filter_key);
	var filter_gen = filter_key.split('_');
	var filter_type = filter_gen[0];
	filter_gen.pop();
	filter_gen = filter_gen.join('_');
	var allNode = document.querySelectorAll('label[for^="'+filter_gen+'"]');
	for(var i = 0, iMax = allNode.length; i < iMax; i++) {
		if(allNode.item(i) != this) {
			document.getElementById(allNode.item(i).getAttribute('for')).checked = false;
		}
	}
	//get all nodes, but unclear about the current one.
	var allNode = document.querySelectorAll('input[id^="'+filter_type+'"]:checked');

	for(var i = 1, iMax = data[filter_type].length; i < iMax; i++) {
		var include = true;
		if(inputNode.checked == false) { //check current one
			var filterTest = filter_key.split('_');
			include = filter_map[filter_type=='item'?'tag':filterTest[1]](i, filterTest[2]);
		}
		for(var j = 0, jMax = allNode.length; j < jMax; j++) { //check all but current one
			if(allNode[j].id != filter_key) {
				var filterTest = allNode[j].id.split('_');
				include = include && filter_map[filterTest[1]](i, filterTest[2]);
				if(!include) {
					break;
				}
			}
		}
		if(!include) {
			document.getElementById(filter_type+'_'+i).setAttribute('hidden', true);
		} else {
			document.getElementById(filter_type+'_'+i).removeAttribute('hidden');
		}
	}
}

/* DIFFICULTY MODIFIER
	Changes price and health of units, item and monsters according to difficulty.
*/
function setDifficulty() {
	var difficulty = parseInt(this.getAttribute('for').split('_').pop());
	
	document.getElementById('ul_path').className = difficulty > 0 ? 'hard':'';
	
	for(var i = 1, iMax = data.unit2.length; i < iMax; i++) {
		if(!data.unit2[i][4].join || data.unit2[i][4].length != 2 || data.unit2[i][4][1] != 0) { //otherwise no scaling.
			var node = document.querySelector('#monster_'+i +' .hp'),
				defaultScaling = 2,
				health = data.unit2[i][4].join ? data.unit2[i][4][0] : data.unit2[i][4],
				pointerUntil = 1,
				scaling = 0
				specialScaling = false;
			
			if((data.unit2[i][0] == 15 || data.unit2[i][0] == 13) && health > 99) { //Old Gods or Keeper
				pointerUntil = difficulty +1;
				specialScaling = true;
			} else {
				if(difficulty > 0) {
					pointerUntil += 1;
				}
				if(difficulty > 3) {
					pointerUntil += 1;
				}
				if(difficulty > 5) {
					pointerUntil += 1;
				}
			}
			
			if(data.unit2[i][4].join) {
				for(var j = 1, jMax = pointerUntil; j < jMax; j++) {
					if(data.unit2[i][4].length > j) {
						scaling += data.unit2[i][4][j];
					} else if(j < 3) { //if no legend scaling, no special scaling
						scaling += data.unit2[i][4][data.unit2[i][4].length -1];
					}
					
				}
			} else { //default behavior
				if(specialScaling) {
					scaling = defaultScaling * Math.max(difficulty, 5);
				} else {
					if(difficulty > 0) {
						scaling = defaultScaling;
					}
					if(difficulty > 3) {
						scaling *= 2;
					}
				}
			}
			node.textContent = Math.floor(health * (1 + scaling/10));
		}
		
	}
	
	
	for(var i = 1, iMax = data.item.length; i < iMax; i++) {
		var node = document.querySelector('#item_'+i +' .cost'),
			cost = data.item[i][4];
			defaultScaling = 2;
		if(node) {
			if(difficulty < 3) {
				defaultScaling = 0;
			}
			node.textContent = Math.floor(cost * (1 + defaultScaling/10));
		}
	}
	
	for(var i = 1, iMax = data.unit.length; i < iMax; i++) {
		var node = document.querySelector('#unit_'+i +' .hp'),
			defaultScaling = 2,
			health;

		if(node) {
			if(difficulty < 2) {
				defaultScaling = 0;
			}
			if(data.unit[i][4].join) {
				health = [];
				for(var j = 0, jMax = data.unit[i][4].length; j < jMax; j++) {
					health[j] = Math.floor(data.unit[i][4][j] * (1 - defaultScaling/10));
				}
			} else {
				health = Math.floor(data.unit[i][4] * (1 - defaultScaling/10));
			}
			node.textContent = health;
		}
	}
}

function translate() {
	var thisLang = userLang == 0 ? data.L : L;
	var allNodes = document.querySelectorAll('*[lang]');
	for(var i  = 0, iMax = allNodes.length; i < iMax; i++) {
		if(thisLang[allNodes[i].getAttribute('lang')]) {
			allNodes[i].innerHTML = thisLang[allNodes[i].getAttribute('lang')].replace(/\{kw\-([a-z:0-9/]+)\}/gi, function (wholeString, keyword) {
				if(data.dict.keyword[keyword]) {
					return '<span class="trigger" title="'+thisLang[data.dict.keyword[keyword][1]]+'">'+thisLang[data.dict.keyword[keyword][0]]+'</span>';
				} else {
					wholeString = wholeString.split('/');
					var returnTooltip = [];
					for(var i = 0, iMax = wholeString.length; i < iMax; i++) {
						var summonID = wholeString[i].match(/[0-9]+/).shift();
						//var svgNode = createSVG(24, data.unit2[parseInt(summonID)][8]), node = create('div', {}, svgNode); // nifty but not equal to line height.
						var innerNode = create('span', {className: 'summon', tooltip: 'monster_'+summonID, textContent: thisLang[data.unit2[parseInt(summonID)][2]]}), node = create('div', {}, innerNode);
						returnTooltip.push(node.innerHTML); 
					}
					return returnTooltip.join('/');
				}
			});
			
		}
	}
	
	var allNodes = document.querySelectorAll('*[langt]');
	for(var i  = 0, iMax = allNodes.length; i < iMax; i++) {
		if(allNodes[i].getAttribute('langt') != '') {
			allNodes[i].title = thisLang[allNodes[i].getAttribute('langt')].replace(/\{kw\-([a-z:0-9/]+)\}/gi, function (wholeString, keyword) {
				if(data.dict.keyword[keyword]) {
					return thisLang[data.dict.keyword[keyword][0]];
				} else {
					return wholeString
				}
			});
		}
	}
}

document.getElementById('toggle_path').click(); //Let's show some content at least.
document.getElementById('difficulty_0').click();
document.querySelector('label[for="path_path_1"]').click();

function selectLang(e) {
	var thisHash = document.location.search || 'en', thisUserLang = 0;
	thisHash = thisHash.replace('?','');
	for(var i = 0, iMax = data.lang.length; i < iMax; i++) {
		if(thisHash == data.lang[i][1]) {
			thisUserLang = i;
			break;
		}
	}
	if(thisUserLang != userLang) {
		userLang = thisUserLang;
		if(userLang == 0) {
			translate();
		} else {
			var langNode = document.getElementById('langNode');
			if(!langNode) {
				langNode = create('script', {src: 'lang.'+data.lang[userLang][1]+'.js', onload: function() {
					translate();
				}});
				document.body.appendChild(langNode);
			} else {
				langNode.src = 'lang.'+data.lang[userLang][1]+'.js';
			}
		}
	}
}

var langSelectNode = create('div', {className: 'lang'});
for(var i = 0, iMax = data.lang.length; i < iMax; i++) {
		langSelectNode.appendChild(create('a', {textContent: data.lang[i][0], href: '?'+data.lang[i][1]}));
}
document.getElementById('header').firstElementChild.appendChild(langSelectNode)

var userLang = -1;
selectLang();

/*
	TODO
	factions (color), unlock, cursed rings, transformation
	make the UI more like the Game's Book of Champions*/


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

var nav = create('nav', {className: 'menu', onclick: function() {setTimeout(styleMenu,100);}}), allA = [];
for(var linkName in data.menu) {
	allA.push(linkName);
	thisNode = create('ul', {id: 'ul_'+linkName});
	document.getElementById('body').appendChild(thisNode);
	document.getElementById('body').insertBefore(create('input', {type: linkName=='SummoningCircle'?'checkbox':'radio', className: 'toggler', name: linkName=='SummoningCircle'?'toggle_SummoningCircle':'toggle_view', id: 'toggle_'+linkName}),
		thisNode
	);
	nav.appendChild(
		create('label', {className: 'menuItem', for: 'toggle_'+linkName},
			createSVG(24, data.imgRef[linkName].join ? data.imgRef[linkName][0] : data.imgRef[linkName]),
			create('span', {lang: data.menu[linkName]})
	));
}

function styleMenu() {
	for(var linkName in data.menu) {
		var thisNode = document.getElementById('toggle_'+linkName);
		var labelNode = document.querySelector('label[for="toggle_'+linkName+'"]');
		labelNode.className = 'menuItem'+(thisNode.checked || thisNode.selected ? ' toggled':'');
	}
}

//give visibility to the Custom Party.
var moveNode = document.getElementById('body');
moveNode.insertBefore(moveNode.lastChild, moveNode.firstChild);
moveNode.insertBefore(moveNode.lastChild, moveNode.firstChild);



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

document.querySelector('header').appendChild(difficulty);
document.querySelector('#header').appendChild(nav);

/* ### Party Builder
*/

var slug_order = [
	['hero', ['unit'], ['item', 3]],
	['relic', ['relic', 10]],
	['unit_3', ['unit'], ['item', 3], ['potion']],
	['unit_3', ['unit'], ['item', 3], ['potion']]
];

var partyBuilder = create('div', {className: 'party'}), slug_cat = {unit: 0, item: 0, relic: 0, potion: 0};
for(var i = 0, iMax = slug_order.length; i < iMax; i++) {
	var subNodeID = slug_order[i][0].split('_');
	subNodeID[1] = subNodeID[1] ? subNodeID[1] : 1;
	var subNode = create('div', {className: 'party_'+subNodeID[0]});
	for(var j = 0, jMax = subNodeID[1]; j < jMax; j++) {
		for(var k = 1, kMax = slug_order[i].length; k < kMax; k++) {
			for(var l = 0, lMax = slug_order[i][k][1] || 1; l < lMax; l++) {
				var thisCat = [slug_order[i][k][0]];
				thisCat.push(slug_cat[thisCat[0]]);
				slug_cat[thisCat[0]]++;
				if( (thisCat[0] == 'relic' && l%5==0 && i)) {
					subNode.appendChild(create('br', {}));
				}
				
				subNode.appendChild(create('span',
					{className: 'placeholder-'+(thisCat[0]=='unit'?'unit':'item'),
					id: 'party_'+thisCat[0]+'_'+thisCat[1]}
				));
			}
		}
		subNode.appendChild(create('br', {}));
	}
	partyBuilder.appendChild(subNode);
}

partyBuilder.appendChild(create('div', {id: 'party_slug', textContent: 'slug', lang: data.menu.SummoningCircle, contentEditable: true, onfocusout: loadParty}));

document.getElementById('ul_SummoningCircle').appendChild(partyBuilder);

var placeholder = '';

document.body.onclick = function(e) {
	var node = e.target;
	//Blinking and Deletion behavior
	while((!node.className.indexOf || node.className.indexOf('placeholder') == -1) && node != document.body) {
		node = node.parentNode;
	}
	if(node != document.body && node.className.indexOf('placeholder') != -1) {
		if(placeholder != '') {
			document.getElementById(placeholder).className = document.getElementById(placeholder).className.replace(' blinkbg', '');
		}
		if(placeholder == node.id) {
			placeholder = '';
			node.textContent = '';
			update_party_slug();
		} else {
			placeholder = node.id;
			node.className = node.className.replace(' blinkbg', '') + ' blinkbg';
		}
			return null;
	}
	if(placeholder == '') {
		return null;
	}
	
	//Insert Image behavior
	var regexp_id = [/^(item|relic)/, /^(hero|monster|unit)/];
	var node = e.target, idType = placeholder.indexOf('unit') == -1 ? 0:1;
	while(!node.id &&  node != document.body && !regexp_id[idType].test(node.id)) {
		node = node.parentNode;
	}
	if(node != document.body && node.nodeName == 'LI' && regexp_id[idType].test(node.id)) {
		var IDsplit = node.id.split('_');
		var placeholderNode = document.getElementById(placeholder);

		var dimSprite = 24, spriteID = -1, entityID = '';
		
		if(idType) {
			if(node.id.indexOf('unit') != -1) {
				if(placeholderNode.id == 'party_unit_0') {
					return;
				}
				spriteID = data.unit[IDsplit[1]][6];
				entityID = data.unit[IDsplit[1]][8];
			} else if(node.id.indexOf('monster') != -1) {
				spriteID = data.unit2[IDsplit[1]][6];
				entityID = data.unit2[IDsplit[1]][8];
				if(data.unit2[IDsplit[1]][11] == 1) {
					dimSprite = 16;
				}
			} else if(node.id.indexOf('hero') != -1) {
				if(placeholderNode.id != 'party_unit_0') {
					return;
				}
				spriteID = data.hero[IDsplit[1]][6];
				entityID = data.hero[IDsplit[1]][8];
			}
		} else {
			dimSprite = 16;
			//data.item[i][5] upgrade check
			if(node.id.indexOf('item') != -1) {
				if((placeholderNode.id.indexOf('potion')!= -1 &&
					data.item[IDsplit[1]][5]) ||
					placeholderNode.id.indexOf('relic') != -1
				) {
					return;
				}
				spriteID = data.item[IDsplit[1]][6];
				entityID = data.item[IDsplit[1]][7];
			} else if(node.id.indexOf('relic') != -1) {
				if(placeholderNode.id.indexOf('relic') == -1) {
					return;
				}
				spriteID = data.relic[IDsplit[1]][1];
				entityID = data.relic[IDsplit[1]][3];
			}
		}

		placeholderNode.textContent = '';
		placeholderNode.appendChild(create('span', {className: 'sprite_bg s'+dimSprite, tooltip: node.id, slug: entityID},
			createSVG(dimSprite, spriteID)
		));
		
		placeholderNode.className = placeholderNode.className.replace(' blinkbg', '');
		placeholder = '';
		
		update_party_slug();
	}
}

var update_party_slug = function() {
	var slug_cat = {unit: 0, item: 0, relic: 0, potion: 0}, thisSlug = [];
	for(var i = 0, iMax = slug_order.length; i < iMax; i++) {
		var subNodeID = slug_order[i][0].split('_');
		subNodeID[1] = subNodeID[1] ? subNodeID[1] : 1;
		for(var j = 0, jMax = subNodeID[1]; j < jMax; j++) {
			thisSlug.push('');
			for(var k = 1, kMax = slug_order[i].length; k < kMax; k++) {
				for(var l = 0, lMax = slug_order[i][k][1] || 1; l < lMax; l++) {
					var thisCat = [slug_order[i][k][0]];
					thisCat.push(slug_cat[thisCat[0]]);
					slug_cat[thisCat[0]]++;
					var thisNode = document.getElementById('party_'+thisCat[0]+'_'+thisCat[1]);
					if(thisNode && thisNode.firstChild && thisNode.firstChild.slug) {
						thisSlug[thisSlug.length-1] += thisNode.firstChild.slug;
					}
				}
			}
		}
	}
	document.getElementById('party_slug').textContent = '';
	document.getElementById('party_slug').contentEditable = false;
	document.getElementById('party_slug').onfocusout = false;
	document.getElementById('party_slug').appendChild(create('a', {href: '?'+data.lang[userLang][1]+'%26p='+thisSlug.join('.'), textContent: thisSlug.join('.')}));
};


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
	['summoned', 'summon', '{kw-summon', 'fill', 'ally dies'],
	['poison', '{kw-poison}'],
	['kills', 'summon an enemy'],
	['counter', '{kw-counter}'],
	['soulcast','{kw-channelsoul}','max soul'],
	['bloodcast','{kw-channelblood}', 'beast takes'],
];

//Path Filter
var filterNode = create('div', {className: 'filter', textContent: '🔍 '});
	
for(var i = 0, iMax = 6; i < iMax; i++) {
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
	for(var j in data.keyword) {
		if(keywords[i][0] == data.L[data.keyword[j][0]].toLowerCase()) {
			filterNode.appendChild(create('label', {lang: data.keyword[j][0], langt: data.keyword[j][1], for: 'unit_keyword_'+i, onclick: filter}));
			break;
		}
	}
	
}

//TODO ADD RACE AND CLASS FINDER (unit, monster)
data.tag = [[],[]];
for(var i = 0, iMax = data.unit.length; i < iMax; i++) {
	if(data.tag[0].indexOf(data.unit[i][1]) == -1) {
		data.tag[0].push(data.unit[i][1]);
	}
	if(data.tag[1].indexOf(data.unit[i][2]) == -1) {
		if(data.unit[i][2] == 0) {
			console.log(data.L[data.unit[i][0]]);
		}
		data.tag[1].push(data.unit[i][2]);
	}
}

for(var i = 0, iMax = data.tag[0].length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'unit_race_filter', id: 'unit_race_'+data.tag[0][i]}));
	filterNode.appendChild(create('label', {lang: data.tag[0][i], for: 'unit_race_'+data.tag[0][i], onclick: filter}));
}
for(var i = 0, iMax = data.tag[1].length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'unit_job_filter', id: 'unit_job_'+data.tag[1][i]}));
	filterNode.appendChild(create('label', {lang: data.tag[1][i], for: 'unit_job_'+data.tag[1][i], onclick: filter}));
}
document.getElementById('ul_Campfire').appendChild(
	filterNode
);
//Item Filter
var filterNode = create('div', {className: 'filter', textContent: '🔍 '});
for(var i = 0, iMax = data.tag[0].length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+data.tag[0][i]}));
	filterNode.appendChild(create('label', {lang: data.tag[0][i], for: 'item_filter_'+data.tag[0][i], onclick: filter}));
}
for(var i = 0, iMax = data.tag[1].length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+data.tag[1][i]}));
	filterNode.appendChild(create('label', {lang: data.tag[1][i], for: 'item_filter_'+data.tag[1][i], onclick: filter}));
}
document.getElementById('ul_Store').appendChild(
	filterNode
);


/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
// ❤ ♥ atk ⚔ spd ⪼
*/
var heroClass = 0;
for(var i = 0, iMax = data.L.length; i < iMax; i++) {
	if(data.L[i] == 'Hero') {
		heroClass = i;
		break;
	}
}
var heroNode = document.getElementById('ul_SelectYourHero');
for(var i = 0, iMax = data.hero.length; i < iMax; i++) {
	heroNode.appendChild(
		create('li', {className: 'sheet hero', id: 'hero_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.hero[i][6])),
			create('span', {className: 'name', lang: data.hero[i][0]}),
			create('span', {className: 'title', lang: data.hero[i][2]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.hero[i][1]}),
				create('span', {textContent: ' '}),
				create('span', {lang: heroClass})
			),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.hero[i][3]}),
				create('span', {className: 'hp', textContent: data.hero[i][4]}),
				create('span', {className: 'spd', textContent: data.hero[i][5]})
			),
			create('span', {className: 'desc', lang: data.hero[i][7]?data.hero[i][7].join(','):''})
		)
	);
}

/* ### ITEM[0:name, 1:race/class, 2:cost, 3:ability, 4:[stats], 5:update,
	6:sprite, 7:slug]
*/

var itemNode = document.getElementById('ul_Store');
for(var i = 0, iMax = data.item.length; i < iMax; i++) {
	var elaborateTooltip = [];
	if(data.item[i][4] && data.item[i][4].join) {
		data.stats.forEach(function(value,key,array) {
			if(data.item[i][4][key]) {
				elaborateTooltip.push((data.item[i][4][key]>0?'+':'')+data.item[i][4][key]+' <span lang="'+value+'"></span>. ');
			}
		});
	}
	itemNode.appendChild(
		create('li', {className: 'sheet item', id: 'item_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name', lang: data.item[i][0]}),
			create('span', {className: data.item[i][2] < 1?'':'cost', textContent: data.item[i][2] < 1?'':data.item[i][2]}),
			create('span', {className:'tag', lang: data.item[i][1]}),
			create('span', {className: 'sprite_bg s16 upgrade', tooltip: data.item[i][5]?'item_'+data.item[i][5]:''}, data.item[i][5]?createSVG(16, data.item[data.item[i][5]][6]):create()),
			create('span', {className: 'desc', innerHTML: elaborateTooltip.join('')},
				create('span', {className: 'desc', lang: data.item[i][3]})
			)
		)
	);
}

/* ### ARTIFACT[0:name, 1:sprite, 2:ability]
*/

var artifactNode = document.getElementById('ul_RelicRoom');
for(var i = 0, iMax = data.relic.length; i < iMax; i++) {
	artifactNode.appendChild(
		create('li', {className: 'sheet artifact', id: 'relic_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.relic[i][1])),
			create('span', {className: 'name', lang: data.relic[i][0]}),
			create('span', {className: 'desc', lang: data.relic[i][2]})
		)
	);
}

/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
*/

var unitNode = document.getElementById('ul_Campfire');
for(var i = 0, iMax = data.unit.length; i < iMax; i++) {
	unitNode.appendChild(
		create('li', {className: 'sheet unit', id: 'unit_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.unit[i][6])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.unit[i][3] == 0 ? '-': data.unit[i][3]}),
				create('span', {className: 'hp', textContent: data.unit[i][4]}),
				create('span', {className: 'spd', textContent: data.unit[i][5]})
			),
			create('span', {className: 'name', lang: data.unit[i][0]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.unit[i][1]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.unit[i][2]})
			),
			create('span', {className: 'reach', lang: data.unit[i][9]}),
			create('span', {className: 'desc', lang: data.unit[i][7].join(',')})
		)
	);
}

/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
*/

var unitNode2 = document.getElementById('ul_monster');
for(var i = 0, iMax = data.unit2.length; i < iMax; i++) {
	unitNode2.appendChild(
		create('li', {className: 'sheet unit', id: 'monster_'+i},
			create('span', {className: 'sprite_bg s'+(data.unit2[i][11]?16:24)}, createSVG(data.unit2[i][11]?16:24, data.unit2[i][6])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.unit2[i][3] == 0 ? '-': data.unit2[i][3]}),
				create('span', {className: 'hp', textContent: data.unit2[i][4].join?data.unit2[i][4][0]:data.unit2[i][4]}),
				create('span', {className: 'spd', textContent: data.unit2[i][5]})
			),
			create('span', {className: 'name', lang: data.unit2[i][0]}),
			create('span', {className: 'tag'},
				create('span', {lang: data.unit2[i][1]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.unit2[i][2]})
			),
			create('span', {className: 'reach', lang: data.unit2[i][9]}),
			create('span', {className: 'desc', lang: data.unit2[i][7]?data.unit2[i][7].join(','):''})
		)
	);
}


/* ### Upgrade cheap calculation.
*/

var itemUpgrade = [];		// [i, upgrade, tag]
for(var i = 0, iMax = data.item.length; i < iMax; i++) {
	itemUpgrade.push([i, data.item[i][5]?data.item[i][5]:false, data.item[i][1], data.L[data.item[i][0]]]);
}
itemUpgrade.sort(function(a, b) {	//sort by type and gold. Not foolproof.
	if(a[2] != b[2]) {
		return b[2] - a[2];
	}
	a = data.item[a[0]][2]?data.item[a[0]][2]:999;
	b = data.item[b[0]][2]?data.item[b[0]][2]:999;
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
var toDelete = [];
for(var i = outputUpgrade.length; i > 0; i--) {
	var thisInto = outputUpgrade[i-1][outputUpgrade[i-1].length-1].into;
	for(var j = 0, jMax = outputUpgrade.length; j < jMax; j++) {
		var firstContains = false;
		for(var k = 0, kMax = outputUpgrade[j][0].item.length; k < kMax; k++) {
			if(outputUpgrade[j][0].item[k] == thisInto) {
				var itemSave = outputUpgrade[j][0].item[0];
				outputUpgrade[j][0].item[0] = thisInto;
				outputUpgrade[j][0].item[k] = itemSave;
				for(var l = outputUpgrade[i-1].length; l > 0; l--) {
					outputUpgrade[j].unshift(outputUpgrade[i-1][l-1]);
				}
				toDelete.push(i-1);
				firstContains = true;
				break;
			}
		}
		if(firstContains) {
			break;
		}
	}
}
var copyUpgrade = [];
for(var i = 0, iMax = outputUpgrade.length; i < iMax; i++) {
	if(toDelete.indexOf(i) == -1) {
		copyUpgrade.push(outputUpgrade[i]);
	}
}
outputUpgrade = copyUpgrade;
//upgrade function helper
function investigateUpgrade(i, sameRestriction = false) {
	if(itemUpgrade[i][1] /*&& itemUpgrade[i][1] != -1 && data.item[itemUpgrade[i][0]][4] > 0*/) {//it does upgrade into smth (and has a cost?)
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
var upgradeNode = document.getElementById('ul_VoidRoom');
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
for(var i = 0, iMax = data.path.length; i < iMax; i++) {
	var thisFloor = Math.floor(currentRoom / 13) +1;
	var thisRoom = currentRoom - (thisFloor-1)*13 +1;
	currentRoom++;
	var thisNode = create('li', {id: 'path_'+i, className: 'floor floor'+thisFloor+(thisRoom%2?' even':' odd')});
	thisNode.appendChild(create('span', {className: 'number',textContent: thisFloor + '/' + thisRoom}));
	for(var j = 0, jMax = data.path[i].length; j < jMax; j++) {
		var thisGroup = create('div', {langt: data.imgRef[data.path[i][j][0]] && data.imgRef[data.path[i][j][0]].join?(data.imgRef[data.path[i][j][0]][1]+','+data.imgRef[data.path[i][j][0]][2]):''});
		
		if(data.imgRef[data.path[i][j][0]]) {
			thisGroup.appendChild(createSVG(i==1?16:24, data.imgRef[data.path[i][j][0]].join?data.imgRef[data.path[i][j][0]][0]:data.imgRef[data.path[i][j][0]]));
		} else if(data.path[i][j][0] == "bossPool") {
			thisGroup.appendChild(createSVG(24, data.imgRef.path));
			for(var k = 0, kMax = data.bossPool[data.path[i][j][1]].length; k < kMax; k++) {
				thisGroup.appendChild(create('span', {tooltip: 'monster_'+data.bossPool[data.path[i][j][1]][k], onclick: goToTooltip, className: data.unit2[data.bossPool[data.path[i][j][1]][k]][10]?'hard':''},
					//create(' '),
					createSVG(24, data.unit2[data.bossPool[data.path[i][j][1]][k]][6])
				));
			}
			if(data.path[i][j][2]) {
				thisGroup.appendChild(create(' '));
				thisGroup.appendChild(createSVG(24, data.imgRef.path));
			}
		} else {
			console.log(JSON.stringify(data.path[i][j]) + ' '+i+' '+j);
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

document.body.onmouseover = function(e){
	var node = e.target;
	while(!node.getAttribute('tooltip') && node != document.body) {
		node = node.parentNode;
	}
	if(node != document.body && node.getAttribute('tooltip') && node.getAttribute('tooltip') != tooltipStatus) {
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
	path: function(pointer, testValue) {
		if(testValue == 0) {return true}
		if(pointer > data.path.length -4) {
			return testValue == 5;
		}
		return Math.floor(pointer/13) == parseInt(testValue)-1;
	},
	//Unit filters
	floor: function(pointer, testValue) {return pointer < data['lvl'+(parseInt(testValue)+1)]+1;},
	keyword: function(pointer, testValue) {
		var filter_regexp = new RegExp('('+keywords[testValue].join('|').replace('{','\\{').replace('}','\\}')+')','i');
		if(!data.unit[pointer][7].length) {
			return filter_regexp.test(data.L[data.unit[pointer][7]])
		}
		var thisResult = false;
		for(var i  = 0, iMax = data.unit[pointer][7].length; i < iMax; i++) {
			thisResult = filter_regexp.test(data.L[data.unit[pointer][7][i]]);
			if(thisResult) {
				return thisResult;
			}
		}
		return thisResult;
	},
	race: function(pointer, testValue) {return data.unit[pointer][1] == testValue;},
	job: function(pointer, testValue) {return data.unit[pointer][2] == testValue;},
	//Item filter
	tag: function(pointer, testValue) {return data.item[pointer][1] == testValue || (data.item[pointer][1] == 0 && data.L[testValue] == 'Multiclass');}
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

	for(var i = 0, iMax = data[filter_type].length; i < iMax; i++) {
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
	
	for(var i = 0, iMax = data.unit2.length; i < iMax; i++) {
		var node = document.querySelector('#monster_'+i +' .hp'),
			health = data.unit2[i][4].join ? data.unit2[i][4][0] : data.unit2[i][4],
			scaling = 0;
		if(data.unit2[i][4].join && difficulty) { //otherwise no scaling.
			//default 0: normal, 1:+1 +2 +3, 2:+4 +5, 3:legend, 4+: Keeper/Old God
			if(data.unit2[i][4].length > 4) {
				if(data.unit2[i][4][difficulty]) {
					scaling = data.unit2[i][4][difficulty];
				} else {
					scaling = data.unit2[i][4][data.unit2[i][4].length -1];
				}
			} else {
				var difficultyAdjust = [0, 1, 1, 1, 2, 2, 3];
				if(data.unit2[i][4][difficultyAdjust[difficulty]]) {
					scaling = data.unit2[i][4][difficultyAdjust[difficulty]];
				} else {
					scaling = data.unit2[i][4][data.unit2[i][4].length -1];
				}
			}
		}
		node.textContent = Math.floor(health * (1 + scaling/10));
	}
	
	
	for(var i = 0, iMax = data.item.length; i < iMax; i++) {
		var node = document.querySelector('#item_'+i +' .cost'),
			cost = data.item[i][2];
			defaultScaling = 2;
		if(node && cost) {
			if(difficulty < 3) {
				defaultScaling = 0;
			}
			node.textContent = Math.floor(cost * (1 + defaultScaling/10));
		}
	}
	
	for(var i = 0, iMax = data.unit.length; i < iMax; i++) {
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
					if(health[j].indexOf('$') == -1) {
						health[j] = Math.floor(data.unit[i][4][j] * (1 - defaultScaling/10));
					}
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
		var thisLangT = allNodes[i].getAttribute('lang').split(',');
		var thisHTML = [];
		for(var j = 0, jMax = thisLangT.length; j < jMax; j++) {
			if(thisLang[thisLangT[j]]) {
				thisHTML.push(thisLang[thisLangT[j]].replace(/\{kw\-([a-z:0-9/]+)\}/gi, function (wholeString, keyword) {
					if(data.keyword[keyword]) {
						return '<span class="trigger" title="'+thisLang[data.keyword[keyword][1]]+'">'+thisLang[data.keyword[keyword][0]]+'</span>';
					} else if(keyword.indexOf('summon') != -1) {
						wholeString = wholeString.split('/');
						var returnTooltip = [];
						for(var i = 0, iMax = wholeString.length; i < iMax; i++) {
							var summonID = wholeString[i].match(/[0-9]+/).shift();
							//var svgNode = createSVG(24, data.unit2[parseInt(summonID)][8]), node = create('div', {}, svgNode); // nifty but not equal to line height.
							var innerNode = create('span', {className: 'lnk', tooltip: 'monster_'+summonID, textContent: thisLang[data.unit2[parseInt(summonID)][0]]}), node = create('div', {}, innerNode);
							returnTooltip.push(node.innerHTML); 
						}
						return returnTooltip.join('/');
					} else if(keyword.indexOf('relic') != -1) {
						var relicID = wholeString.match(/[0-9]+/).shift();
						var innerNode = create('span', {className: 'lnk', tooltip: 'relic_'+relicID, textContent: thisLang[data.relic[parseInt(relicID)][0]]}), node = create('div', {}, innerNode);
						return node.innerHTML;
					} else if(keyword.indexOf('scaling') != -1) {
						var scalingID = keyword.split(':');
						return '<span class="trigger" title="'+thisLang[data.keyword[scalingID[0]][1]]+'">{'+(scalingID[1]!='0'?scalingID[1]+'+':'')+thisLang[data.keyword[scalingID[0]][0]]+'}</span>';
					} else if(keyword.indexOf('channelmana') != -1) {
						var scalingID = keyword.split(':');
						return '<span class="trigger" title="'+thisLang[data.keyword[scalingID[0]][1]]+'">'+thisLang[data.keyword[scalingID[0]][0]] + ' {'+(scalingID[1]!='0'?scalingID[1]+' +':'')+thisLang[data.keyword['scaling'][0]]+'}</span>';
					} else {
						console.log('Unsupported keyword '+keyword);
					}
				}));
			}
		}
		allNodes[i].innerHTML = thisHTML.join('<br/>');
	}
	
	var allNodes = document.querySelectorAll('*[langt]');
	for(var i  = 0, iMax = allNodes.length; i < iMax; i++) {
		if(allNodes[i].getAttribute('langt') != '') {
			var thisLangT = allNodes[i].getAttribute('langt').split(',');
			var thisTitle = [];
			for(var j = 0, jMax = thisLangT.length; j < jMax; j++) {
				thisTitle.push(thisLang[thisLangT[j]].replace(/\{kw\-([a-z:0-9/]+)\}/gi, function (wholeString, keyword) {
					if(data.dict.keyword[keyword]) {
						return thisLang[data.keyword[keyword][0]];
					} else {
						return wholeString
					}
				}));
			}
			allNodes[i].title = thisTitle.join(': ');
		}
	}
	
	//Ordering Artefacts and Units depending on language.
	var artefactNode = document.getElementById('ul_RelicRoom'), arrayNode = [];
	for(i = 0, iMax = data.relic.length; i < iMax; i++) {
		arrayNode.push(i);
	}
	arrayNode.sort(function(a,b) {
		return thisLang[data.relic[a][0]].localeCompare(thisLang[data.relic[b][0]]);
	});
	for(i = 0, iMax = arrayNode.length; i < iMax; i++) {
	  artefactNode.appendChild(document.getElementById('relic_' + arrayNode[i]));
	}
	
	var unitNode = document.getElementById('ul_Campfire'), arrayNode = [];
	for(i = 0, iMax = data.unit.length; i < iMax; i++) {
		arrayNode.push(i);
	}
	arrayNode.sort(function(a,b) {
		var aFloor = a > data.lvl3 ? 3 : (a > data.lvl2 ?2:1), bFloor = b > data.lvl3 ? 3 : (b > data.lvl2 ?2:1);
		if(aFloor == bFloor) {
			return thisLang[data.unit[a][0]].localeCompare(thisLang[data.unit[b][0]]);
		} else {
			return a - b;
		}
		
	});
	for(i = 0, iMax = arrayNode.length; i < iMax; i++) {
	  unitNode.appendChild(document.getElementById('unit_' + arrayNode[i]));
	}
}


/* ###
	Locale Preferences, Light/Dark and lang.
*/

//https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting/75124760#75124760
//CSS CORS limitations are bothersome in local (i.e. for somebody downloading the compendium). So the CSS is now in .js too :|
document.querySelector('div.difficulty').appendChild(create('divv', {className: 'colorscheme',onclick: toggleColorScheme},
	create('span', {id: 'icon-sun', textContent: '🌞'}),
	create('span', {id: 'icon-moon', textContent: '🌚'})
));
var systemScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light';
function toggleColorScheme(toggle=true){
	let targetScheme = localStorage.getItem("scheme");
	if(targetScheme != 'dark' && targetScheme != 'light') {
		targetScheme = systemScheme;
	}
	if(toggle) {
		targetScheme = systemScheme == 'dark' ? 'light' : 'dark';
	}
	// Change the toggle button to be the opposite of the current scheme
    if(targetScheme == 'dark') {
        document.getElementById("icon-sun").style.display = 'inline';
        document.getElementById("icon-moon").style.display = 'none';
    } else {
        document.getElementById("icon-moon").style.display = 'inline';
        document.getElementById("icon-sun").style.display = 'none';
    }

	if(targetScheme != systemScheme) {
		systemScheme = targetScheme;
		localStorage.setItem("scheme", targetScheme);
		switchColorScheme();
	}
	return targetScheme;
}

// Apply the chosen color scheme by traversing stylesheet rules, and applying a medium.
function switchColorScheme() {
	for(var sheet_file = 0; sheet_file < document.styleSheets.length; sheet_file++) {
		for (var sheet_rule = 0; sheet_rule < document.styleSheets[sheet_file].cssRules.length; sheet_rule++) {
			rule = document.styleSheets[sheet_file].cssRules[sheet_rule];

			if (rule && rule.media && rule.media.mediaText.includes("prefers-color-scheme")) {
				rule_media = rule.media.mediaText;
				if (rule_media.includes("light")) {
					new_rule_media = rule_media.replace("light", "dark");
				}
				if (rule_media.includes("dark")) {
					new_rule_media = rule_media.replace("dark", "light");
				}
				rule.media.deleteMedium(rule_media);
				rule.media.appendMedium(new_rule_media);
			}
		}
	}
}

toggleColorScheme(false);

/*// Page Query and Lang Selection
//*/
var userLang = 0, thisParty = '';

var thisHash = document.location.search || 'en';
thisHash = thisHash.replace('?','').split('&');
for(var i = 0, iMax = thisHash.length; i < iMax; i ++) {
	var thisVar = thisHash[i].split('=');
	if(thisVar.length > 1) {
		thisParty = thisVar[1];
	} else {
		for(var j = 0, jMax = data.lang.length; j < jMax; j++) {
			if(thisVar[0] == data.lang[j][1]) {
				userLang = j;
				break;
			}
		}
	}
}
thisHash = localStorage.getItem("lang");
for(var i = 0, iMax = data.lang.length; i < iMax; i++) {
	if(data.lang[i][1] == thisHash) {
		userLang = i;
		break;
	}
}

function loadLang(e) {
	var thisLang = e.target ? e.target.selectedIndex : e;
	if(thisLang != userLang || !e.target) {
		userLang = thisLang;
		localStorage.setItem('lang', data.lang[userLang][1]);
		var langNode = document.getElementById('langNode');
		if(langNode) {
			document.body.removeChild(langNode);
		}
		if(userLang) {
			langNode = create('script', {src: 'lang.'+data.lang[thisLang][1]+'.js', id: 'langNode', onload: function() {
				translate();
			}});
			document.body.appendChild(langNode);
		} else {
			L = data.L;
			translate();
		}
	} else {
		L = data.L;
	}
}

var langSelectNode = create('select', {className: 'lang', onchange: loadLang});
for(var i = 0, iMax = data.lang.length; i < iMax; i++) {
	langSelectNode.appendChild(create('option', {textContent: data.lang[i][0], value: i, selected: i==userLang?true:false}));
}
document.querySelector('div.difficulty').appendChild(langSelectNode)


document.getElementById('toggle_path').click(); //Let's show some content at least.
document.getElementById('difficulty_0').click();
document.querySelector('label[for="path_path_1"]').click();
styleMenu();

if(userLang == 0) {
	translate();
} else {
	loadLang(userLang);
}

//Now thisParty Slug
if(thisParty != '') {
	loadParty(thisParty);
}
function loadParty(thisParty) {
	if(this && this.nodeName) {
		thisParty = this.textContent;
	} else {
		document.getElementById('toggle_SummoningCircle').click();
	}
	thisParty = thisParty.split('.');
	var slug_column = {
		unit: 8,
		unit2: 8,
		hero: 8,
		item: 7,
		relic: 3
	};
	for(var i = 0, iMax = thisParty.length; i < iMax; i++) {
		var slug_cat = {unit: 0, item: 0, relic: 0, potion: 0};
		for(var j = 0, jMax = thisParty[i].length; j < jMax+1; j+=2) {
			var currentSlug = thisParty[i][j] + thisParty[i][j+1];
			for(var prop in slug_column) {
				for(var k = 0, kMax = data[prop].length; k < kMax; k++) {
					if(data[prop][k][slug_column[prop]] == currentSlug) {
						var thisAction = [prop, k];
						switch(thisAction[0]) {
							case 'unit2':
							thisAction[0] = 'monster';
							case 'unit':
							case 'hero':
							document.getElementById('party_unit_'+(i?i-1:0)).click();
							document.getElementById(thisAction[0]+'_'+thisAction[1]).click();
							break;
							case 'relic':
							document.getElementById('party_relic_'+(j/2<10?j/2:0)).click();
							document.getElementById(thisAction[0]+'_'+thisAction[1]).click();
							break;
							case 'item':
							if(!data.item[k][5]) { //potion
								document.getElementById('party_potion_'+(i?i-2:0)).click();
								document.getElementById(thisAction[0]+'_'+thisAction[1]).click();
							} else {
								document.getElementById('party_item_'+(((i?i-1:0)*3)+slug_cat.item)).click();
								if(slug_cat.item < 2) {
									slug_cat.item++;
								};
								document.getElementById(thisAction[0]+'_'+thisAction[1]).click();
							}
							break;
							default:
						}
						break;
						break;
					}
				}
			}
		}
	}
}

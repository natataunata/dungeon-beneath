/*
	make the UI more like the Game's Book of Champions
*/


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
var nodeCache = create('div', {hidden: 'hidden'});
document.getElementById('empty').parentNode.appendChild(nodeCache);

/* ### Building the menu
*/

var nodeMenu = document.querySelector('.pageright .page');
var nodeSelector = document.querySelector('.pageleft .page')

var nav = create('nav', {className: 'menu', onclick: function() {setTimeout(styleMenu,100);}}), allA = [];
for(var i = 0, iMax = data.menu.length; i < iMax; i++) {
	allA.push(data.menu[i]);
	thisNode = create('ul', {id: 'ul_'+data.menu[i]});
	
	nodeSelector.appendChild(thisNode);
	nodeSelector.insertBefore(create('input', {type: 'radio', className: 'toggler', name: 'toggle_view', id: 'toggle_'+data.menu[i]}),
		thisNode
	);
	nav.appendChild(
		create('label', {className: 'menuItem', for: 'toggle_'+data.menu[i], langt: data.imgRef[data.menu[i]][1]},
			createSVG(24, data.imgRef[data.menu[i]].join ? data.imgRef[data.menu[i]][0] : data.imgRef[data.menu[i]])
	));

}

function styleMenu() {
	for(var i = 0, iMax = data.menu.length; i < iMax; i++) {
		var thisNode = document.getElementById('toggle_'+data.menu[i]);
		var labelNode = document.querySelector('.pageright label[for="toggle_'+data.menu[i]+'"]');
		labelNode.className = 'menuItem'+(thisNode.checked || thisNode.selected ? ' toggled':'');
	}
}

var difficulty = create('select', {className: 'difficulty', onchange: setDifficulty});
for(var i = 0, iMax = 7; i < iMax; i++) {
	difficulty.appendChild(create('option', {lang: data.difficulty[i], value: i, selected: i==0?true:false}));
}

document.querySelector('header').appendChild(difficulty);
nodeMenu.insertBefore(nav, nodeMenu.firstChild);

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
				if( (thisCat[0] == 'relic' && l%5==0 && l)) {
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

partyBuilder.appendChild(create('div', {id: 'party_slug', textContent: 'PASTE PARTY CODE HERE', contentEditable: true, onfocusout: loadParty}));

nodeMenu.appendChild(partyBuilder);

var grabState = '';

document.getElementById('body').onclick = function(e) {
	var placeholderNode = e.target, tooltipNode = e.target;
	while((!placeholderNode.className.indexOf || placeholderNode.className.indexOf('placeholder') == -1) && placeholderNode != document.body) {
		placeholderNode = placeholderNode.parentNode;
	}
	while(!tooltipNode.getAttribute('tooltip') && tooltipNode != document.body) {
		tooltipNode = tooltipNode.parentNode;
	}

	if(!grabState.length) { //empty grabState
		if(placeholderNode != document.body) {
			var node = document.getElementById(placeholderNode.id);
			if(node.firstChild && node.firstChild.getAttribute('tooltip')) {
				grabState = placeholderNode.id;
				stickyTooltip = node.firstChild.getAttribute('tooltip');
				nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '') + ' blink_'+getBlink(stickyTooltip);
				setTooltip(stickyTooltip);
			}
			return;
		}
		if (tooltipNode != document.body) { //click on tooltip
			grabState = tooltipNode.getAttribute('tooltip');
			stickyTooltip = grabState;
			setTooltip(stickyTooltip);
			nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '') + getBlink(stickyTooltip);
			return;
		}
		return;
	}
	if(placeholderNode == document.body) { //delete grabState
		if(grabState.split('_').length == 3) { //was a placeholder
			document.getElementById(grabState).textContent = '';
			update_party_slug();
		}
		grabState = '';
		nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '');
		setTooltip('');
		return;
	}

	if(placeholderNode.id == grabState) {//self, cancel grabState
		grabState = '';
		nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '');
		setTooltip('');
		return;
	}
	if(!isCompatible(placeholderNode.id, grabState)) {
		return;
	}
	
	var splitGrabState = grabState.split('_');
	var splitPlaceholder = placeholderNode.id.split('_');
	if(splitGrabState.length == 3) { //switching placeholder
		if(splitGrabState[1] == 'unit') {//have to move items too
			for(var i = 0, iMax = 3; i < iMax; i++) {
				var saveItem = getEntity('party_item_'+(parseInt(splitGrabState[2])*3 +i));
				var otherItem = getEntity('party_item_'+(parseInt(splitPlaceholder[2])*3 +i));
				putEntityIn(otherItem, 'party_item_'+(parseInt(splitGrabState[2])*3 +i));
				putEntityIn(saveItem, 'party_item_'+(parseInt(splitPlaceholder[2])*3 +i));
			}
			var savePotion = getEntity('party_potion_'+(parseInt(splitGrabState[2])-1));
			var otherPotion = getEntity('party_potion_'+(parseInt(splitPlaceholder[2])-1));
			putEntityIn(savePotion, 'party_potion_'+(parseInt(splitPlaceholder[2])-1));
			putEntityIn(otherPotion, 'party_potion_'+(parseInt(splitGrabState[2])-1));
		}
		var saveEntity = getEntity(placeholderNode.id);
		var otherEntity = getEntity(splitGrabState.join('_'));
		putEntityIn(saveEntity, splitGrabState.join('_'));
		putEntityIn(otherEntity, placeholderNode.id);
		nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '');
		setTooltip('');
		return;
	}
	var saveEntity = getEntity(placeholderNode.id);
	var otherEntity = splitGrabState.join('_');
	putEntityIn(otherEntity, placeholderNode.id);
	if(saveEntity && otherEntity) {
		grabState = saveEntity;
		setTooltip(grabState);
	} else {
		setTooltip('');
	}
	nodeMenu.className = nodeMenu.className.replace(/ blink_[a-z]+/, '') + getBlink(grabState);
	return;
};

var groupUnit = ['unit', 'monster'], groupItem = ['item', 'potion'];
function isCompatible(targetID, copyID) { //placeholder, entity or placeholder
	var prefix1 = targetID.split('_');
	var prefix2 = copyID.split('_');
	if(prefix2.length == 3) { //other placeholder
		prefix2 = getEntity(copyID);
		if(!prefix2) { //nothing to copy
			return false;
		} else {
			prefix2 = prefix2.split('_');
		}
	}
	if(prefix1[1] == 'relic' && prefix2[0] != 'relic') {
		return false;
	}
	if(targetID == 'party_unit_0') {
		return prefix2[0] == 'hero';
	}
	if(prefix1[1] == 'unit' && groupUnit.indexOf(prefix2[0]) == -1) {
		return false;
	}
	if(prefix1[1] == 'item' && (prefix2[0] != 'item' || !data.item[parseInt(prefix2[1])][5])) {
		 return false;
	}
	if(prefix1[1] == 'potion' && (prefix2[0] != 'item' || data.item[parseInt(prefix2[1])][5])) {
		 return false;
	}
	return true;
}

var slugInfo = { //property, sprite, slug
	unit: ['unit', 6, 8],
	hero: ['hero', 6, 8],
	monster: ['unit2', 6, 8],
	item: ['item', 6, 7],
	relic: ['relic', 1, 3]
};
function putEntityIn(entityID, placeholderID) {
	var node = document.getElementById(placeholderID);
	node.textContent = '';
	if(entityID != '') {
		var dimSprite = 24;
		var entityType = entityID.split('_');
		
		if(entityType[0] == 'relic' || entityType[0] == 'item'
			|| (entityType[0] == 'monster' && data.unit2[parseInt(entityType[1])][11])) {
			dimSprite = 16;
		}
		
		var thisEntity = data[slugInfo[entityType[0]][0]][parseInt(entityType[1])];
		node.appendChild(create('span', {className: 'sprite_bg s'+dimSprite, tooltip: entityID, slug: thisEntity[slugInfo[entityType[0]][2]] },
			createSVG(dimSprite, thisEntity[slugInfo[entityType[0]][1]])
		));
	}
	grabState = '';
	
	update_party_slug();
}
function setTooltip(entityID) {
	if(entityID != '') {
		tooltipStatus = entityID;
		tooltip.textContent = '';
		tooltip.removeAttribute('hidden');
		var dimSprite = 24;
		var entityType = entityID.split('_');
		
		if(entityType[0] == 'relic' || entityType[0] == 'item'
			|| (entityType[0] == 'monster' && data.unit2[parseInt(entityType[1])][11])) {
			dimSprite = 16;
		}
		
		var thisEntity = data[slugInfo[entityType[0]][0]][parseInt(entityType[1])];
		tooltip.appendChild(create('span', {className: 'sprite_bg s'+dimSprite},
			createSVG(dimSprite, thisEntity[slugInfo[entityType[0]][1]])
		));
	} else {
		tooltipStatus = 0;
		tooltip.setAttribute('hidden', 'hidden');
	}
}
function getEntity(placeHolderID) {
	var node = document.getElementById(placeHolderID).firstChild;
	if(node && node.getAttribute('tooltip')) {
		return node.getAttribute('tooltip');
	}
	return '';
}
function getBlink(entityID) {
	var thisBlink = entityID != '' ? entityID.split('_')[0] : '';
	if(thisBlink == 'item' && !data.item[parseInt(entityID.split('_')[1])][5]) {
		thisBlink = 'potion';
	}
	return thisBlink == '' ? '' : ' blink_'+thisBlink;
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

/* EXTENDED DESCRIPTION NODE (goes with tooltip) */
var descriptionNode = create('div', {className: 'description', id: 'description'});
document.querySelector('.pageright').firstChild.appendChild(descriptionNode);


/* ### Add filter buttons to the Unit and Item divs.
	dict tag 1-6 = races, 16-20 = class
	Counter, Doom (), Summon(+fill, +ally dies), Hope (+restore), Poison, Power, Armor, Kills (+summon an enemy), Scheme (+Lizardfolk?)
*/

keywords = [
	['armor', 'summon:12/'],
	['hope', '{kw-healthisrecovered}', 'restore', 'gains health', 'maximum health'],
	['power', '{kw-charge}', 'same column', ', attack', ': attack', 'attacks after'],
	['doom', '{kw-otherunitdies}', 'summon an enemy'],
	['scheme', '{kw-scheme}'],
	['summoned', 'summon', '{kw-summon', 'fill', 'ally dies'],
	['poison', '{kw-poison}'],
	['kills', 'summon an enemy'],
	['counter', '{kw-counter}'],
	['soulcast','{kw-channelsoul}','max soul'],
	['bloodcast','{kw-channelblood}', 'beast takes'],
	['manacast', '{kw-channelmana'] //need to fix space next time data is changed
];

//Path Filter
var filterNode = create('select', {className: 'filter filter_path', onchange: filter});
for(var i = 1, iMax = 6; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_path', lang: data.area[i], value: i, selected: i==1?true:false}));
}
document.getElementById('ul_path').appendChild(create('div', {}, filterNode));

//Unit Filter
filterNode = create('select', {className: 'filter filter_unit', onchange: filter});
for(var i = 0, iMax = 4; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_floor', lang: data.area[i], value: i, selected: i==0?true:false}));
}
document.getElementById('ul_Campfire').appendChild(create('div', {}, filterNode));

filterNode = create('select', {className: 'filter filter_unit', onchange: filter});
filterNode.appendChild(create('option', {className: 'filter_keyword', lang: 0, value: -1, selected: true}));
for(var i = 0, iMax = keywords.length; i < iMax; i++) {
	for(var j in data.keyword) {
		if(keywords[i][0] == data.L[data.keyword[j][0]].toLowerCase()) {
			filterNode.appendChild(create('option', {
				className: 'filter_keyword',
				lang: data.keyword[j][0],
				langt: data.keyword[j][1],
				value: i
			}));
			break;
		}
	}
}
document.getElementById('ul_Campfire').firstChild.appendChild(filterNode);

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


filterNode = create('select', {className: 'filter filter_unit', onchange: filter});
filterNode.appendChild(create('option', {className: 'filter_race', lang: 0,	value: -1, selected: true}));
for(var i = 0, iMax = data.tag[0].length; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_race', lang: data.tag[0][i], value: data.tag[0][i]}));
}
document.getElementById('ul_Campfire').firstChild.appendChild(filterNode);

filterNode = create('select', {className: 'filter filter_unit', onchange: filter});
filterNode.appendChild(create('option', {className: 'filter_job', lang: 0,	value: -1, selected: true}));
for(var i = 0, iMax = data.tag[1].length; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_job', lang: data.tag[1][i], value: data.tag[1][i]}));
}
document.getElementById('ul_Campfire').firstChild.appendChild(filterNode);

//Item Filter
var heroClass = 0;
for(var i = 0, iMax = data.L.length; i < iMax; i++) {
	if(data.L[i] == 'Hero') {
		heroClass = i;
		break;
	}
}
data.tag[1].push(heroClass);


var filterNode = create('select', {className: 'filter filter_item', onchange: filter});
filterNode.appendChild(create('option', {className: 'filter_race', lang: 0,	value: -1, selected: true}));
for(var i = 0, iMax = data.tag[0].length; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_race', lang: data.tag[0][i], value: data.tag[0][i]}));
}
for(var i = 0, iMax = data.tag[1].length; i < iMax; i++) {
	filterNode.appendChild(create('option', {className: 'filter_job', lang: data.tag[1][i], value: data.tag[1][i]}));
}


document.getElementById('ul_Store').appendChild(
	create('div', {},
		create('label', {className: 'switch_itemview', for: 'toggle_VoidRoom', langt: data.imgRef['VoidRoom'][1]},
			createSVG(24, data.imgRef['VoidRoom'].join ? data.imgRef['VoidRoom'][0] : data.imgRef['VoidRoom'])
		),
		filterNode
	)
);


/* ### ITEM[0:name, 1:race/class, 2:cost, 3:ability, 4:[stats], 5:update,
	6:sprite, 7:slug]
*/

var itemNode = document.getElementById('ul_Store');
var transformationPotion = 0;

for(var i = 0, iMax = data.item.length; i < iMax; i++) {
	var elaborateTooltip = [];
	if(data.item[i][4] && data.item[i][4].join) {
		data.stats.forEach(function(value,key,array) {
			if(data.item[i][4][key]) {
				elaborateTooltip.push((data.item[i][4][key]>0?'+':'')+data.item[i][4][key]+' <span lang="'+value+'"></span>. ');
			}
		});
	}
	nodeCache.appendChild(
		create('div', {className: 'sheet item', id: 'item_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name', lang: data.item[i][0]}),
			create('span', {className: data.item[i][2] < 1?'':'cost', textContent: data.item[i][2] < 1?'':data.item[i][2]}),
			create('span', {className:'tag', lang: data.item[i][1]}),
			create('span', {className: 'sprite_bg s16 upgrade', tooltip: data.item[i][5]?'item_'+data.item[i][5]:''}, data.item[i][5]?createSVG(16, data.item[data.item[i][5]][6]):create()),
			create('span', {className: 'desc', innerHTML: elaborateTooltip.join('')},
				create('span', {lang: data.item[i][3]})
			)
		)
	);
	itemNode.appendChild(
		create('li', {className: '', tooltip: 'item_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name', lang: data.item[i][0]})
		)
	);
	if(data.L[data.item[i][0]] == "Potion of Transformation") {
		transformationPotion = data.item[i][0];
	}
}

/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
// ❤ ♥ atk ⚔ spd ⪼
*/


var heroNode = document.getElementById('ul_SelectYourHero');
for(var i = 0, iMax = data.hero.length; i < iMax; i++) {
	nodeCache.appendChild(
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
			create('span', {className: 'desc'}, create('span', {lang: data.hero[i][7]?data.hero[i][7].join(','):''}))
		)
	);
	heroNode.appendChild(
		create('li', {className: '', tooltip: 'hero_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.hero[i][6])),
			create('span', {className: 'name', lang: data.hero[i][0]})
		)
	);
	var thisNode = document.getElementById('hero_'+i);
	if(data.hero[i][9]) {
		thisNode.lastChild.appendChild(create('br', {}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny', lang: data.imgRef.CursedRings[1]}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny', textContent: ': '}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny trigger', lang: data.item[data.hero[i][9]][0], tooltip: 'item_'+data.hero[i][9]}));
	}
	if(data.hero[i][10]) {
		thisNode.lastChild.appendChild(create('br', {}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny', lang: transformationPotion}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny', textContent: ': '}));
		thisNode.lastChild.appendChild(create('span', {className: 'tiny trigger', lang: data.hero[data.hero[i][10]][0]+','+data.hero[data.hero[i][10]][2], tooltip: 'hero_'+data.hero[i][10]}));
	}
	if(data.hero[i][11]) {
		if(data.hero[i][11].length) {
			thisNode.lastChild.appendChild(create('br', {}));
			thisNode.lastChild.appendChild(create('span', {className: 'tiny', textContent: '🔒 '+(data.hero[i][11][0]+1)+' ('+data.hero[i][11][1]+')'}));
		}
	}
}

/* ### ARTIFACT[0:name, 1:sprite, 2:ability]
*/

var artifactNode = document.getElementById('ul_RelicRoom');
for(var i = 0, iMax = data.relic.length; i < iMax; i++) {
	nodeCache.appendChild(
		create('li', {className: 'sheet artifact', id: 'relic_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.relic[i][1])),
			create('span', {className: 'name', lang: data.relic[i][0]}),
			create('span', {className: 'desc', lang: data.relic[i][2]})
		)
	);
	artifactNode.appendChild(
		create('li', {className: '', tooltip: 'relic_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.relic[i][1])),
			create('span', {className: 'name', lang: data.relic[i][0]})
		)
	);
}

/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
*/

var unitNode = document.getElementById('ul_Campfire');

function getScaling(scalingString) {
	if((scalingString.split && scalingString.indexOf('/') != -1)
		|| (scalingString.join && scalingString[scalingString.length-1].split && scalingString[scalingString.length-1].indexOf('/') != -1)){ //scaling
		var prefix = false;
		if(scalingString.join) {
			prefix = scalingString;
			scalingString = scalingString.pop();
		}
		var scalingArray = [], scalingValue = scalingString.split('/');
		if(scalingValue[0] == '0' || scalingValue[1] == '0' || scalingValue[2] == '0') { //not too long
			if(scalingValue[0] != '0') {
				scalingArray.push('<span class="trigger" langt="'+data.keyword['scaling'][1]+'">'+scalingValue[0]+'</span>');
			}
			if(scalingValue[1] != '0') {
				scalingArray.push(scalingValue[1]);
			}
			if(scalingValue[2] != '0') {
				scalingArray.push('<span class="trigger" langt="'+data.keyword['overleveling'][1]+'">'+(prefix?'+':'')+scalingValue[2]+'</span>');
			}
			scalingValue = scalingArray.join('+');
		} else {
			scalingArray.push(parseInt(scalingValue[1]) + parseInt(scalingValue[0])*3);
			if(i < data.lvl3) {
				scalingArray.unshift(parseInt(scalingValue[1]) + parseInt(scalingValue[0])*2);
			}
			if(i < data.lvl2) {
				scalingArray.unshift(parseInt(scalingValue[1]) + parseInt(scalingValue[0]));
			}
			scalingArray = scalingArray.join(',');
			scalingArray += '<span class="trigger" langt="'+data.keyword['overleveling'][1]+'">+'+(parseInt(scalingValue[0]) + parseInt(scalingValue[2]))+'</span>';
			scalingValue = scalingArray;
		}
		if(prefix) {
			scalingValue = prefix+scalingValue;
		}
		return scalingValue.replaceAll('+-','-');;
	} else {
		if(scalingString.join) {
			scalingString = scalingString.join(',');			
		}
		return scalingString;
	}
}

for(var i = 0, iMax = data.unit.length; i < iMax; i++) {

	nodeCache.appendChild(
		create('li', {className: 'sheet unit', id: 'unit_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.unit[i][6])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', innerHTML: data.unit[i][3] == 0 ? '-': getScaling(data.unit[i][3], i)}),
				create('span', {className: 'hp', innerHTML: getScaling(data.unit[i][4], i)}),
				create('span', {className: 'spd', textContent: data.unit[i][5]})
			),
			create('span', {className: 'name'}, create('span', {lang: data.unit[i][0]})),
			create('span', {className: 'tag'},
				create('span', {lang: data.unit[i][1]}),
				create('span', {textContent: ' '}),
				create('span', {lang: data.unit[i][2]})
			),
			create('span', {className: 'reach', lang: data.unit[i][9]}),
			create('span', {className: 'desc'},
				create('span', {lang: data.unit[i][7].join(',')})
			)
		)
	);
	unitNode.appendChild(
		create('li', {className: '', tooltip: 'unit_'+i},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.unit[i][6])),
			create('span', {className: 'name'}, create('span', {lang: data.unit[i][0]}))
		)
	);
	//big dot '⬤'
	//lock 🔒
	var thisNode = document.getElementById('unit_'+i);
	if(data.unit[i][10]) {
		thisNode.childNodes[2].insertBefore(create('span', {langt: data.faction[data.unit[i][10]][0], textContent: '⬤ ', style: 'color:#'+data.faction[data.unit[i][10]][1]+';'}), thisNode.childNodes[2].firstChild);
		unitNode.lastChild.childNodes[1].insertBefore(create('span', {langt: data.faction[data.unit[i][10]][0], textContent: '⬤ ', style: 'color:#'+data.faction[data.unit[i][10]][1]+';'}), unitNode.lastChild.childNodes[1].firstChild);
	}
	if(data.unit[i][11]) {
		if(data.unit[i][11].length) {
			thisNode.lastChild.appendChild(create('br', {}));
			thisNode.lastChild.appendChild(create('span', {className: 'tiny', textContent: '🔒 '+(data.unit[i][11][0]+1)+' ('+data.unit[i][11][1]+')'}));
		}
	}
	
}

/* ### UNIT[0:name, 1:race, 2:title/class, 3:attack, 4:health, 5:speed,
		6:sprite, 7:ability, 8:slug, 9:cursedRing/position, 10:transform/faction?/hard?,
		11:unlock?/is_starter?/is_24?]
*/

var unitNode2 = document.getElementById('ul_monster');
for(var i = 0, iMax = data.unit2.length; i < iMax; i++) {
	nodeCache.appendChild(
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
	unitNode2.appendChild(
		create('li', {className: '', tooltip: 'monster_'+i},
			create('span', {className: 'sprite_bg s'+(data.unit2[i][11]?16:24)}, createSVG(data.unit2[i][11]?16:24, data.unit2[i][6])),
			create('span', {className: 'name', lang: data.unit2[i][0]})
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
var upgradeNode = create('div', {id: 'ul_VoidRoom'},
	create('div', {},
		create('label', {className: 'switch_itemview', for: 'toggle_Store', langt: data.imgRef['Store'][1]},
			createSVG(24, data.imgRef['Store'].join ? data.imgRef['Store'][0] : data.imgRef['Store'])
		)
	)
);
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
nodeSelector.appendChild(create('input', {id: 'toggle_VoidRoom', className: 'toggler', type: 'radio', name: 'toggle_view'}));
nodeSelector.appendChild(upgradeNode);

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
			thisGroup.appendChild(createSVG(24, data.imgRef.path[0]));
			for(var k = 0, kMax = data.bossPool[data.path[i][j][1]].length; k < kMax; k++) {
				thisGroup.appendChild(create('span', {tooltip: 'monster_'+data.bossPool[data.path[i][j][1]][k], onclick: goToTooltip, className: data.unit2[data.bossPool[data.path[i][j][1]][k]][10]?'hard':''},
					//create(' '),
					createSVG(24, data.unit2[data.bossPool[data.path[i][j][1]][k]][6])
				));
			}
			if(data.path[i][j][2]) {
				thisGroup.appendChild(create(' '));
				thisGroup.appendChild(createSVG(24, data.imgRef.path[0]));
			}
		} else {
			console.log(JSON.stringify(data.path[i][j]) + ' '+i+' '+j);
		}
		thisNode.appendChild(thisGroup);
	}
	pathNode.appendChild(thisNode);
}

var scrollMe = '';
function goToTooltip() {
	document.querySelector('label[for="toggle_'+this.getAttribute('tooltip').split('_').shift()+'"]').click();
	scrollMe = '.pageleft li[tooltip="'+this.getAttribute('tooltip')+'"]';
	document.querySelector(scrollMe).scrollIntoView();
}

/*	TOOLTIP FUNCTION
	If functionality is to be added, better tooltip might be needed
	Beware not simulating the game by adding too much of it.
*/

var tooltipStatus = '';
var stickyTooltip = '';
/*var tooltip = create('li', {id: 'tooltip', className: 'sheet'});
document.body.appendChild(tooltip);*/

document.getElementById('body').onmouseover = function(e, bypass = false){
	var node = e.target;
	while(!node.getAttribute('tooltip') && node != document.body) {
		node = node.parentNode;
	}
	var parentNode = node;
	while(parentNode.id != 'description' && parentNode != document.body) {
		parentNode = parentNode.parentNode;
	}
	if(node != document.body && node.getAttribute('tooltip') && (bypass || node.getAttribute('tooltip') != stickyTooltip) && parentNode.id != 'description') {//mouseover behavior
		tooltipStatus = node.getAttribute('tooltip');
		descriptionNode.className = document.getElementById(tooltipStatus).className;
		descriptionNode.innerHTML = document.getElementById(tooltipStatus).innerHTML;
	} else if(stickyTooltip != '' && stickyTooltip != tooltipStatus) {//click behavior
		tooltipStatus = stickyTooltip;
		descriptionNode.className = document.getElementById(stickyTooltip).className;
		descriptionNode.innerHTML = document.getElementById(stickyTooltip).innerHTML;
	}
};

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
	floor: function(pointer, testValue) {
		if(testValue == '0') {
			return true;
		}
		if(testValue == '1') {
			return pointer < data['lvl2'];
		} else if(testValue == '2') {
			return pointer < data['lvl3'] && pointer >= data['lvl2'];
		}
		return pointer >= data['lvl3'];
	},
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
	var filter_key = e.target.className.split(' ')[1].split('_')[1];
	var filter_type = e.target.children[e.target.selectedIndex].className.split('_')[1];
	var filter_value = e.target.children[e.target.selectedIndex].value;
	
	var allFilter = document.querySelectorAll('select.filter_'+filter_key);
	
	for(var i = 0, iMax = data[filter_key].length; i < iMax; i++) {
		var include = true;
		for(var j = 0, jMax = allFilter.length; j < jMax; j++) {
			var filterTest = allFilter[j].children[allFilter[j].selectedIndex].value;
			var filter_type = filter_key == 'item' ? 'tag' : allFilter[j].children[allFilter[j].selectedIndex].className.split('_')[1];
			if(filterTest > -1) {
				include = include && filter_map[filter_type](i, filterTest);
			}
			if(!include) {
				break;
			}
		}
		var parentID = e.target.parentNode.parentNode.id;
		var querySelector = filter_key == 'path' ? ('#'+filter_key+'_'+i) : ('#'+parentID+' [tooltip="'+filter_key+'_'+i+'"]');
		if(!include) {
			document.querySelector(querySelector).setAttribute('hidden', true);
		} else {
			document.querySelector(querySelector).removeAttribute('hidden');
		}
	}
}

/* DIFFICULTY MODIFIER
	Changes price and health of units, item and monsters according to difficulty.
*/
function setDifficulty(e) {
	var difficulty = e.target ? e.target.selectedIndex : e;
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
				node.innerHTML = getScaling(data.unit[i][4], i);
			} else {
				var healthCopy = [];
				if(data.unit[i][4].split) {
					var scalingValue = data.unit[i][4].split('/');
					healthCopy.push(Math.floor( (parseInt(scalingValue[1]) + parseInt(scalingValue[0])*3) * (1 - defaultScaling/10) ));
					if(i < data.lvl3) {
						healthCopy.unshift(Math.floor( (parseInt(scalingValue[1]) + parseInt(scalingValue[0])*2) * (1 - defaultScaling/10) ));
					}
					if(i < data.lvl2) {
						healthCopy.unshift(Math.floor( (parseInt(scalingValue[1]) + parseInt(scalingValue[0])) * (1 - defaultScaling/10) ));
					}
					healthCopy.push('0/0/'+(parseInt(scalingValue[2])+parseInt(scalingValue[0])));
					node.innerHTML = getScaling(healthCopy, i);
				} else if(data.unit[i][4].join) {
					var scalingValue = data.unit[i][4].slice();
					healthCopy.push(Math.floor( scalingValue[0] * (1 - defaultScaling/10) ));
					if(i < data.lvl3) {
						healthCopy.push(Math.floor( scalingValue[1] * (1 - defaultScaling/10) ));
					}
					if(i < data.lvl2) {
						healthCopy.push(Math.floor( scalingValue[2] * (1 - defaultScaling/10) ));
					}
					if(scalingValue[3]) {
						var thisScaling = scalingValue.split('/');
						healthCopy.push('0/0/'+(parseInt(thisScaling[2])+parseInt(thisScaling[0])));
					}
					node.innerHTML = getScaling(healthCopy, i);
				} else {
					health = Math.floor(data.unit[i][4] * (1 - defaultScaling/10));
					node.textContent = health;
				}
			}
		}
	}
	document.getElementById('body').onmouseover({target: document.querySelector('[tooltip="'+tooltipStatus+'"]')}, true);
}

function replaceKeyword(wholeString, keyword) {
	var thisLang = userLang == 0 ? data.L : L;
	if(keyword.indexOf('summon') != -1) {
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
		return getScaling(scalingID[1], i);
	} else if(data.keyword[keyword]) {
		return '<span class="trigger" title="'+thisLang[data.keyword[keyword][1]]+'">'+thisLang[data.keyword[keyword][0]]+'</span>';
	} else {
		console.log('Unsupported keyword '+keyword);
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
				thisHTML.push(thisLang[thisLangT[j]].replace(/\{kw\-([a-z:0-9/-]+)\}/gi, replaceKeyword));
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
				thisTitle.push(thisLang[thisLangT[j]].replace(/\{kw\-([a-z:0-9/-]+)\}/gi, function (wholeString, keyword) {
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
	  artefactNode.appendChild(document.querySelector('#ul_RelicRoom [tooltip="relic_' + arrayNode[i] +'"]'));
	}
	
	var unitNode = document.getElementById('ul_Campfire'), arrayNode = [];
	for(i = 0, iMax = data.unit.length; i < iMax; i++) {
		arrayNode.push(i);
	}
	arrayNode.sort(function(a,b) {
		var aFloor = a >= data.lvl3 ? 3 : (a >= data.lvl2 ?2:1), bFloor = b >= data.lvl3 ? 3 : (b >= data.lvl2 ?2:1);
		if(aFloor == bFloor) {
			return thisLang[data.unit[a][0]].localeCompare(thisLang[data.unit[b][0]]);
		} else {
			return a - b;
		}
		
	});
	for(i = 0, iMax = arrayNode.length; i < iMax; i++) {
	  unitNode.appendChild(document.querySelector('#ul_Campfire [tooltip="unit_' + arrayNode[i] +'"]'));
	}
}


/* ###
	Locale Preferences, Light/Dark and lang.
*/

//https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting/75124760#75124760
//CSS CORS limitations are bothersome in local (i.e. for somebody downloading the compendium). So the CSS is now in .js too :|
document.getElementById('header').appendChild(create('div', {className: 'colorscheme', id: 'colorScheme', onclick: toggleColorScheme, textContent: ''}));

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
	document.getElementById("colorScheme").textContent = targetScheme == 'dark' ? '🌞' : '🌚';

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
document.getElementById('header').appendChild(langSelectNode);

var tooltipStatus = 0;
var tooltip = create('li', {id: 'tooltip', className: 'tooltip', hidden: 'hidden'});
document.body.appendChild(tooltip);

document.addEventListener('mousemove', fn, false);
function fn(e) {
	if(tooltipStatus) {
		tooltip.style.left = (e.pageX+10) + 'px';
		tooltip.style.top = (e.pageY+10) + 'px';
	}
}



document.getElementById('toggle_path').click(); //Let's show some content at least.
filter({target: document.querySelector('select.filter_path')});
styleMenu();

if(userLang == 0) {
	translate();
} else {
	loadLang(userLang);
}

//Now thisParty Slug
if(thisParty != '') {
	loadParty({target: {textContent: thisParty}});
}
function loadParty(thisParty) {
	if(thisParty.target) {
		thisParty = thisParty.target.textContent;
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
							document.querySelector('.pageleft [tooltip="'+thisAction[0]+'_'+thisAction[1]+'"]').click();
							document.getElementById('party_unit_'+(i?i-1:0)).click();
							break;
							case 'relic':
							document.querySelector('.pageleft [tooltip="'+thisAction[0]+'_'+thisAction[1]+'"]').click();
							document.getElementById('party_relic_'+(j/2<10?j/2:0)).click();
							break;
							case 'item':
							if(!data.item[k][5]) { //potion
								document.querySelector('.pageleft [tooltip="'+thisAction[0]+'_'+thisAction[1]+'"]').click();
								document.getElementById('party_potion_'+(i?i-2:0)).click();
							} else {
								document.querySelector('.pageleft [tooltip="'+thisAction[0]+'_'+thisAction[1]+'"]').click();
								document.getElementById('party_item_'+(((i?i-1:0)*3)+slug_cat.item)).click();
								if(slug_cat.item < 2) {
									slug_cat.item++;
								};
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

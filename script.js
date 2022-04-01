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

/* ###
	Fixing the Data file.
*/

data.dict.reach[3] = '';			//We don't need the "Both", perhaps remove it in the data compilation step.


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
			createSVG(24, data.menu[linkName]),
			create('span', {textContent: linkName})
	));
}
document.getElementById('header').appendChild(nav);

document.getElementById('toggle_path').click(); //Let's show some content at least.



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
	['kill', 'summon an enemy'],
	['counter', '{kw-counter}'],
];

var filterNode = create('div', {className: 'filter', textContent: 'Filter: '});
for(var i = 1, iMax = 3; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_floor', type: 'checkbox', name: 'unit_floor_filter', id: 'unit_floor_'+i}));
	filterNode.appendChild(create('label', {textContent: 'Floor '+i, for: 'unit_floor_'+i, onclick: filter}));
}
for(var i = 0, iMax = keywords.length; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_keyword', type: 'checkbox', name: 'unit_keyword_filter', id: 'unit_keyword_'+i}));
	filterNode.appendChild(create('label', {textContent: keywords[i][0], for: 'unit_keyword_'+i, onclick: filter}));
}
for(var i = 1, iMax = 6; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'unit_race_filter', id: 'unit_race_'+i}));
	filterNode.appendChild(create('label', {textContent: data.dict.tag[i], for: 'unit_race_'+i, onclick: filter}));
}
for(var i = 17, iMax = 20; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'unit_job_filter', id: 'unit_job_'+i}));
	filterNode.appendChild(create('label', {textContent: data.dict.tag[i], for: 'unit_job_'+i, onclick: filter}));
}
document.getElementById('ul_unit').appendChild(
	filterNode
);

var filterNode = create('div', {className: 'filter', textContent: 'Filter: '});
filterNode.appendChild(create('input', {className: 'filter_floor', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+0}));
filterNode.appendChild(create('label', {textContent: 'any', for: 'item_filter_0', onclick: filter}));
for(var i = 1, iMax = 6; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_race', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+i}));
	filterNode.appendChild(create('label', {textContent: data.dict.tag[i], for: 'item_filter_'+i, onclick: filter}));
}
for(var i = 16, iMax = 20; i < iMax; i++) {
	filterNode.appendChild(create('input', {className: 'filter_job', type: 'checkbox', name: 'item_filter', id: 'item_filter_'+i}));
	filterNode.appendChild(create('label', {textContent: data.dict.tag[i], for: 'item_filter_'+i, onclick: filter}));
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
			create('span', {className: 'name', textContent: data.hero[i][1]}),
			create('span', {className: 'title', textContent: data.hero[i][2]}),
			create('span', {className: 'tag',textContent: data.dict.tag[data.hero[i][0]] + ' Hero'}),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.hero[i][4]}),
				create('span', {className: 'hp', textContent: data.hero[i][5]}),
				create('span', {className: 'spd', textContent: data.hero[i][6]})
			),
			create('span', {className: 'desc', innerHTML: getTooltip(data.hero[i][3])})
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
				elaborateTooltip.push((data.item[i][2][key]>0?'+':'')+data.item[i][2][key]+' '+value+'. ');
			}
		});
	}
	itemNode.appendChild(
		create('li', {className: 'sheet item', id: 'item_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name', textContent: data.item[i][0]}),
			create('span', {className: data.item[i][4] == -1?'':'cost', textContent: data.item[i][4] == -1?'':data.item[i][4]}),
			create('span', {className:'tag', textContent: data.dict.tag[data.item[i][1]]}),
			create('span', {className: 'sprite_bg s16 upgrade', tooltip: data.item[i][5]?'item_'+data.item[i][5]:''}, data.item[i][5]?createSVG(16, data.item[data.item[i][5]][6]):create()),
			create('span', {className: 'desc', innerHTML: elaborateTooltip.join('') + getTooltip(data.item[i][3])})
		)
	);
}

/* ### ARTIFACT Data. ["name","tooltip","sprite"]
*/

var artifactNode = document.getElementById('ul_artifact');
for(var i = 1, iMax = data.artifact.length; i < iMax; i++) {
	artifactNode.appendChild(
		create('li', {className: 'sheet artifact', id: 'artifact_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.artifact[i][2])),
			create('span', {className: 'name', textContent: data.artifact[i][0]}),
			create('span', {className: 'desc', innerHTML: getTooltip(data.artifact[i][1])})
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
			create('span', {className: 'name', textContent: data.unit[i][2]}),
			create('span', {className: 'tag', textContent: data.dict.tag[data.unit[i][0]] + ' '+data.dict.tag[data.unit[i][1]]}),
			create('span', {className: 'reach', textContent: data.dict.reach[data.unit[i][6]]}),
			create('span', {className: 'desc', innerHTML: getTooltip(data.unit[i][7])})
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
				create('span', {className: 'hp', textContent: data.unit2[i][4]}),
				create('span', {className: 'spd', textContent: data.unit2[i][5]})
			),
			create('span', {className: 'name', textContent: data.unit2[i][2]}),
			create('span', {className: 'tag', textContent: data.dict.tag[data.unit2[i][0]] + ' '+data.dict.tag[data.unit2[i][1]]}),
			create('span', {className: 'reach', textContent: data.dict.reach[data.unit2[i][6]]}),
			create('span', {className: 'desc', innerHTML: getTooltip(data.unit2[i][7])})
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
			thisNode.appendChild(createSVG(16, data.item[outputUpgrade[i][j].item[k]][6]));
		}
		if(outputUpgrade[i][j].reverse) {
			thisNode.appendChild(createSVG(16, data.item[outputUpgrade[i][j].reverse][6]));
			thisNode.appendChild(create(' <=> '));
		} else {
			thisNode.appendChild(create(' => '));
		}
		thisNode.appendChild(createSVG(16, data.item[outputUpgrade[i][j].into][6]));
	}
	upgradeNode.appendChild(thisNode);
}


/*	TOOLTIP FUNCTION
	If functionality is to be added, better tooltip might be needed
	Beware not simulating the game by adding too much of it.
*/

var tooltipStatus = 0;
document.getElementById('body').onmouseover = function(e){
	var node = e.target;
	while(!node.getAttribute('tooltip') && node.id != 'body') {
		node = node.parentNode;
	}
	var tooltipNode = document.getElementById('tooltip');
	if(node.id != 'body' && node.getAttribute('tooltip') && node.getAttribute('tooltip') != tooltipStatus) {
		if(tooltipNode) tooltipNode.parentNode.removeChild(tooltipNode);
		tooltipStatus = node.getAttribute('tooltip');
		while(node.nodeName.toUpperCase() != 'LI') {
			node = node.parentNode;
		}
		node.parentNode.insertBefore(
			create('li', {id: 'tooltip', className: document.getElementById(tooltipStatus).className, innerHTML: document.getElementById(tooltipStatus).innerHTML}),
			node.nextSibling
		);
	} else if(tooltipStatus && node.getAttribute('tooltip') != tooltipStatus) {
		tooltipNode.parentNode.removeChild(tooltipNode);
		tooltipStatus = 0;
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
				} else if (",style,accesskey,id,name,src,href,for,value,tooltip".indexOf("," + b.toLowerCase()) != -1) {
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

//Not really a tooltip, just replacing the ability description of units.
function getTooltip(tooltip) {
	return tooltip.replace(/\{kw\-[a-z:0-9/]+\}/gi, function (x) {
		switch(x) {
			case '{kw-endofround}':
				return '<span class="trigger" title="Does something after all characters finish attacking, in order of speed. Ignores exhaustion.">Round End</span>';
			break;
			case '{kw-followup}':
				return '<span class="trigger" title="Does something after the character\'s normal attack.">Follow Up</span>';
			break;
			case '{kw-startofbattle}':
				return '<span class="trigger" title="Does something before the battle begins.">Battle Start</span>';
			break;
			case '{kw-counter}':
				return '<span class="trigger" title="Does something when the character loses health and survives.">Counter</span>';
			break;
			case '{kw-otherunitdies}':
				return '<span class="trigger" title="Does something when an enemy character dies.">Doom</span>';
			break;
			case '{kw-death}':
				return '<span class="trigger" title="Does something after dying.">Death</span>';
			break;
			case '{kw-charge}':
				return '<span class="trigger" title="The next attack deals more Damage.">Power</span>';
			break;
			case '{kw-shield}':
				return '<span class="trigger" title="The next time this character would take damage it doesn\'t.">Shield</span>';
			break;
			case '{kw-healthisrecovered}':
				return '<span class="trigger" title="Does something when an allied character\'s health increases.">Hope</span>';
			break;
			case '{kw-poison}':
				return '<span class="trigger" title="Poisoned characters take 1 damage after their normal attack. Lasts until the end of this battle. Does not stack.">Poison</span>';
			break;
			case '{kw-weaken}':
				return '<span class="trigger" title="The next time a cursed character takes damage it\'s doubled.">Curse</span>';
			break;
			case '{kw-scheme}':
				return '<span class="trigger" title="Does something if the character does not attack.">Scheme</span>';
			break;
			case '{kw-affliction}':
				return '<span class="trigger" title="Afflicted characters cannot gain Health Armor or Power. At the end of a character\'s turn one stack of Affliction is removed.">Affliction</span>';
			break;
			default: //summon, hopefully
				x = x.split('/');
				var returnTooltip = [];
				for(var i = 0, iMax = x.length; i < iMax; i++) {
					var summonID = x[i].match(/[0-9]+/).shift();
					//var svgNode = createSVG(24, data.unit2[parseInt(summonID)][8]), node = create('div', {}, svgNode); // nifty but not equal to line height.
					var innerNode = create('span', {className: 'summon', tooltip: 'monster_'+summonID ,textContent: data.unit2[parseInt(summonID)][2]}), node = create('div', {}, innerNode);
					returnTooltip.push(node.innerHTML); 
				}
				return returnTooltip.join('/');
			break;
		}
	});
}

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
	if(filter_type == 'unit') {
		var filter_map = {
			floor: function(pointer, testValue) {return pointer < data['lvl'+(parseInt(testValue)+1)]+1;},
			keyword: function(pointer, testValue) {
				var filter_regexp = new RegExp('('+keywords[testValue].join('|').replace('{','\\{').replace('}','\\}')+')','i');
				return filter_regexp.test(data.unit[pointer][7]);
			},
			race: function(pointer, testValue) {return data.unit[pointer][0] == testValue;},
			job: function(pointer, testValue) {return data.unit[pointer][1] == testValue;}
		};
		for(var i = 1, iMax = data.unit.length; i < iMax; i++) {
			var include = true;
			//first, perhaps do the current node
			if(inputNode.checked == false) {
				var filterTest = filter_key.split('_');
				include = filter_map[filterTest[1]](i, filterTest[2]);
			}
			for(var j = 0, jMax = allNode.length; j < jMax; j++) {
				if(allNode[j].id != filter_key) {
					var filterTest = allNode[j].id.split('_');
					include = include && filter_map[filterTest[1]](i, filterTest[2]);
					if(!include) {
						break;
					}
				}
			}
			if(!include) {
				document.getElementById('unit_'+(i)).setAttribute('hidden', true);
			} else {
				document.getElementById('unit_'+(i)).removeAttribute('hidden');
			}
		}
	} else {
		var filter_map = {
			tag: function(pointer, testValue) {return data.item[pointer][1] == testValue;}
		};
		for(var i = 1, iMax = data.item.length; i < iMax; i++) {
			var include = true;
			//first, perhaps do the current node
			if(inputNode.checked == false) {
				var filterTest = filter_key.split('_');
				include = filter_map['tag'](i, filterTest[2]);
			}
			if(!include) {
				document.getElementById('item_'+(i)).setAttribute('hidden', true);
			} else {
				document.getElementById('item_'+(i)).removeAttribute('hidden');
			}
		}
	}
}

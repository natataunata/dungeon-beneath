[16,24].forEach(function(value) {
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('viewBox', '0 0 '+value+' '+value);
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
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
//We don't need the "Both"
data.dict.reach[3] = '';

var allA = document.getElementsByTagName('a');
for(var i = 0, iMax = allA.length; i < iMax; i++) {
	allA.item(i).onclick = function(e) {
		var showNode = this.getAttribute('href');
		for(var i = 0, iMax = allA.length; i < iMax; i++) {
			if(allA.item(i) != this) {
				document.getElementById(allA.item(i).getAttribute('href').replace('#','')).style.display = 'none';
			} else {
				document.getElementById(allA.item(i).getAttribute('href').replace('#','')).style.display = 'block';
			}
		}
		e.preventDefault();
		console.log(this.getAttribute('href'));
	};
	console.log(allA.item(i));
}
console.log(allA);

//HERO
//["race","name","title","tooltip","attack","health","speed","sprite"]
//coeur ❤ ♥
//atk ⚔
//bottes ⪼
var heroNode = create('ul', {id: 'ul_hero'});
for(var i = 1, iMax = data.hero.length; i < iMax; i++) {
	heroNode.appendChild(
		create('li', {className: 'hero'},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.hero[i][7])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.hero[i][4]}),
				create('span', {className: 'hp', textContent: data.hero[i][5]}),
				create('span', {className: 'spd', textContent: data.hero[i][6]})
			),
			
			create('span', {className: 'name'},
				create('span', {className:'n_name',textContent: data.hero[i][1]},
					create('span', {className:'n_title',textContent: data.hero[i][2]}),
				),
				create('span', {className:'n_tag',textContent: data.dict.tag[data.hero[i][0]] + ' Hero'}),
				create('span', {className: 'n_ability', innerHTML: getTooltip(data.hero[i][3])})
			)
		)
	);
}
document.getElementById('body').appendChild(heroNode);
//ITEM
//["name","tag",["attack","health","speed"],"tooltip","price","upgrade","sprite"]
var itemNode = create('ul', {id: 'ul_item'});
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
		create('li', {className: 'item', id: 'i_'+i},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.item[i][6])),
			create('span', {className: 'name'},
				create('span', {className:'n_name',textContent: data.item[i][0]}),
				create('span', {className:'n_tag',textContent: data.dict.tag[data.item[i][1]]}),
				create('span', {className:'n_cost',textContent: data.item[i][4] == -1?'':data.item[i][4]}),
				create('span', {className: 'n_ability', innerHTML: elaborateTooltip.join('') + getTooltip(data.item[i][3])}),
			),
			create('span', {className: 'sprite_bg s16 upgrade', tooltip: data.item[i][5]?'i_'+data.item[i][5]:''}, data.item[i][5]?createSVG(16, data.item[data.item[i][5]][6]):create())
		)
	);
}
document.getElementById('body').appendChild(itemNode);
//Artifact
//["name","tooltip","sprite"]
var artifactNode = create('ul', {id: 'ul_artifact'});
for(var i = 1, iMax = data.artifact.length; i < iMax; i++) {
	artifactNode.appendChild(
		create('li', {className: 'artifact'},
			create('span', {className: 'sprite_bg s16'}, createSVG(16, data.artifact[i][2])),
			create('span', {className: 'name'},
				create('span', {className:'n_name',textContent: data.artifact[i][0]}),
				create('span', {className: 'n_ability', innerHTML: getTooltip(data.artifact[i][1])}),
			)
		)
	);
}
document.getElementById('body').appendChild(artifactNode);
//Units
//["race","class","name","attack","health","speed","reach","tooltip","unlock","sprite"]
var unitNode = create('ul', {id: 'ul_unit'});
for(var i = 1, iMax = data.unit.length; i < iMax; i++) {
	unitNode.appendChild(
		create('li', {className: 'unit'},
			create('span', {className: 'sprite_bg s24'}, createSVG(24, data.unit[i][9])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.dict.reach[data.unit[i][6]] == '-'?'-':data.unit[i][3]}),
				create('span', {className: 'hp', textContent: data.unit[i][4]}),
				create('span', {className: 'spd', textContent: data.unit[i][5]})
			),
			create('span', {className: 'name'},
				create('span', {className:'n_name',textContent: data.unit[i][2]}),
				create('span', {className:'n_tag',textContent: data.dict.tag[data.unit[i][0]] + ' '+data.dict.tag[data.unit[i][1]]}),
				create('span', {className:'n_tag',textContent: data.dict.reach[data.unit[i][6]]}),
				create('span', {className: 'n_ability', innerHTML: getTooltip(data.unit[i][7])})
			)
		)
	);
}
document.getElementById('body').appendChild(unitNode);
//Creatures
//["race","class","name","attack","health","speed","reach","tooltip","sprite","is_24"]
var unitNode2 = create('ul', {id: 'ul_unit2'});
for(var i = 1, iMax = data.unit2.length; i < iMax; i++) {
	unitNode2.appendChild(
		create('li', {className: 'unit', id: 'u_'+i},
			create('span', {className: 'sprite_bg s'+(data.unit2[i][9]?24:16)}, createSVG(data.unit2[i][9]?24:16, data.unit2[i][8])),
			create('span', {className: 'stats'},
				create('span', {className: 'atk', textContent: data.dict.reach[data.unit2[i][6]] == '-'?'-':data.unit2[i][3]}),
				create('span', {className: 'hp', textContent: data.unit2[i][4]}),
				create('span', {className: 'spd', textContent: data.unit2[i][5]})
			),
			create('span', {className: 'name'},
				create('span', {className:'n_name',textContent: data.unit2[i][2]}),
				create('span', {className:'n_tag',textContent: data.dict.tag[data.unit2[i][0]] + ' '+data.dict.tag[data.unit2[i][1]]}),
				create('span', {className:'n_tag',textContent: data.dict.reach[data.unit2[i][6]]}),
				create('span', {className: 'n_ability', innerHTML: getTooltip(data.unit2[i][7])})
			)
		)
	);
}
document.getElementById('body').appendChild(unitNode2);
/*


*/

//TOOLTIP FUNCTION
var tooltipStatus = 0;
document.getElementById('body').onmouseover = function(e){
	var node = e.target;
	while(!node.getAttribute('tooltip') && node.id != 'body') {
		node = node.parentNode;
	}
	if(node.id != 'body' && node.getAttribute('tooltip') && node.getAttribute('tooltip') != tooltipStatus) {
		console.log('add tooltip ' + node.getAttribute('tooltip') + ' (!= '+tooltipStatus+')');
		var tooltipNode = document.getElementById('tooltip');
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
		console.log('remove tooltip');
		var tooltipNode = document.getElementById('tooltip');
		tooltipNode.parentNode.removeChild(tooltipNode);
		tooltipStatus = 0;
	}
};

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
	svg2.setAttribute('width', size);
	svg2.setAttribute('height', size);
	var useNode = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	useNode.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#i'+size+'_'+id);
	svg2.appendChild(useNode);
	return svg2;
}
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
					//var svgNode = createSVG(24, data.unit2[parseInt(summonID)][8]), node = create('div', {}, svgNode);
					var innerNode = create('span', {className: 'summon', tooltip: 'u_'+summonID ,textContent: data.unit2[parseInt(summonID)][2]}), node = create('div', {}, innerNode);
					returnTooltip.push(node.innerHTML); 
				}
				return returnTooltip.join('/');
			break;
		}
	});
}

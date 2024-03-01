var css = `

/*
BEM: Block (Layout), Element, Modifier
SASS: Reset, Typography, Component (Buttons...), Layout, ~Pages
Try to avoid nested selectors, except for state-modifier
*/

/* ### Vars, root, some resets */
/* colors: material.io scheme:
	primary/secondary, surface/background (neutral), error
	+ corresponding font color
	=> bgcolor/color _ neutral/primary/secondary/error _ lightness (10 is always white, 0 black)
*/
/* Background and Surface must have bg-color against which color is legible */

:root {
--color_neutral_0: black;
--color_neutral_1: #080809;
--color_neutral_2: #241800;

--color_neutral_5: #cc9948;
--color_neutral_6: #bfab93;

--color_neutral_7: #C0AD94;
--color_neutral_8: #DBCAAB;
--color_neutral_10: white;

--color_path_1: #b5bf93;
--color_path_2: #93bfb3;
--color_path_3: #bf9398;
--color_path_4: #9b93bf;

--color_filter_blue: darkblue;
--color_filter_red: darkred;
--color_filter_green: darkgreen;
--color_filter_bgblue: lightblue;
--color_filter_bgred: salmon;
--color_filter_bggreen: lightgreen;
--color_filter_neutral: black;
--color_filter_bgneutral: lightgrey;

--color_info: purple;
--color_link: darkblue;
--color_andromalius: purple;
}

@media (prefers-color-scheme: dark) {
	:root {
	--color_neutral_0: white;
	--color_neutral_1: #DBCAAB;
	--color_neutral_2: #C0AD94;
	
	--color_neutral_7: #241800;
	--color_neutral_8: #080809;
	--color_neutral_10: black;
	
	--color_path_1: #172300;
	--color_path_2: #001a23;
	--color_path_3: #230007;
	--color_path_4: #0e0023;
	
	--color_filter_blue: lightblue;
	--color_filter_red: salmon;
	--color_filter_green: lightgreen;
	--color_filter_bgblue: darkblue;
	--color_filter_bgred: darkred;
	--color_filter_bggreen: darkgreen;
	--color_filter_neutral: lightgrey;
	--color_filter_bgneutral: black;
	
	--color_info: salmon;
	--color_link: lightblue;
	--color_andromalius: purple;
	}
}

html {
	color: var(--color_neutral_0);
	background-color: var(--color_neutral_7);
	font-family: Courier New;
	overflow-y: scroll;
}

.name, .tag, .reach, .stats, .trigger, .lnk {
	font-weight: bold;
}

html, body, .wrapper {
height: 100%;
min-height: 100%;
padding: 0;
margin: 0;
text-align: center;
}

select {
	text-align: center;
	color: var(--color_neutral_0);
	background: var(--color_neutral_8);
	margin: 0.5em;
	padding: 0.5em;
	border-radius: 0.5em;
	outline: 0;
	border: 0;
	cursor: pointer;
}
.difficulty {
	background: darkred;
	color: gold;
	font-weight: bold;
	border: 1px var(--color_neutral_2) solid;
}
#ul_path select {
	font-size: 1em;
}
#ul_Store select {
	font-size: 0.85em;
}
/* ### LAYOUT
*/

.book {
	background: var(--color_neutral_7);
	outline: var(--color_neutral_0) 0.1em solid;
	border: var(--color_neutral_5) 1em solid;
	border-top-width: 0;
	padding-top: 0.2em;
	max-width: 90em;
	margin: auto;
	
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas:
		'pageright'
		'pageleft'
	;
	grid-gap : 0.2em;
}
.pageleft, .pageright {
	box-sizing: border-box;
	background: var(--color_neutral_7);
	outline: var(--color_neutral_7) 0.2em solid;
	border: var(--color_neutral_8) 0.2em solid;
	border-top-width: 0;
	padding-bottom: 0.2em;
}

.pageleft {
	border-right-width: 0;
	grid-area: pageleft;
}
.pageright {
	border-left-width: 0;
	grid-area: pageright;
}

.pageleft .page, .pageright .page {
	background: var(--color_neutral_8);
	border: var(--color_neutral_7)solid 0.2em;
	border-width: 0 0.2em;
	height: 100%;
	box-sizing: border-box;
}
.pageleft .page {
	border-radius: 0 1em 0 0;
}
.pageright .page {
	border-radius: 1em 0 0 0;
}

.pageleft li {
	width: 8em;
	display: inline-block;
	vertical-align: top;
}
[tooltip] {
	cursor: pointer !important;
}
.switch_itemview {
	cursor: pointer !important;
	margin: 0 2em;
}
#ul_path li {
	width: 100%;
}
.pageleft .sprite_bg {
	display: block;
	margin: auto;
}
.pageleft .name {
	display: inline-block;
	padding: 0 0.5em;
	height: 2em;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 0.8em;
	line-height: 1em;
}

.colorscheme {
	cursor: pointer;
}

hgroup, .difficulty, .colorscheme, .lang {
	display: inline-block;
}
h1, h2 {
	margin: 1rem;
	padding: 0;
}

.floor {
	min-height: 3rem;
	line-height: 3rem;
	background: var(--color_neutral_8);
	margin-bottom: 0.5em;
	padding: 0.5em;
	box-sizing: border-box;
	position: relative;
}
.floor div {display: inline-block; margin: 0 1em;}
.floor .number {
	position: absolute;
	left: 0.5em;
	font-weight: bold;
}

.floor1.even {background: var(--color_path_1);}
.floor2.even {background: var(--color_path_2);}
.floor3.even {background: var(--color_path_3);}
.floor4.even {background: var(--color_path_4);}

.sheet {
	background-color: var(--color_neutral_8);
	box-sizing: border-box;
	display: inline-grid;
	border-top: 1px dashed var(--color_neutral_0);
	grid-template-columns: auto 1fr;
	grid-template-areas:
		'sprite stats'
		'name name'
		'tag title'
		'desc desc'
	;
	grid-gap : 0.5em;
	padding: 0.5em;
}

.party{
	box-sizing: border-box;
	display: inline-grid;
	grid-template-columns:  auto;
	grid-template-areas:
		'party_relic'
		'party_hero'
		'party_unit'
		'party_unit2'
		'party_slug'
	;
	grid-gap : 0.5em;
	padding: 0.5em;
	margin: 0 1em 1em 0;
}

#ul_VoidRoom p {
	background-color: var(--color_neutral_8);
	box-sizing: border-box;
	border: 1px dashed var(--color_neutral_0);
	padding: 0.5em;
	margin: 0.5em;
	width: auto;
	display: inline-block;
}
#ul_VoidRoom .sprite_bg {
	display: inline-block;
}

.sprite_bg {
	grid-area: sprite;
	width: 4rem;
	height: 4rem;
	line-height: 4rem;
	background: radial-gradient(farthest-side at center, var(--color_neutral_10), var(--color_neutral_8));
}
.upgrade {
	background: radial-gradient(farthest-side at center, var(--color_andromalius), var(--color_neutral_8));
}

.name {grid-area: name; line-height: 1rem;}
.cost, .title {grid-area: title; font-style: italic; font-size: 0.75rem; line-height: 1.125rem;}
.tag, .reach {grid-area: tag; text-transform: uppercase; font-size: 0.75rem; line-height: 1.125rem;}
.reach {grid-area: title;}
.upgrade, .stats {grid-area: stats;}
.stats {width: 4rem;}
#ul_Campfire .stats {width: 6rem;}
.stats > span {display: inline-block; width: 100%;}
.desc {grid-area: desc; font-weight: normal;}


.pageright #description {
	width: 100%;
}

@media only screen and (min-width: 40rem) {
	.book {
		grid-template-columns: auto auto;
		grid-template-areas: 'pageleft pageright';
		grid-gap : 0.2em;
	}
	.pageright {
		min-width: 32rem;
	}
	.sheet {
		grid-template-columns: 4rem 4rem 6rem auto 4rem;
		grid-template-areas:
			'sprite stats tag name title'
			'sprite stats desc desc desc'
			'sprite stats desc desc desc'
		;
	}
	.sheet.hero {
		grid-template-columns: 4rem 4rem 6rem auto 4rem;
		grid-template-areas:
			'sprite stats name name'
			'sprite stats tag title'
			'desc desc desc desc'
		;
	}
	.sheet.item {
		grid-template-columns: 4rem 6rem auto 4rem 4rem;
		grid-template-areas:
			'sprite tag name title stats'
			'sprite desc desc desc stats'
			'sprite desc desc desc stats'
		;
	}
	.pageright .menu {
		position: sticky;
		top: 0em;
	}
	.pageright .party {
		position: sticky;
		top: 3.7rem;
	}
	.pageright #description {
		position: sticky;
		top: 23.5rem;
	}
}

@media only screen and (min-width: 50rem) {
	.book {
		grid-template-columns: 1fr 1fr;
	}
	.pageright {
		width: auto;
	}
	.party{
		grid-template-columns:  repeat(2, minmax(0, 1fr));
		grid-template-areas:
			'party_hero party_relic'
			'party_unit party_unit2'
			'party_slug party_slug'
		;
	}
}

.atk::before, .hp::before, .spd::before {
	text-shadow: 1px 1px var(--color_neutral_0);
	line-height: 1rem;
}
.atk::before {content: "⚔ "; color: grey;}
.hp::before {content: "❤ "; font-size: 0.75em;  color: red;}
.spd::before {content: "⪼ "; font-size: 0.65em; color: yellow;}
.cost::after {content:"●"; color: gold; font-size: 1.5em;}

.trigger {color: var(--color_info); cursor: help; font-style: italic;}
.lnk {color: var(--color_link); cursor: help; font-style: italic;}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}


svg {
	width: 3rem;
	height: 3rem;
	vertical-align: middle;
}
.s16 svg, #path_1 svg {
	width: 2rem;
	height: 2rem;
}

.toggler:not(:checked) + *, .toggler, [hidden] {
	display: none !important;
}

.filter {
	text-transform: uppercase;
	font-size: 0.75em;
	background: var(--color_neutral_7);
}

.tiny {
	font-variant: italics;
	font-size: 0.8em;
}

input {
	display: none;
}
input + div {
	display: none;
}
input:checked + div {
	display: block;
}


.footer {
	margin: 2em auto;
	padding: 1em;
	font-size: 0.9em;
	max-width: 40em;
	border-radius: 1em;
	border: 1px solid var(--color_neutral_0);
	background-color: var(--color_neutral_8);
}
.footer a {
	text-decoration: none;
}

#ul_path span[tooltip^='monster_'] {
	margin-left: 0.5em;
	cursor: pointer;
}

span.hard {
	display: none;
}
.hard .hard {
	display: inline-block;
}

.menuItem {
	box-sizing: border-box;
	padding-bottom: 0.5em;
	width: 5rem;
	display: inline-block;
	color: var(--color_link);
	cursor: pointer !important;
}

.menuItem > span {
	display: block;
}

.menuItem.toggled {
	border-bottom: 0.2em dashed var(--color_neutral_0);
}
.menuItem:not(.toggled):hover {
	border-bottom: 0.2em dashed var(--color_neutral_7);
}

.party_hero {grid-area: party_hero;}
.party_unit {grid-area: party_unit; direction: rtl;}
.party_unit + .party_unit {grid-area: party_unit2; direction: ltr;}
.party_relic {grid-area: party_relic;}
#party_slug {grid-area: party_slug; word-break: break-all;}

.placeholder-unit, .placeholder-item, .placeholder-potion {
	display: inline-block;
	vertical-align: bottom;
	width: 2.2em;
	height: 2.2em;
	padding: 0.1em;
	display: inline-block;
	vertical-align: bottom;
	border: 1px dotted var(--color_neutral_0);
	background: var(--color_neutral_7);
	border-radius: 0.2em;
}

.placeholder-unit {
	width: 3.2em;
	height: 3.2em;
}

.party .sprite_bg {
	display: inline-block;
	width: 100%;
	height: 100%;
	background: radial-gradient(farthest-side at center, var(--color_neutral_10), rgba(0, 0, 0, 0));
	line-height: 1em;
	vertical-align: bottom;
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}


*[langt]:not([langt=""]) {
	cursor: help;
}


.blink_hero #party_unit_0, .blink_unit [id^="party_u"]:not(#party_unit_0), .blink_item [id^="party_i"], .blink_relic .party_relic .placeholder-item, .blink_monster [id^="party_u"]:not(#party_unit_0), .blink_potion [id^="party_p"] {
  -webkit-animation: blinkanim 1s infinite;
  -moz-animation: blinkanim 1s infinite;
  -o-animation: blinkanim 1s infinite;
  animation: blinkanim 1s infinite;
}

@-webkit-keyframes blinkanim {
  0%, 49% {
    border: 1px solid var(--color_neutral_0);
	/*opacity: 0.5;*/
  }
  50%, 100% {
	  border: 1px solid var(--color_filter_green);
	/*opacity: 1;*/
  }
}

.tooltip {
	display: inline-block;
	position: absolute;
	text-align: center;
}

`;

var styleSheet = document.createElement("style")
styleSheet.innerHTML = css;
document.head.appendChild(styleSheet);

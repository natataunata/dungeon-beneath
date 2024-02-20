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
	font-family: Courier;
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
}

/* ### LAYOUT
*/

hgroup, .difficulty {
	display: inline-block;
	box-sizing: border-box;
	text-align: center;
}
.difficulty {
	margin-left: 1rem;
}
.difficulty .colorscheme, .difficulty .lang {
	margin: 0.5em;
}
.colorscheme {
	cursor: pointer;
}

h1, h2 {
	margin: 1rem;
	padding: 0;
}

.menu {
	display: inline-block;
	padding: 1rem;
	border-bottom: 0.2rem dotted var(--color_neutral_1);
	margin-bottom: 0.5em;
}

.menuItem {
	width: 6rem;
	display: inline-block;
	color: var(--color_link);
	cursor: pointer;
}

.floor {
	width: 42em;
	margin: auto;
	min-height: 3rem;
	line-height: 3rem;
	border: 1px solid var(--color_neutral_2);
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
	width: 100%;
	background-color: var(--color_neutral_8);
	box-sizing: border-box;
	display: inline-grid;
	border: 1px solid var(--color_neutral_0);
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
	width: 100%;
	box-sizing: border-box;
	display: inline-grid;
	grid-template-columns:  repeat(2, minmax(0, 1fr));
	grid-template-areas:
		'party_relic party_hero'
		'party_unit party_unit2'
		'party_slug'
	;
	grid-gap : 0.5em;
	padding: 0.5em;
	background-color: var(--color_neutral_8);
	border: 1px solid var(--color_neutral_0);
	margin: 0 1em 1em 0;
}

#ul_VoidRoom p {
	background-color: var(--color_neutral_8);
	box-sizing: border-box;
	border: 1px solid var(--color_neutral_0);
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

#tooltip {
	background-color: var(--color_path_3);
	position: fixed;
}
#tooltip .sprite_bg {
	background: radial-gradient(farthest-side at center, var(--color_neutral_10), var(--color_path_3));
}
#tooltip .upgrade {
	background: radial-gradient(farthest-side at center, var(--color_neutral_10), var(--color_path_3));
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


@media only screen and (min-width: 20rem) {
	.sheet {
		grid-template-columns: auto auto 1fr 1fr;
		grid-template-areas:
			'sprite stats name name'
			'sprite stats tag title'
			'desc desc desc desc'
		;
	}
	.sheet.item {
		grid-template-columns: auto auto 1fr auto auto;
		grid-template-areas:
			'sprite tag name title stats'
			'sprite desc desc desc stats'
			'sprite desc desc desc stats'
		;
	}
	.party {
		grid-template-columns:  repeat(2, minmax(0, 1fr));
		grid-template-areas:
			'party_relic party_hero'
			'party_unit party_unit2'
			'party_slug party_slug'
		;
	}
}

@media only screen and (min-width: 42rem) {
	.sheet {
		width: 40rem;
		margin: 0 1rem 1rem 0;
		grid-template-columns: auto auto auto 1fr auto auto;
		grid-template-areas:
			'sprite stats tag name title'
			'sprite stats desc desc desc'
			'sprite stats desc desc desc'
		;
	}
	.party {
		width: 40rem;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-areas:
			'party_relic party_unit party_unit2'
			'party_relic party_unit party_unit2'
			'party_hero party_unit party_unit2'
			'party_slug party_slug party_slug'
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

.menuItem > span {
	display: block;
}


#tooltip {
	border-color: red;
}
/*#tooltip .sprite_bg {
	background: radial-gradient(farthest-side at center,white, lightcyan);
}
#tooltip .sprite_bg.upgrade {
	background: radial-gradient(farthest-side at center,purple, lightcyan);
}*/

.toggler:not(:checked) + *, .toggler, [hidden] {
	display: none;
}
.filter input {
	display: none;
}

.filter {
	text-transform: uppercase;
	font-size: 0.75em;
}
.filter label {
	display: inline-block;
	margin: 0.5em;
	padding: 0.5em;
	border: 1px solid var(--color_neutral_2);
	background: var(--color_neutral_8);
	border-radius: 0.5em;
	cursor: pointer;
	opacity: 0.5;
}
.filter_keyword + label {
	color: var(--color_filter_green);
}
.filter_race + label {
	color: var(--color_filter_blue);
}
.filter_job + label {
	color: var(--color_filter_red);
}

.filter_keyword:checked + label {
	opacity: 1;
	background: var(--color_filter_bggreen);
	color: var(--color_filter_neutral);
}
.filter_race:checked + label {
	opacity: 1;
	background: var(--color_filter_bgblue);
	color: var(--color_filter_neutral);
}
.filter_job:checked + label {
	opacity: 1;
	background: var(--color_filter_bgred);
	color: var(--color_filter_neutral);
}
.filter_floor:checked + label {
	opacity: 1;
	background: var(--color_filter_bgneutral);
	color: var(--color_filter_neutral);
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

.lang, .colorscheme {
	display: inline-block;
}

.toggle span {
	background: darkred;
	color: gold;
	display: inline-block;
	font-weight: bold;
	width: 10em;
	padding: 0.5em;
	border: 1px var(--color_neutral_2) solid;
	border-radius: 0.2em;
	box-sizing: border-box;
}
.toggle label {
	display: inline-block;
	width: 0;
	height: 0;
	position: relative;
}
.toggle .next:after, .toggle .previous:before {
	font-size: 3em;
	color: darkred;
	display: inline-block;
	position: absolute;
	top: -0.65em;
	cursor: pointer;
	text-shadow: 1px 1px var(--color_neutral_2);
}

.toggle .next:after {
	content: "►";
	left: 0.1em;
}
.toggle .previous:before {
	content: "◄";
	right: 0.1em;
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
}
.menuItem.toggled {
	border-radius: 0.5em;
	border: 1px solid black;
	background: var(--color_neutral_8);
}
.menuItem:not(.toggled):hover {
	border-radius: 0.5em;
	border: 1px dashed black;
}

.party_hero {grid-area: party_hero;}
.party_unit {grid-area: party_unit; direction: rtl;}
.party_unit + .party_unit {grid-area: party_unit2; direction: ltr;}
.party_relic {grid-area: party_relic;}
#party_slug {grid-area: party_slug; word-break: break-all;}

.placeholder-unit {
	border-bottom: 1px dotted var(--color_neutral_0);
	border-left: 1px dotted var(--color_neutral_0);
	width: 3em;
	height: 3em;
	display: inline-block;
	vertical-align: bottom;
}
.placeholder-item, .placeholder-potion  {
	border-bottom: 1px dotted var(--color_neutral_0);
	border-left: 1px dotted var(--color_neutral_0);
	width: 2em;
	height: 2em;
	display: inline-block;
	vertical-align: bottom;
}

.party .sprite_bg {
	display: inline-block;
	width: 100%;
	height: 100%;
	line-height: 1em;
	vertical-align: bottom;
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}


*[langt]:not([langt=""]) {
	cursor: help;
}


.blinkbg {
  -webkit-animation: blinkanim 1s infinite;
  -moz-animation: blinkanim 1s infinite;
  -o-animation: blinkanim 1s infinite;
  animation: blinkanim 1s infinite;
}

@-webkit-keyframes blinkanim {
  0%, 49% {
    background-color: var(--color_neutral_0);
	opacity: 0.5;
	border-bottom: 1px dashed red;
	border-left: 1px dashed red;
  }
  50%, 100% {
	opacity: 1;
  }
}

`;

var styleSheet = document.createElement("style")
styleSheet.innerHTML = css;
document.head.appendChild(styleSheet);
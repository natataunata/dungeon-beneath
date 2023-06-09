var L = [
	"","人类","矮人","地精","精灵","蜥蜴人","元素","野兽","哥布林","亡灵","怪物","植物","构造体","旧神","恶魔","？？？","英雄","战士","射手","法师","追随者","-","仅前排","仅后排","攻击","生命值","速度","亡语","亡语： 死后触发。","回合结束","回合结束： 在所有角色完成攻击后触发。无视疲劳。","连击","连击： 在角色的普通攻击之后触发。","厄运","厄运： 当敌方角色死亡时触发。","希望","希望： 当盟友角色的生命值增加时触发。","诡计","诡计： 如果角色不攻击就会触发。","战斗开始","战斗开始： 在战斗开始前触发。","释放灵魂","释放灵魂 X： 花费 X 个灵魂在回合之间触发一个能力。每轮可以使用一次。 右击施法。","毒","毒药： 中毒的角色在普通攻击后受到 1 点伤害。持续到本次战斗结束。不叠加。","诅咒攻击。","诅咒攻击： 目标被诅咒。下次目标受到伤害时，它会翻倍。","护盾","护盾： 免疫下次伤害。","还击","还击： 当角色失去生命值并存活下来时触发。","痛苦","痛苦： 受影响的角色无法获得 生命值，护甲或力量。在一个角色的回合结束时，移除一层痛苦。","力量","力量： 下一次攻击造成更多伤害。","护甲","护甲： 角色在失去生命值之前先失去护甲。护甲在每一轮结束时失去。","击杀","击杀","召唤","召唤","迷失的冒险家","他是一个不幸的灵魂","","锤之托瑞克","旧土贵族"," {kw-endofround}：获得 +1 护甲。","锤之托瑞克","铁匠大师"," {kw-endofround}：给这行最前面的盟友+1 护甲。","伊洛爱","最后的天文学家"," {kw-followup}：给这行上的盟友+1 {kw-charge}。 精力充沛。","伊洛爱","奥术研究员"," {kw-endofround}：给这行上的一个盟友法师+2 {kw-charge}。","多米尼克·布特鲁","随行厨师"," {kw-followup}：为这行上一个受伤的盟友恢复 1 点生命值。 精力充沛。","格里克斯长老","孤泳者"," 当盟友死亡时，攻击。 精力充沛。","格里克斯长老","女族长"," 有毒。 精力充沛。","玛丽安娜","漫游证明"," {kw-startofbattle}：召唤 {kw-summon:147}。 精力充沛。","塔兹金","旧月"," 从精华蒸馏器开始。 精力充沛。","塔兹金","升天召唤师"," 如果这个角色杀死了一个敌人，召唤一个{kw-summon:4}。 精力充沛。","Xandos III","年轻的王子"," 从黎明王冠开始。","Xandos III","黄金国王"," 每 5 金币获得 +1 攻击力。 精力充沛。","埃尔斯贝特","活魔人"," {kw-channel} 1：对最近的敌人造成 2 点伤害。 最大灵魂 +1。 精力充沛。","神器宝箱","选择一个神器。","冠军之剑","","阿蒙之刃","{kw-counter}：获得 +1 攻击力。","尘埃","","凤凰之刃","{kw-counter}：获得 +1 攻击力。","追随者披风","","鸽子头巾","","泰坦之戒","{kw-startofbattle}：获得 +4 护甲。","托瑞克之戒","{kw-endofround}：获得 +1 护甲。","猎鹰之环","","坏死戒指","","命脉戒指","","抗毒戒指","装备的角色不能中毒。","虚空之怒戒指","当此角色杀死一名敌人时，对一名随机敌人造成 1 点伤害。","药水腰带","{kw-endofround}：恢复 1 点生命值。","窃魂者","当此角色杀死敌人时，恢复 1 点生命值。","虚空骷髅","","护手","","装甲手套","{kw-startofbattle}：获得 +2 护甲。","制革手套","","不朽头盔","{kw-otherunitdies}：获得 +1 护甲。","吸血鬼头盔","{kw-otherunitdies}：恢复 1 点生命值。","泰坦之墙","","鸢盾","","强化圆盾","","散兵之盾","","龙鳞","","木圆盾","","毒盾","{kw-startofbattle}：中毒。","安德洛玛留斯的鳞片","","太阳石","{kw-endofround}：获得 +1 {kw-charge}。","镜面吊坠","装备的角色不能被麻痹。","酷派斯的项链","{kw-startofbattle}：获得 {kw-shield}。","精华瓶","{kw-death}：召唤血妖精。","命定护符","{kw-followup}：受到 1 点伤害。","灵魂镜头","当一名盟友死亡时，对最近的敌人造成 1 点伤害。","行者之杖","","灼热之印","","神圣权杖","{kw-followup}：为一名受伤的非英雄盟友恢复 1 点生命值。","安德洛玛留斯之爪","","短弓","","伊利法尔的强弩","","暗影之弓","","流浪者斗篷","","原力斗篷","","安德洛玛留斯的强弩","","清道夫斗篷","当这个角色杀死一个敌人时，召唤一只{kw-summon:149}。","殉道者的板甲","{kw-death}：给所有盟友 +1 攻击力。","贵族板甲","{kw-death}：获得 2 金币。","锁子甲","","冠军护甲","","迈达斯腰带","{kw-startofbattle}：获得 1 金币。","不朽腰带","{kw-counter}：恢复 1 点生命值。","飞斧","{kw-counter}：对随机敌人造成 1 点伤害。","圣斧","当角色获得生命值时，也会获得 +1 {kw-charge}。","狂战士之斧","如果低于最大生命值，则获得 +1 攻击力。","孵化中的蛋","第一轮后，召唤一只蜥蜴人{kw-summon:167}。","毒蛋","第一轮后，召唤一个毒鳞蜥蜴人。","闪电牙","{kw-endofround}：获得 +1 {kw-charge}。","毒牙","对攻击的敌人施加毒素。","血红魔杖","第一轮后，召唤一只血妖精。","坏死魔杖","{kw-endofround}：对生命值最低的敌人造成 1 点伤害。","绿鳞魔杖","{kw-endofround}：随机召唤一个盟友 +1 护甲值。","毒液帽","{kw-followup}：对所有中毒的敌人造成 1 点伤害。","幸运币","","不朽之帽","{kw-followup}：恢复 1 点生命值。","死亡帽","当一个中毒角色死亡时，恢复 1 点生命值。","星石","","骷髅护符","在角色释放灵魂之后，获得+1护甲。","裂魂","{kw-startofbattle}：获得 1 个灵魂。 最大灵魂 +1。","旧钥匙","","走私者的钥匙","","金钥匙","","传送门钥匙","","黑曜石戒指","一枚古老的转化戒指。","祖母绿戒指","{kw-followup}：对所有中毒的敌人造成 1 点伤害。","黄玉戒指","{kw-endofround}：获得 +1 {kw-charge}。","钻戒","","红宝石戒指","{kw-followup}：为一名受伤的非英雄盟友恢复 1 点生命值。","紫水晶戒指","第一轮后，召唤一只血妖精。","黑曜石宝石","","蓝宝石","","虚弱之戒","{kw-startofbattle}：获得 3 金币。","死亡之戒","{kw-startofbattle}：受到 1 点伤害并获得 3 金币。","岁月指环","{kw-startofbattle}：获得 3 金币。","瘟疫之戒","{kw-startofbattle}：中毒并获得 3 金币。","转化药水","将一名弓箭手转变为一名随机的 3 级角色。角色失去所有装备。消耗品。","镜像药水","将战士变成队伍里随机角色的副本。角色失去所有装备。消耗品。","迈达斯药水","将法师变成{kw-summon:143}，可以在营火上以 10 金币的价格出售。角色失去所有装备。消耗品。","强效神秘药水","转化为随机物品。消耗品。","次级神秘药水","转化为随机物品。消耗品。","多功能药水","将战士变为多职业，让他们能装备任何职业的装备。消耗品。","强效全能药水","将法师转变为多职业，让他们可以装备任何职业的装备。消耗品。","一袋金子","获得 3 金币。","经验药水","获得 +1 XP。消耗品。","经验药水","获得 +1 XP。 在这场战斗中阵亡的角色无法获得 XP。消耗品。","高级经验药水","获得 +2 XP。 在这场战斗中阵亡的角色无法获得 XP。消耗品。","精通药水","获得 +3 XP。消耗品。","次级治疗药水","恢复 1 点生命值。消耗品。","治疗药水","恢复 2 点生命值。消耗品。","强效治疗药水","恢复 8 点生命值。消耗品。","巨化药水","将角色变成巨大史莱姆。角色失去所有装备。消耗品。","忠诚药水","将追随者转变为忠诚的追随者。角色失去所有装备。消耗品。","莱拉的箭袋","盟军弓箭手获得 +1 攻击力。","陶利安圣典","野兽盟友和蜥蜴人获得 +1 生命值。","埃德里克的日记","盟军战士获得 +1 攻击力和 -1 生命值。","星之书","{kw-endofround}：给生命值最低的盟友法师 +1 {kw-charge}。","旧土之锤","矮人和侏儒盟友获得 +2 生命值。","仲裁者的斗篷","精灵和元素盟友获得 +3 速度。","史密斯的锤子","当盟友获得护甲时，他们获得额外的 +1 护甲。","仲裁者之刃","{kw-startofbattle}：给你的英雄+3 {kw-charge} 和 {kw-shield}。","秩序之书","人类和矮人盟友获得 +1 生命值。","索瑞克之锤","盟友在每轮结束时最多保留 1 层护甲。","酷派斯的祝福","盟友第一次受到伤害，给他 {kw-shield}。","商人的秘密","物品少花费 1 金币。","艾瑞拉利之石","召唤的盟友获得 +1 攻击力。","西里尔之杖","召唤的盟友不会精疲力尽。","永不熄灭的火炬","{kw-startofbattle}：召唤一个不灭的火焰。","精神枷锁","盟友第一次死亡时，召唤一个隐形的{kw-summon:152}。","精华蒸馏器","第一轮后，召唤一个敌方{kw-summon:160}。","精华收集器","当一名非召唤的盟友死亡时，召唤两只血妖精。","纯净毒素","敌人受到毒药伤害 +1。","维尼娜的咒语","{kw-startofbattle}：使两个随机敌人中毒。","假币","篝火旁的角色减少 2 金币。","皇家徽章","你在每个营火和商店的第一次刷新是免费的。 {kw-startofbattle}：你的英雄攻击。","巨魔之血","当您的英雄杀死敌人时,他们会恢复 2 点生命值。","力量之书","{kw-endofround}：给一个随机的人类盟友 +1 {kw-charge}。","阿姆古安之杖","如果一个盟友不攻击，给他+1 {kw-charge}。","虚灵精华","当一个盟友失去护盾时，给他+1攻击力。","泰坦尼克之锤","{kw-startofbattle}：给所有盟友 2 点护甲值。","神圣蒸馏器","第一轮后，召唤一个光妖精。","杰克的小提琴","当您到达营火或篝火时，获得 3 金币。","快拔箭袋","{kw-startofbattle}：盟军弓箭手攻击两次。","古怪的巫术","当一个盟友被召唤时,给他们+2 {kw-charge}。","火焰法杖","{kw-startofbattle}：对一个随机敌人造成 5 点伤害。","天空之杖","{kw-startofbattle}：造成 4 点伤害，随机分配给所有敌人。","虚空法杖","{kw-endofround}：对随机敌人造成 1 点伤害。","元素精华","元素盟友的生命值 +2。","熔火之锤","{kw-endofround}：给一个随机的友军战士+1 护甲。","巴廷的书","{kw-startofbattle}：获得 1 金币。你的英雄减少 2 点生命值。","失落之刃","你的英雄有 +1 攻击力和 +2 速度。","埃德里克的靴子","你的英雄再攻击一次。","精华之刃","您的英雄具有“{kw-otherunitdies}：获得 +1 {kw-charge}”。","急速之书","盟军法师不会精疲力尽。","怪酿","{kw-startofbattle}：给予一个盟友蜥蜴人，侏儒和元素 +1 攻击力。","联盟信物","{kw-startofbattle}：将 {kw-shield} 给予一个盟友人类，矮人和精灵。","毒素蒸馏器","当一个中毒的角色死亡时，为一个非英雄的受伤盟友恢复 1 点生命值。","血咒","第一轮后，召唤一个敌方{kw-summon:170}。","召唤铃","{kw-startofbattle}：召唤两把幽灵之锤。","灵魂容器","最大灵魂 +6。","阿瓜蒂利斯","当一个盟友死亡时，获得+2/盟友死亡时，获得+3/盟友死亡时，获得+4 {kw-charge}。 精力充沛。","装甲骑士"," 拥有等于其护甲值的额外攻击力。","盔甲匠","{kw-endofround}：给该行上的另一个盟友+2/3/4 护甲。","狂战士","{kw-counter}：获得 +1/2/3 {kw-charge}。","酒仙","{kw-counter}：为受伤的非英雄盟友恢复 1 点生命值。","屠夫","当这个角色杀死一个敌人时，为一个非英雄的受伤盟友恢复 1 点生命值/受损的盟友恢复 1 点生命值，两次/受损的盟友恢复 1 点生命值，三次。","通灵者","{kw-followup}：触发所有盟友末日效果。","黑暗牧师","当这个角色杀死一个敌人时，获得{kw-shield}。","圣锤牧师","{kw-endofround}：召唤 {kw-summon:171/一个 {kw-summon:172/一个 {kw-summon:173}。","修道士","{kw-followup}：为一名受伤的非英雄盟友恢复 1/名受伤的非英雄盟友恢复 1/个受伤的非英雄盟友恢复 2 点生命值。","玫瑰牧师","{kw-healthisrecovered}：对该行最近的敌人造成 1/1/2 点伤害。","邪教徒","{kw-otherunitdies}：恢复 1/2/3 点生命值。","神枪手","每个其他不死族盟友 +1 伤害。","神圣保护者","当一个盟友被召唤时，给他们 {kw-shield}。","德鲁伊","第一轮后，召唤两次{kw-summon:148/149/150}。","机工魔术士"," {kw-endofround}：给所有盟友法师+1 {kw-charge}。","堕落专家","{kw-channel} X：对该行最近的敌人造成 X 点/2X /4X 伤害。 最大灵魂 +3。","妖精使者","有毒。 召唤的盟友 +1/2/3 攻击力。","火焰使者"," 同时对一列的敌人造成伤害。","肠卜师","{kw-otherunitdies}：对一个随机敌人造成 1/2/4 点伤害。","猎人","{kw-followup}：对生命值最低的敌人造成 1 点伤害/两次/ 3 次。","地下生","{kw-scheme}：为每个蜥蜴人盟友恢复 1 点生命值。","标枪手","获得护甲后攻击。","闪电使者","当此角色获得 {kw-charge} 时，对随机敌人造成 1/2/3 点伤害。","太阳法师"," 获得双倍的{kw-charge}。","死灵法师","{kw-channel} 2：召唤一个{kw-summon:5}。 最大灵魂+2。","暗夜猎手","{kw-otherunitdies}：获得 +1/2/3 {kw-charge}。 精力充沛。","先行者","当这个角色杀死一个敌人时，给所有蜥蜴人盟友+1 {kw-charge}。","争斗者"," 如果这个角色杀死了一个敌人，他会再次攻击。","罗格"," 有毒。 精力充沛。","皇家卫队","当此角色获得生命值时，您的英雄获得 +1/此角色获得生命值时，您的英雄获得 +1/这个角色获得生命值时，你的英雄获得+2 {kw-charge}。","符文铁匠","当另一个矮人受到伤害时，获得 +1 {kw-charge}。 {kw-endofround}：每个其他矮人获得 +1 护甲。","血统主义者","{kw-endofround}：在该行召唤一个敌人{kw-summon:170}。 精力充沛。","神射手","当敌人获得 {kw-poison}时，对其造成 1/他们造成 2/他们造成 3 点伤害。","饮魂者","{kw-endofround}：如果你有 2 个或更多灵魂，恢复 1 点/2 点/3 生命值。 最大灵魂 +2。","乡绅","{kw-endofround}：给该行上的另一个盟友+1/2/3 {kw-charge}。","钢铁召唤师","第一轮后，召唤一个{kw-summon:156/，召唤一个{kw-summon:155/,召唤一个{kw-summon:157}。","剑舞者","在最大生命值时 +1/具有 +2/具有 +3 攻击力。 精力充沛。","皮匠","如果此角色杀死敌人，获得 1 金币。","金牛卫士","{kw-channel} 1：给所有其他不死族盟友 +1/生物盟友 +2/生物盟友 +3 护甲。 最大灵魂 +1。","修补匠","{kw-endofround}：如果这个角色有 {kw-charge}，召唤一个 {kw-summon:163/164/165}。","毒饮者","当一个中毒角色死亡时，恢复 1/2/3 点生命值。 有毒。","剧毒术士","{kw-followup}：对所有中毒的敌人造成 1/2/3 点伤害。 有毒。","怒气导管"," {kw-counter}：攻击。 精力充沛。","阿姆古安","{kw-scheme}：给所有蜥蜴人盟友+1/ +2 {kw-charge}。","奥术射手","{kw-endofround}：使该列中的所有盟友法师 +2/3 {kw-charge}。","刺客","敌人受到毒药伤害 +1/2。 有毒。","木精灵哨位","{kw-counter}：召唤一只{kw-summon:148/149}。","战斗牧师"," {kw-followup}：为该列中的所有角色恢复 1 点生命值。","战斗法师","当此角色获得 {kw-charge}时，他们还会恢复 1/2 点生命值。","战斗领主","{kw-followup}：触发所有相邻角色的 {kw-counter} 效果。","血蛭","{kw-otherunitdies}：召唤一个 {kw-summon:158/159}。","元素者","当一个盟友元素被召唤时，获得+1攻击力。第一轮后，召唤一个{kw-summon:153}。","堕落的旗手","{kw-channel} 1：所有盟军弓箭手攻击。 最大灵魂+1。","不朽"," 回合结束时不会失去护甲。","美乐多","当这个角色获得 {kw-charge}时，他们也会获得 {kw-shield}。 {kw-scheme}：{kw-weaken} 最近的敌人。","游侠","当一个盟友被召唤时，获得+2/3 {kw-charge}。 精力充沛。","皇家队长","{kw-endofround}：给该列中的所有角色+1 护甲。","圣言圣人","{kw-healthisrecovered}：给一个随机盟友+1/2 {kw-charge}。","走私者","当您雇用此角色时，每有一个蜥蜴人盟友可获得 2 金币。 {kw-death}：获得 1/你雇佣这个角色时，每有一个蜥蜴人盟友就获得 2 金币。 {kw-death}：获得 2 金币。","灵魂导管"," {kw-channel} 1：恢复 1 生命值。 {kw-followup}：获得 +1 灵魂。 最大灵魂 +1。","灵魂术士","{kw-endofround}：如果你没有灵魂，获得 +1 灵魂和 +2/2 灵魂和 +4 {kw-charge}。 最大灵魂 +2。","毒蛇女巫","第一轮/和第二轮之后，召唤一个{kw-summon:169}。 对中毒角色造成双倍伤害。","虚空召唤师","{kw-endofround}：召唤一个敌人 {kw-summon:161/162}。","薛西斯","第一轮后，召唤一个{kw-summon:168}。","艾伦，森之灵","当一名盟友死亡时，恢复 1 点生命值。 {kw-followup}：所有召唤的盟友攻击。","迷途骑士阿瑞斯","当这个角色获得护甲时，他们也会获得 +3 {kw-charge}。","爱玛，闪电召唤者","{kw-counter}：给所有其他盟友+1 {kw-charge}。","西里尔，万灵大师","{kw-death}：转变。 召唤盟友时，恢复 1 点生命值。","击剑大师艾德里克"," 攻击两次。 精力充沛。","埃休提，幼崽看守","{kw-startofbattle} 和 {kw-death}：用 蜥蜴人{kw-summon:167} 填满你的棋盘。","剑圣","{kw-endofround}：每有一个灵魂，随机获得 +1 {kw-charge} 或恢复 1 生命值。 最多灵魂 +2。","莱拉，黎明之光","{kw-healthisrecovered}：攻击。","南奎里，炼金术士","当盟友获得护甲时，获得+1 {kw-charge}。","夜神，旧月","{kw-otherunitdies}：{kw-weaken} 一个随机敌人。","被流放者牛头人","每有一个蜥蜴人盟友 +1 攻击力。 如果此角色杀死敌人，恢复 3 点生命值。","吞噬者","当一个中毒的角色死亡时，召唤一个{kw-summon:169}。","女祭司","{kw-followup}：为所有其他盟友恢复 1 点生命值。","梵，长子","当一个中毒角色死亡时，获得+1攻击力并恢复1点生命值。","泽德，永恒欺诈师","当这个角色获得 {kw-charge}，召唤一个不可移动的 {kw-summon:166}。","分裂增殖史莱姆"," {kw-counter}：召唤一个 {kw-summon:2}。","史莱姆","","先驱者"," {kw-followup}：召唤一个{kw-summon:4}。","骨堆"," {kw-endofround}：变身为骷髅。","骸骨","","守望者"," 以任意行的随机敌人为目标。","凶暴鼠","","敏脚链"," {kw-endofround}：换行。","哥布林弓箭手"," {kw-endofround}：换行。","脚链传真机"," {kw-counter}：对最近的敌人造成 1 点伤害，然后换行。","会自我回血的软泥"," 当一名盟友死亡时，恢复 1 点生命值。","分裂史莱姆","{kw-death}：召唤两个 {kw-summon:2}。","阿兹尔"," 每个盟友骷髅 +1 攻击力。 {kw-followup}：召唤一个{kw-summon:4}。","鼠牙","当一个盟友野兽死亡时，召唤一只{kw-summon:7}。","脚链铁匠","{kw-endofround}：随机给一个盟友+4护甲。","金属光泽的软泥"," {kw-endofround}：获得 +1 护甲然后移动。","苦牙","{kw-followup}：给一个随机的盟友野兽 +1 攻击力。","弗利特脚链"," {kw-counter}：获得 +1 {kw-charge}。","哥布林"," {kw-endofround}：换行。","仁慈的脚链","当任何角色死亡时获得 +1 攻击力。","迷途的脚链","{kw-endofround}：召唤一只{kw-summon:22}。","蝙蝠","","主母"," {kw-endofround}：换行。","腐尸甲虫"," {kw-endofround}：给主母+2 护甲。","巨型史莱姆","{kw-endofround}：召唤两个 {kw-summon:2} 并换行。","固化史莱姆","","复活的巨像"," 攻击两次。","双子巫师"," {kw-followup}：召唤一个{kw-summon:4}。","脚链国王","{kw-endofround}：召唤一个 {kw-summon:9}。","眼魔统领"," 哥布林 +1 攻击力。 隐形。","银牙"," 有毒。 {kw-endofround}：换行。","邪恶造物"," {kw-death}：召唤一个{kw-summon:33}。","无头造物"," {kw-followup}：移动。","瓦拉克之子"," {kw-endofround}：召唤一个{kw-summon:35}。","游荡眼魔"," 以任意行上最近的敌人之一为目标。","盛宴召唤者","{kw-followup}：为受伤的盟友恢复 2 点生命值。","狼人","","眼魔女王"," 每个盟友 +1 攻击力。","眼魔集群"," {kw-death}：召唤三个{kw-summon:35}。 {kw-endofround}：移动。","觉醒丛林","{kw-endofround}：召唤两个 {kw-summon:41}。","诅咒丛林","{kw-death}：对这条线上最近的敌人造成 2 点伤害。","老妪"," 有毒。 {kw-endofround}：召唤一个随机{kw-summon:2}，然后移动。","毒液拟态"," 麻痹攻击。 {kw-endofround}：换行。","眼魔始祖","{kw-endofround}：召唤两个{kw-summon:35}。","酷派斯拟态","{kw-counter}：获得 {kw-shield}。","狼群首领","以生命值最低的敌人为目标。","荒野拟态","{kw-counter}：对最近的敌人造成 1 点伤害。","魔女","当一名盟友死亡时，给予另一名盟友 +2 攻击力。","远古邪神","当一只野兽盟友死亡时，获得+1攻击力。 {kw-endofround}：换行。","狼人阿尔法","{kw-death}：召唤两个 {kw-summon:37}。 {kw-endofround}：换行。","荒野"," {kw-counter}：对最近的敌人造成 1 点伤害。","酷派斯","{kw-endofround}：给另一个盟友 {kw-shield}。","维妮娜"," 麻痹攻击。 {kw-endofround}：移动。","原初拟态","{kw-followup}：对所有盟友造成 5 点伤害并获得 +1 攻击力。","镜子","{kw-endofround}：召唤一个{kw-summon:32}。 隐形。","失明者"," 以生命值最高的敌人为目标。 有毒。","毒蝎"," {kw-endofround}：移动。","骸骨毒蝎"," 攻击三次。","深渊行者","{kw-endofround}：召唤一个{kw-summon:60}。","火焰妖精","{kw-death}：给所有盟友+2 {kw-charge}。","梦魇","{kw-endofround}：麻痹一个随机敌人。","结晶恐怖"," {kw-death}：召唤一个{kw-summon:63}。","恐怖"," {kw-endofround}：移动。","凶恶的辉光"," {kw-endofround}：召唤两个 {kw-summon:65}，然后移动。","不稳定的辉光"," {kw-endofround}：对这行的所有角色造成 5 点伤害。","火之仆人","{kw-followup}：换行并获得 +1 攻击力。","灰烬王子"," 诅咒攻击。 隐形。 {kw-followup}：移动。","巨魔长老"," {kw-counter}：获得 +1 {kw-charge}。","巨魔","{kw-counter}：获得 +1 {kw-charge}。","灰烬之灵","{kw-endofround}：获得 +15 护甲然后移动。 拥有等于其护甲值的额外攻击力。","灵瓮"," {kw-death}：摧毁灰烬之灵。","暗影仆从","在场每个敌人为其 +1 攻击力。","暗影王子"," 困惑。 隐形。 {kw-followup}：移动。","深渊守护者","{kw-endofround}：召唤一个{kw-summon:75}。","炎魔","{kw-death}：给深渊守护者+1 攻击力。","血肉巨人"," 攻击施加 2 {kw-affliction}。 {kw-endofround}：换行。","血肉虫","","贪婪的仆人"," 攻击两次。 {kw-endofround}：换行。","黄金王子","{kw-followup}：窃取 1 金币。 隐形。","心灵掠夺者"," 攻击施加随机状态效果。 随机攻击。","空心勇士","{kw-endofround}：获得 +1 攻击力并移动。","阿巴顿之手","当友方怪物死亡时，获得+1攻击力。 以任意行上最近的敌人之一为目标。","阿巴顿祭司","{kw-counter}：给阿巴顿之手 +2 护甲。","阿巴顿的女祭司","{kw-counter}：给阿巴顿之手 +2 {kw-charge}。","原始火焰","{kw-endofround}：召唤一个 {kw-summon:86}，然后移动。","次级暗影烈焰"," {kw-death}：召唤一个 {kw-summon:87}。 隐形。","暗影烈焰"," {kw-death}：召唤一个 {kw-summon:88}。 隐形。","强效暗影烈焰"," 隐形。","阿巴顿","每回合变换一次。","金球","","诅咒之球"," {kw-death}：诅咒一个随机敌人。","毒球"," {kw-death}：{kw-poison} 生命值最低的敌人。","希望吞噬者","角色无法恢复生命值。","力量吞噬者","角色无法获得护甲。","守护者"," 以任意行的随机角色为目标。 隐形。","伊利法"," {kw-endofround}：换行。","巴廷"," 麻痹攻击。 以生命值最高的敌人为目标。","大巴廷","{kw-death}：麻痹所有非英雄的敌人。","安德洛马留斯"," 攻击施加 2 {kw-affliction}。","莫拉克斯","{kw-endofround}：给 伊利法 +5 护甲。 有毒。","阿蒙","{kw-endofround}：给 伊利法 +3 {kw-charge}。","哈根提","攻击无视护甲。","瓦拉克","{kw-endofround}：召唤一个{kw-summon:35}。 以任意行的随机角色为目标。","奥罗巴斯","同时对一列的敌人造成伤害。","守护者","{kw-endofround}：给所有盟友+1 {kw-charge}。 隐形。","纳扎托斯","{kw-endofround}：召唤两个暗影。","黑暗火焰阴影"," {kw-endofround}：在该行召唤两个 {kw-summon:114}。 隐形。","诅咒之影"," 诅咒攻击。 隐形。","嚎叫阴影","","迷人阴影"," 困惑。 隐形。","不稳定阴影"," {kw-followup}：对该行的所有角色造成 2 点伤害。 隐形。","苦痛阴影"," 攻击施加 2 {kw-affliction}。 隐形。","带电阴影"," 攻击三次。 隐形。","黑暗火焰","","守护者"," 隐形。","传送门守护者"," 攻击两次。 {kw-endofround}：换行。","虚空","{kw-death}：对随机敌人施加随机状态效果。 {kw-death}：对随机敌人施加随机状态效果。","传送门守护者"," 攻击两次。 {kw-endofround}：换行。","传送门守护者"," 攻击两次。 {kw-endofround}：换行。","传送门守护者","{kw-endofround}：给一个随机盟友+4 {kw-charge}。","阿巴顿之眼"," 以生命值最高的敌人为目标。 隐形。","伊利法之眼"," 对受影响的敌人造成双倍伤害。 隐形。 {kw-endofround}：换行。","纳扎托斯之眼"," 攻击施加 2 {kw-affliction}。 隐形。 {kw-endofround}：换行。","传送门守护者","{kw-endofround}：召唤一个具有随机能力的倒影。","守护者的倒影","{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 10 点伤害。","守护者的倒影","{kw-endofround} 和 {kw-death}：对所有敌人造成 1 点伤害。","守护者的倒影","{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 4 点伤害两次。","守护者的倒影","{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 5 点伤害并施加 2 {kw-affliction}。","守护者的倒影","{kw-endofround} 和 {kw-death}：对生命值最高的敌人造成 3 点伤害并使其瘫痪。","金虫","{kw-death}：获得 13 金币。 有毒。","地牢阴影"," 隐形。","金色小精灵","在第二轮结束时消失。 {kw-endofround}：换行。","百宝箱","","失落的冒险家","","古瓮","","桶","","金属瓮","","灌木丛"," 不可移动。","巨石"," 不可移动。","追随者","","忠实的追随者"," 不计入最大队伍人数。","宇宙史莱姆","{kw-endofround}：给所有其他元素盟友 +1 {kw-charge}。 不计入最大队伍人数。","金色雕像"," 在营火处以 10 金币的价格出售。","非凡的雕像"," 在营火处以 15 金币的价格出售。","阿斯莫尔，黄金"," {kw-endofround}：获得 {kw-shield}。 在营火处以 15 金币的价格出售。","西里尔，撼地者"," 召唤盟友时，恢复 1 点生命值。","杰克","","鸽子","","乌鸦","","游狼","","不灭之焰","{kw-endofround}：给一个盟友+1 {kw-charge}。","复仇之魂"," 隐形。","闪电小精灵","{kw-death}：给所有盟友+1 {kw-charge}。","神圣小精灵","{kw-endofround}：为一名受伤的非英雄盟友恢复 1 点生命值。","金属小精灵"," {kw-endofround}：给该行的另一个盟友+1 护甲。","低阶金属小精灵"," {kw-endofround}：给该行的另一个盟友+1 护甲。","高阶金属小精灵"," {kw-endofround}：给该行的另一个盟友+1 护甲。","血小精灵","","高阶血精灵","","次级虚空妖精"," 攻击自己。 {kw-death}：对所有盟友造成 1 点伤害。","虚空妖精"," 攻击自己。 {kw-death}：对所有盟友造成 2 点伤害。","高阶虚空妖精"," 攻击自己。 {kw-death}：对所有盟友造成 3 点伤害。","炸弹","{kw-death}：对该行的所有角色造成 2 点伤害。","大炸弹","{kw-death}：对该行的所有角色造成 4 点伤害。 {kw-death}：对该行的所有角色造成 4 点伤害。","黄金炸弹","{kw-death}：对该行的所有角色造成 6 点伤害。 {kw-death}：对该行的所有角色造成 6 点伤害。","镜像"," 不可移动。","幼崽","","剧毒天平"," 有毒。 精力充沛。","毒史莱姆"," 有毒。","血影","{kw-death}：对友方英雄造成 4 点伤害。","幽灵大锤"," 精力充沛。 {kw-followup}：受到 1 点伤害。","强效灵锤"," 精力充沛。 {kw-followup}：受到 1 点伤害。","黄金灵锤"," 精力充沛。 {kw-followup}：受到 1 点伤害。","选择你的英雄","选择一个神器。","亚巴顿之血: 获得 3 金币。","伊利法之血: 获得一个随机的 2 级角色。","纳扎托斯之血: 获得一个稀有物品。","守护者之魂: 你的队伍上限增加1。 获得{kw-startofbattle}：你的英雄受到 1 点伤害。","营火","获得 3 金币。","转化为随机物品。消耗品。","巴廷","与营火相比，篝火可以雇佣更多的角色。解锁新单位会永久解锁新的篝火。","哦。你好。需要一些钥匙吗？","商人","女巫","安德洛马留斯","选择戒指。","黑市以比普通商店便宜的价格出售商品。","阿蒙提供诅咒戒指。诅咒取决于您当前的英雄。","黑曜石戒指 - 我可以看看吗？它看起来像我很久以前丢失的一个。","小路","英雄","人工制品","特点","物品","升级","怪物","新游戏","新游戏+","新游戏++","新游戏+++","新游戏++++","新游戏++++++","传说","所有地区","上层地牢","下层地牢","深渊","传送门"
	];
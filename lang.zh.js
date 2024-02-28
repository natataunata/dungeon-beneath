var L = [
    "",
    "人类",
    "野兽",
    "矮人",
    "元素",
    "精灵",
    "哥布林",
    "怪物",
    "亡灵",
    "构造体",
    "植物",
    "地精",
    "旧神",
    "蜥蜴人",
    "恶魔",
    "？？？",
    "战士",
    "法师",
    "射手",
    "英雄",
    "多职业",
    "追随者",
    "仅前排",
    "仅后排",
    "-",
    "攻击",
    "生命值",
    "速度",
    "亡语",
    "亡语： 死后触发。",
    "回合结束",
    "回合结束： 在所有角色完成攻击后触发。无视疲劳。",
    "连击",
    "连击： 在角色的普通攻击之后触发。",
    "厄运",
    "厄运： 当敌方角色死亡时触发。",
    "希望",
    "希望： 当盟友角色的生命值增加时触发。",
    "诡计",
    "诡计： 如果角色不攻击就会触发。",
    "战斗开始",
    "战斗开始： 在战斗开始前触发。",
    "释放灵魂",
    "释放灵魂 X： 花费 X 个灵魂在回合之间触发一个能力。每轮可以使用一次。 右击施法。",
    "毒",
    "毒药： 中毒的角色在普通攻击后受到 1 点伤害。持续到本次战斗结束。不叠加。",
    "诅咒",
    "诅咒： 下一次被诅咒的角色受到的伤害会翻倍。",
    "护盾",
    "护盾： 免疫下次伤害。",
    "还击",
    "还击： 当角色失去生命值并存活下来时触发。",
    "痛苦",
    "痛苦： 受影响的角色无法获得 生命值，护甲或力量。在一个角色的回合结束时，移除一层痛苦。",
    "力量",
    "力量： 下一次攻击造成更多伤害。",
    "盔甲",
    "护甲： 角色在失去生命值之前先失去护甲。护甲在每一轮结束时失去。",
    "血播",
    "献血 在两个回合之间受到伤害时触发一项能力。每回合可使用一次。右键点击施放。",
    "复活",
    "复活 使死亡的盟友复活，生命值为 1。",
    "施法",
    "施法消耗法力值在两个回合之间触发一个能力。每回合可使用一次。右键单击施放。",
    "召唤",
    "使用召唤并从中受益的角色更有可能出现在营火旁。",
    "等级",
    "超阶",
    "该角色可以无止境地提升等级。他们在 4 级时获得该奖励，之后每升一级都会获得该奖励。",
    "小路",
    "英雄",
    "人工制品",
    "特点",
    "物品",
    "转换",
    "怪物",
    "团体",
    "营火",
    "招募或解雇角色。右键单击以卸下装备。",
    "营火",
    "与营火相比，篝火可以雇佣更多的角色。解锁新单位会永久解锁新的篝火。",
    "百宝箱",
    "转化为随机物品。",
    "藏宝室",
    "获得 3 金币。",
    "巴廷",
    "巴廷提供可选的交易，增加下一场战斗的难度以换取金币。",
    "商人",
    "购买和出售物品。右键单击以卸下装备。",
    "女巫",
    "你！我还有更多药水要卖！",
    "安德洛马留斯",
    "安德洛玛留斯将转化一件装备。  右键单击以从角色身上移除装备，然后将装备放入虚空。",
    "钥匙匠",
    "哦。你好。需要一些钥匙吗？",
    "巨人",
    "选择戒指。",
    "走私者",
    "黑市以比普通商店便宜的价格出售商品。",
    "遗忘法师",
    "黑曜石戒指 - 我可以看看吗？它看起来像我很久以前丢失的一个。",
    "阿蒙的宝藏室",
    "阿蒙提供诅咒戒指。诅咒取决于您当前的英雄。",
    "神器宝箱",
    "选择一个神器。",
    "选择你的英雄",
    "亚巴顿之血",
    "获得 8 金币。",
    "伊利法之血",
    "获得一个随机的 2 级角色。",
    "纳扎托斯之血",
    "获得一个稀有物品。",
    "守护者之魂",
    "英雄的最大生命值永久为 1。",
    "死亡之歌",
    "得分 +25%。敌方英雄攻击力 +1。",
    "新游戏",
    "新游戏+1",
    "新游戏+2",
    "新游戏+3",
    "新游戏+4",
    "新游戏+6",
    "传说",
    "所有地区",
    "上层地牢",
    "下层地牢",
    "深渊",
    "传送门",
    "高塔",
    "他是一个不幸的灵魂",
    "迷失的冒险家",
    "盛宴召唤者",
    "{kw-followup}：为受伤的盟友恢复 2 点生命值。",
    "狼群首领",
    "以生命值最低的敌人为目标。",
    "旧土贵族",
    "锤之托瑞克",
    "{kw-endofround}：获得 +1 护甲。",
    "铁匠大师",
    "{kw-endofround}：给这行最前面的盟友+1 护甲。",
    "最后的天文学家",
    "伊洛爱",
    "{kw-followup}：给这行上的盟友+1 {kw-charge}。",
    "精力充沛。",
    "奥术研究员",
    "{kw-endofround}：给这行上的一个盟友法师+2 {kw-charge}。",
    "旧月",
    "塔兹金",
    "{kw-channelmana}：召唤一个 {kw-summon:0}。",
    "升天召唤师",
    "如果这个角色杀死了一个敌人，召唤一个{kw-summon:1}。",
    "骑士团的塔兹吉尼",
    "{kw-otherunitdies}：获得 +1 {kw-charge}。",
    "随行厨师",
    "多米尼克·布特鲁",
    "{kw-followup}：为这行上一个受伤的盟友恢复 1 点生命值。",
    "旅行商人",
    "{kw-startofbattle}: 获得 1 金。",
    "孤泳者",
    "格里克斯长老",
    "当盟友死亡时，攻击。",
    "女族长",
    "有毒。",
    "年轻的王子",
    "Xandos III",
    "从黎明王冠开始。",
    "赞多斯, 大帝",
    "漫游证明",
    "玛丽安娜",
    "{kw-startofbattle}：召唤 {kw-summon:2}。",
    "阿尼玛拉",
    "当任何角色献血时，获得 +1 {kw-charge}.",
    "活魔人",
    "埃尔斯贝特",
    "{kw-channelsoul} 1：对最近的敌人造成 2 点伤害。 最大灵魂 +1。",
    "埃尔斯贝特, 沼泽女巫",
    "{kw-startofbattle}：使两个随机敌人中毒。",
    "复仇者",
    "从杰克的回忆开始。",
    "黄金国王",
    "每 5 金币获得 +1 攻击力。",
    "工匠",
    "以两件额外的随机遗物启动。",
    "会自我回血的软泥",
    "当一名盟友死亡时，恢复 1 点生命值。",
    "分裂增殖史莱姆",
    "{kw-counter}：召唤一个 {kw-summon:42}。",
    "金属光泽的软泥",
    "{kw-endofround}：获得 +1 护甲然后移动。",
    "肠卜师",
    "{kw-otherunitdies}：对一个随机敌人造成 {kw-scaling:1/1/0} 点伤害。",
    "邪教徒",
    "{kw-otherunitdies}：恢复 {kw-scaling:1/0/0} 点生命值。",
    "狂战士",
    "{kw-counter}：获得 +1/2/3 {kw-charge}。",
    "剑舞者",
    "在最大生命值时 +1/2/3 攻击力。",
    "机工魔术士",
    "{kw-endofround}：给所有盟友法师+1 {kw-charge}。",
    "猎人",
    "{kw-followup}：对生命值最低的敌人造成 1 点伤害/两次/ 3 次。",
    "盔甲匠",
    "{kw-endofround}：给该行上的另一个盟友+{kw-scaling:1/1/0} 护甲。",
    "太阳法师",
    "获得双倍的{kw-charge}。",
    "修道士",
    "{kw-followup}：为一个受伤的非英雄盟友恢复 {kw-scaling:1/0/0} 点生命值。",
    "玫瑰牧师",
    "{kw-healthisrecovered}：对该行最近的敌人造成 {kw-scaling:1/0/0} 点伤害。",
    "装甲骑士",
    "拥有等于其护甲值的额外攻击力。",
    "德鲁伊",
    "{kw-channelmana} {kw-scaling:0/1/1}：召唤两次{kw-summon:6/7/8}。",
    "神圣保护者",
    "当一个盟友被召唤时，给他们 {kw-shield}。",
    "乡绅",
    "{kw-endofround}：给该行上的另一个盟友+1/2/3 {kw-charge}。",
    "阿瓜蒂利斯",
    "当一个盟友死亡时，获得+2/3/4 {kw-charge}。",
    "地下生",
    "{kw-scheme}：为每个蜥蜴人盟友恢复 1 点生命值。",
    "游侠",
    "当一个盟友被召唤时，获得+1/2/3 {kw-charge}。",
    "妖精使者",
    "召唤的盟友 +{kw-scaling:1/0/0} 攻击力。",
    "罗格",
    "皮匠",
    "如果此角色杀死敌人，获得 1 金币。",
    "皇家卫队",
    "当此角色获得生命值时，您的英雄获得 +1/2/3 {kw-charge}。",
    "通灵者",
    "{kw-followup}：触发所有盟友末日效果。",
    "标枪手",
    "获得护甲后攻击。",
    "神射手",
    "当敌人获得 {kw-poison}时，对他们造成 {kw-scaling:1/0/0} 点伤害。",
    "先行者",
    "当这个角色杀死一个敌人时，给所有蜥蜴人盟友+1 {kw-charge}。",
    "闪电使者",
    "当此角色获得 {kw-charge} 时，对随机敌人造成 {kw-scaling:1/0/0} 点伤害。",
    "钢铁召唤师",
    "{kw-channelmana} {kw-scaling:0/1/1}：召唤一个 {kw-summon:12/13/14}。",
    "黑暗牧师",
    "当这个角色杀死一个敌人时，获得{kw-shield}。",
    "{kw-channelmana} {kw-scaling:0/1/1}： 获得{kw-shield}。",
    "血统主义者",
    "{kw-endofround}：在该行召唤一个敌人{kw-summon:15}。",
    "屠夫",
    "当这个角色杀死一个敌人时，为一个非英雄的受伤盟友恢复 1 点生命值/受损的盟友恢复 1 点生命值，两次/受损的盟友恢复 1 点生命值，三次。",
    "毒饮者",
    "当一个中毒角色死亡时，恢复 {kw-scaling:1/0/0} 点生命值。",
    "圣锤牧师",
    "{kw-endofround}：召唤 {kw-summon:16/17/18}。",
    "酒仙",
    "{kw-counter}：为受伤的非英雄盟友恢复 2 点生命值。",
    "符文铁匠",
    "当另一个矮人受到伤害时，获得 +1 {kw-charge}。 {kw-endofround}：每个其他矮人获得 +1 护甲。",
    "神枪手",
    "每个其他不死族盟友 +1 伤害。",
    "金牛卫士",
    "{kw-channelsoul} 1：给所有其他不死族盟友 +1/2/3 护甲。 最大灵魂 +1。",
    "饮魂者",
    "{kw-endofround}：如果你有 2 个或更多灵魂，恢复 {kw-scaling:1/0/0} 生命值。 最大灵魂 +2。",
    "堕落专家",
    "{kw-channelsoul} X：对该行最近的敌人造成 X 点/2X /4X 伤害。 最大灵魂 +3。",
    "死灵法师",
    "{kw-channelsoul} 2：召唤一个{kw-summon:3}。 最大灵魂+2。",
    "铁血",
    "{kw-channelblood} 1: 每个受损的盟友获得 +1 护甲。",
    "微光之血",
    "{kw-channelblood} 2: 获得 +1 攻击力。",
    "太阳号角",
    "{kw-channelblood} 1: 为相邻的一只受损野兽恢复 1 点生命值/两次/三次。",
    "战争之熊",
    "{kw-endofround}: 如果该角色的生命值为 1，则恢复 1/2 或更低，则恢复 2/3 或更低，则恢复 3 生命值。",
    "火焰使者",
    "同时对同一纵队的敌人造成伤害。",
    "{kw-channelmana} {kw-scaling:1/0/0}：攻击。",
    "修补匠",
    "{kw-endofround}：如果这个角色有 {kw-charge}，召唤一个 {kw-summon:20/21/22}。",
    "怒气导管",
    "{kw-counter}：攻击。",
    "暗夜猎手",
    "{kw-otherunitdies}：获得 +1/2/3 {kw-charge}。",
    "剧毒术士",
    "{kw-followup}：对所有中毒的敌人造成 {kw-scaling:1/0/0} 点伤害。",
    "争斗者",
    "如果这个角色杀死了一个敌人，他会再次攻击。",
    "毒蛇女巫",
    "对中毒角色造成双倍伤害。",
    "{kw-channelmana} {kw-scaling:1/-1/0}：召唤一个 {kw-summon:9}。",
    "血蛭",
    "{kw-otherunitdies}：召唤一个 {kw-summon:10/11}。",
    "奥术射手",
    "{kw-endofround}：使该列中的所有盟友法师 +2/3 {kw-charge}。",
    "刺客",
    "敌人受到毒药伤害 +{kw-scaling:1/-1/0}。",
    "美乐多",
    "当这个角色获得 {kw-charge}时，他们也会获得 {kw-shield}。 {kw-scheme}：{kw-weaken} 最近的敌人。",
    "战斗领主",
    "{kw-followup}：触发所有相邻角色的 {kw-counter} 效果。",
    "薛西斯",
    "{kw-channelmana} {kw-scaling:1/-1/0}：召唤一个 {kw-summon:19}。",
    "阿姆古安",
    "{kw-scheme}：给所有蜥蜴人盟友+1/2 {kw-charge}。",
    "灵魂导管",
    "{kw-channelsoul} 1：恢复 1/2 生命值。 {kw-followup}：获得 +1 灵魂。 最大灵魂 +1。",
    "麒麟兽",
    "当其他盟友的野兽受到伤害时，获得 +1/2 {kw-charge}。",
    "地狱之火",
    "{kw-channelblood} 2: 攻击。该角色杀死一名敌人时，恢复 1/2 健康值。",
    "唤灵者",
    "{kw-channelblood} 2: {kw-revive}一只盟军野兽。",
    "木精灵哨位",
    "{kw-counter}：召唤一只{kw-summon:6/7}。",
    "不朽",
    "回合结束时不会失去护甲。",
    "战斗法师",
    "当此角色获得 {kw-charge}时，他们还会恢复 1/2 点生命值。",
    "战斗牧师",
    "{kw-followup}：为该列中的所有角色恢复 1 点生命值。",
    "虚空召唤师",
    "{kw-endofround}：召唤一个敌人 {kw-summon:23/24}。",
    "灵魂术士",
    "{kw-endofround}：如果你没有灵魂，获得 +1/2 灵魂和 +2/4 {kw-charge}。 最大灵魂 +2。",
    "元素者",
    "当一个盟友元素被召唤时，获得+1攻击力。",
    "{kw-channelmana} {kw-scaling:1/-1/0}：召唤一个 {kw-summon:25}。",
    "皇家队长",
    "{kw-endofround}：给该列中的所有角色+1 护甲。",
    "圣言圣人",
    "{kw-healthisrecovered}：给一个随机盟友+1/2 {kw-charge}。",
    "当您雇用此角色时，每有一个蜥蜴人盟友可获得 2 金币。 {kw-death}：获得 1/2 金币。",
    "堕落的旗手",
    "{kw-channelsoul} 1：所有盟军弓箭手攻击。 最大灵魂+1。",
    "剑圣",
    "{kw-endofround}：每有一个灵魂，随机获得 +1 {kw-charge} 或恢复 1 生命值。 最多灵魂 +2。",
    "迷途骑士阿瑞斯",
    "当这个角色获得护甲时，他们也会获得 +3 {kw-charge}。",
    "击剑大师艾德里克",
    "攻击两次。",
    "西里尔，万灵大师",
    "召唤盟友时，恢复 1 点生命值。",
    "{kw-death}：转变。",
    "埃休提，幼崽看守",
    "{kw-startofbattle} 和 {kw-death}：用 蜥蜴人{kw-summon:27} 填满你的棋盘。",
    "被流放者牛头人",
    "当该角色杀死一个敌人时，恢复 3 点生命值。",
    "泽德，永恒欺诈师",
    "当这个角色获得 {kw-charge}，召唤一个不可移动的 {kw-summon:28}。",
    "夜神，旧月",
    "{kw-otherunitdies}：{kw-weaken} 一个随机敌人。",
    "莱拉，黎明之光",
    "以任意行的随机敌人为目标。",
    "{kw-healthisrecovered}：攻击。",
    "吞噬者",
    "当一个中毒的角色死亡时，召唤一个{kw-summon:9}。",
    "爱玛，闪电召唤者",
    "{kw-counter}：给所有其他盟友+1 {kw-charge}。",
    "女祭司",
    "{kw-followup}：为所有其他盟友恢复 1 点生命值。",
    "南奎里，炼金术士",
    "当盟友获得护甲时，获得+1 {kw-charge}。",
    "梵，长子",
    "当一个中毒角色死亡时，获得+1攻击力并恢复2点生命值。",
    "艾伦，森之灵",
    "当一名盟友死亡时，恢复 1 点生命值。 {kw-followup}：所有召唤的盟友攻击。",
    "大熊座, 神熊",
    "当盟友放血攻击时。",
    "次级虚空妖精",
    "攻击自己。 {kw-death}：对所有盟友造成 1 点伤害。",
    "骨堆",
    "{kw-endofround}：变身为骷髅。",
    "杰克",
    "骸骨",
    "不灭之焰",
    "{kw-endofround}：给一个盟友+1 {kw-charge}。",
    "神圣小精灵",
    "{kw-endofround}：为一名受伤的非英雄盟友恢复 1 点生命值。",
    "鸽子",
    "乌鸦",
    "游狼",
    "毒史莱姆",
    "血小精灵",
    "高阶血精灵",
    "低阶金属小精灵",
    "{kw-endofround}：给该行的另一个盟友+1 护甲。",
    "金属小精灵",
    "{kw-endofround}：给该行上的另一个盟友+2护甲。",
    "高阶金属小精灵",
    "{kw-endofround}：给该行上的另一个盟友+3护甲。",
    "血影",
    "{kw-death}：对友方英雄造成 4 点伤害。",
    "幽灵大锤",
    "{kw-followup}：受到 1 点伤害。",
    "强效灵锤",
    "黄金灵锤",
    "剧毒天平",
    "炸弹",
    "{kw-death}：对该行的所有角色造成 2 点伤害。",
    "大炸弹",
    "{kw-death}：对该行的所有角色造成 4 点伤害。",
    "黄金炸弹",
    "{kw-death}：对该行的所有角色造成 6 点伤害。",
    "虚空妖精",
    "攻击自己。 {kw-death}：对所有盟友造成 2 点伤害。",
    "高阶虚空妖精",
    "攻击自己。 {kw-death}：对所有盟友造成 3 点伤害。",
    "闪电小精灵",
    "{kw-death}：给所有盟友+1 {kw-charge}。",
    "西里尔，撼地者",
    "幼崽",
    "镜像",
    "不可移动。",
    "宇宙史莱姆",
    "不计入最大队伍人数。",
    "{kw-endofround}：给所有其他元素盟友 +1 {kw-charge}。",
    "阿斯莫尔，黄金",
    "在营火处以 15 金币的价格出售。",
    "{kw-endofround}：获得 {kw-shield}。",
    "非凡的雕像",
    "金色雕像",
    "在营火处以 10 金币的价格出售。",
    "忠实的追随者",
    "灌木丛",
    "金色小精灵",
    "在第二轮结束时消失。",
    "{kw-endofround}：移动。",
    "失落的冒险家",
    "先驱者",
    "{kw-followup}：召唤一个{kw-summon:1}。",
    "守望者",
    "以任意行的随机角色为目标。",
    "凶暴鼠",
    "史莱姆",
    "桶",
    "敏脚链",
    "{kw-endofround}：换行。",
    "哥布林弓箭手",
    "鼠牙",
    "{kw-endofround}： 随机召唤一只野兽。",
    "蝙蝠",
    "眼镜蛇",
    "金属瓮",
    "阿兹尔",
    "每个盟友骷髅 +1 攻击力。",
    "脚链传真机",
    "{kw-counter}：对最近的敌人造成 1 点伤害，然后换行。",
    "爆炸桶",
    "分裂史莱姆",
    "{kw-death}：召唤两个 {kw-summon:42}。",
    "脚链铁匠",
    "{kw-endofround}：随机给一个盟友+4护甲。",
    "骷髅守卫",
    "苦牙",
    "{kw-followup}：给一个随机的盟友野兽 +1 攻击力。",
    "弗利特脚链",
    "{kw-counter}：获得 +1 {kw-charge}。",
    "仁慈的脚链",
    "当任何角色死亡时获得 +1 攻击力。",
    "迷途的脚链",
    "{kw-endofround}：召唤一只{kw-summon:48}。",
    "主母",
    "腐尸甲虫",
    "{kw-endofround}：给{kw-summon:64}+2 护甲。",
    "复活的巨像",
    "双子巫师",
    "脚链国王",
    "{kw-endofround}：召唤一个 {kw-summon:46}。",
    "眼魔统领",
    "哥布林 +1 攻击力。",
    "隐形。",
    "巨型史莱姆",
    "{kw-endofround}：召唤两个 {kw-summon:42} 并换行。",
    "固化史莱姆",
    "瓦拉克之子",
    "{kw-endofround}：召唤一个{kw-summon:73}。",
    "游荡眼魔",
    "以该行最近的敌人之一为目标。",
    "无头造物",
    "{kw-followup}：移动。",
    "眼魔集群",
    "{kw-death}：召唤三个{kw-summon:73}。",
    "银牙",
    "邪恶造物",
    "{kw-death}：召唤一个{kw-summon:74}。",
    "古瓮",
    "眼魔女王",
    "每个盟友 +1 攻击力。",
    "毒液拟态",
    "麻痹攻击。",
    "完美模拟",
    "当该角色杀死一名敌人时，恢复 2 点生命值。",
    "狼人",
    "洞穴之灵",
    "诅咒丛林",
    "{kw-death}：对这条线上最近的敌人造成 2 点伤害。",
    "觉醒丛林",
    "{kw-endofround}：召唤两个 {kw-summon:85}。",
    "蜘蛛",
    "老妪",
    "{kw-endofround}：召唤一个随机史莱姆，然后移动。",
    "盗贼",
    "当该角色杀死一名敌人时，偷取 1 金子。",
    "拟态",
    "{kw-death}：获得 1 金币。",
    "眼魔始祖",
    "{kw-endofround}：召唤两个{kw-summon:73}。",
    "酷派斯拟态",
    "{kw-endofround}：给另一个盟友 {kw-shield}。",
    "荒野拟态",
    "{kw-counter}：对最近的敌人造成 1 点伤害。",
    "魔女",
    "当一名盟友死亡时，给予另一名盟友 +2 攻击力。",
    "荒野",
    "维妮娜",
    "酷派斯",
    "原初拟态",
    "{kw-followup}：对所有盟友造成 5 点伤害并获得 +1 攻击力。",
    "镜子",
    "{kw-endofround}：召唤一个{kw-summon:77}。",
    "远古邪神",
    "当一只野兽盟友死亡时，获得+1攻击力。",
    "狼人阿尔法",
    "{kw-death}：召唤两个 {kw-summon:83}。",
    "失明者",
    "以生命值最高的敌人为目标。",
    "毒蝎",
    "骸骨毒蝎",
    "攻击三次。",
    "火之仆人",
    "{kw-followup}：换行并获得 +1 攻击力。",
    "灰烬王子",
    "诅咒攻击。",
    "火焰妖精",
    "{kw-death}：给所有盟友+2 {kw-charge}。",
    "深渊行者",
    "{kw-endofround}：召唤一个{kw-summon:109}。",
    "凶恶的辉光",
    "{kw-endofround}：召唤两个 {kw-summon:112}，然后移动。",
    "不稳定的辉光",
    "{kw-endofround}：对这行的所有角色造成 5 点伤害。",
    "巨魔长老",
    "巨魔",
    "梦魇",
    "{kw-endofround}：麻痹一个随机敌人。",
    "结晶恐怖",
    "{kw-death}：召唤一个{kw-summon:117}。",
    "恐怖",
    "暗影仆从",
    "在场每个敌人为其 +1 攻击力。",
    "暗影王子",
    "困惑。",
    "炎魔",
    "{kw-death}：给{kw-summon:121}+1 攻击力。",
    "深渊守护者",
    "{kw-endofround}：召唤一个{kw-summon:120}。",
    "灵瓮",
    "{kw-death}：摧毁{kw-summon:123}。",
    "灰烬之灵",
    "{kw-endofround}：获得 +15 护甲然后移动。",
    "血肉巨人",
    "攻击施加 2 {kw-affliction}。",
    "血肉虫",
    "贪婪的仆人",
    "黄金王子",
    "{kw-followup}：窃取 1 金币。",
    "阿巴顿之手",
    "当友方怪物死亡时，获得+1攻击力。",
    "阿巴顿祭司",
    "{kw-counter}：给{kw-summon:128} +2 护甲。",
    "阿巴顿的女祭司",
    "{kw-counter}：给{kw-summon:128} +2 {kw-charge}。",
    "原始火焰",
    "{kw-endofround}. \\\"唤醒\\\"： 对本道中的所有角色造成 2 次伤害，然后移动。",
    "巨石",
    "次级暗影烈焰",
    "{kw-death}：召唤一个 {kw-summon:134}。",
    "暗影烈焰",
    "{kw-death}：召唤一个 {kw-summon:135}。",
    "强效暗影烈焰",
    "心灵掠夺者",
    "攻击施加随机状态效果。 随机攻击。",
    "空心勇士",
    "{kw-endofround}：获得 +1 攻击力并移动。",
    "阿巴顿",
    "每回合变换一次。",
    "懒惰",
    "色欲",
    "嫉妒",
    "{kw-endofround}：召唤一个 {kw-summon:142}。",
    "毒球",
    "{kw-death}：{kw-poison} 生命值最低的敌人。",
    "暴怒",
    "傲慢",
    "将生命值最高的敌人设置为 1 点生命值。",
    "贪婪",
    "{kw-endofround}：召唤三个 {kw-summon:147}。",
    "腐败",
    "{kw-endofround}：召唤两个 {kw-summon:149}。",
    "金球",
    "暴食",
    "{kw-endofround}：随机召唤两个吞噬者。",
    "诅咒之球",
    "{kw-death}：诅咒一个随机敌人。",
    "力量吞噬者",
    "角色无法获得护甲。",
    "希望吞噬者",
    "角色无法恢复生命值。",
    "守护者",
    "伊利法",
    "瓦拉克",
    "奥罗巴斯",
    "莫拉克斯",
    "{kw-endofround}：给 {kw-summon:153} +5 护甲。",
    "阿蒙",
    "{kw-endofround}：给 {kw-summon:153} +3 {kw-charge}。",
    "哈根提",
    "攻击无视护甲。",
    "大巴廷",
    "{kw-death}：麻痹所有非英雄的敌人。",
    "{kw-endofround}：给所有盟友+1 {kw-charge}。",
    "苦痛阴影",
    "纳扎托斯",
    "{kw-endofround}：召唤两个暗影。",
    "黑暗火焰阴影",
    "{kw-endofround}：在该行召唤两个 {kw-summon:171}。",
    "带电阴影",
    "不稳定阴影",
    "{kw-followup}：对该行的所有角色造成 2 点伤害。",
    "迷人阴影",
    "嚎叫阴影",
    "诅咒之影",
    "黑暗火焰",
    "传送门守护者",
    "虚空",
    "{kw-death}：对随机敌人施加随机状态效果。",
    "{kw-endofround}：给一个随机盟友+4 {kw-charge}。",
    "纳扎托斯之眼",
    "伊利法之眼",
    "对受影响的敌人造成双倍伤害。",
    "阿巴顿之眼",
    "守护者的倒影",
    "{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 5 点伤害并施加 2 {kw-affliction}。",
    "{kw-endofround}：召唤一个具有随机能力的倒影。",
    "{kw-endofround} 和 {kw-death}：对所有敌人造成 1 点伤害。",
    "{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 10 点伤害。",
    "{kw-endofround} 和 {kw-death}：对该行最近的敌人造成 4 点伤害两次。",
    "{kw-endofround} 和 {kw-death}：对生命值最高的敌人造成 3 点伤害并使其瘫痪。",
    "地牢阴影",
    "金虫",
    "{kw-death}：获得 13 金币。",
    "塔国王",
    "{kw-endofround}: ？？？",
    "塔警卫",
    "拱门",
    "皇家猎人",
    "{kw-followup}：对一个随机敌人造成 1 点伤害。",
    "铁匠",
    "炸弹史密斯",
    "{kw-endofround}：召唤一个 {kw-summon:20}。",
    "塔船长",
    "{kw-followup}：{kw-weaken} 一个随机敌人。",
    "皇家术士",
    "皇家剑客",
    "锤子的先驱",
    "{kw-endofround}：召唤一个 {kw-summon:17}。",
    "药水大师",
    "匪盗",
    "天文学家",
    "{kw-endofround}：给一个随机盟友+2 {kw-charge}。",
    "甲骨文",
    "塔骑士",
    "{kw-followup}：获得 {kw-shield}。",
    "地穴守护者",
    "{kw-endofround}：召唤两次{kw-summon:1}。",
    "杀手",
    "巫术",
    "{kw-otherunitdies}：对最近的敌人造成 2 点伤害。",
    "法院小丑",
    "皇家步兵",
    "沼泽狼",
    "{kw-endofround}：恢复 1 点生命值。",
    "巨型眼镜蛇",
    "黄昏龙",
    "毛勒",
    "沙龙",
    "斯皮尔曼",
    "塔贵族",
    "{kw-endofround}：恢复 2 点生命值。",
    "步兵",
    "无尽的史莱姆",
    "血法师",
    "{kw-death}：召唤一个 {kw-summon:11}。",
    "黎明甲壳虫",
    "{kw-startofbattle}：获得 {kw-shield}。",
    "岩浆魔像",
    "{kw-followup}：获得 +1 攻击力。",
    "不安的坟墓",
    "{kw-death}：召唤一个 {kw-summon:244}。",
    "虚空巨像",
    "{kw-death}：对所有敌人造成 1 点伤害。",
    "猎人",
    "刀片舞者",
    "在最大生命值时 +1 攻击力。",
    "法院牧师",
    "{kw-endofround}： 为盟友英雄恢复 1 点生命值。",
    "被囚禁的精神",
    "奴才",
    "黄昏盔甲",
    "{kw-counter}：获得 +1 护甲。",
    "地狱魔像",
    "塔巨人",
    "法院圣人",
    "黄昏元素",
    "{kw-endofround}： 为盟友英雄提供 +1 {kw-charge}。",
    "决斗者",
    "恐惧盔甲",
    "{kw-counter}：获得 +4 护甲。",
    "暮光龙",
    "暗夜恶魔",
    "完美巨魔",
    "奥术巨像",
    "{kw-death}：召唤一个 {kw-summon:174}。",
    "黎明之龙",
    "上古巨人",
    "噬人者",
    "{kw-death}：麻痹一个随机敌人。",
    "复仇之魂",
    "被诅咒的瓮",
    "{kw-death}：{kw-poison} 这行上最近的敌人。",
    "雕像陷阱",
    "{kw-death}：召唤一个 {kw-summon:20}。",
    "莱拉的箭袋",
    "盟军弓箭手获得 +1 攻击力。",
    "陶利安圣典",
    "野兽盟友和蜥蜴人获得 +1 生命值。",
    "埃德里克的日记",
    "盟军战士获得 +1 攻击力和 -1 生命值。",
    "旧土之锤",
    "矮人和侏儒盟友获得 +2 生命值。",
    "仲裁者的斗篷",
    "盟友获得 +3 速度。",
    "史密斯的锤子",
    "当盟友获得护甲时，他们获得额外的 +1 护甲。",
    "秩序之书",
    "人类和矮人盟友获得 +1 生命值。",
    "索瑞克之锤",
    "盟友在每轮结束时最多保留 1 层护甲。",
    "艾瑞拉利之石",
    "召唤的盟友获得 +1 攻击力。",
    "西里尔之杖",
    "召唤的盟友不会精疲力尽。",
    "精华收集器",
    "当一名非召唤的盟友死亡时，召唤两只血妖精。",
    "永不熄灭的火炬",
    "{kw-startofbattle}：召唤一个不灭的火焰。",
    "仲裁者之刃",
    "{kw-startofbattle}：给你的英雄+3 {kw-charge} 和 {kw-shield}。",
    "精神枷锁",
    "盟友首次死亡时召唤复仇之灵。",
    "酷派斯的祝福",
    "盟友第一次受到伤害，给他 {kw-shield}。",
    "精华蒸馏器",
    "第一轮后，召唤一个敌方次级{kw-summon:23}。",
    "商人的秘密",
    "物品少花费 1 金币。",
    "纯净毒素",
    "敌人受到毒药伤害 +2。",
    "维尼娜的咒语",
    "假币",
    "篝火旁的角色减少 2 金币。",
    "皇家徽章",
    "你在每个营火和商店的第一次刷新是免费的。 {kw-startofbattle}：你的英雄攻击。",
    "巨魔之血",
    "当您的英雄杀死敌人时,他们会恢复 2 点生命值。",
    "泰坦尼克之锤",
    "{kw-startofbattle}：给所有盟友 2 点护甲值。",
    "阿姆古安之杖",
    "如果一个盟友不攻击，给他+1 {kw-charge}。",
    "神圣蒸馏器",
    "第一轮后，召唤一个光妖精。",
    "力量之书",
    "{kw-endofround}：给一个随机的人类盟友 +1 {kw-charge}。",
    "虚灵精华",
    "当一个盟友失去护盾时，给他+1攻击力。",
    "杰克的小提琴",
    "当您到达营火或篝火时，获得 3 金币。",
    "星之书",
    "{kw-endofround}：给生命值最低的盟友法师 +1 {kw-charge}。",
    "快拔箭袋",
    "{kw-startofbattle}：盟军弓箭手攻击两次。",
    "古怪的巫术",
    "当一个盟友被召唤时,给他们+2 {kw-charge}。",
    "火焰法杖",
    "{kw-startofbattle}：对一个随机敌人造成 8 点伤害。",
    "天空之杖",
    "{kw-startofbattle}： 使所有盟友获得 +1 {kw-charge}。",
    "虚空法杖",
    "{kw-endofround}：对随机敌人造成 1 点伤害。",
    "元素精华",
    "元素盟友的生命值 +2。",
    "熔火之锤",
    "{kw-endofround}：给一个随机的友军战士+1 护甲。",
    "巴廷的书",
    "{kw-startofbattle}：获得 1 金币。你的英雄减少 2 点生命值。",
    "失落之刃",
    "你的英雄有 +1 攻击力和 +2 速度。",
    "埃德里克的靴子",
    "你的英雄再攻击一次。",
    "精华之刃",
    "您的英雄具有“{kw-otherunitdies}：获得 +1 {kw-charge}”。",
    "急速之书",
    "盟军法师不会精疲力尽。",
    "怪酿",
    "{kw-startofbattle}：给予一个盟友蜥蜴人，侏儒和元素 +1 攻击力。",
    "联盟信物",
    "{kw-startofbattle}：将 {kw-shield} 给予一个盟友人类，矮人和精灵。",
    "毒素蒸馏器",
    "当一个中毒的角色死亡时，为一个非英雄的受伤盟友恢复 1 点生命值。",
    "血咒",
    "第一轮后，召唤一个敌方{kw-summon:15}。",
    "召唤铃",
    "{kw-startofbattle}：召唤两把幽灵之锤。",
    "灵魂容器",
    "最大灵魂 +6。",
    "杰克的追忆",
    "盟军野兽获得 +1 健康值和 +2 速度。",
    "法力石",
    "法力值+1。",
    "神圣之刃",
    "您的英雄具有“{kw-healthisrecovered}：获得 +1 {kw-charge}”。",
    "芒刺",
    "当一个角色施法时, 你的英雄会获得 +1 攻击力。",
    "黎明皇冠",
    "你的队伍上限增加 1。",
    "追随者披风",
    "忠诚药水",
    "将{kw-summon:33}转变为忠诚的{kw-summon:33}。角色失去所有装备。消耗品。",
    "阿蒙之刃",
    "{kw-counter}：获得 +1 攻击力。",
    "无间剑",
    "冠军之剑",
    "凤凰之刃",
    "死亡邀请",
    "装备后死亡。",
    "瘟疫之戒",
    "{kw-startofbattle}：中毒并获得 3 金币。",
    "岁月指环",
    "{kw-startofbattle}：获得 3 金币。",
    "死亡之戒",
    "{kw-startofbattle}：受到 1 点伤害并获得 3 金币。",
    "虚弱之戒",
    "治疗药水",
    "恢复 2 点生命值。消耗品。",
    "时空药剂",
    "改造你的英雄。他们会失去所有装备。",
    "次级治疗药水",
    "恢复 1 点生命值。消耗品。",
    "强效治疗药水",
    "恢复 8 点生命值。消耗品。",
    "原力斗篷",
    "流浪者斗篷",
    "短弓",
    "暗影之弓",
    "清道夫斗篷",
    "当这个角色杀死一个敌人时，召唤一只{kw-summon:7}。",
    "伊利法尔的强弩",
    "炎魔弓",
    "安德洛玛留斯的强弩",
    "次级神秘药水",
    "转化为随机物品。消耗品。",
    "转化药水",
    "将一名弓箭手转变为一名随机的 3 级角色。角色失去所有装备。消耗品。",
    "精华瓶",
    "{kw-death}：召唤血妖精。",
    "镜面吊坠",
    "装备的角色不能被麻痹。",
    "灵魂镜头",
    "当一名盟友死亡时，对最近的敌人造成 1 点伤害。",
    "酷派斯的项链",
    "行者之杖",
    "太阳石",
    "{kw-endofround}：获得 +1 {kw-charge}。",
    "命定护符",
    "灼热之印",
    "神圣权杖",
    "{kw-followup}：为一名受伤的非英雄盟友恢复 1 点生命值。",
    "炎魔杖",
    "安德洛玛留斯之爪",
    "迈达斯药水",
    "将法师变成{kw-summon:32}，可以在营火上以 10 金币的价格出售。角色失去所有装备。消耗品。",
    "强效全能药水",
    "将法师转变为多职业，让他们可以装备任何职业的装备。消耗品。",
    "强效神秘药水",
    "木圆盾",
    "毒盾",
    "{kw-startofbattle}：中毒。",
    "散兵之盾",
    "强化圆盾",
    "不朽头盔",
    "{kw-otherunitdies}：获得 +1 护甲。",
    "泰坦之墙",
    "鸢盾",
    "吸血鬼头盔",
    "{kw-otherunitdies}：恢复 1 点生命值。",
    "龙鳞",
    "炎魔之盾",
    "{kw-startofbattle}：获得 +2 护甲。",
    "安德洛玛留斯的鳞片",
    "多功能药水",
    "将战士变为多职业，让他们能装备任何职业的装备。消耗品。",
    "镜像药水",
    "将战士变成队伍里随机角色的副本。角色失去所有装备。消耗品。",
    "孵化中的蛋",
    "第一轮后，召唤一只蜥蜴人{kw-summon:27}。",
    "闪电牙",
    "毒牙",
    "对攻击的敌人施加毒素。",
    "毒蛋",
    "第一轮后，召唤一个毒鳞蜥蜴人。",
    "幸运币",
    "目前尚不清楚这是为了什么。",
    "死亡帽",
    "当一个中毒角色死亡时，恢复 1 点生命值。",
    "毒液帽",
    "{kw-followup}：对所有中毒的敌人造成 1 点伤害。",
    "不朽之帽",
    "{kw-followup}：恢复 1 点生命值。",
    "裂魂",
    "{kw-startofbattle}：获得 1 个灵魂。 最大灵魂 +1。",
    "骷髅护符",
    "在角色释放灵魂之后，获得+1护甲。",
    "血红魔杖",
    "第一轮后，召唤一只血妖精。",
    "绿鳞魔杖",
    "{kw-endofround}：随机召唤一个盟友 +1 护甲值。",
    "坏死魔杖",
    "星石",
    "迈达斯腰带",
    "飞斧",
    "{kw-counter}：对随机敌人造成 1 点伤害。",
    "狂战士之斧",
    "如果低于最大生命值，则获得 +1 攻击力。",
    "圣斧",
    "当角色获得生命值时，也会获得 +1 {kw-charge}。",
    "不朽腰带",
    "{kw-counter}：恢复 1 点生命值。",
    "祖传宝石",
    "陶尔之斧",
    "贵族板甲",
    "{kw-death}：获得 2 金币。",
    "锁子甲",
    "殉道者的板甲",
    "{kw-death}：给所有盟友 +1 攻击力。",
    "冠军护甲",
    "命脉戒指",
    "鸽子头巾",
    "旧钥匙",
    "抗毒戒指",
    "装备的角色不能中毒。",
    "金钥匙",
    "走私者的钥匙",
    "泰坦之戒",
    "{kw-startofbattle}：获得 +4 护甲。",
    "制革手套",
    "猎鹰之环",
    "虚空之怒戒指",
    "当此角色杀死一名敌人时，对一名随机敌人造成 1 点伤害。",
    "装甲手套",
    "坏死戒指",
    "窃魂者",
    "当此角色杀死敌人时，恢复 1 点生命值。",
    "托瑞克之戒",
    "死亡恩典",
    "当该角色死亡时，摧毁此物。",
    "药水腰带",
    "虚空骷髅",
    "护手",
    "钻戒",
    "传送门钥匙",
    "蓝宝石",
    "尘埃",
    "黑曜石戒指",
    "一枚古老的转化戒指。",
    "黑曜石宝石",
    "祖母绿戒指",
    "紫水晶戒指",
    "红宝石戒指",
    "黄玉戒指",
    "死亡之礼",
    "得分 +25",
    "死亡阴影",
    "{kw-counter}: 增益 {kw-shield}。",
    "经验药水",
    "获得 +1 XP。消耗品。",
    "获得 +1 XP。 在这场战斗中阵亡的角色无法获得 XP。消耗品。",
    "精通药水",
    "获得 +3 XP。消耗品。",
    "巨化药水",
    "将角色变成巨大史莱姆。角色失去所有装备。消耗品。",
    "一袋金子",
    "高级经验药水",
    "获得 +2 XP。 在这场战斗中阵亡的角色无法获得 XP。消耗品。",
    "金属",
    "太阳",
    "锤子",
    "心",
    "鳞片",
    "树枝",
    "颅骨",
    "爪子"
];

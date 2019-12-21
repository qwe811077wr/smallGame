var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ShopCfg = (function () {
    function ShopCfg() {
    }
    ShopCfg.cfgs = [
        {
            insId: 100001,
            model: "",
            cardModel: "card_100001_png",
            level: 1,
            name: "阿萨",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 300,
            hp: 1100,
            city: 2,
            buffTime: 0,
            jieshao: "一个强壮的军官,有他的存在,士兵们都热血澎湃",
            buffDesc: "提升本阵全属性15%",
            buffPrompt: 0.15,
            buffCondition: SoldierType.SOLDIER_BU,
            buffAttr: "atk_def",
        },
        // {
        // 	insId:100002,
        // 	model:"",
        // 	cardModel:"card_100002_png",
        // 	level:1,
        // 	name:"马超",
        // 	cost:200,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.general,
        // 	atk:300,
        // 	hp:1050,
        // 	city:2,
        // 	buffTime:0,
        // 	jieshao:"字孟起，西凉马腾之子，伏波将军马援之后，世代为凉州豪族并有爵位。被评为仅次于吕布的猛将，人称“锦马超”。被羌人奉其为“神威天将军”"
        // },
        {
            insId: 100011,
            model: "",
            cardModel: "card_100011_png",
            level: 1,
            name: "帕斯特",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 200,
            hp: 1200,
            city: 1,
            buffTime: 0,
            jieshao: "一个比较固执的人。他在的部队比较着重于防守",
            buffDesc: "提升本阵防御13%",
            buffPrompt: 0.13,
            buffCondition: SoldierType.SOLDIER_BU,
            buffAttr: "def",
        },
        {
            insId: 100012,
            model: "",
            cardModel: "card_100012_png",
            level: 1,
            name: "斯特",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 250,
            hp: 950,
            city: 1,
            buffTime: 0,
            jieshao: "擅长迂回作战,经常能把敌军打的溃不成军。",
            buffDesc: "提升本阵攻击力20%",
            buffPrompt: 0.2,
            buffCondition: SoldierType.SOLDIER_QI,
            buffAttr: "atk",
        },
        {
            insId: 100021,
            model: "",
            cardModel: "card_100021_png",
            level: 1,
            name: "阿连萨",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 200,
            hp: 1000,
            city: 3,
            buffTime: 0,
            jieshao: "善于发挥装甲兵优势实施快速机动和远距离奔袭。",
            buffDesc: "提升本阵攻击力20%",
            buffPrompt: 0.2,
            buffCondition: SoldierType.SOLDIER_GONG,
            buffAttr: "atk",
        },
        {
            insId: 100022,
            model: "",
            cardModel: "card_100022_png",
            level: 1,
            name: "叶米强",
            cost: 200,
            ownNum: 0,
            upgradeNum: 100,
            quality: 4,
            type: CardType.general,
            atk: 300,
            hp: 900,
            city: 3,
            buffTime: 0,
            jieshao: "指挥天才,善于调动士兵的热血,把士兵们凝聚起来。经常不战而胜",
            buffDesc: "提升本阵全属性8%",
            buffPrompt: 0.08,
            buffCondition: SoldierType.SOLDIER_QI,
            buffAttr: "atk_def",
        },
        {
            insId: 10003,
            model: "",
            cardModel: "card_10003_png",
            level: 1,
            name: "情报",
            skillIcon: 10003,
            cost: 80,
            ownNum: 0,
            upgradeNum: 100,
            quality: 1,
            type: CardType.prop,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "战前布阵所使用，用来打探敌方军情。"
        },
        // {
        // 	insId:100041,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"锦囊-趁火打劫",
        // 	skillIcon:100041,
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:3000,
        // 	jieshao:"释放毒雾，一定程度的削弱敌军，并造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },
        // {
        // 	insId:100042,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"锦囊-趁火打劫",
        // 	skillIcon:100041,
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:6000,
        // 	jieshao:"释放毒雾，一定程度的削弱敌军，并造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },{
        // 	insId:100043,
        // 	model:"",
        // 	cardModel:"card_100041_png",
        // 	level:1,
        // 	name:"锦囊-趁火打劫",
        // 	skillIcon:100041,
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:9000,
        // 	jieshao:"释放毒雾，一定程度的削弱敌军，并造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },
        {
            insId: 100044,
            model: "",
            cardModel: "card_100041_png",
            level: 1,
            name: "毒液",
            skillIcon: 100041,
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.special_skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 12000,
            jieshao: "释放毒雾，一定程度的削弱敌军，并造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        },
        // {
        // 	insId:100051,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"锦囊-美人计",
        // 	skillIcon:100051,
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:3000,
        // 	jieshao:"对参战的敌军造成全体眩晕，持续2个回合。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        // ,
        // {
        // 	insId:100052,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"锦囊-美人计",
        // 	skillIcon:100051,
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:6000,
        // 	jieshao:"对参战的敌军造成全体眩晕，持续2个回合。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        // ,
        // {
        // 	insId:100053,
        // 	model:"",
        // 	cardModel:"card_100051_png",
        // 	level:1,
        // 	name:"锦囊-美人计",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.special_skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:9000,
        // 	jieshao:"对参战的敌军造成全体眩晕，持续2个回合。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },
        {
            insId: 100054,
            model: "",
            cardModel: "card_100051_png",
            level: 1,
            name: "物资欺骗",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.special_skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 12000,
            jieshao: "对参战的敌军造成全体眩晕，持续2个回合。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        }
        // ,{
        // 	insId:100061,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"暗度陈仓",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放众多地龙，对敌军造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        // ,{
        // 	insId:100062,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"暗度陈仓",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放众多地龙，对敌军造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },{
        // 	insId:100063,
        // 	model:"",
        // 	cardModel:"card_100061_png",
        // 	level:1,
        // 	name:"暗度陈仓",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放众多地龙，对敌军造成持续性伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // },
        ,
        {
            insId: 100064,
            model: "",
            cardModel: "card_100061_png",
            level: 1,
            name: "脉冲",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "释放激光炮，对敌人造成大面积伤害。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        }
        // ,{
        // 	insId:100071,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"擒贼擒王",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放空中隐藏巨剑，对敌方首领造成巨大创伤。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        // ,
        // {
        // 	insId:100072,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"擒贼擒王",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放空中隐藏巨剑，对敌方首领造成巨大创伤。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        // ,{
        // 	insId:100073,
        // 	model:"",
        // 	cardModel:"card_100071_png",
        // 	level:1,
        // 	name:"擒贼擒王",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.skill,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"释放空中隐藏巨剑，对敌方首领造成巨大创伤。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        // }
        ,
        {
            insId: 100074,
            model: "",
            cardModel: "card_100071_png",
            level: 1,
            name: "天助",
            cost: 160,
            ownNum: 0,
            upgradeNum: 40,
            quality: 3,
            type: CardType.skill,
            atk: 0,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "命令隐形机对敌方阵地投放释批量炸弹。\n<font color=0x00ff00>(拖入战场进行使用)</font>"
        },
        {
            insId: 10008,
            model: "",
            cardModel: "card_10008_png",
            level: 1,
            name: "空袭",
            skillIcon: 100081,
            cost: 200,
            ownNum: 0,
            upgradeNum: 50,
            quality: 3,
            type: CardType.special_skill,
            atk: 60,
            hp: 200,
            city: -1,
            buffTime: 0,
            jieshao: "释放大量火箭弹，对敌方阵地进行覆盖式轰炸。"
        },
        {
            insId: 10009,
            model: "",
            cardModel: "card_10009_png",
            level: 1,
            name: "轰炸",
            skillIcon: 100091,
            cost: 200,
            ownNum: 0,
            upgradeNum: 50,
            quality: 3,
            type: CardType.special_skill,
            atk: 60,
            hp: 200,
            city: -1,
            buffTime: 0,
            jieshao: "执行战术轰炸，大面积持续性杀伤敌军。"
        }
        // ,{
        // 	insId:100101,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"血瓶",
        // 	cost:80,
        // 	ownNum:0,
        // 	upgradeNum:100,
        // 	quality:1,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"一次性恢复己方军团20%的生命值。\n<font color=0x00ff00>(拖入己方区域进行使用)</font>"
        // }
        // ,
        // {
        // 	insId:100102,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"血瓶",
        // 	cost:100,
        // 	ownNum:0,
        // 	upgradeNum:80,
        // 	quality:2,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"一次性恢复己方军团40%的生命值。\n<font color=0x00ff00>(拖入己方区域进行使用)</font>"
        // }
        // ,{
        // 	insId:100103,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"血瓶",
        // 	cost:120,
        // 	ownNum:0,
        // 	upgradeNum:60,
        // 	quality:3,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"一次性恢复己方军团60%的生命值。\n<font color=0x00ff00>(拖入己方区域进行使用)</font>"
        // }
        // ,{
        // 	insId:100104,
        // 	model:"",
        // 	cardModel:"card_hp_png",
        // 	level:1,
        // 	name:"血瓶",
        // 	cost:140,
        // 	ownNum:0,
        // 	upgradeNum:40,
        // 	quality:4,
        // 	type:CardType.prop,
        // 	atk:0,
        // 	hp:0,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"一次性恢复己方军团80%的生命值。\n<font color=0x00ff00>(拖入己方区域进行使用)</font>"
        // },
        ,
        {
            insId: 100105,
            model: "",
            cardModel: "card_soldier_1_png",
            level: 1,
            name: "防空部队",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1440,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "携带重型防空高射炮，形成一定规模以后具有不错的防空和对付载具的力量。",
            soldierType: 1
        },
        {
            insId: 100109,
            model: "",
            cardModel: "card_100109_png",
            level: 1,
            name: "坦克连",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1440,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "现代陆上作战的主要武器之一，具有直射火力、越野能力和装甲防护力的履带式装甲战斗车辆。",
            soldierType: 1
        },
        {
            insId: 100110,
            model: "",
            cardModel: "card_100110_png",
            level: 1,
            name: "重甲坦克",
            cost: 20,
            ownNum: 200,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 1440,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "车体装甲厚，抵御炮击的能力强，火炮口径大，炮管长，攻击力大。",
            soldierType: 1
        },
        {
            insId: 100106,
            model: "",
            cardModel: "card_soldier_3_png",
            level: 1,
            name: "飞骑团",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 720,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "由火箭军精英组成的突击小队。",
            soldierType: 3
        }
        // ,{
        // 	insId:100111,
        // 	model:"",
        // 	cardModel:"card_100111_png",
        // 	level:1,
        // 	name:"虎贲军",
        // 	cost:20,
        // 	ownNum:0,
        // 	upgradeNum:40,
        // 	quality:2,
        // 	type:CardType.soldier,
        // 	atk:720,
        // 	hp:2880,
        // 	city:-1,
        // 	buffTime:0,
        // 	jieshao:"效仿魏国虎豹骑所创建的骁勇骑兵团，战斗力极强。",
        // 	soldierType:3
        // }
        ,
        {
            insId: 100112,
            model: "",
            cardModel: "card_100112_png",
            level: 1,
            name: "火炮队",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 720,
            hp: 2880,
            city: -1,
            buffTime: 0,
            jieshao: "火炮军的特种精英大队。",
            soldierType: 3
        },
        {
            insId: 100107,
            model: "",
            cardModel: "card_soldier_2_png",
            level: 1,
            name: "特种兵",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 720,
            hp: 3600,
            city: -1,
            buffTime: 0,
            jieshao: "用于执行特殊任务的兵种。",
            soldierType: 2
        },
        {
            insId: 100113,
            model: "",
            cardModel: "card_100113_png",
            level: 1,
            name: "火箭军",
            cost: 20,
            ownNum: 0,
            upgradeNum: 40,
            quality: 2,
            type: CardType.soldier,
            atk: 720,
            hp: 3600,
            city: -1,
            buffTime: 0,
            jieshao: "载面空导弹，主要用于远程打击的手段。",
            soldierType: 2
        },
        {
            insId: 100108,
            model: "",
            cardModel: "card_goods_png",
            level: 1,
            name: "物资",
            cost: 300,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.prop,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "消耗物资进行征兵、战斗。"
        }
        ////////
        ,
        {
            insId: 100301,
            model: "",
            cardModel: "card_exp_10_png",
            level: 1,
            name: "经验100",
            cost: 100,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "升级将军"
        },
        {
            insId: 100302,
            model: "",
            cardModel: "card_exp_50_png",
            level: 1,
            name: "经验200",
            cost: 200,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "升级将军"
        }, {
            insId: 100303,
            model: "",
            cardModel: "card_exp_100_png",
            level: 1,
            name: "经验400",
            cost: 400,
            ownNum: 0,
            upgradeNum: 40,
            quality: 1,
            type: CardType.exp,
            atk: 500,
            hp: 0,
            city: -1,
            buffTime: 0,
            jieshao: "升级将军"
        }
    ];
    return ShopCfg;
}());
__reflect(ShopCfg.prototype, "ShopCfg");
//# sourceMappingURL=ShopCfg.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LevelCfg = (function () {
    function LevelCfg() {
    }
    LevelCfg.levelCfg = [
        {
            name: "夏侯渊",
            level: 1,
            hp: 300,
            atk: 200,
            capacity: 10,
            general: "",
            type: 2,
            levelName: "官渡之战",
            insId: 10000,
            exp: 150,
        },
        {
            name: "曹洪",
            level: 1,
            hp: 300,
            atk: 300,
            capacity: 10,
            general: "高览",
            type: 0,
            levelName: "赤壁之战",
            insId: 10001,
            exp: 200,
        },
        {
            name: "李典",
            level: 2,
            hp: 400,
            atk: 460,
            capacity: 15,
            general: "韩当_臧霸",
            type: 1,
            levelName: "潼关之战",
            insId: 10002,
            exp: 250,
        },
        {
            name: "张郃",
            level: 2,
            hp: 400,
            atk: 300,
            capacity: 15,
            general: "徐盛_丁奉_黄盖",
            type: 0,
            levelName: "合肥之战",
            insId: 10003,
            exp: 300,
        },
        {
            name: "徐晃",
            level: 3,
            hp: 500,
            atk: 500,
            capacity: 20,
            general: "姜维_邓艾_钟会_王睿",
            type: 1,
            levelName: "汉中之战",
            insId: 10004,
            exp: 350,
        },
        {
            name: "太史慈",
            level: 3,
            hp: 600,
            atk: 500,
            capacity: 20,
            general: "羊沽_夏侯霸_邓忠_文莺_庞德",
            type: 2,
            levelName: "荆州之战",
            insId: 10005,
            exp: 400,
        },
        {
            name: "魏延",
            level: 4,
            hp: 700,
            atk: 350,
            capacity: 25,
            general: "马岱_郭淮_程普_纪灵_王双_高顺",
            type: 0,
            levelName: "夷陵之战",
            insId: 10006,
            exp: 450,
        },
        {
            name: "文聘",
            level: 4,
            hp: 800,
            atk: 600,
            capacity: 25,
            general: "张任_凌统_颜 严_关兴_张包_曹仁_潘风",
            type: 1,
            levelName: "平阳之战",
            insId: 10007,
            exp: 500,
        },
        {
            name: "周泰",
            level: 5,
            hp: 950,
            atk: 700,
            capacity: 30,
            general: "方悦_俞涉_韩德_刑道荣_颜良_文丑_荀攸_贾诩",
            type: 2,
            levelName: "江夏之战",
            insId: 10008,
            exp: 550,
        },
    ];
    return LevelCfg;
}());
__reflect(LevelCfg.prototype, "LevelCfg");
//# sourceMappingURL=LevelCfg.js.map
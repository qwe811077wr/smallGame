var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SkillCfg = (function () {
    function SkillCfg() {
    }
    SkillCfg.skillCfg = [
        {
            icon: "skill_icon_1_png",
            sname: "炎轮",
            desc: "召唤多个火焰轮,攻击范围内2个敌人",
            skillId: 100000,
            cost: 100,
            damage: 2,
            dmgHp: 130
        },
        {
            icon: "skill_icon_2_png",
            sname: "神罚",
            desc: "召唤天外陨石，落地攻击范围内3个敌人",
            skillId: 100001,
            cost: 200,
            damage: 3,
            dmgHp: 150
        },
        {
            icon: "skill_icon_3_png",
            sname: "龙卷",
            desc: "战场吹起无数龙卷风,对周围4个敌人造成伤害",
            skillId: 100002,
            cost: 300,
            damage: 4,
            dmgHp: 170
        },
        {
            icon: "skill_icon_4_png",
            sname: "浪涌",
            desc: "战场涌起浪潮，对周围5个敌人造成伤害",
            skillId: 100003,
            cost: 400,
            damage: 5,
            dmgHp: 190
        },
        {
            icon: "skill_icon_5_png",
            sname: "光暴",
            desc: "凝聚能量,对周围6个敌人造成伤害",
            skillId: 100004,
            cost: 500,
            damage: 6,
            dmgHp: 210
        },
        {
            icon: "skill_icon_6_png",
            sname: "无影拳",
            desc: "释放无数拳影攻击周围7个敌人",
            skillId: 100005,
            cost: 600,
            damage: 7,
            dmgHp: 230
        }
    ];
    return SkillCfg;
}());
__reflect(SkillCfg.prototype, "SkillCfg");
//# sourceMappingURL=SkillCfg.js.map
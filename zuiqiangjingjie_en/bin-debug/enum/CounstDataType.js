/**
 * Custom data type And enumeration
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ActionState = (function () {
    function ActionState() {
    }
    ActionState.RUN = "run";
    ActionState.ATTACK = "attack";
    ActionState.DEAD = 'dead';
    ActionState.STAND = "stand";
    ActionState.HIT = "hit";
    return ActionState;
}());
__reflect(ActionState.prototype, "ActionState");
var ActionEnum;
(function (ActionEnum) {
    ActionEnum[ActionEnum["run"] = 0] = "run";
    ActionEnum[ActionEnum["attack"] = 1] = "attack";
    ActionEnum[ActionEnum["dead"] = 2] = "dead";
    ActionEnum[ActionEnum["stand"] = 3] = "stand";
})(ActionEnum || (ActionEnum = {}));
var EntityType;
(function (EntityType) {
    EntityType[EntityType["enemy"] = 0] = "enemy";
    EntityType[EntityType["energy"] = 1] = "energy";
})(EntityType || (EntityType = {}));
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["TOP"] = 1] = "TOP";
    DirectionEnum[DirectionEnum["TR"] = 2] = "TR";
    DirectionEnum[DirectionEnum["RIGHT"] = 3] = "RIGHT";
    DirectionEnum[DirectionEnum["RB"] = 4] = "RB";
    DirectionEnum[DirectionEnum["BOTTOM"] = 5] = "BOTTOM";
})(DirectionEnum || (DirectionEnum = {}));
var SoldierType;
(function (SoldierType) {
    /**Archer */
    SoldierType[SoldierType["SOLDIER_GONG"] = 1] = "SOLDIER_GONG";
    /**Infantry */
    SoldierType[SoldierType["SOLDIER_BU"] = 2] = "SOLDIER_BU";
    /**cavalry */
    SoldierType[SoldierType["SOLDIER_QI"] = 3] = "SOLDIER_QI";
})(SoldierType || (SoldierType = {}));
//# sourceMappingURL=CounstDataType.js.map
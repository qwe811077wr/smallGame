var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SoldierEntity = (function (_super) {
    __extends(SoldierEntity, _super);
    function SoldierEntity() {
        var _this = _super.call(this) || this;
        //移动速度 s为单位 。 v*t = d 
        _this.curState = ActionState.STAND;
        _this.ObjectPoolKey = "SoldierEntity";
        _this.general = false;
        //克制攻击力
        _this.restriceAtk = 0;
        return _this;
    }
    SoldierEntity.prototype.initialize = function () {
    };
    SoldierEntity.prototype.setSoldierData = function (camp, res, id, _state) {
        this._camp = camp;
        this.soldierAttr = SoldierAttrCfg.attrCfg[id];
        this.scaleX = this.scaleY = 0.7;
        if (res == "shanzei") {
            this.scaleX = this.scaleY = 0.8;
        }
        if (this.general) {
            //当前是将领 基础属性增加
            this.soldierAttr.hp = this.attrCfg.hp;
            this.soldierAttr.atk = this.attrCfg.atk;
        }
        this._typeId = id;
        if (this._typeId == SoldierType.QI && !this.general) {
            this.scaleX = this.scaleY = 0.5;
        }
        if (_state == 2) {
            //打bioss
            this.scaleX = this.scaleY = 1;
        }
        this.hp = this.thp = this.soldierAttr.hp;
        this.w = this.soldierAttr.w;
        this.h = this.soldierAttr.h;
        this._direc = this._camp == 1 ? 1 : -1;
        this._res = "" + SOLDIER + res;
        if (_state == 2) {
            //打boss
            this._res = "" + EFFECT + res;
        }
        this._mc = new MovieClip();
        // let scale:number = 0.7
        // if(id == SoldierType.SOLDIER_QI){
        // 	scale = 0.5;
        // }
        // let scale = id == SoldierType.SOLDIER_QI?0.5:0.7;
        // if(id ==-1){scale =1}
        // this.scaleX = this._mc.scaleY = scale;
        // if(id != -1){
        // 	this.scaleX *=this._direc;
        // }
        this.addChild(this._mc);
        this._mc.playFile(this._res, -1, null, false, ActionState.STAND);
        this.progressGroup = new eui.Group();
        this.progressGroup.width = 180;
        // this.progressGroup.scaleX = this.progressGroup.scaleY = 0.6;
        this.addChild(this.progressGroup);
        this.progressGroup.anchorOffsetX = this.progressGroup.width >> 1;
        var hpBg = new eui.Image();
        hpBg.source = "hp_progress_bg_png";
        this.progressGroup.addChild(hpBg);
        if (this.general) {
            this.progressGroup.y = -150;
            this.progressGroup.x = -10;
        }
        else {
            this.progressGroup.visible = false;
        }
        if (this.general) {
            var nametxt = new eui.Label;
            this.progressGroup.addChild(nametxt);
            nametxt.textColor = this.camp == 1 ? 0xf7f7f7 : 0xfc3434;
            nametxt.fontFamily = "yt";
            nametxt.size = 12;
            nametxt.text = this.attrCfg.name;
            nametxt.left = 70;
            nametxt.top = 6;
            var levelLab = new eui.Label();
            this.progressGroup.addChild(levelLab);
            levelLab.fontFamily = "yt";
            levelLab.size = 12;
            var level = camp == 1 ? this.attrCfg.level + 1 : this.attrCfg.level;
            levelLab.text = level.toString() + "级";
            levelLab.left = 110;
            levelLab.top = 6;
        }
        var barRes = camp == 1 ? "green_bar_png" : "red_bar_png";
        var barimg = new eui.Image();
        barimg.source = barRes;
        this._barimg = barimg;
        barimg.x = 58;
        barimg.y = 20;
        this.progressGroup.addChild(barimg);
        this.soldierCampImg = new eui.Image();
        this.progressGroup.addChild(this.soldierCampImg);
        this.soldierCampImg.source = "type_" + this._typeId + "_png";
        this.soldierCampImg.left = 40;
        this.soldierCampImg.top = 3;
        //测试代码
        // if(camp != 1 && this.general){
        // 	this.progressGroup.x = 0;
        // }
        //------
        this._watcher = eui.Binding.bindHandler(this, ["_hp"], this.onHpChange, this);
    };
    SoldierEntity.prototype.onHpChange = function (value) {
        if (!isNaN(value)) {
            var percent = value / this._thp;
            this._barimg.width = percent * 116;
        }
    };
    /**执行攻击动作 */
    SoldierEntity.prototype.execAtkAction = function () {
        // if(GameApp.battleState == false){return}
        if (this._atkTar && !this._atkTar._isDead && this.isInAtkDis()) {
            if (this.curState != ActionState.ATTACK) {
                this.curState = ActionState.ATTACK;
                egret.Tween.removeTweens(this);
                this._mc.playFile(this._res, 1, null, false, ActionState.ATTACK);
                if (this._typeId == SoldierType.ARROW) {
                    this.createArrow();
                }
                //当前实体执行攻击动作 目标实体血量值减少
                var self_1 = this;
                var timeout_1 = setTimeout(function () {
                    clearTimeout(timeout_1);
                    if (self_1 && self_1._mc) {
                        self_1.curState = ActionState.STAND;
                        self_1._mc.playFile(self_1._res, -1, null, false, ActionState.RUN);
                    }
                    if (self_1 && self_1._atkTar) {
                        var index = (Math.random() * 15 + 5) >> 0;
                        var direct = ((Math.random() * 100) >> 0) >= 50 ? -1 : 1;
                        var atk = self_1.soldierAttr.atk - self_1.restriceAtk + direct * index;
                        if (GameApp.curBattleLevel == 1 && self_1.camp == -1) {
                            atk = 30;
                        }
                        self_1._atkTar.reduceHp(atk);
                    }
                }, 700);
            }
        }
    };
    SoldierEntity.prototype.createArrow = function () {
        var img = new eui.Image();
        img.source = "arrow_png";
        this.parent.addChild(img);
        img.anchorOffsetX = 20;
        img.scaleX = -this.camp;
        var angle = Math.atan2(this.atkTar.y - this.y, this.atkTar.x - this.x) * 180 / Math.PI;
        img.rotation = angle;
        img.x = this.x;
        img.y = this.y - (this.h >> 1);
        egret.Tween.get(img).to({ x: this._atkTar.x, y: this._atkTar.y }, 400).call(function () {
            egret.Tween.removeTweens(img);
            img.parent.removeChild(img);
        }, this);
    };
    /**等待移动状态 */
    SoldierEntity.prototype.waitMoveAction = function () {
        if (this.curState != ActionState.RUN) {
            this.curState = ActionState.RUN;
            this._mc.playFile(this._res, -1, null, false, ActionState.RUN);
        }
        egret.Tween.removeTweens(this);
    };
    /**执行y轴一个身位的移动 */
    SoldierEntity.prototype.execYmoveAction = function (dit, dis) {
        egret.Tween.removeTweens(this);
        if (this.curState != ActionState.RUN) {
            this.curState = ActionState.RUN;
            this._mc.playFile(this._res, -1, null, false, ActionState.RUN);
        }
        egret.Tween.get(this).to({ y: dis }, 600).call(function () {
            // egret.Tween.removeTweens(this);
        });
    };
    /**执行前往目标附近位置 */
    SoldierEntity.prototype.execMoveAction = function (xy, cb, thisarg, isquick) {
        var _this = this;
        if (isquick === void 0) { isquick = true; }
        if (this.curState != ActionState.RUN) {
            this.curState = ActionState.RUN;
            this._mc.playFile(this._res, -1, null, false, ActionState.RUN);
        }
        if (xy) {
            this.curState = ActionState.RUN;
            this._mc.playFile(this._res, -1, null, false, ActionState.RUN);
            var startP = new egret.Point(this.x, this.y);
            var endP = new egret.Point(xy.x, xy.y);
            var distance = Math.sqrt(Math.pow(startP.x - endP.x, 2) + Math.pow(startP.y - endP.y, 2));
            var time = distance / this.soldierAttr.SPD;
            // let useTime:number = time*1000;
            // if(!this.general && isquick){
            // 	useTime = time*500;
            // }
            egret.Tween.get(this).to({ x: xy.x, y: xy.y }, time * 1000).call(function () {
                egret.Tween.removeTweens(_this);
                _this.curState = ActionState.STAND;
                _this._mc.playFile(_this._res, -1, null, false, ActionState.STAND);
                if (cb && thisarg) {
                    cb.call(thisarg);
                }
            });
        }
        else {
            if (this && this._atkTar && !this._atkTar.isDead) {
                var startP = new egret.Point(this.x, this.y);
                var endP = new egret.Point(this._atkTar.x, this._atkTar.y);
                var distance = Math.sqrt(Math.pow(startP.x - endP.x, 2) + Math.pow(startP.y - endP.y, 2));
                egret.Tween.removeTweens(this);
                var time = distance / this.soldierAttr.SPD;
                egret.Tween.get(this, { loop: false, onChange: function () {
                        if (_this.isInAtkDis()) {
                            egret.Tween.removeTweens(_this);
                        }
                    }, onChangeObj: this }).to({ x: this._atkTar.x, y: this._atkTar.y }, time * 1000).call(function () {
                    egret.Tween.removeTweens(_this);
                });
            }
        }
    };
    /**执行站立状态 */
    SoldierEntity.prototype.execStandAction = function () {
        this.curState = ActionState.STAND;
        this._mc.playFile(this._res, -1, null, false, ActionState.STAND);
    };
    /**获取到目标位置的距离 是否达到攻击距离 */
    SoldierEntity.prototype.isInAtkDis = function () {
        if (this && this._atkTar && !this._atkTar.isDead) {
            var startP = new egret.Point(this.x, this.y);
            var endP = new egret.Point(this._atkTar.x, this._atkTar.y);
            var distance = Math.sqrt(Math.pow(endP.x - startP.x, 2) + Math.pow(endP.y - startP.y, 2));
            return Math.abs(distance) <= this.soldierAttr.atkDis;
        }
        return false;
    };
    /**锁定目标 */
    SoldierEntity.prototype.lookAt = function (_atkTar, isNew) {
        if (isNew === void 0) { isNew = false; }
        this.addAttrRestrict();
        if (isNew) {
            this._atkTar = _atkTar;
            return;
        }
        if (!this._atkTar || (this._atkTar && this._atkTar._isDead)) {
            //重新锁定目标
            this._atkTar = _atkTar;
        }
        else {
            return;
        }
    };
    Object.defineProperty(SoldierEntity.prototype, "isDead", {
        get: function () {
            return this._isDead;
        },
        enumerable: true,
        configurable: true
    });
    SoldierEntity.prototype.dispose = function () {
        // ObjectPool.push(this);
        this._mc.playFile(this._res, 1, null, true, ActionState.DEAD);
        if (this._watcher) {
            this._watcher.unwatch();
        }
        var self = this;
        var timeout = setTimeout(function () {
            clearTimeout(timeout);
            self._atkTar = null;
            if (self && self._mc) {
                self.removeChild(self._mc);
                self._mc = null;
            }
            if (self && self.parent) {
                self.parent.removeChild(self);
            }
        }, 600);
    };
    SoldierEntity.prototype.addAttrRestrict = function () {
        if (!this._atkTar) {
            return;
        }
        if (this._typeId == SoldierType.ARROW) {
            //当前我是弓箭手 克制盾 被克制骑兵
            if (this._atkTar._typeId == SoldierType.QI) {
                this.restriceAtk = 50;
            }
            else if (this._atkTar._typeId == SoldierType.SHIELD) {
                this.restriceAtk = -50;
            }
            else {
                this.restriceAtk = 0;
            }
        }
        else if (this._typeId == SoldierType.QI) {
            //当前我是骑兵
            if (this._atkTar._typeId == SoldierType.ARROW) {
                this.restriceAtk = -50;
            }
            else if (this._atkTar._typeId == SoldierType.SHIELD) {
                this.restriceAtk = 50;
            }
            else {
                this.restriceAtk = 0;
            }
        }
        else if (this._typeId == SoldierType.SHIELD) {
            if (this._atkTar._typeId == SoldierType.ARROW) {
                this.restriceAtk = 50;
            }
            else if (this._atkTar._typeId == SoldierType.QI) {
                this.restriceAtk = -50;
            }
            else {
                this.restriceAtk = 0;
            }
        }
    };
    Object.defineProperty(SoldierEntity.prototype, "hp", {
        set: function (value) {
            this._hp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoldierEntity.prototype, "thp", {
        set: function (value) {
            this._thp = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoldierEntity.prototype, "atkTar", {
        get: function () {
            return this._atkTar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoldierEntity.prototype, "buffAtk", {
        set: function (value) {
            this.buffAttack = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoldierEntity.prototype, "buffHP", {
        set: function (value) {
            this.buffHp = value;
        },
        enumerable: true,
        configurable: true
    });
    return SoldierEntity;
}(BaseEntity));
__reflect(SoldierEntity.prototype, "SoldierEntity");
var SoldierType;
(function (SoldierType) {
    /**弓 */
    SoldierType[SoldierType["ARROW"] = 0] = "ARROW";
    /**骑兵 */
    SoldierType[SoldierType["QI"] = 1] = "QI";
    /**遁甲 */
    SoldierType[SoldierType["SHIELD"] = 2] = "SHIELD";
})(SoldierType || (SoldierType = {}));
//# sourceMappingURL=SoldierEntity.js.map
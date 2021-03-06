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
/**
 * Battle progress pop-up
 */
var BattleProgressPop = (function (_super) {
    __extends(BattleProgressPop, _super);
    function BattleProgressPop() {
        var _this = _super.call(this) || this;
        _this.cost = [100, 200, 300];
        _this.costMedal = 5;
        return _this;
    }
    BattleProgressPop.prototype.open = function () {
        var _this = this;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        this.levelGroup["autoSize"]();
        // let precentw:number = StageUtils.inst().getWidth()/1334;
        this.levelGroup.x = StageUtils.inst().getWidth() >> 1;
        this.levelGroup.y = StageUtils.inst().getHeight() >> 1;
        var scaleX = this.levelGroup.scaleX;
        var scaleY = this.levelGroup.scaleY;
        this.levelGroup.scaleX = this.levelGroup.scaleY = 0;
        this.touchEnabled = false;
        this.touchChildren = false;
        this.levelGroup.alpha = 0;
        egret.Tween.get(this.levelGroup).to({ scaleX: scaleX, scaleY: scaleY, alpha: 1 }, 600, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.levelGroup);
            _this.touchEnabled = true;
            _this.touchChildren = true;
            if (GameApp.guideView) {
                GameApp.guideView.nextStep({ id: "1_2", comObj: _this.enterBtn, width: _this.enterBtn.width, height: _this.enterBtn.height });
            }
        }, this);
        this.addTouchEvent(this.returnBtn, this.onReturn, true);
        this.addTouchEvent(this.enterBtn, this.onEnter, true);
        var cityId = param[0].cityId;
        this.cityInfo = GlobalFun.getCityInfo(cityId);
        this.showProgress();
        MessageManager.inst().addListener(CustomEvt.GUIDE_CLICK_BATTLE, this.onClickBat, this);
    };
    BattleProgressPop.prototype.onClickBat = function () {
        this.challenge();
    };
    BattleProgressPop.prototype.onReturn = function () {
        var _this = this;
        egret.Tween.get(this.levelGroup).to({ scaleX: 0, scaleY: 0, alpha: 0 }, 600, egret.Ease.backIn).call(function () {
            egret.Tween.removeTweens(_this.levelGroup);
            ViewManager.inst().close(BattleProgressPop);
        }, this);
    };
    BattleProgressPop.prototype.onEnter = function () {
        this.challenge();
    };
    /**Display the level of customs clearance */
    BattleProgressPop.prototype.showProgress = function () {
        var passlevel = this.cityInfo.passLevel;
        for (var i = 1; i <= 4; i++) {
            var nextLevel = passlevel + 1;
            if (i == nextLevel) {
                this.xuan_img.x = this["level_" + i].x + 7.66;
                this.xuan_img.y = this["level_" + i].y + 9.01;
                continue;
            }
            if (passlevel < i) {
                GlobalFun.filterToGrey(this["level_" + i]);
            }
            else if (passlevel >= i) {
                var dialog = this["level_" + i].getChildByName("dialog");
                if (!!dialog) {
                    dialog.visible = true;
                }
            }
        }
    };
    /**Challenge */
    BattleProgressPop.prototype.challenge = function () {
        var passlevel = this.cityInfo.passLevel;
        var nextLevel = passlevel + 1;
        var levelId = this.cityInfo.cityId + "_" + nextLevel;
        var str = "";
        var num = 0;
        if (nextLevel < 4) {
            var costGoods = this.cost[nextLevel - 1];
            if (costGoods > GameApp.goods) {
                UserTips.inst().showTips("Insufficient supplies");
                return;
            }
            str = "goods";
            num = costGoods;
            // GameApp.goods -= costGoods;
        }
        else if (nextLevel == 4) {
            if (this.costMedal > GameApp.medal) {
                UserTips.inst().showTips("Medal deficiency");
                return;
            }
            str = "medal";
            num = this.costMedal;
            // GameApp.medal -= this.costMedal;
        }
        GameApp.battleMark = levelId;
        // GameApp.year += 1;
        //Open the final battle interface
        this.onReturn();
        GameCfg.chapter = GameApp.chapterid;
        GameCfg.level = GameApp.levelid;
        ViewManager.inst().close(GameMainView);
        ViewManager.inst().open(DoubtfulView, [{ key: str, num: num }]);
    };
    BattleProgressPop.prototype.close = function () {
        this.removeTouchEvent(this.returnBtn, this.onReturn);
        this.removeTouchEvent(this.enterBtn, this.onEnter);
        MessageManager.inst().removeListener(CustomEvt.GUIDE_CLICK_BATTLE, this.onClickBat, this);
    };
    return BattleProgressPop;
}(BaseEuiView));
__reflect(BattleProgressPop.prototype, "BattleProgressPop");
ViewManager.inst().reg(BattleProgressPop, LayerManager.UI_Pop);
//# sourceMappingURL=BattleProgressPop.js.map
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
 * Created by yangsong on 15-1-14.
 * Sound管理类
 */
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    /**
     * 构造函数
     */
    function SoundManager() {
        var _this = _super.call(this) || this;
        _this.bgOn = true;
        _this.effectOn = true;
        _this.effectOn2 = true;
        _this.bgVolume = 0.7;
        _this.effectVolume = 0.7;
        _this.bg = new SoundBg();
        _this.bg.setVolume(_this.bgVolume);
        _this.effect = new SoundEffects();
        _this.effect.setVolume(_this.effectVolume);
        _this.otherEffect = new SoundEffects();
        _this.otherEffect.setVolume(_this.effectVolume);
        return _this;
    }
    SoundManager.inst = function () {
        var _inst = _super.single.call(this);
        return _inst;
    };
    /**
     * 播放音效
     * @param effectName
     */
    SoundManager.prototype.playEffect = function (effectName) {
        if (!this.effectOn)
            return;
        this.effect.play(effectName);
    };
    /**
     * 播放额外的音效
     */
    SoundManager.prototype.playOtherEffect = function (effName) {
        if (!this.effectOn2) {
            return;
        }
        this.otherEffect.play(effName);
    };
    /**
     * 停止音效
     */
    SoundManager.prototype.stopEffect = function () {
        if (!this.effectOn)
            return;
        this.effect.stop();
    };
    /**
     * 停止音效
     */
    SoundManager.prototype.stopOtherEffect = function () {
        if (!this.effectOn2)
            return;
        this.otherEffect.stop();
    };
    /**
     * 播放背景音乐
     * @param key
     */
    SoundManager.prototype.playBg = function (bgName) {
        this.currBg = bgName;
        if (!this.bgOn)
            return;
        if (this.bg) {
            if (Main.DUBUGGER) {
                Main.txt.text += "\n bgname " + bgName;
            }
            this.bg.play(bgName);
        }
    };
    /**
     * 停止背景音乐
     */
    SoundManager.prototype.stopBg = function () {
        this.bg.stop();
    };
    //点击播放
    SoundManager.prototype.touchBg = function () {
        if (egret && egret.Capabilities && egret.Capabilities.isMobile && egret.Capabilities.os == 'iOS') {
            if (this.bg) {
                if (Main.DUBUGGER) {
                    Main.txt.text += "\n touch play ";
                }
                this.bg.touchPlay();
            }
        }
    };
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    SoundManager.prototype.setEffectOn = function ($isOn) {
        this.effectOn = $isOn;
    };
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    SoundManager.prototype.setOtherEffectOn = function ($isOn) {
        this.effectOn2 = $isOn;
    };
    /**
     * 设置背景音乐是否开启
     * @param $isOn
     */
    SoundManager.prototype.setBgOn = function ($isOn) {
        this.bgOn = $isOn;
        if (!this.bgOn) {
            this.stopBg();
        }
        else {
            if (this.currBg) {
                this.playBg(this.currBg);
            }
        }
    };
    /**
     * 设置背景音乐音量
     * @param volume
     */
    SoundManager.prototype.setBgVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.bgVolume = volume;
        this.bg.setVolume(this.bgVolume);
    };
    /**
     * 获取背景音乐音量
     * @returns {number}
     */
    SoundManager.prototype.getBgVolume = function () {
        return this.bgVolume;
    };
    /**
     * 设置音效音量
     * @param volume
     */
    SoundManager.prototype.setEffectVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.effectVolume = volume;
        this.effect.setVolume(this.effectVolume);
        this.otherEffect.setVolume(this.effectVolume);
    };
    /**
     * 获取音效音量
     * @returns {number}
     */
    SoundManager.prototype.getEffectVolume = function () {
        return this.effectVolume;
    };
    /**
     * 音乐文件清理时间
     * @type {number}
     */
    SoundManager.CLEAR_TIME = 3 * 60 * 1000;
    return SoundManager;
}(BaseClass));
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map
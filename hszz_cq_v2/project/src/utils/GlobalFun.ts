/**
 * 共用方法
 */
class GlobalFun {
	public constructor() {
	}
    
	public static getOption(key:string):string {
        if (window.location) {
            let search = location.search;
            if (search == "") {
                return "";
            }
            search = search.slice(1);
            let searchArr = search.split("&");
            let length = searchArr.length;
            for (let i:number = 0; i < length; i++) {
                let str = searchArr[i];
                let arr = str.split("=");
                if (arr[0] == key) {
                    return arr[1];
                }
            }
        }
        return "";
    } 
	private static initX:number;                //初始位置
    private static initY: number;  
    private static target:egret.DisplayObject;  //震动目标
    private static maxDis: number;              //震动距离
    private static count: number = 0;           //计时器次数
    private static rate: number;                //一秒震动次数
    private static timer:egret.Timer = new egret.Timer(1000);
	/**
     * 震动显示对象
     * @param        target    震动目标对象
     * @param        time      震动持续时长（秒）
     * @param        rate      震动频率(一秒震动多少次)
     * @param        maxDis    震动最大距离
     */
	public static shakeObj(target: egret.DisplayObject,time: number,rate: number,maxDis: number):void{
		this.target = target;
        this.initX = target.x;
        this.initY = target.y;
        this.maxDis = maxDis;
        this.count = time * rate;
        this.rate = rate;
        this.timer.delay = 1000/rate;
        this.timer.repeatCount = this.count;
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.shaking, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this);
        this.timer.reset();
        this.timer.start();
	}
	private static shaking(): void {
        egret.Tween.removeTweens(this.target);
        this.target.x = this.initX - this.maxDis + Math.random()*this.maxDis*2;
        this.target.y = this.initY - this.maxDis +  Math.random()*this.maxDis*2;
        egret.Tween.get(this.target).to({x:this.initX, y:this.initY},999/this.rate);    
    }
     
    private static shakeComplete(): void {
        if(this.target){
            egret.Tween.removeTweens(this.target);
            this.target.x = this.initX;
            this.target.y = this.initY;
        }
        this.timer.removeEventListener(egret.TimerEvent.TIMER,this.shaking,this);
        this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,this.shakeComplete,this);
    }
    /**外法光 */
    public static lighting(obj:egret.DisplayObject,color:number = 0x33CCFF,boo:boolean = false):void{
        var color:number = color;        /// 光晕的颜色，十六进制，不包含透明度
        var alpha:number = 0.8;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
        var blurX:number = 35;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY:number = 35;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength:number = 2;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality:number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
        var inner:boolean = boo;            /// 指定发光是否为内侧发光，暂未实现
        var knockout:boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
        var glowFilter:egret.GlowFilter = new egret.GlowFilter( color, alpha, blurX, blurY,
            strength, quality, inner, knockout );
        obj.filters = [glowFilter]
        
        egret.Tween.get(glowFilter,{loop:true}).to({alpha:0.2},1000).to({alpha:0.8},1000);
    }
    /**阴影 */
    public static shadowFilter(obj:egret.DisplayObject,color:number = 0x000000):void{
        var distance:number = 20;           /// 阴影的偏移距离，以像素为单位
        var angle:number = 45;              /// 阴影的角度，0 到 360 度
        var color:number = color;        /// 阴影的颜色，不包含透明度
        var alpha:number = 0.9;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX:number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY:number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength:number = 0.65;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality:number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
        var inner:boolean = false;            /// 指定发光是否为内侧发光
        var knockout:boolean = false;            /// 指定对象是否具有挖空效果
        var dropShadowFilter:egret.DropShadowFilter =  new egret.DropShadowFilter( distance, angle, color, alpha, blurX, blurY,
            strength, quality, inner, knockout );
        obj.filters = [dropShadowFilter];
    }

	/**停止震动 */
    public static stop(){
        this.shakeComplete();
    }
    public static filterToGrey(tar:egret.DisplayObject):void{
        var colorMatrix = [
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0,0,0,1,0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        tar.filters = [colorFlilter];
    }
    public static skillBuffFilter(buffid,tar){
        var colorMatrix = [];
        switch(buffid){
            case 10000:
                //紫色 --狂暴
                colorMatrix = [
                    1,0,0,0,196,
                    0,1,0,0,64,
                    0,0,1,0,201,
                    0,0,0,1,0
                ]
                break;
            case 10001:
                //智谋-- 绿色
                colorMatrix = [
                    1,0,0,0,102,
                    0,1,0,0,158,
                    0,0,1,0,39,
                    0,0,0,1,0
                ]
                break;
            case 10002:
                //防御--黄色
                colorMatrix = [
                    1,0,0,0,155,
                    0,1,0,0,128,
                    0,0,1,0,26,
                    0,0,0,1,0
                ]
                break;
        }
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        tar.filters = [colorFlilter];
    }
    public static clearFilters(tar:egret.DisplayObject):void{
        tar.filters = [];
    }
    /**发送到ios请求购买 */
    public static sendToNativePhurse(_data:{goodid:number,goodnum:number,goodtype:number,price:number}):void{
        if(window["webkit"] &&window["webkit"].messageHandlers && window["webkit"].messageHandlers.payGood)
        {
            window["webkit"].messageHandlers.payGood.postMessage(JSON.stringify(_data));
        }
    }
    /**发送ios加载完成 */
    public static sendToNativeLoadEnd():void{
        if(window["webkit"] &&window["webkit"].messageHandlers && window["webkit"].messageHandlers.loadingFinish)
        {
            window["webkit"].messageHandlers.loadingFinish.postMessage({});
        }
    }
    /**刷新拥有的卡牌数据 */
    public static refreshCardData(attr?:CardVo):void{
        let cardData:CardVo[] = GlobalFun.getCardData();
        let newData:CardVo[] = [];
        let isown:boolean = false;
		for(let key  in cardData){
            if(attr){
                // let ownNum:number = cardData[key].ownNum;
                if(cardData[key].id == attr.id){
                    isown = true;
                    // cardData[key].ownNum += attr.ownNum;
                    cardData[key] = attr;
                }
            }
            if(cardData[key].ownNum > 0){
                newData.push(cardData[key])
            }
		}
        if(!isown && attr && attr.ownNum > 0){
            newData.push(attr);
        }
        GameApp.ownCards = newData;
        egret.localStorage.setItem(LocalStorageEnum.ROLE_OWNER_CARDIDS,JSON.stringify(newData));
        MessageManager.inst().dispatch("CardDataRefresh")
    }
    /**随机掉落数据 */
    public static dropItems():CardVo[]{
        let cards:CardVo[] = [];
        let cardCfgs:any = hszz.CardConfig.cfgs;
        let dropCards:CardVo[] = [];
        let num:number = (Math.random()*2+1)>>0;
        for(let i:number = 0;i<num;i++){
            let index:number = (Math.random()*100)>>0;
            if(index <= 92){
                cards = [];
            }else if(index <= 93){
                cards = cardCfgs[0];
            }else if(index <= 94){
                cards = cardCfgs[6];
            }
            else if(index <= 95){
                cards = cardCfgs[1];
            }else if(index <= 96){
                cards = cardCfgs[2];
            }else if(index <= 97){
                cards = cardCfgs[3];
            }else if(index <= 98){
                cards = cardCfgs[4];
            }else {
                cards = cardCfgs[5];
            }
            if(cards.length){
                let cardIndex:number = (Math.random()*100)>>0;
                let card:CardVo;
                if(cardIndex <= 60){
                    card = cards[0];
                }else if(cardIndex <= 85){
                    card = cards[1];
                }else if(cardIndex <= 95){
                    card = cards[2];
                }else{
                    card = cards[3];
                }
                card.ownNum = 0;
                dropCards.push(card);
            }
            
        }
        return dropCards;
    }
    /**根据id获取卡牌数据 */
    public static getCardDataFromId(id:number):CardVo{
        let cardData:CardVo[] = this.getCardData();
        for(let key in cardData){
            if(cardData[key].id == id){
                return cardData[key];
            }
        }
        return null;
    }
    /**根据id 和属性值 获取基础增加值 */
    public static getAttrAddValue(id:number,attr:string):number{
        let value:number = 0;
        for(let key in hszz.CardConfig.cfgs){
            if(hszz.CardConfig.cfgs[key].id == id){
                value = hszz.CardConfig.cfgs[key][attr];
            }
        }
        return value*0.1;
    }
    /**获取人物目前拥有的卡牌数据 */
    public static getCardData():CardVo[]{
        return JSON.parse(egret.localStorage.getItem(LocalStorageEnum.ROLE_OWNER_CARDIDS));
    }
    /**购买返回 */
    public static payCallBack(_cb):void{
        GameApp.pay_cbDdata = _cb;
    }
    /**
     * 创建技能特效显示
     * @param id 技能id
     * @param parent 父级容器
     * @param loopCount 循环次数
     * @param pos 位置
     * */
    public static createSkillEff(camp:number,res:string,parent:egret.DisplayObjectContainer,loopCount:number,xy:XY):void{
        // let skillCfg:any = SkillCfg.skillCfg[camp];
        // let skillCfg:any
        // let curUseSkill:any;
        let loop:boolean = true;

        // if(id == 100001 || id == 100002 || id == 100003 || id == 100004){
        //     loop = true;
        // }
        // for(let key in skillCfg){
        //     if(skillCfg[key].skillId == id){
        //         curUseSkill = skillCfg[key];
        //         break;
        //     }
        // }

        // let textInfo:eui.Label =new eui.Label();
        // textInfo.size = 20;
		// textInfo.scaleX = textInfo.scaleY = 1.5;
		// textInfo.textColor = 0xffffff
		// parent.addChild(textInfo);
        // textInfo.x = pos.x - 70;
        // textInfo.y = pos.y - 150;
        // textInfo.text = curUseSkill.skillName;
        // egret.Tween.get(textInfo).to({scaleX:1,scaleY:1},600,egret.Ease.circOut).wait(500).call(()=>{
		// 	egret.Tween.removeTweens(textInfo);
		// 	if(textInfo && textInfo.parent){
		// 		textInfo.parent.removeChild(textInfo);
		// 	}
		// 	textInfo = null;
		// },this)

        if(loop){
            let count = 1;
            let minx:number = xy.x - (StageUtils.inst().getWidth()>>1) + 100;
            let maxx:number = xy.x + (StageUtils.inst().getWidth()>>1) - 100;
            let miny:number = xy.y - (StageUtils.inst().getHeight()>>1) + 100;
            let maxy:number = xy.y + (StageUtils.inst().getHeight()>>1) - 100;
            let mc:MovieClip = new MovieClip();
            mc.scaleX = mc.scaleY = 1;
            parent.addChild(mc);
            mc.playFile(`${SKILL_EFF}${res}`,loopCount,null,true);
            mc.x = (Math.random()*(maxx - minx)+minx)>>0;
            mc.y = (Math.random()*(maxy - miny)+miny)>>0;
            let interVal = setInterval(()=>{
                count += 1;
                let mc:MovieClip = new MovieClip();
                mc.scaleX = mc.scaleY = 0.7;
                parent.addChild(mc);
                mc.playFile(`${SKILL_EFF}${res}`,loopCount,null,true);
                mc.x = (Math.random()*(maxx - minx)+minx)>>0;
                mc.y = (Math.random()*(maxy - miny)+miny)>>0;
                if(count >= 15){
                    clearInterval(interVal);
                }
            },100)
        }else{
            // let mc:MovieClip = new MovieClip();
            // mc.scaleX = mc.scaleY = 1;
            // parent.addChild(mc);
            // mc.playFile(`${SKILL_EFF}${curUseSkill.roleSkill}`,loopCount,null,true);
            // mc.x = pos.x;
            // mc.y = pos.y;
        }
    }
}


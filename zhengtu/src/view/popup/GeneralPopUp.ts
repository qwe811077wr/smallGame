class GeneralPopUp extends BaseEuiView{

	private content:eui.Group;
	private returnBtn:eui.Image;
	private scroller:eui.Scroller;
	private list:eui.List;
	private addSoldierBtn:eui.Image;

	private nameLab:eui.Label;
	private qianliLab:eui.Label;
	private levelLab:eui.Label;
	private expLab:eui.Label;
	private hpLab:eui.Label;
	private atkLab:eui.Label;
	private zhiliLab:eui.Label;
	private rongliangLab:eui.Label;

	private arrayCollect:eui.ArrayCollection;
	private selectIndex:number = 0;
	private allGeneralArr:any[]

	private soldire0NumLab:eui.Label;
	private soldire1NumLab:eui.Label;
	private soldire2NumLab:eui.Label;
	private fontBg:eui.Image;
	private roleImg:eui.Image;
	public constructor() {
		super();
	}
	public open(...param):void{
		egret.Tween.get(this.content).to({verticalCenter:0},600,egret.Ease.circOut).call(()=>{
			egret.Tween.removeTweens(this.content);
			if(GameApp.guilding){
				if(GameApp.waitStepId){
					ViewManager.inst().open(GuideView);
					GameApp.guildView = ViewManager.inst().getView(GuideView) as GuideView;
					GameApp.guildView.nextStep({id:GameApp.waitStepId,comObj:this.addSoldierBtn,width:88,height:31});
				}
			}
		})
		this.arrayCollect = new eui.ArrayCollection();
		this.list.itemRenderer = HeroAttrItem;
		this.list.dataProvider = this.arrayCollect;
		this.scroller.viewport = this.list;
		this.scroller.verticalScrollBar.visible = false;

		// 我的将 以及关卡的将
		let ownGeneralstr:string = egret.localStorage.getItem(LocalStorageEnum.OWN_GENERAL);
		// let otherGeneralstr:string = egret.localStorage.getItem(LocalStorageEnum.OTHER_GENERAL);
		// let shopGeneralstr:string = egret.localStorage.getItem(LocalStorageEnum.SHOP_GENERAL);

		// let otherGeneralArr:any[] = JSON.parse(otherGeneralstr);
		let ownGeneralArr:any[] = JSON.parse(ownGeneralstr).attr;
		// let shopGeneralArr:any[] = JSON.parse(shopGeneralstr);
		let allLockGeneralArr:any[] = [];
		let allUnlockGeneralArr:any[] = [];
		// otherGeneralArr = otherGeneralArr.concat(shopGeneralArr);
		for(let j:number = 0;j<ownGeneralArr.length;j++){
			ownGeneralArr[j].lock = true;
		}
		allLockGeneralArr = allLockGeneralArr.concat(ownGeneralArr);
		// for(let i:number = 0;i<otherGeneralArr.length;i++){
		// 	let boo = false;
		// 	for(let j:number = 0;j<ownGeneralArr.length;j++){
		// 		if(otherGeneralArr[i].insId == ownGeneralArr[j].insId){
		// 			boo = true;
		// 			break;
		// 		}
		// 	}
		// 	if(!boo){
		// 		otherGeneralArr[i].lock = false;
		// 		allUnlockGeneralArr.push(otherGeneralArr[i]);
		// 	}
		// }
		//所有武将 。顺序 。解锁的优先显示在前面
		this.allGeneralArr = allLockGeneralArr.concat(allUnlockGeneralArr);
		this.arrayCollect.source = this.allGeneralArr;

		this.addTouchEvent(this.addSoldierBtn,this.onAddSoldier,true);
		this.addTouchEvent(this.returnBtn,this.onReturn,true);

		this.refreshViewAttr();
		this.list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
		this.soldire0NumLab.text = GameApp.m_soldier0_num.toString();
		this.soldire1NumLab.text = GameApp.m_soldier1_num.toString();
		this.soldire2NumLab.text = GameApp.m_soldier2_num.toString();

		MessageManager.inst().addListener(CustomEvt.GUIDE_ADD_SOLDIER,this.onGuideAddSoldier,this);
	}
	private onGuideAddSoldier():void{
		this.onAddSoldier();
		GlobalFun.guideToNext();
	}
	private onItemTap(evt:eui.ItemTapEvent):void{
		this.selectIndex = evt.itemIndex;
		this.refreshViewAttr();
	}
	/**刷新界面将领对应属性 */
	private refreshViewAttr():void{
		let item:any = this.allGeneralArr[this.selectIndex];
		if(item){
			this.addSoldierBtn.visible = item.lock;
			this.nameLab.text = item.name;
			this.qianliLab.text = item.potential.toString();
			this.levelLab.text = (item.level + 1).toString();
			this.hpLab.text = item.hp.toString();
			this.atkLab.text = item.atk.toString();
			this.zhiliLab.text = item.brains.toString();
			this.rongliangLab.text = item.curCapacity+"/"+item.capacity;
			this.expLab.text = item.curExp+"/"+item.exp;
			this.fontBg.source = `soldier_${item.type}_font_bg_png`;
			this.roleImg.source = `general_body_${item.index}_png`;
		}
	}
	//根据将军的兵种 。去对应的兵营进行补兵
	private onAddSoldier():void{
		let item:any = this.allGeneralArr[this.selectIndex];
		if(item){
			let soldierNum = GameApp.inst()["soldier_"+item.type];
			let remainSoldier:number = item.capacity - item.curCapacity;
			if(!remainSoldier){
				UserTips.inst().showTips("当前士兵已满");
				if(GameApp.guilding){
					ViewManager.inst().close(GeneralPopUp);
					GameApp.nextStepId = null;
					GameApp.waitStepId = null;
					GameApp.guilding = false;
					 GameApp.guildView = null;
                    ViewManager.inst().close(GuideView);
				}
				return;
			}
			if(soldierNum < remainSoldier){
				//当前拥有的士兵 小于需要补全的士兵 
				item.curCapacity += GameApp.inst()["soldier_"+item.type];
				GameApp.inst()["soldier_"+item.type] = 0;
				GlobalFun.refreshHeroData(item.insId,["curCapacity"],[item.curCapacity]);
				if(GameApp.guilding){
					ViewManager.inst().close(GeneralPopUp);
					ViewManager.inst().open(SoldierCamp,[{type:item.type}]);
				}else{
					ViewManager.inst().open(CommonPopUp,[{type:item.type}]);
				}
				
			}else{
				//直接补满;
				GameApp.inst()["soldier_"+item.type] -= item.capacity;
				item.curCapacity = item.capacity;
				GlobalFun.refreshHeroData(item.insId,["curCapacity"],[item.capacity]);
			}
			this.rongliangLab.text = item.curCapacity+"/"+item.capacity;
			
		}
	}
	private onReturn():void{
		egret.Tween.get(this.content).to({verticalCenter:-600},600,egret.Ease.circOut).call(()=>{
			egret.Tween.removeTweens(this.content);
			ViewManager.inst().close(GeneralPopUp);
		})
	}
	public close():void{
		this.removeTouchEvent(this.returnBtn,this.onReturn);
		this.removeTouchEvent(this.addSoldierBtn,this.onAddSoldier);
		this.list.removeEventListener(eui.ItemTapEvent.ITEM_TAP,this.onItemTap,this);
	}
}
ViewManager.inst().reg(GeneralPopUp,LayerManager.UI_Pop);
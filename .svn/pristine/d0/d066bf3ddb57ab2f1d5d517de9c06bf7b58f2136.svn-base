module map {
	export class Cell extends egret.Sprite {
		private cellX:number;
		private cellY:number;
		private elementType:number; //类型
		private configId:number; 	//配置ID
		private fightBagIndex:number; //背包所在的格子位

		public constructor() {
			super();
			this.width = map.MapConst.cell_Width;
			this.height = map.MapConst.cell_Height;
			this.touchEnabled = true;
		}

		public getFightBagIndex():number{
			return this.fightBagIndex;
		}

		public setFightBagIndex(index:number):void{
			this.fightBagIndex = index;
		}

		public getElementType():number{
			return this.elementType;
		}

		public getConfigId():number{
			return this.configId;
		}

		public setBgImager(bgName:string):void {
			let sky = util.UIUtil.createBitmapByName(bgName);
			this.addChild(sky);
			let gameStage = Stores.getFrameManager().getGameStage();
			 
			sky.width = this.width;
			sky.height = this.height;
		}

		public setCellX(px:number):void{
			this.cellX = px;
		}

		public setCellY(py:number):void{
			this.cellY = py;
		}

		public initPoint(px:number,py:number,configId?:number):void{
			this.cellX = px;
			this.cellY = py;
			this.x = px * MapConst.cell_Width;
			this.y = py * MapConst.cell_Height;
			if(configId != null){
				this.initConfig(configId)
			}
		}

		public initConfig(configId:number):void{ 
			this.configId = configId;
			this.elementType = 3; //TODO 这个地方从配置表获得
		}


		public getCellX():number{
			return this.cellX;
		}

		public getCellY():number{
			return this.cellY;
		}

		public playerEffcts(type:number,callFunction?:Function){
			let bombEffects = new effects.Change2Bomb();
			bombEffects.playEffects(this,callFunction);
		}
	}
}
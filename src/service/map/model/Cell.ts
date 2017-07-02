module map {
	export class Cell extends egret.Sprite {
		private cellX:number;
		private cellY:number;
		
		public constructor() {
			super();
			this.width = map.MapConst.cell_Width;
			this.height = map.MapConst.cell_Height;
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

		public initPoint(px:number,py:number):void{
			this.cellX = px;
			this.cellY = py;
			this.x = px * MapConst.cell_Width;
			this.y = py * MapConst.cell_Height;
		}


		public getCellX():number{
			return this.cellX;
		}

		public getCellY():number{
			return this.cellY;
		}

		public playerEffcts(type:number){
			let bombEffects = new effects.Change2Bomb();
			bombEffects.initMovieClip(this);
		}
	}
}
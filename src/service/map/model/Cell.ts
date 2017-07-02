module map {
	export class Cell extends egret.Sprite {
		private px:number;
		private py:number;
		
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

		public setPx(px:number):void{
			this.px = px;
			this.x = 0;//util.UIUtil.getCoordX(px);
		}

		public setPy(py:number):void{
			this.py = py;
			this.y = 0;//util.UIUtil.getCoordY(py);
		}
		public getPx():number{
			return this.px;
		}

		public getPy():number{
			return this.px;
		}

		public playerEffcts(type:number){
			let bombEffects = new effects.Change2Bomb();
			bombEffects.initMovieClip(this);
		}
	}
}
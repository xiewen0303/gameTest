module map {
	/**
	 * 滑动背包的道具到战斗场景中
	 */
	export class MoveBagItemLayer extends egret.Sprite {
		public constructor() {
			super();
		}

		/**
		 * 初始化
		 */
		public init(bgWidth:number,bgHeight:number):void {
			this.graphics.beginFill(0,0);
			this.graphics.drawRect(0,0,bgWidth,bgHeight);
			this.graphics.endFill();
			this.touchEnabled = false;
			
			//this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Services.getMapService().moveFightBagBegin,this);
			this.addEventListener(egret.TouchEvent.TOUCH_MOVE,Services.getMapService().moveFightBagMove,this);
			this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().moveBagItemEnd,this);
		}
	}
}
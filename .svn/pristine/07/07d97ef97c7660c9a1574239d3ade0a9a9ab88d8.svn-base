module map {
	export class FightScane extends egret.Sprite {
		public touchBeginX:number;
		public touchBeginY:number;
		public needMove:boolean = false; //是否需要移动

		public constructor() {
			super();
		}

		public init(x:number,y:number,width:number,height:number):void {
			this.x = x;
			this.y = y;
			this.graphics.beginFill(0,0);
			this.graphics.drawRect(0,0,width,height);
			this.graphics.endFill();
			this.touchEnabled = true;

			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Services.getMapService().touchBegin,this);
			  // this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().touchEnd,this);
			this.addEventListener(egret.TouchEvent.TOUCH_MOVE,Services.getMapService().touchMove,this);

			this.addEventListener(egret.TouchEvent.TOUCH_TAP,Services.getMapService().touchTap,this);
		}

	}
}
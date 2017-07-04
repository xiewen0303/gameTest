module map {
	/**
	 * 主线地图场景
	 */
	export class MainMapLayer extends frame.MapBaseLayer {
		public touchBeginX:number;
		public touchBeginY:number;
		public needMove:boolean = false; //是否需要移动

		public constructor() {
			super();
			this.init();
		}
		
		/**
		 * 初始化
		 */
		private init():void {
			this.setBg("bg_014_png");
			
			let mainMapFrame = new MainMapFrame();
			mainMapFrame.width = 600;
			mainMapFrame.height = 600;
			
			mainMapFrame.x = 20;
			mainMapFrame.y = 240;
			this.addChild(mainMapFrame);

			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Services.getMapService().touchBegin,this);
			// this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().touchEnd,this);
			this.addEventListener(egret.TouchEvent.TOUCH_MOVE,Services.getMapService().touchMove,this);
		}

		public getId():frame.FrameType {
			return frame.FrameType.main_frame;
		}
	}
}
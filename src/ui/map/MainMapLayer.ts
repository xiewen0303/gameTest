module map {
	/**
	 * 主线地图场景
	 */
	export class MainMapLayer extends frame.MapBaseLayer {
		public touchBeginX:number;
		public touchBeginY:number;

		public constructor() {
			super();
			this.init();
		}
		
		/**
		 * 初始化
		 */
		private init():void {
			//TODO this.setBg("bg_014_png");

			let mainMapFrame = new MainMapFrame();
			this.addChild(mainMapFrame);

			// mainMapFrame.addEventListener(egret.TouchEvent.TOUCH_TAP,Services.getMapService().move,this);
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Services.getMapService().touchBegin,this);
			this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().touchEnd,this);
		}

		public getId():frame.FrameType {
			return frame.FrameType.main_frame;
		}
	}
}
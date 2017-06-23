module map {
	/**
	 * 主线地图场景
	 */
	export class MainMapLayer extends frame.MapBaseLayer {
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
			this.addChild(mainMapFrame);
		}

		public getId():frame.FrameType {
			return frame.FrameType.main_frame;
		}
	}
}
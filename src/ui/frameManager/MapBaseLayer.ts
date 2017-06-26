module frame {
	export abstract class MapBaseLayer extends eui.UILayer implements IBGLayer {
		public constructor() {
			super();
		}
		public getId():FrameType {
			//默认为登录面板
			return FrameType.login_frame;
		}

		public exit():void{
			LogHandler.debug("退出面板,id="+this.getId());
		}

		/**
		 * 设置背景
		 */
		public setBg(bgName:string):void {
			let sky = util.UIUtil.createBitmapByName(bgName);
			this.addChild(sky);
			let gameStage = Stores.getFrameManager().getGameStage();
			let stageW =  gameStage.stageWidth;
			let stageH =  gameStage.stageHeight;
			sky.width = stageW;
			sky.height = stageH;
		}
	}
}
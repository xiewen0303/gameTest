module frame {
	export class FrameManager {
		/**
		 * 场景对象
		 */
		private gameStage:egret.Stage;

		private planeMap:{[key:number]:frame.IBGLayer} = {};

		public constructor() {
		}

		/**
		 * 储存当前场景对象
		 */
		public setGameStage(gameStage:egret.Stage):void{
			this.gameStage = gameStage;
		}

		public getGameStage():egret.Stage{
			return this.gameStage;
		}

		/**
		 * 删除面板
		 * frameType --- frame.FrameType
		 */
		public removeLayer(frameType:number):void {
			let targetFrame = <frame.MapBaseLayer> this.planeMap[frameType];
			this.gameStage.removeChild(targetFrame);
		}

		/**
		 * 添加layer到stage中
		 */
		public addLayer(mapLayer:IBGLayer):void {
			this.planeMap[mapLayer.getId()] = mapLayer;
		}

		/**
		 * 添加layer到stage中
		 */
		public addToStage(mapLayer:IBGLayer):void {
			this.gameStage.addChild(<MapBaseLayer> mapLayer);
		}
	}
}
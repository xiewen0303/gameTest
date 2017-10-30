module map {
	export class MapCtl {

		public constructor() {
		}

		public static initMap(displayObject:egret.DisplayObjectContainer,mapFightObject:egret.DisplayObjectContainer,moveItemLayer:egret.DisplayObjectContainer):void {
			let mapBagObject = <egret.DisplayObjectContainer> displayObject.getChildByName("items");
			let mapManager:MapManager = Stores.getMapManager();

			//设置格子背景场景
			mapManager.setMapContainer(mapFightObject);
			//设置战斗背包格子场景
			mapManager.setFightBagContainer(mapBagObject);
			//设置战斗场景
			mapManager.setFightScane(displayObject);

			//设置滑动需要的背景
			mapManager.setMoveItemLayer(moveItemLayer);


			Services.getMapService().initMap();
		}
	}
}
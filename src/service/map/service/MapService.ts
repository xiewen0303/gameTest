module map {
	export class MapService {

		public constructor() {
		}

		//初始化地图
		public initMap(displayObject:egret.DisplayObjectContainer):void {
			let mapManager = store.Stores.getMapManager();
			let cell:Cell = new Cell();
			cell.setPx(0);
			cell.setPy(0);
			cell.setBgImager("1001_png");

			mapManager.setMapContainer(displayObject);
			mapManager.addCell(cell);
		}
	}
}
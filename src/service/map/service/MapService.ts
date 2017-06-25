module map {
	export class MapService {
		//
		private mapManager:MapManager = store.Stores.getMapManager();
		public constructor() {
		}

		//初始化地图
		public initMap(displayObject:egret.DisplayObjectContainer):void {
			let cell:Cell = new Cell();
			cell.setPx(0);
			cell.setPy(0);
			cell.setBgImager("1001_png");

			this.mapManager.setMapContainer(displayObject);
			this.mapManager.addCell(cell);
		}

		public move():void {
			let mapCell = this.mapManager.getMapCell(0,0);
			   //ss
		}
	}
}
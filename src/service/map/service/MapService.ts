module map {
	export class MapService {
		//
		//private  mapManager:MapManager = Stores.getMapManager();

		public constructor() {
		}

		//初始化地图
		public initMap(displayObject:egret.DisplayObjectContainer):void {
			let mapManager:MapManager = Stores.getMapManager();
			let cell:Cell = new Cell();
			cell.setPx(0);
			cell.setPy(0);
			cell.setBgImager("1001_png");

			mapManager.setMapContainer(displayObject);
			mapManager.addCell(cell);
		}

		public touchBegin(e: egret.TouchEvent):void {
			let mainMapLayer = <map.MainMapLayer>e.target;
			mainMapLayer.touchBeginX  = e.localX;
			mainMapLayer.touchBeginY  = e.localY;
		}
		
		public moveSpace(endX:number,endY:number,beginX:number,beginY:number):void {
			LogHandler.debug("x:"+endX+"--y:"+endY+"--beginX"+beginX+"--beginY"+beginY);
			let mapManager:MapManager = Stores.getMapManager();
			let mapCell = mapManager.getMapCell(0,0);
			
			let xMove = Tools.abs(endX - beginX);
			let yMove = Tools.abs(endY - beginY);
			let moveX = 0;
			let moveY = 0;

			if(xMove > yMove){
				moveX = endX > beginX ? MapConst.move_space: - MapConst.move_space;
			}else{
				moveY = endY > beginY ? MapConst.move_space: - MapConst.move_space
			}
			
			mapCell.x = mapCell.x + moveX;
			mapCell.y = mapCell.y + moveY;
		}

		public touchEnd(e: egret.TouchEvent):void {
			let endX:number = e.localX;
			let endY:number = e.localY;
			let mainMapLayer = <map.MainMapLayer>e.target;
			let beginX:number = mainMapLayer.touchBeginX;
			let beginY:number = mainMapLayer.touchBeginY;
			Services.getMapService().moveSpace(endX,endY,beginX,beginY);
		}
	}
}
module map {
	export class MapService {
		//
		//private  mapManager:MapManager = Stores.getMapManager();

		public constructor() {
		}

		//初始化地图
		public initMap(displayObject:egret.DisplayObjectContainer):void {
			let mapManager:MapManager = Stores.getMapManager();
			mapManager.setMapContainer(displayObject);

			let cell1:Cell = new Cell();
			cell1.initPoint(0,0);
			cell1.setBgImager("1001_png");
			mapManager.initCell(cell1);

			let cell2:Cell = new Cell();
			cell2.initPoint(0,5);
			cell2.setBgImager("1001_png");
			mapManager.initCell(cell2);
			//var p = cell.localToGlobal();
		}

		//滑动cell单元格
		public moveCell(cell:Cell,toCellX:number,toCellY:number):void {
				let mapManager = Stores.getMapManager();
				mapManager.removeMapCell(cell);
				cell.setCellX(toCellX);
				cell.setCellY(toCellY);
				mapManager.addMapCell(cell);
		}

		public touchBegin(e: egret.TouchEvent):void {
			let mainMapLayer = <map.MainMapLayer>e.target;
			mainMapLayer.touchBeginX  = e.localX;
			mainMapLayer.touchBeginY  = e.localY;
		}
		
		public moveSpace(endX:number,endY:number,beginX:number,beginY:number):void {
			let xMove = Tools.abs(endX - beginX);
			let yMove = Tools.abs(endY - beginY);
		
			let moveCellX = 0;
			let moveCellY = 0;

			//最小滑动距离
			if(xMove < MapConst.min_space || yMove < MapConst.min_space) {
				return;
			}

			if(xMove > yMove){
				moveCellX = endX > beginX ? 1 : - 1;
			}else{
				moveCellY = endY > beginY ? 1 : - 1;
			}

			let mapManager:MapManager = Stores.getMapManager();
			let mapCells = mapManager.getMapCells();

			// for(var i = 0; i < mapCells.length; i++){
			// 	let cells = mapCells[i];
			// 	if(cells == null){
			// 		continue;
			// 	}
			// 	for(var j = 0; j < cells.length; j++ ){
			// 		let rCell = cells[j];
			// 		if(rCell != null){
			// 				this.moveExt(rCell,moveCellX,moveCellY);
			// 		}
			// 	}
			// }

			mapCells.forEach(cells => {
				if(cells != null){
					cells.forEach(rCell => {
						if(rCell != null){
							this.moveExt(rCell,moveCellX,moveCellY);
						}
					});
				}
			});
		}

		private moveExt(mapCell:Cell,moveCellX:number,moveCellY:number):void{
			let targetX = mapCell.x + moveCellX * MapConst.move_space;
			let targetY = mapCell.y + moveCellY * MapConst.move_space;
			let targetCellX = mapCell.getCellX() + moveCellX;
			let targetCellY = mapCell.getCellY() + moveCellY;


			//边界限制
			if(targetX < MapConst.minPoint || targetX > MapConst.maxPointX || targetY < MapConst.minPoint || targetY > MapConst.maxPointY) {
				return;
			}

			this.moveCell(mapCell,targetCellX,targetCellY);

			egret.Tween.get(mapCell).to({x:targetX,y:targetY},200,egret.Ease.sineIn).call((e:egret.Event)=>{
				mapCell.playerEffcts(1);
			},this);
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
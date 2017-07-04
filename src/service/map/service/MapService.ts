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
			cell1.initPoint(0,0,1001);
			cell1.setBgImager("1001_png");
			mapManager.initCell(cell1);

			let cell2:Cell = new Cell();
			cell2.initPoint(0,5,1001);
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
			mainMapLayer.needMove = true;
		}
		
		public moveSpace(endX:number,endY:number,beginX:number,beginY:number,e:egret.TouchEvent):void {
			let xMove = Tools.abs(endX - beginX);
			let yMove = Tools.abs(endY - beginY);

			//最小滑动距离
			if(xMove < MapConst.min_space || yMove < MapConst.min_space) {
				return;
			}

			//设置移动
			let mainMapLayer = <map.MainMapLayer>e.target;
			mainMapLayer.needMove = false;

			let moveCellX = 0;
			let moveCellY = 0;

			

			if(xMove > yMove){
				moveCellX = endX > beginX ? 1 : - 1;
			}else{
				moveCellY = endY > beginY ? 1 : - 1;
			}



			let mapManager:MapManager = Stores.getMapManager();

			if(moveCellX > 0){
				//遍历
				for(let i = MapConst.cell_H_count-1; i >= 0 ; i--){
					for(let j = 0; j< MapConst.cell_W_count; j++){
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							this.moveExt(targetCell,moveCellX,moveCellY);
						}
					}
				}
			}

			if(moveCellY > 0){
				//遍历
				for(let i = 0; i < MapConst.cell_H_count; i++){
					for(let j = MapConst.cell_W_count-1; j >= 0; j--){
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							this.moveExt(targetCell,moveCellX,moveCellY);
						}
					}
				}
			}

			if(moveCellX < 0 || moveCellY < 0){
				//遍历
				for(let i = 0; i < MapConst.cell_H_count; i++ ){
					for(let j = 0; j< MapConst.cell_W_count; j++){
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							this.moveExt(targetCell,moveCellX,moveCellY);
						}
					}
				}
			}

			// mapCells.forEach(cells => {
			// 	if(cells != null){
			// 		cells.forEach(rCell => {
			// 			if(rCell != null){
			// 				this.moveExt(rCell,moveCellX,moveCellY);
			// 			}
			// 		});
			// 	}
			// });
		}

		private moveExt(mapCell:Cell,directionX:number,directionY:number):void {

			let mapManager = Stores.getMapManager();
			let mapCellX = mapCell.getCellX()
			let mapCellY = mapCell.getCellY();

			let targetCell:Cell;

			let targetCellX = mapCellX;
			let targetCellY = mapCellY;

			let isMerger = false;
			
			//获得移动的最终坐标
			if(directionX > 0) {
				let mapCellYs = mapManager.getMapCellsByY(mapCellY);
				for(let targetX:number = MapConst.cell_W_count-1; targetX > mapCellX; targetX--){
					targetCell = mapCellYs[targetX];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					targetCellX = targetX;
					break;
				}
			}

			if(directionX < 0){
				let mapCellYs = mapManager.getMapCellsByY(mapCellY);

				for(let targetX = 0; targetX < mapCellX; targetX++ ) {
					targetCell = mapCellYs[targetX];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					targetCellX = targetX;
					break;
				}
			}


			//获得移动的最终坐标
			if(directionY > 0) {
				let mapCellXs = mapManager.getMapCellsByX(mapCellX);
				
				for(let targetY = MapConst.cell_H_count - 1; targetY > mapCellY; targetY--){
					targetCell = mapCellXs[targetY];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					targetCellY = targetY;
					break;
				}
			}

			//获得移动的最终坐标
			if(directionY < 0) {
				let mapCellXs = mapManager.getMapCellsByX(mapCellX);
				
				for(let targetY = 0; targetY < mapCellY; targetY++){
					targetCell = mapCellXs[targetY];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					targetCellY = targetY;
					break;
				}
			}

			//没有可以移动的则不移动
			if(targetCellX == mapCellX && targetCellY == mapCellY){
				return;
			}

			let targetX = targetCellX * MapConst.move_space;
			let targetY = targetCellY * MapConst.move_space;

			// let targetCellX = mapCell.getCellX() + moveX;
			// let targetCellY = mapCell.getCellY() + moveY;

			// //边界限制
			// if(targetX < MapConst.minPoint || targetX > MapConst.maxPointX || targetY < MapConst.minPoint || targetY > MapConst.maxPointY) {
			// 	return;
			// }
			//已经有不可合并的元素了不移动
			// let targetCell = mapManager.getMapCell(targetCellX,targetCellY);
			// if(targetCell != null){
			// 	if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
			// 		return;
			// 	}else{
			// 		isMerger = true;
			// 	}
			// }

			this.moveCell(mapCell,targetCellX,targetCellY);

			egret.Tween.get(mapCell).to({x:targetX,y:targetY},200,egret.Ease.sineIn).call((e:egret.Event)=>{
				if(isMerger){
					//初始化新的道具
					let cell1:Cell = new Cell();
					cell1.initPoint(targetCellX,targetCellY,1002);
					cell1.setBgImager("1002_png");
					mapManager.initCell(cell1);

					mapCell.playerEffcts(1,function(){
							mapManager.removeSpriteCell(targetCell);
							mapManager.removeSpriteCell(mapCell);
					});
				}
			},this);
		}


		public touchEnd(e: egret.TouchEvent):void {
			
			LogHandler.debug("coming endTouch!!!");
			let endX:number = e.localX;
			let endY:number = e.localY;
			let mainMapLayer = <map.MainMapLayer>e.target;
			let beginX:number = mainMapLayer.touchBeginX;
			let beginY:number = mainMapLayer.touchBeginY;

			Services.getMapService().moveSpace(endX,endY,beginX,beginY,e);
		}

		/**
		 * 响应 touch move 事件
		 */
		public touchMove(e: egret.TouchEvent):void {
			LogHandler.debug(" moveTouch!!!");
			let endX:number = e.localX;
			let endY:number = e.localY;
			let mainMapLayer = <map.MainMapLayer>e.target;
			let beginX:number = mainMapLayer.touchBeginX;
			let beginY:number = mainMapLayer.touchBeginY;
			if(!mainMapLayer.needMove){
				return;
			}
			Services.getMapService().moveSpace(endX,endY,beginX,beginY,e);
		}
	}
}
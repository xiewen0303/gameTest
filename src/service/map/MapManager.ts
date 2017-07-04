module map {
	export class MapManager {
		//整个地图的元素
		private mapCells:Cell[][] = new Array(MapConst.cell_W_count);
		private mapContainer:egret.DisplayObjectContainer; //存储格子的显示容器

		public constructor() {
		}

		public setMapContainer(mapContainer:egret.DisplayObjectContainer):void{
			this.mapContainer = mapContainer;
		}

		public initCell(cell:Cell):void {
			this.addMapCell(cell);
			this.mapContainer.addChild(cell);
		}



		/**
		 * 获取整个地图的Cell元素
		 */
		public getMapCells():Cell[][]{
			return this.mapCells;
		}

		/**
		 * 获取地图X相同的的Cell元素
		 */
		public getMapCellsByX(cellX:number):Cell[]{
			return this.mapCells[cellX];
		}

		/**
		 * 获取地图的Y相同的所有Cell元素
		 */
		public getMapCellsByY(cellY:number):Cell[]{
			let result = new Array(MapConst.cell_W_count);
			this.mapCells.forEach(cells => {
				cells.forEach(cellTemp => {
					if(cellTemp != null && cellY == cellTemp.getCellY()){
						result[cellTemp.getCellX()] = cellTemp;
					}
				});
			});
			return result;
		}

		public getMapCell(cellX:number,cellY:number):Cell{
			let xCells:Cell[] =  this.mapCells[cellX];
			if(xCells == null){
				LogHandler.error("格子不存在，x="+cellX+"   y="+cellY);
				return null;
			}
			return xCells[cellY];
		}

		public removeMapCell(cell:Cell):void {
			let yCells = this.mapCells[cell.getCellX()];
			yCells[cell.getCellY()] = null;
		}

		public removeSpriteCell(cell:Cell):void {
			this.mapContainer.removeChild(cell);
		}

		// /**
		//  * 存储和界面都移除
		//  */
		// public removeCell(cell:Cell):void {
		// 	this.removeSpriteCell(cell);
		// 	this.removeMapCell(cell);
		// }

		public addMapCell(cell:Cell):void {
			let px = cell.getCellX();
			let py = cell.getCellY();
			let cells = this.mapCells[px];
			if(cells == null){
				cells = new Array(MapConst.cell_H_count);
				this.mapCells[px] = cells;
			}
			cells[py] = cell;
		}
	}
}
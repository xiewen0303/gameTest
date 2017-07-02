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
			// let temp = new Array();
			// temp.push(this.mapCells);
			return this.mapCells;
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
			let tempsss = this.mapCells[cell.getCellX()];
			LogHandler.debug(""+tempsss.length);
		}

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
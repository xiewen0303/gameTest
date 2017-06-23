module map {
	export class MapManager {
		//整个地图的元素
		private mapCells:Cell[][] = new Array();
		private mapContainer:egret.DisplayObjectContainer; //存储格子的显示容器

		public constructor() {
		}

		public setMapContainer(mapContainer:egret.DisplayObjectContainer):void{
			this.mapContainer = mapContainer;
		}

		public addCell(cell:Cell):void {
			this.addMapCell(cell);
			this.mapContainer.addChild(cell);
		}

		public getMapCell(x:number,y:number):Cell{
			let xCells:Cell[] =  this.mapCells[x];
			if(xCells == null){
				LogHandler.error("格子不存在，x="+x+"   y="+y);
				return null;
			}
			return xCells[y];
		}

		public addMapCell(cell:Cell):void {
			let px = cell.getPx();
			let py = cell.getPx();
			let cells = this.mapCells[px];
			if(cells == null){
				cells = new Array();
				this.mapCells[px] = cells;
			}
			cells[py] = cell;
		}
	}
}
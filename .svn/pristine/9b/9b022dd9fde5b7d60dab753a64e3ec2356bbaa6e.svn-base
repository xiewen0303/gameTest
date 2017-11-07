module map {
	export class MapManager {
		//战斗父容器
		private fightScane:egret.DisplayObjectContainer;

		//整个地图的元素
		private mapCells:Cell[][] = new Array(MapConst.cell_W_count);
		//存储格子的显示容器
		private mapContainer:egret.DisplayObjectContainer;

		//存储背包带入元素
		private bagCells:Cell[] = new Array();
		//存储格子的显示容器
		private fightBagContainer:egret.DisplayObjectContainer;

		/**
		 * 需要移动的道具
		 */
		private chioseItem:egret.DisplayObjectContainer;

		/**
		 * 设置让道具移动的层
		 */
		private moveItemLayer:egret.DisplayObjectContainer;


		public constructor() {
		}
		
		public getMoveItemLayer():egret.DisplayObjectContainer{
			return this.moveItemLayer;
		}

		public setMoveItemLayer(moveItemLayer:egret.DisplayObjectContainer):void{
			this.moveItemLayer = moveItemLayer;
		}
		
		public getChioseItem():egret.DisplayObjectContainer{
			return this.chioseItem;
		}

		public setChioseItem(chioseItem:egret.DisplayObjectContainer):void {
			this.chioseItem = chioseItem;
		}

		public getFightScane():egret.DisplayObjectContainer{
			return this.fightScane;
		}

		public setFightScane(fightScean:egret.DisplayObjectContainer):void{
			this.fightScane = fightScean;
		}

		public getFightBagContainer():egret.DisplayObjectContainer{
			return this.fightBagContainer;
		}

		public setFightBagContainer(fightBagContainer:egret.DisplayObjectContainer):void{
			this.fightBagContainer = fightBagContainer;
		}
		
		public getMapContainer():egret.DisplayObjectContainer {
			return this.mapContainer;
		}

		public setMapContainer(mapContainer:egret.DisplayObjectContainer):void{
			this.mapContainer = mapContainer;
		}

		public initFightSceanCell(cell:Cell):void {
			this.addMapCell(cell);
			this.mapContainer.addChild(cell);
		}

		/**
		 * 添加背包格子元素
		 */
		public initFightBagCell(cell:Cell):void {
 			let itemContainer = this.getItemsByFightBag(cell.getFightBagIndex());
			itemContainer.getChildByName("open").visible = true;
			itemContainer.getChildByName("lock").visible = false;
			this.addFightBagCell(cell);
		}

		public getItemsByFightBag(fightBIndex:number):egret.DisplayObjectContainer{
			return <egret.DisplayObjectContainer> this.fightBagContainer.getChildByName("item"+(fightBIndex+1));
		}

		/**
		 * 初始化背包格子数
		 */
		public initFightBagCount(size:number):void {
			for(let index = 0;index<size;index++){
				let itemContainer = <egret.DisplayObjectContainer> this.fightBagContainer.getChildByName("item"+(index+1));
				itemContainer.getChildByName("open").visible = true;
				itemContainer.getChildByName("lock").visible = false;
			}
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
				//LogHandler.error("格子不存在，x="+cellX+"   y="+cellY);
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


		public addFightBagCell(cell:Cell):void {
			 let itemContainer = this.getItemsByFightBag(cell.getFightBagIndex());
			 this.bagCells[cell.getFightBagIndex()] = cell;
			 
			 cell.x = 19;
			 cell.y = 19;
			 cell.scaleX = 0.8;
			 cell.scaleY = 0.8;
			 itemContainer.addChild(cell);
		}

		public removeFightBagCell(index:number):void {
			 this.bagCells[index] = null;
		}
	}
}
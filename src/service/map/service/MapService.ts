module map {
	export class MapService {
		//
		//private  mapManager:MapManager = Stores.getMapManager();

		public constructor() {
		}

		//初始化地图
		public initMap():void {

			//地图战斗场景
			this.addCellFightScean(0,0,1001);
			this.addCellFightScean(0,5,1001);

			let mapManager:MapManager = Stores.getMapManager();
			let fightBagContainer = mapManager.getFightBagContainer();

		 	//地图背包
			this.setOpenBagCount(2);
			this.addCellBagCell(1009,0);

			//var p = cell.localToGlobal();
		}

		

		/**
		 * 添加元素到战斗场景
		 */
		public addCellFightScean(slotx:number,sloty:number,tplId:number):void {
			let mapManager:MapManager = Stores.getMapManager();
			let cell2:Cell = new Cell();
			cell2.initPoint(slotx,sloty,tplId);
			cell2.setBgImager("1001_png");  //这个地方一般从配置表的读出来
			mapManager.initFightSceanCell(cell2);
		}

		/**
		 * 添加元素到战斗场景
		 */
		public addFightSceanByCell(cell:Cell):void {
			let mapManager:MapManager = Stores.getMapManager();
			mapManager.initFightSceanCell(cell);
		}

		
		/**
		 * 添加元素到战场背包中
		 */
		public addCellBagCell(configId:number,index:number):void{
			let mapManager:MapManager = Stores.getMapManager();
			let cell:Cell = new Cell();
			
			cell.x = 19;
			cell.y = 19;
			cell.scaleX = 0.8;
			cell.scaleY = 0.8;

			cell.initConfig(configId);
			cell.setBgImager("1023_png");  //这个从配置表的读出来 
			cell.setFightBagIndex(index);
			mapManager.initFightBagCell(cell);
			
			//初始化背包
			cell.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.choiseItem,cell);
		}


		/**
		 * 选择需要拖动的道具
		 */
		public choiseItem(event:egret.TouchEvent){
			let mapManager =  Stores.getMapManager();

			let cell = <map.Cell>event.target;
			Stores.getMapManager().setChioseItem(cell);
			var p = cell.localToGlobal();
			
			//删除战场背包容器
			let itemContair = mapManager.getItemsByFightBag(cell.getFightBagIndex());
			itemContair.removeChild(cell);
			mapManager.removeFightBagCell(cell.getFightBagIndex());


			cell.scaleX = 1;
			cell.scaleY = 1;
			
			cell.x = p.x;
			cell.y = p.y;
			let moveItemLayer = mapManager.getMoveItemLayer();
			moveItemLayer.addChild(cell);

			cell.touchEnabled = false;
			moveItemLayer.touchEnabled = true;

			LogHandler.error("----"+cell.x+","+cell.y+","+cell.getConfigId());
		}

		/**
		 * 设置背包开启格子数
		 */
		public setOpenBagCount(number:number):void{
			let mapManager:MapManager = Stores.getMapManager();
			mapManager.initFightBagCount(number);
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
			let mainMapLayer = <map.FightScane>e.target;
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
			let mainMapLayer = <map.FightScane>e.target;
			mainMapLayer.needMove = false;

			let moveCellX = 0;
			let moveCellY = 0;

			

			if(xMove > yMove){
				moveCellX = endX > beginX ? 1 : - 1;
			}else{
				moveCellY = endY > beginY ? 1 : - 1;
			}

			let mapManager:MapManager = Stores.getMapManager();

			//向右
			if(moveCellX > 0){
				//遍历
				for(let j = 0; j< MapConst.cell_W_count; j++){
					let targetIndex = -1;
					for(let i = MapConst.cell_H_count-1; i >= 0 ; i--){	
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							targetIndex = this.moveExt(targetCell,moveCellX,moveCellY,targetIndex);
						}
					}
				}
			}

			//向下
			if(moveCellY > 0){
				//遍历
				for(let i = 0; i < MapConst.cell_H_count; i++){
					let targetIndex = -1;
					for(let j = MapConst.cell_W_count-1; j >= 0; j--){
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							targetIndex = this.moveExt(targetCell,moveCellX,moveCellY,targetIndex);
						}
					}
				}
			}

			//向左
			if(moveCellX < 0){
				//遍历
				for(let j = 0; j< MapConst.cell_W_count; j++){
					let targetIndex = -1;
					for(let i = 0; i < MapConst.cell_H_count; i++ ){	
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							targetIndex = this.moveExt(targetCell,moveCellX,moveCellY,targetIndex);
						}
					}
				}
			}

			//向上
			if(moveCellY < 0){
				//遍历
				for(let i = 0; i < MapConst.cell_H_count; i++ ){
					let targetIndex = -1;
					for(let j = 0; j< MapConst.cell_W_count; j++){
						let targetCell = mapManager.getMapCell(i,j);
						if(targetCell != null){
							targetIndex = this.moveExt(targetCell,moveCellX,moveCellY,targetIndex);
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

		private moveExt(mapCell:Cell,directionX:number,directionY:number,targetIndex:number):number {

			let result = 0;
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
				let beginIndex = targetIndex != -1 ? targetIndex:MapConst.cell_H_count - 1;
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
					result = targetCellX = targetX;
					break;
				}
			}

			if(directionX < 0){
				let mapCellYs = mapManager.getMapCellsByY(mapCellY);
				let beginIndex = targetIndex != -1 ? targetIndex:0;
				for(let targetX = beginIndex; targetX < mapCellX; targetX++ ) {
					targetCell = mapCellYs[targetX];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					result = targetCellX = targetX;
					break;
				}
			}


			//获得移动的最终坐标
			if(directionY > 0) {
				let mapCellXs = mapManager.getMapCellsByX(mapCellX);
				let beginIndex = targetIndex != -1 ? targetIndex:MapConst.cell_H_count - 1;
				for(let targetY = beginIndex; targetY > mapCellY; targetY--){
					targetCell = mapCellXs[targetY];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					result = targetCellY = targetY;
					break;
				}
			}

			//获得移动的最终坐标
			if(directionY < 0) {
				let mapCellXs = mapManager.getMapCellsByX(mapCellX);
				let beginIndex = targetIndex != -1 ? targetIndex:0;
				for(let targetY = beginIndex; targetY < mapCellY; targetY++){
					targetCell = mapCellXs[targetY];
					if(targetCell != null) {
						if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
							//不可移动
							continue;
						}else{
							isMerger = true;
						}
					}
					result = targetCellY = targetY;
					break;
				}
			}

			//没有可以移动的则不移动
			if(targetCellX == mapCellX && targetCellY == mapCellY){
				if(directionX != 0){
					result = mapCellX;
				}
				if(directionY != 0){
					result = mapCellY;
				}
				return result;
			}

			let targetX = targetCellX * MapConst.move_space;
			let targetY = targetCellY * MapConst.move_space;


			this.moveCell(mapCell,targetCellX,targetCellY);

			egret.Tween.get(mapCell).to({x:targetX,y:targetY},200,egret.Ease.sineIn).call((e:egret.Event)=>{
				if(isMerger){
					//初始化新的道具
					let cell1:Cell = new Cell();
					cell1.initPoint(targetCellX,targetCellY,1002);
					cell1.setBgImager("1002_png");
					mapManager.initFightSceanCell(cell1);

					mapCell.playerEffcts(1,function(){
							mapManager.removeSpriteCell(targetCell);
							mapManager.removeSpriteCell(mapCell);
					});
				}
			},this);
			return result;
		}


		public touchEnd(e: egret.TouchEvent):void {
			
			//LogHandler.debug("coming endTouch!!!");
			let endX:number = e.localX;
			let endY:number = e.localY;
			let mainMapLayer = <map.FightScane>e.target;
			let beginX:number = mainMapLayer.touchBeginX;
			let beginY:number = mainMapLayer.touchBeginY;

			Services.getMapService().moveSpace(endX,endY,beginX,beginY,e);
		}

		/**
		 * 响应 touch move 事件
		 */
		public touchMove(e: egret.TouchEvent):void {
			//LogHandler.debug(" moveTouch!!!");
			let endX:number = e.localX;
			let endY:number = e.localY;
			let mainMapLayer = <map.FightScane>e.target;
			let beginX:number = mainMapLayer.touchBeginX;
			let beginY:number = mainMapLayer.touchBeginY;
			if(!mainMapLayer.needMove){
				return;
			}
			Services.getMapService().moveSpace(endX,endY,beginX,beginY,e);
		}


		public moveFightBagBegin(event:egret.TouchEvent):void{
			//添加一个层，专门用来滑动的？  //置顶TODO
			let mapManager = Stores.getMapManager();
			let moveItemLayer = mapManager.getMoveItemLayer();
			moveItemLayer.touchEnabled = true;
			
			let cell = <map.Cell>Stores.getMapManager().getChioseItem();
			if(cell == null){
				return;
			}
			
			moveItemLayer.addChild(cell);

		}

		/**
		 * 战场背包移动事件监听
		 */
		public moveFightBagMove(event:egret.TouchEvent){
			
			let cell = <map.Cell>Stores.getMapManager().getChioseItem();
			if(cell == null){
				return;
			}

			cell.x = event.localX;
			cell.y = event.localY;
			
		}

		/**
		 * 战场背包移动结束事件
		 */
		public moveBagItemEnd(event:egret.TouchEvent){
			let mapManager = Stores.getMapManager();
			let cell = <map.Cell>mapManager.getChioseItem();
			if(cell == null){
				LogHandler.error("not chiose item");
				return;
			}

			// let mapFightContainer = mapManager.getMapContainer();

			let point = MapUtil.getCellXY(cell.x,cell.y);
			if(point == null){
				//退回到原来的地点 TODO wind 可以使用移动到原来的道具容器内
				let index = cell.getFightBagIndex();
				let itemContainer = mapManager.getItemsByFightBag(index);
				let p = itemContainer.localToGlobal();

				let moveItemLayer = mapManager.getMoveItemLayer();
				moveItemLayer.touchEnabled = false;

				egret.Tween.get(cell).to({x:p.x,y:p.y},2000,egret.Ease.sineIn).call((e:egret.Event)=>{
					
					cell.touchEnabled = true;
					moveItemLayer.removeChild(cell);
					mapManager.addFightBagCell(cell);
				},this);
				return;
			}
			
			//加入到战场中去
			LogHandler.debug(point[0]+"="+point[1]);
			cell.initPoint(point[0],point[1]);
			Services.getMapService().addFightSceanByCell(cell);

			LogHandler.error("----"+event.localX+","+event.localY+","+cell.getConfigId());
		}
	}
}
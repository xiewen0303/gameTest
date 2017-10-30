module map {
	export class MapUtil {
		public constructor() {
		}

		/**
		 * 是否为可以合并的类型
		 */
		public static isMergeType(elementType:number):boolean{
			if(elementType == map.ElementType.cat.valueOf() || elementType == map.ElementType.dog.valueOf()){
				return true;
			}
			return false;
		}


		/**
		 * 获取移动到场景中的坐标 
		 */
		public static getCellXY(px:number,py:number):number[]{
			let tempx = px - MapConst.fightSlot_X;
			let tempy = py - MapConst.fightSlot_Y;

			if(tempx < 0 || tempy < 0 || tempx > MapConst.maxPointX || tempy > MapConst.maxPointY){
				LogHandler.debug("not in fight cell container x:"+tempx+",y:"+tempy);
				return null;
			}

			let cellx = (tempx/MapConst.cell_Width)>>0;
			let celly = (tempy/MapConst.cell_Height)|0;

			let cell = Stores.getMapManager().getMapCell(cellx,celly)
			if(cell != null){
				LogHandler.debug("cell is exist"+cell.getConfigId());
				return null;
			}

			return [cellx,celly];
		}
	}
}
module map {
	export class MapConst {
		public constructor() {
		}

		/**
		 * 移动间距
		 */
		public static move_space = 100;

		/**
		 * 最小滑动间距
		 */
		public static min_space = 2;

		public static cell_Width:number = 100;
		public static cell_Height:number = 100;
		public static cell_H_count:number = 6; //地图纵向格子数
		public static cell_W_count:number = 6; //地图横向格子数

		
		//移动的地图坐标范围
		public static minPoint:number = 0;
		public static maxPointX:number = MapConst.cell_Width *  (MapConst.cell_W_count -1);
		public static maxPointY:number = MapConst.cell_Height * (MapConst.cell_H_count -1);
	}
}
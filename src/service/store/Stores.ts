module store {
	export class Stores {

		private static frameManager:frame.FrameManager = new frame.FrameManager();
		private static mapManager:map.MapManager = new map.MapManager();
		
		public constructor() {
		}

		public static getFrameManager():frame.FrameManager{
			return Stores.frameManager;
		}

		public static getMapManager():map.MapManager{
			return Stores.mapManager;
		}
	}
}
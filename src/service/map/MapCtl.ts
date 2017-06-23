module map {
	export class MapCtl {

		private static mapService:MapService = new MapService();

		public constructor() {
		}

		public static initMap(displayObject:egret.DisplayObjectContainer):void {
			this.mapService.initMap(displayObject);
		}
	}
}
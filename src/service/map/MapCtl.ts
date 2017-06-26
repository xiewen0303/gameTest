module map {
	export class MapCtl {

		public constructor() {
		}

		public static initMap(displayObject:egret.DisplayObjectContainer):void {
			Services.getMapService().initMap(displayObject);
			//displayObject.addEventListener(egret.TouchEvent.TOUCH_TAP,Services.getMapService().move,this);
		}
	}
}
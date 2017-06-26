module map {
	export class MainMapFrame extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.initMap();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}


		protected childrenCreated():void
		{
			super.childrenCreated();
		}

		/**
		 * 初始化地图
		 */
		private initMap():void {
			//设置背景的宽和高
			
			map.MapCtl.initMap(this);
		}
	}
}
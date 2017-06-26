module login {
	export class LoginCtl {

		public constructor() {
		}
		
		public static scLogin(data:any):void {
			let retInfo:any = data.get("ret");
			let codeId:number = <number>retInfo.get("codeId");
			let datas:String[] = <String[]>retInfo.get("datas");
			
			if(codeId != 0){
				LogHandler.error("登录错误："+codeId);
				alert("登录错误!");
				return;
			}

			//切换场景
			let frameManager = 	Stores.getFrameManager();
			frameManager.removeLayer(frame.FrameType.login_frame);
			let mainMapLayer = new map.MainMapLayer();
			
			frameManager.addLayer(mainMapLayer);
			frameManager.addToStage(mainMapLayer);
		}
		
		/**
		 * 发送登录协议
		 */
		public static csLogin(accountId:string):void {
			Services.getLoginService().login(accountId);
		}
	}
}
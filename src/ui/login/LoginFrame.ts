module login {
	export class LoginFrame extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			//this.init();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
			if(partName == "loginBtn"){
				instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginClick, this);
			}
		}

		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		
		/**
		 * 点击按钮
		 * Click the button
		 */
		private loginClick(e: egret.TouchEvent) {
			let t = e.target;
			let ip = <eui.TextInput>this.getChildByName("ip");
			let accountId = <eui.TextInput>this.getChildByName("accountId");
			LogHandler.debug("ip:"+ip.text+"   accountId："+accountId.text);
		}
	}
}
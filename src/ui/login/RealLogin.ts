module login {
	export class RealLogin extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
			if(partName == "account_login"){
				instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginClick, this);
			}
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}


	private static accountId:string;
		/**
		 * 账号信息
		 */
		public static getAccountId():string{
			return RealLogin.accountId;
		}
		
		/**
		 * 点击按钮
		 * Click the button
		 */
		private loginClick(e: egret.TouchEvent) {
			//TODO 
			// let urlData = <eui.TextInput>this.getChildByName("ip");
			// let url:string[] =  urlData.text.split(":");
			let ip:string ="";
			let port:number = 8899; 
			//NetHander.createSocket(url[0],Number(url[1]));

			let accountData = <eui.TextInput>this.getChildByName("accountId");
			RealLogin.accountId = accountData.text;
			
			LoginCtl.changeStage();
		}
	
}
}
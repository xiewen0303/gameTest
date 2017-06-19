module login {
	export class LoginCtl {

		public constructor() {
		}
		
		public static scLogin(data:any):void {
			var retInfo:any = data.get("ret");
			var codeId:number = <number>retInfo.get("codeId");
			var datas:String[] = <String[]>retInfo.get("datas");
			
			//TODO login business
			console.log("coming csLogin "+codeId+"\tdatas"+datas);

			//test send message
			var csMsg:any = net.NetManager.getMessageClazz(net.MessageCode.login_CS_Login);
			csMsg.set("accountId","zhagnsan");
			net.NetManager.sendMessage(csMsg);
		}
	}
}
module login {
	/**
	 * 登录处理的业务逻辑类
	 */
	export class LoginService {
		public constructor() {
		}

		/**
		 * 登录操作
		 */
		public login(accountId:string):void {
			let csMsg:any = NetHander.getMessageClazz(net.MessageCode.login_CS_Login);
			if(accountId == ""){
				LogHandler.error("账号不能为空！");
				return;
			}
			csMsg.set("accountId",accountId);
			NetHander.sendMessage(csMsg);
		}
	}
}
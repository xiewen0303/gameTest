module net {
	export class NetHandler {

		private constructor() {
		}
		
		public initProto():void{
			this.registMethod();
			this.registMessage();
		}

		private static netHandler:NetHandler = new NetHandler();
		/**
		 * 协议号对应的解析方法
		 */
		private msgMap:{[key:number]:Function} = {};
		
		/**
		 * proto描述文件
		 */
		private messages:{[key:number]:any} = {};

		public static getNetHandler():NetHandler{
			return net.NetHandler.netHandler;
		}

		/**
		 *  @messageCode  协议号
		 *  @data 具体的proto数据
		 */
		public dispatchMessage(messageCode:number,buffer:ArrayBuffer):void {
		 	var handler:Function = this.msgMap[messageCode]
			if(handler == null){
				console.log("messageCode is not regist! messageCode="+messageCode);
				return;
			}
			
			var data:any = this.parseMessage(messageCode,buffer);
			if(null == data){
				console.log("messageCode is can't regist! messageCode="+messageCode);
				return;
			}
			handler(data);
		}

		/**
		 * parse ArrayBuffer to Message
		 */
		public parseMessage(messageCode:number,buffer:ArrayBuffer):any{
			try { 
					var clazz:any = this.getMessageClazz(messageCode);
					if(clazz == null){
						console.log("parse messageCode is not exits!messagecode:"+messageCode);
						return null;
					}
					return clazz.decode(buffer);
				} catch(e) { 
					console.log("parse message error!"+e);
				}
				return null;
		}

		private createClazz(resName:string,messageName:string):any{
			var proto:string = RES.getRes(resName);
			var builder:any = dcodeIO.ProtoBuf.loadProto(proto,"resource/assets/proto/");
			var clazz:any = builder.build(messageName);
			return clazz;
		}

		/**
		 * 获取message对应的clazz
		 */
		public getMessageClazz(messageCode:number):any {
			return this.messages[messageCode];
		}

		/**
		 * generate code
		 * regist message  【all proto message need regist】
		 */
		private registMessage():void {
			this.messages[net.MessageCode.common_RetInfo] = this.createClazz("common_proto","common.RetInfo");
			this.messages[net.MessageCode.login_SC_Login] = this.createClazz("login_proto","login.SC_Login");
			this.messages[net.MessageCode.login_CS_Login] = this.createClazz("login_proto","login.CS_Login");
		}

		/**
		 * generate code
		 * regist messageCode
		 */
		private registMethod():void {
			this.msgMap[net.MessageCode.login_SC_Login] = login.LoginCtl.scLogin;
		}
	}
}
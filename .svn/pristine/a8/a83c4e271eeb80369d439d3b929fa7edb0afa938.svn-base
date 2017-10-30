class NetHander {

		private static socket:egret.WebSocket = null;

		public constructor() {
		}

		/**
		 * 连接是否开启
		 */
		public static isConnect():boolean{
			return NetHander.socket.connected;
		}

	 	// private static decodes:Array<IDecode> = new Array<IDecode>();
		// private static decode(datas:egret.ByteArray):boolean {
		// 	NetManager.decodes.forEach(element => {
		// 		if(!element.handler(datas)){
		// 			return false;
		// 		}
		// 	});
		// 	return true;
		// }
		// public static registDecode(decode:IDecode):void{
		// 	NetManager.decodes.push(decode);
		// }
		//create socket
		
		public static createSocket(ip:string,port:number):void{
			new WebSocketHandler(ip,port);
		}

		public static initProto():void {
			LogHandler.debug("coming.. init proto");
			net.NetManager.getNetManager().initProto();
		}
		
		public static dispatchHander(traceId:number,messageCode:number,data:any):void {
			net.NetManager.getNetManager().dispatchMessage(messageCode,data);
		}



		public static registSocket(socket:egret.WebSocket):void{
			NetHander.socket = socket;
		}

		public static closeSocket():void {
			if(NetHander.socket != null){
				NetHander.socket.close();
			}
		}

		/**
		 * 获取message对应的clazz 
		 * @messageCode   MessageCode
		 */
		public static getMessageClazz(messageCode:net.MessageCode):any {
			 var clazz:any = net.NetManager.getNetManager().getMessageClazz(messageCode);
			 if(clazz == null){
				 console.log("MessageCode to class is not exits,messageCode:"+messageCode);
				 return null;
			 }
			 return new clazz();
		}
				
		/**
		 * 发送协议
		 */
		public static sendMessage(data:any):void {
			if (!NetHander.socket.connected || NetHander.socket== null) {
				console.log("socket is not connected!");
				return;
			}
			var arraybuffer: ArrayBuffer = data.toArrayBuffer();
			var contentLen: number = arraybuffer.byteLength;

			var messageCode:number  = 0;
			var traceId:number  = 0;
			var btyearray:egret.ByteArray = new egret.ByteArray();
			
			btyearray.writeInt(contentLen+8);
			btyearray.writeInt(traceId);
			btyearray.writeInt(messageCode);

			btyearray.writeBytes(new egret.ByteArray(arraybuffer));
			btyearray.position = 0;
			
			this.socket.writeBytes(btyearray,0,btyearray.bytesAvailable);
			this.socket.flush();
		}
	}
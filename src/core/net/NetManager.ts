module net {
	export class NetManager {

		private static socket:egret.WebSocket = null;

		public constructor() {
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

		public static initProto():void {
			NetHandler.getNetHandler().initProto();
		}
		
		public static dispatchHander(traceId:number,messageCode:number,data:any):void {
			NetHandler.getNetHandler().dispatchMessage(messageCode,data);
		}



		public static registSocket(socket:egret.WebSocket):void{
			NetManager.socket = socket;
		}

		public static closeSocket():void {
			if(NetManager.socket != null){
				NetManager.socket.close();
			}
		}

		/**
		 * 获取message对应的clazz 
		 * @messageCode   MessageCode
		 */
		public static getMessageClazz(messageCode:MessageCode):any {
			 var clazz:any = NetHandler.getNetHandler().getMessageClazz(messageCode);
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
			if (!NetManager.socket.connected || NetManager.socket== null) {
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
}
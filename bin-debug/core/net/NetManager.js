var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var NetManager = (function () {
        function NetManager() {
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
        NetManager.initProto = function () {
            net.NetHandler.getNetHandler().initProto();
        };
        NetManager.dispatchHander = function (traceId, messageCode, data) {
            net.NetHandler.getNetHandler().dispatchMessage(messageCode, data);
        };
        NetManager.registSocket = function (socket) {
            NetManager.socket = socket;
        };
        NetManager.closeSocket = function () {
            if (NetManager.socket != null) {
                NetManager.socket.close();
            }
        };
        /**
         * 获取message对应的clazz
         * @messageCode   MessageCode
         */
        NetManager.getMessageClazz = function (messageCode) {
            var clazz = net.NetHandler.getNetHandler().getMessageClazz(messageCode);
            if (clazz == null) {
                console.log("MessageCode to class is not exits,messageCode:" + messageCode);
                return null;
            }
            return new clazz();
        };
        /**
         * 发送协议
         */
        NetManager.sendMessage = function (data) {
            if (!NetManager.socket.connected || NetManager.socket == null) {
                console.log("socket is not connected!");
                return;
            }
            var arraybuffer = data.toArrayBuffer();
            var contentLen = arraybuffer.byteLength;
            var messageCode = 0;
            var traceId = 0;
            var btyearray = new egret.ByteArray();
            btyearray.writeInt(contentLen + 8);
            btyearray.writeInt(traceId);
            btyearray.writeInt(messageCode);
            btyearray.writeBytes(new egret.ByteArray(arraybuffer));
            btyearray.position = 0;
            this.socket.writeBytes(btyearray, 0, btyearray.bytesAvailable);
            this.socket.flush();
        };
        return NetManager;
    }());
    NetManager.socket = null;
    net.NetManager = NetManager;
    __reflect(NetManager.prototype, "net.NetManager");
})(net || (net = {}));
//# sourceMappingURL=NetManager.js.map
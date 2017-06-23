var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetHander = (function () {
    function NetHander() {
    }
    /**
     * 连接是否开启
     */
    NetHander.isConnect = function () {
        return NetHander.socket.connected;
    };
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
    NetHander.createSocket = function (ip, port) {
        new WebSocketHandler(ip, port);
    };
    NetHander.initProto = function () {
        LogHandler.debug("coming.. init proto");
        net.NetManager.getNetManager().initProto();
    };
    NetHander.dispatchHander = function (traceId, messageCode, data) {
        net.NetManager.getNetManager().dispatchMessage(messageCode, data);
    };
    NetHander.registSocket = function (socket) {
        NetHander.socket = socket;
    };
    NetHander.closeSocket = function () {
        if (NetHander.socket != null) {
            NetHander.socket.close();
        }
    };
    /**
     * 获取message对应的clazz
     * @messageCode   MessageCode
     */
    NetHander.getMessageClazz = function (messageCode) {
        var clazz = net.NetManager.getNetManager().getMessageClazz(messageCode);
        if (clazz == null) {
            console.log("MessageCode to class is not exits,messageCode:" + messageCode);
            return null;
        }
        return new clazz();
    };
    /**
     * 发送协议
     */
    NetHander.sendMessage = function (data) {
        if (!NetHander.socket.connected || NetHander.socket == null) {
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
    return NetHander;
}());
NetHander.socket = null;
__reflect(NetHander.prototype, "NetHander");
//# sourceMappingURL=NetHandler.js.map
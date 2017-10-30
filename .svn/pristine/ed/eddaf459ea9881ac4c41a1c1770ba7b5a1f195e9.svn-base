// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WebSocketHandler = (function () {
    function WebSocketHandler(ip, port) {
        this.ip = ip;
        this.port = port;
        this.initWebSocket();
    }
    WebSocketHandler.prototype.initWebSocket = function () {
        //创建 WebSocket 对象
        this.socket = new egret.WebSocket();
        //设置数据格式为二进制，默认为字符串
        this.socket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        //连接服务器
        this.socket.connect(this.ip, this.port);
    };
    //    private sendData():void {
    //        var t:string = "ssss";
    //     // //创建 ByteArray 对象
    //     // var byte:egret.ByteArray = new egret.ByteArray();
    //     // var msg = "Hello Egret WebSocket";
    //     // byte.writeInt(20);
    //     // //写入字符串信息
    //     // byte.writeUTF(msg);
    //     // //写入布尔值信息
    //     // byte.writeBoolean(false);
    //     // //写入int值信息
    //     // byte.writeInt(123);
    //     // byte.position = 0;
    //     // // //发送数据
    //     // this.socket.writeBytes(byte, 0, byte.bytesAvailable);
    //      this.testSendMsg();
    // }
    //  private loadData(event:any):void {
    //      //RES.getResByUrl("resource/common.proto",this.loadData,this,RES.ResourceItem.TYPE_TEXT);
    //     var proto11:string = <string>event;
    //     console.log(proto11);
    //     var builder:any  =   dcodeIO.ProtoBuf.loadProto(proto11);
    //     var clazz:any = builder.build("Common");                      
    //     var data:any = new clazz();                                                 
    //     data.set("id",1);//可以使用data.id=1;
    //     data.set("text","oops");//可以使用data.text=oops; 
    //     console.log("id=" + data.get("id"));
    //     console.log("oops=" + data.get("text"));
    // }
    // public testProtoContent():void {
    //     var proto:string = RES.getRes("common_proto");
    //     console.log(proto);
    //     var builder:any = dcodeIO.ProtoBuf.loadProto(proto);   
    //     var clazz:any = builder.build("common.RetInfo");
    //     var data:any = new clazz();                                                 
    //     data.set("codeId",1);//可以使用data.id=1;
    //     data.set("datas","oops");//可以使用data.text=oops; 
    //     data.add("datas","12");
    //     console.log("codeId=" + data.get("codeId"));
    //     console.log("datas=" + data.get("datas")); 
    // }
    // public testSendMsg():void {
    //     var proto:string = RES.getRes("login_proto");
    //     console.log(proto);
    //     var builder:any = dcodeIO.ProtoBuf.loadProto(proto,"resource/assets/proto/");
    //     var clazz:any = builder.build("login.SC_Login");
    //     var data:any = new clazz();
    //     var proto2:string = RES.getRes("common_proto");
    //     console.log(proto2);
    //     var builder2:any = dcodeIO.ProtoBuf.loadProto(proto2);   
    //     var clazz2:any = builder2.build("common.RetInfo");
    //     var data2:any = new clazz2();                                                 
    //     data2.set("codeId",1);//可以使用data.id=1;
    //     data2.set("datas","oops");//可以使用data.text=oops; 
    //     data2.add("datas","12");
    //     data.set("ret",data2);//可以使用data.id=1;
    //     var arraybuffer: ArrayBuffer = data.toArrayBuffer();
    //     var len: number = arraybuffer.byteLength;
    //     var btyearray:egret.ByteArray = new egret.ByteArray();
    //     btyearray.writeInt(len);
    //     btyearray.writeBytes(new egret.ByteArray(arraybuffer));
    //     btyearray.position = 0;
    //     if(len > 0)
    //     { 
    //         this.socket.writeBytes(btyearray,0,btyearray.bytesAvailable);
    //         this.socket.flush();
    //     }
    // }
    WebSocketHandler.prototype.onSocketOpen = function () {
        LogHandler.debug("WebSocketOpen");
        NetHander.registSocket(this.socket);
        //send login
        login.LoginCtl.csLogin(login.LoginFrame.getAccountId());
    };
    WebSocketHandler.prototype.onSocketClose = function () {
        LogHandler.debug("WebSocketClose");
        NetHander.closeSocket();
    };
    WebSocketHandler.prototype.onSocketError = function () {
        LogHandler.debug("WebSocketError");
    };
    WebSocketHandler.prototype.onReceiveMessage = function (e) {
        //创建 ByteArray 对象
        var datas = new egret.ByteArray();
        //读取数据
        this.socket.readBytes(datas);
        //websocket 理论上是不需要处理粘包问题，如果出现了需要自己对buffer处理
        var len = datas.readInt();
        var traceId = datas.readInt();
        var msgCode = datas.readInt();
        var msgBuff;
        var btyearray = new egret.ByteArray();
        datas.readBytes(btyearray, 0, len - 8);
        //TODO  这个地方先注释掉  发现特殊数据不可转换再说
        // var len = btyearray.buffer.byteLength;
        // var dataView = new DataView(btyearray.buffer);
        // var pbView = new DataView(new ArrayBuffer(len));
        // for(var i = 0;i < len;i++) {
        //     pbView.setInt8(i,dataView.getInt8(i));
        // }
        // msgBuff = pbView.buffer;
        msgBuff = btyearray.buffer;
        NetHander.dispatchHander(traceId, msgCode, msgBuff);
        // var proto:string = RES.getRes("common_proto");
        // console.log(proto);
        // var builder:any = dcodeIO.ProtoBuf.loadProto(proto);   
        // var clazz:any = builder.build("common.RetInfo");
        // var data: any = clazz.decode(msgBuff);    
        // console.log("decodeData id=" + data.get("codeId"));
        // console.log("decodeData oops=" + data.get("datas"));
        // var msg:egret.ByteArray = new egret.ByteArray();
        // datas.readBytes(msg,0,len - 8);
        // var proto:string = RES.getRes("common_proto");
        // console.log(proto);
        // var builder:any = dcodeIO.ProtoBuf.loadProto(proto);   
        // var clazz:any = builder.build("common.RetInfo");
        // //var data:any = new clazz();
        // var testProtoBuf:any = clazz.decode(msg);
        // this.trace("收到数据:"+traceId);
        // console.log("codeId=" + testProtoBuf.get("codeId"));
        // console.log("datas=" + testProtoBuf.get("datas"));
        // this.trace("message : "+boo.toString());
        // this.trace("readInt : "+num.toString());
        // this.testProtoContent();
    };
    return WebSocketHandler;
}());
__reflect(WebSocketHandler.prototype, "WebSocketHandler");
//# sourceMappingURL=WebSocketHandler.js.map
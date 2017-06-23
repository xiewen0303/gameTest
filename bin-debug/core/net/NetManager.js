var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var net;
(function (net) {
    var NetManager = (function () {
        function NetManager() {
            /**
             * 协议号对应的解析方法
             */
            this.msgMap = {};
            /**
             * proto描述文件
             */
            this.messages = {};
        }
        NetManager.prototype.initProto = function () {
            this.registMethod();
            this.registMessage();
        };
        NetManager.getNetManager = function () {
            return NetManager.netManager;
        };
        /**
         *  @messageCode  协议号
         *  @data 具体的proto数据
         */
        NetManager.prototype.dispatchMessage = function (messageCode, buffer) {
            var handler = this.msgMap[messageCode];
            if (handler == null) {
                console.log("messageCode is not regist! messageCode=" + messageCode);
                return;
            }
            var data = this.parseMessage(messageCode, buffer);
            if (null == data) {
                console.log("messageCode is can't regist! messageCode=" + messageCode);
                return;
            }
            handler(data);
        };
        /**
         * parse ArrayBuffer to Message
         */
        NetManager.prototype.parseMessage = function (messageCode, buffer) {
            try {
                var clazz = this.getMessageClazz(messageCode);
                if (clazz == null) {
                    console.log("parse messageCode is not exits!messagecode:" + messageCode);
                    return null;
                }
                return clazz.decode(buffer);
            }
            catch (e) {
                console.log("parse message error!" + e);
            }
            return null;
        };
        NetManager.prototype.createClazz = function (resName, messageName) {
            var proto = RES.getRes(resName);
            var builder = dcodeIO.ProtoBuf.loadProto(proto, "resource/proto/");
            var clazz = builder.build(messageName);
            return clazz;
        };
        /**
         * 获取message对应的clazz
         */
        NetManager.prototype.getMessageClazz = function (messageCode) {
            return this.messages[messageCode];
        };
        /**
         * generate code
         * regist message  【all proto message need regist】
         */
        NetManager.prototype.registMessage = function () {
            this.messages[net.MessageCode.common_RetInfo] = this.createClazz("common_proto", "common.RetInfo");
            this.messages[net.MessageCode.login_SC_Login] = this.createClazz("login_proto", "login.SC_Login");
            this.messages[net.MessageCode.login_CS_Login] = this.createClazz("login_proto", "login.CS_Login");
        };
        /**
         * generate code
         * regist messageCode
         */
        NetManager.prototype.registMethod = function () {
            this.msgMap[net.MessageCode.login_SC_Login] = login.LoginCtl.scLogin;
        };
        return NetManager;
    }());
    NetManager.netManager = new NetManager();
    net.NetManager = NetManager;
    __reflect(NetManager.prototype, "net.NetManager");
})(net || (net = {}));
//# sourceMappingURL=NetManager.js.map
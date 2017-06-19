var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var login;
(function (login) {
    var LoginCtl = (function () {
        function LoginCtl() {
        }
        LoginCtl.scLogin = function (data) {
            var retInfo = data.get("ret");
            var codeId = retInfo.get("codeId");
            var datas = retInfo.get("datas");
            //TODO login business
            console.log("coming csLogin " + codeId + "\tdatas" + datas);
            //test send message
            var csMsg = net.NetManager.getMessageClazz(net.MessageCode.login_CS_Login);
            csMsg.set("accountId", "zhagnsan");
            net.NetManager.sendMessage(csMsg);
        };
        return LoginCtl;
    }());
    login.LoginCtl = LoginCtl;
    __reflect(LoginCtl.prototype, "login.LoginCtl");
})(login || (login = {}));
//# sourceMappingURL=LoginCtl.js.map
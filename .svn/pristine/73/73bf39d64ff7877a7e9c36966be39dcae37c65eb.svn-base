var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var login;
(function (login) {
    /**
     * 登录处理的业务逻辑类
     */
    var LoginService = (function () {
        function LoginService() {
        }
        /**
         * 登录操作
         */
        LoginService.prototype.login = function (accountId) {
            var csMsg = NetHander.getMessageClazz(net.MessageCode.login_CS_Login);
            if (accountId == "") {
                LogHandler.error("账号不能为空！");
                return;
            }
            csMsg.set("accountId", accountId);
            NetHander.sendMessage(csMsg);
        };
        return LoginService;
    }());
    login.LoginService = LoginService;
    __reflect(LoginService.prototype, "login.LoginService");
})(login || (login = {}));
//# sourceMappingURL=LoginService.js.map
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
            if (codeId != 0) {
                LogHandler.error("登录错误：" + codeId);
                alert("登录错误!");
                return;
            }
            this.changeStage();
        };
        LoginCtl.changeStage = function () {
            //切换场景
            var frameManager = Stores.getFrameManager();
            frameManager.removeLayer(frame.FrameType.login_frame);
            var mainMapLayer = new map.MainMapLayer();
            frameManager.addLayer(mainMapLayer);
            frameManager.addToStage(mainMapLayer);
        };
        /**
         * 发送登录协议
         */
        LoginCtl.csLogin = function (accountId) {
            Services.getLoginService().login(accountId);
        };
        return LoginCtl;
    }());
    login.LoginCtl = LoginCtl;
    __reflect(LoginCtl.prototype, "login.LoginCtl");
})(login || (login = {}));
//# sourceMappingURL=LoginCtl.js.map
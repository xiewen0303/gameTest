var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var login;
(function (login) {
    var RealLogin = (function (_super) {
        __extends(RealLogin, _super);
        function RealLogin() {
            return _super.call(this) || this;
        }
        RealLogin.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (partName == "account_login") {
                instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginClick, this);
            }
        };
        RealLogin.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /**
         * 账号信息
         */
        RealLogin.getAccountId = function () {
            return RealLogin.accountId;
        };
        /**
         * 点击按钮
         * Click the button
         */
        RealLogin.prototype.loginClick = function (e) {
            //TODO 
            // let urlData = <eui.TextInput>this.getChildByName("ip");
            // let url:string[] =  urlData.text.split(":");
            var ip = "";
            var port = 8899;
            //NetHander.createSocket(url[0],Number(url[1]));
            var accountData = this.getChildByName("accountId");
            RealLogin.accountId = accountData.text;
            login.LoginCtl.changeStage();
        };
        return RealLogin;
    }(eui.Component));
    login.RealLogin = RealLogin;
    __reflect(RealLogin.prototype, "login.RealLogin", ["eui.UIComponent", "egret.DisplayObject"]);
})(login || (login = {}));
//# sourceMappingURL=RealLogin.js.map
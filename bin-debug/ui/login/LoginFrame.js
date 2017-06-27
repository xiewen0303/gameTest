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
    var LoginFrame = (function (_super) {
        __extends(LoginFrame, _super);
        function LoginFrame() {
            return _super.call(this) || this;
        }
        LoginFrame.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (partName == "loginBtn") {
                instance.addEventListener(egret.TouchEvent.TOUCH_TAP, this.loginClick, this);
            }
        };
        LoginFrame.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /**
         * 账号信息
         */
        LoginFrame.getAccountId = function () {
            return LoginFrame.accountId;
        };
        /**
         * 点击按钮
         * Click the button
         */
        LoginFrame.prototype.loginClick = function (e) {
            //TODO 
            // let urlData = <eui.TextInput>this.getChildByName("ip");
            // let url:string[] =  urlData.text.split(":");
            // NetHander.createSocket(url[0],Number(url[1]));
            // let accountData = <eui.TextInput>this.getChildByName("accountId");
            // LoginFrame.accountId = accountData.text;
            login.LoginCtl.changeStage();
        };
        return LoginFrame;
    }(eui.Component));
    login.LoginFrame = LoginFrame;
    __reflect(LoginFrame.prototype, "login.LoginFrame", ["eui.UIComponent", "egret.DisplayObject"]);
})(login || (login = {}));
//# sourceMappingURL=LoginFrame.js.map
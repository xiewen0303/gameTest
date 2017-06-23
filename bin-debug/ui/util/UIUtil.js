var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var util;
(function (util) {
    var UIUtil = (function () {
        function UIUtil() {
        }
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        UIUtil.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        UIUtil.getCoordX = function (x) {
            return 20;
        };
        UIUtil.getCoordY = function (y) {
            return 240;
        };
        return UIUtil;
    }());
    util.UIUtil = UIUtil;
    __reflect(UIUtil.prototype, "util.UIUtil");
})(util || (util = {}));
//# sourceMappingURL=UIUtil.js.map
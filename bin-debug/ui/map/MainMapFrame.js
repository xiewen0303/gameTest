var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var map;
(function (map) {
    var MainMapFrame = (function (_super) {
        __extends(MainMapFrame, _super);
        function MainMapFrame() {
            var _this = _super.call(this) || this;
            _this.initMap();
            return _this;
        }
        MainMapFrame.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        MainMapFrame.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        /**
         * 初始化地图
         */
        MainMapFrame.prototype.initMap = function () {
            //设置背景的宽和高
            map.MapCtl.initMap(this);
        };
        return MainMapFrame;
    }(eui.Component));
    map.MainMapFrame = MainMapFrame;
    __reflect(MainMapFrame.prototype, "map.MainMapFrame", ["eui.UIComponent", "egret.DisplayObject"]);
})(map || (map = {}));
//# sourceMappingURL=MainMapFrame.js.map
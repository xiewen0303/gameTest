var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var frame;
(function (frame) {
    var MapBaseLayer = (function (_super) {
        __extends(MapBaseLayer, _super);
        function MapBaseLayer() {
            return _super.call(this) || this;
        }
        MapBaseLayer.prototype.getId = function () {
            //默认为登录面板
            return frame.FrameType.login_frame;
        };
        MapBaseLayer.prototype.exit = function () {
            LogHandler.debug("退出面板,id=" + this.getId());
        };
        /**
         * 设置背景
         */
        MapBaseLayer.prototype.setBg = function (bgName) {
            var sky = util.UIUtil.createBitmapByName(bgName);
            this.addChild(sky);
            var gameStage = store.Stores.getFrameManager().getGameStage();
            var stageW = gameStage.stageWidth;
            var stageH = gameStage.stageHeight;
            sky.width = stageW;
            sky.height = stageH;
        };
        return MapBaseLayer;
    }(eui.UILayer));
    frame.MapBaseLayer = MapBaseLayer;
    __reflect(MapBaseLayer.prototype, "frame.MapBaseLayer", ["frame.IBGLayer"]);
})(frame || (frame = {}));
//# sourceMappingURL=MapBaseLayer.js.map
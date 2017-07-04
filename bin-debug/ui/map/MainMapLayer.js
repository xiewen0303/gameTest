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
    /**
     * 主线地图场景
     */
    var MainMapLayer = (function (_super) {
        __extends(MainMapLayer, _super);
        function MainMapLayer() {
            var _this = _super.call(this) || this;
            _this.needMove = false; //是否需要移动
            _this.init();
            return _this;
        }
        /**
         * 初始化
         */
        MainMapLayer.prototype.init = function () {
            this.setBg("bg_014_png");
            var mainMapFrame = new map.MainMapFrame();
            mainMapFrame.width = 600;
            mainMapFrame.height = 600;
            mainMapFrame.x = 20;
            mainMapFrame.y = 240;
            this.addChild(mainMapFrame);
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Services.getMapService().touchBegin, this);
            // this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().touchEnd,this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, Services.getMapService().touchMove, this);
        };
        MainMapLayer.prototype.getId = function () {
            return frame.FrameType.main_frame;
        };
        return MainMapLayer;
    }(frame.MapBaseLayer));
    map.MainMapLayer = MainMapLayer;
    __reflect(MainMapLayer.prototype, "map.MainMapLayer");
})(map || (map = {}));
//# sourceMappingURL=MainMapLayer.js.map
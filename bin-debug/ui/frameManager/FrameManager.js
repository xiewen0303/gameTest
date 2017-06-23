var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var frame;
(function (frame) {
    var FrameManager = (function () {
        function FrameManager() {
            this.planeMap = {};
        }
        /**
         * 储存当前场景对象
         */
        FrameManager.prototype.setGameStage = function (gameStage) {
            this.gameStage = gameStage;
        };
        FrameManager.prototype.getGameStage = function () {
            return this.gameStage;
        };
        /**
         * 删除面板
         * frameType --- frame.FrameType
         */
        FrameManager.prototype.removeLayer = function (frameType) {
            var targetFrame = this.planeMap[frameType];
            this.gameStage.removeChild(targetFrame);
        };
        /**
         * 添加layer到stage中
         */
        FrameManager.prototype.addLayer = function (mapLayer) {
            this.planeMap[mapLayer.getId()] = mapLayer;
        };
        /**
         * 添加layer到stage中
         */
        FrameManager.prototype.addToStage = function (mapLayer) {
            this.gameStage.addChild(mapLayer);
        };
        return FrameManager;
    }());
    frame.FrameManager = FrameManager;
    __reflect(FrameManager.prototype, "frame.FrameManager");
})(frame || (frame = {}));
//# sourceMappingURL=FrameManager.js.map
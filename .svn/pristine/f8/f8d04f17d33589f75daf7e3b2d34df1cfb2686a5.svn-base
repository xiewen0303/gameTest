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
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell() {
            var _this = _super.call(this) || this;
            _this.width = map.MapConst.cell_Width;
            _this.height = map.MapConst.cell_Height;
            _this.touchEnabled = true;
            return _this;
        }
        Cell.prototype.getFightBagIndex = function () {
            return this.fightBagIndex;
        };
        Cell.prototype.setFightBagIndex = function (index) {
            this.fightBagIndex = index;
        };
        Cell.prototype.getElementType = function () {
            return this.elementType;
        };
        Cell.prototype.getConfigId = function () {
            return this.configId;
        };
        Cell.prototype.setBgImager = function (bgName) {
            var sky = util.UIUtil.createBitmapByName(bgName);
            this.addChild(sky);
            var gameStage = Stores.getFrameManager().getGameStage();
            sky.width = this.width;
            sky.height = this.height;
        };
        Cell.prototype.setCellX = function (px) {
            this.cellX = px;
        };
        Cell.prototype.setCellY = function (py) {
            this.cellY = py;
        };
        Cell.prototype.initPoint = function (px, py, configId) {
            this.cellX = px;
            this.cellY = py;
            this.x = px * map.MapConst.cell_Width;
            this.y = py * map.MapConst.cell_Height;
            if (configId != null) {
                this.initConfig(configId);
            }
        };
        Cell.prototype.initConfig = function (configId) {
            this.configId = configId;
            this.elementType = 3; //TODO 这个地方从配置表获得
        };
        Cell.prototype.getCellX = function () {
            return this.cellX;
        };
        Cell.prototype.getCellY = function () {
            return this.cellY;
        };
        Cell.prototype.playerEffcts = function (type, callFunction) {
            var bombEffects = new effects.Change2Bomb();
            bombEffects.playEffects(this, callFunction);
        };
        return Cell;
    }(egret.Sprite));
    map.Cell = Cell;
    __reflect(Cell.prototype, "map.Cell");
})(map || (map = {}));
//# sourceMappingURL=Cell.js.map
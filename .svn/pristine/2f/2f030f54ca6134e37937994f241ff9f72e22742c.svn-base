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
    var FightScane = (function (_super) {
        __extends(FightScane, _super);
        function FightScane() {
            var _this = _super.call(this) || this;
            _this.needMove = false; //是否需要移动
            return _this;
        }
        FightScane.prototype.init = function (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.graphics.beginFill(0, 0);
            this.graphics.drawRect(0, 0, width, height);
            this.graphics.endFill();
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, Services.getMapService().touchBegin, this);
            // this.addEventListener(egret.TouchEvent.TOUCH_END,Services.getMapService().touchEnd,this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, Services.getMapService().touchMove, this);
        };
        return FightScane;
    }(egret.Sprite));
    map.FightScane = FightScane;
    __reflect(FightScane.prototype, "map.FightScane");
})(map || (map = {}));
//# sourceMappingURL=FightScane.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapCtl = (function () {
        function MapCtl() {
        }
        MapCtl.initMap = function (displayObject) {
            Services.getMapService().initMap(displayObject);
            //displayObject.addEventListener(egret.TouchEvent.TOUCH_TAP,Services.getMapService().move,this);
        };
        return MapCtl;
    }());
    map.MapCtl = MapCtl;
    __reflect(MapCtl.prototype, "map.MapCtl");
})(map || (map = {}));
//# sourceMappingURL=MapCtl.js.map
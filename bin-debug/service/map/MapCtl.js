var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapCtl = (function () {
        function MapCtl() {
        }
        MapCtl.initMap = function (displayObject) {
            this.mapService.initMap(displayObject);
        };
        return MapCtl;
    }());
    MapCtl.mapService = new map.MapService();
    map.MapCtl = MapCtl;
    __reflect(MapCtl.prototype, "map.MapCtl");
})(map || (map = {}));
//# sourceMappingURL=MapCtl.js.map
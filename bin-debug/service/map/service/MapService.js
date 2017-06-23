var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapService = (function () {
        function MapService() {
        }
        //初始化地图
        MapService.prototype.initMap = function (displayObject) {
            var mapManager = store.Stores.getMapManager();
            var cell = new map.Cell();
            cell.setPx(0);
            cell.setPy(0);
            cell.setBgImager("1001_png");
            mapManager.setMapContainer(displayObject);
            mapManager.addCell(cell);
        };
        return MapService;
    }());
    map.MapService = MapService;
    __reflect(MapService.prototype, "map.MapService");
})(map || (map = {}));
//# sourceMappingURL=MapService.js.map
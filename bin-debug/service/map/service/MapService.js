var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapService = (function () {
        //
        //private  mapManager:MapManager = Stores.getMapManager();
        function MapService() {
        }
        //初始化地图
        MapService.prototype.initMap = function (displayObject) {
            var mapManager = Stores.getMapManager();
            var cell = new map.Cell();
            cell.setPx(0);
            cell.setPy(0);
            cell.setBgImager("1001_png");
            mapManager.setMapContainer(displayObject);
            mapManager.addCell(cell);
        };
        MapService.prototype.touchBegin = function (e) {
            var mainMapLayer = e.target;
            mainMapLayer.touchBeginX = e.localX;
            mainMapLayer.touchBeginY = e.localY;
        };
        MapService.prototype.moveSpace = function (endX, endY, beginX, beginY) {
            var mapManager = Stores.getMapManager();
            var mapCell = mapManager.getMapCell(0, 0);
            var xMove = Tools.abs(endX - beginX);
            var yMove = Tools.abs(endY - beginY);
            var moveX = 0;
            var moveY = 0;
            //最小滑动距离
            if (xMove < map.MapConst.min_space || yMove < map.MapConst.min_space) {
                return;
            }
            if (xMove > yMove) {
                moveX = endX > beginX ? map.MapConst.move_space : -map.MapConst.move_space;
            }
            else {
                moveY = endY > beginY ? map.MapConst.move_space : -map.MapConst.move_space;
            }
            mapCell.x = mapCell.x + moveX;
            mapCell.y = mapCell.y + moveY;
        };
        MapService.prototype.touchEnd = function (e) {
            var endX = e.localX;
            var endY = e.localY;
            var mainMapLayer = e.target;
            var beginX = mainMapLayer.touchBeginX;
            var beginY = mainMapLayer.touchBeginY;
            Services.getMapService().moveSpace(endX, endY, beginX, beginY);
        };
        return MapService;
    }());
    map.MapService = MapService;
    __reflect(MapService.prototype, "map.MapService");
})(map || (map = {}));
//# sourceMappingURL=MapService.js.map
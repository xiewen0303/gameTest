var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapManager = (function () {
        function MapManager() {
            //整个地图的元素
            this.mapCells = new Array();
        }
        MapManager.prototype.setMapContainer = function (mapContainer) {
            this.mapContainer = mapContainer;
        };
        MapManager.prototype.addCell = function (cell) {
            this.addMapCell(cell);
            this.mapContainer.addChild(cell);
        };
        MapManager.prototype.getMapCell = function (x, y) {
            var xCells = this.mapCells[x];
            if (xCells == null) {
                LogHandler.error("格子不存在，x=" + x + "   y=" + y);
                return null;
            }
            return xCells[y];
        };
        MapManager.prototype.addMapCell = function (cell) {
            var px = cell.getPx();
            var py = cell.getPx();
            var cells = this.mapCells[px];
            if (cells == null) {
                cells = new Array();
                this.mapCells[px] = cells;
            }
            cells[py] = cell;
        };
        return MapManager;
    }());
    map.MapManager = MapManager;
    __reflect(MapManager.prototype, "map.MapManager");
})(map || (map = {}));
//# sourceMappingURL=MapManager.js.map
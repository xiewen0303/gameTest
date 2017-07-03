var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapManager = (function () {
        function MapManager() {
            //整个地图的元素
            this.mapCells = new Array(map.MapConst.cell_W_count);
        }
        MapManager.prototype.setMapContainer = function (mapContainer) {
            this.mapContainer = mapContainer;
        };
        MapManager.prototype.initCell = function (cell) {
            this.addMapCell(cell);
            this.mapContainer.addChild(cell);
        };
        /**
         * 获取整个地图的Cell元素
         */
        MapManager.prototype.getMapCells = function () {
            return this.mapCells;
        };
        MapManager.prototype.getMapCell = function (cellX, cellY) {
            var xCells = this.mapCells[cellX];
            if (xCells == null) {
                LogHandler.error("格子不存在，x=" + cellX + "   y=" + cellY);
                return null;
            }
            return xCells[cellY];
        };
        MapManager.prototype.removeMapCell = function (cell) {
            var yCells = this.mapCells[cell.getCellX()];
            yCells[cell.getCellY()] = null;
        };
        MapManager.prototype.removeSpriteCell = function (cell) {
            this.mapContainer.removeChild(cell);
        };
        // /**
        //  * 存储和界面都移除
        //  */
        // public removeCell(cell:Cell):void {
        // 	this.removeSpriteCell(cell);
        // 	this.removeMapCell(cell);
        // }
        MapManager.prototype.addMapCell = function (cell) {
            var px = cell.getCellX();
            var py = cell.getCellY();
            var cells = this.mapCells[px];
            if (cells == null) {
                cells = new Array(map.MapConst.cell_H_count);
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
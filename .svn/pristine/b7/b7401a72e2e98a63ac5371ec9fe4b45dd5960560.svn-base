var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapManager = (function () {
        function MapManager() {
            //整个地图的元素
            this.mapCells = new Array(map.MapConst.cell_W_count);
            //存储背包带入元素
            this.bagCells = new Array();
        }
        MapManager.prototype.getMoveItemLayer = function () {
            return this.moveItemLayer;
        };
        MapManager.prototype.setMoveItemLayer = function (moveItemLayer) {
            this.moveItemLayer = moveItemLayer;
        };
        MapManager.prototype.getChioseItem = function () {
            return this.chioseItem;
        };
        MapManager.prototype.setChioseItem = function (chioseItem) {
            this.chioseItem = chioseItem;
        };
        MapManager.prototype.getFightScane = function () {
            return this.fightScane;
        };
        MapManager.prototype.setFightScane = function (fightScean) {
            this.fightScane = fightScean;
        };
        MapManager.prototype.getFightBagContainer = function () {
            return this.fightBagContainer;
        };
        MapManager.prototype.setFightBagContainer = function (fightBagContainer) {
            this.fightBagContainer = fightBagContainer;
        };
        MapManager.prototype.getMapContainer = function () {
            return this.mapContainer;
        };
        MapManager.prototype.setMapContainer = function (mapContainer) {
            this.mapContainer = mapContainer;
        };
        MapManager.prototype.initFightSceanCell = function (cell) {
            this.addMapCell(cell);
            this.mapContainer.addChild(cell);
        };
        /**
         * 添加背包格子元素
         */
        MapManager.prototype.initFightBagCell = function (cell) {
            var itemContainer = this.getItemsByFightBag(cell.getFightBagIndex());
            itemContainer.getChildByName("open").visible = true;
            itemContainer.getChildByName("lock").visible = false;
            this.addFightBagCell(cell);
        };
        MapManager.prototype.getItemsByFightBag = function (fightBIndex) {
            return this.fightBagContainer.getChildByName("item" + (fightBIndex + 1));
        };
        /**
         * 初始化背包格子数
         */
        MapManager.prototype.initFightBagCount = function (size) {
            for (var index_1 = 0; index_1 < size; index_1++) {
                var itemContainer = this.fightBagContainer.getChildByName("item" + (index_1 + 1));
                itemContainer.getChildByName("open").visible = true;
                itemContainer.getChildByName("lock").visible = false;
            }
        };
        /**
         * 获取整个地图的Cell元素
         */
        MapManager.prototype.getMapCells = function () {
            return this.mapCells;
        };
        /**
         * 获取地图X相同的的Cell元素
         */
        MapManager.prototype.getMapCellsByX = function (cellX) {
            return this.mapCells[cellX];
        };
        /**
         * 获取地图的Y相同的所有Cell元素
         */
        MapManager.prototype.getMapCellsByY = function (cellY) {
            var result = new Array(map.MapConst.cell_W_count);
            this.mapCells.forEach(function (cells) {
                cells.forEach(function (cellTemp) {
                    if (cellTemp != null && cellY == cellTemp.getCellY()) {
                        result[cellTemp.getCellX()] = cellTemp;
                    }
                });
            });
            return result;
        };
        MapManager.prototype.getMapCell = function (cellX, cellY) {
            var xCells = this.mapCells[cellX];
            if (xCells == null) {
                //LogHandler.error("格子不存在，x="+cellX+"   y="+cellY);
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
        MapManager.prototype.addFightBagCell = function (cell) {
            var itemContainer = this.getItemsByFightBag(cell.getFightBagIndex());
            this.bagCells[cell.getFightBagIndex()] = cell;
            cell.x = 19;
            cell.y = 19;
            cell.scaleX = 0.8;
            cell.scaleY = 0.8;
            itemContainer.addChild(cell);
        };
        MapManager.prototype.removeFightBagCell = function (index) {
            this.bagCells[index] = null;
        };
        return MapManager;
    }());
    map.MapManager = MapManager;
    __reflect(MapManager.prototype, "map.MapManager");
})(map || (map = {}));
//# sourceMappingURL=MapManager.js.map
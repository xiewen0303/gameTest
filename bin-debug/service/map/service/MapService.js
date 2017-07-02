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
            mapManager.setMapContainer(displayObject);
            var cell1 = new map.Cell();
            cell1.initPoint(0, 0);
            cell1.setBgImager("1001_png");
            mapManager.initCell(cell1);
            var cell2 = new map.Cell();
            cell2.initPoint(0, 5);
            cell2.setBgImager("1001_png");
            mapManager.initCell(cell2);
            //var p = cell.localToGlobal();
        };
        //滑动cell单元格
        MapService.prototype.moveCell = function (cell, toCellX, toCellY) {
            var mapManager = Stores.getMapManager();
            mapManager.removeMapCell(cell);
            cell.setCellX(toCellX);
            cell.setCellY(toCellY);
            mapManager.addMapCell(cell);
        };
        MapService.prototype.touchBegin = function (e) {
            var mainMapLayer = e.target;
            mainMapLayer.touchBeginX = e.localX;
            mainMapLayer.touchBeginY = e.localY;
        };
        MapService.prototype.moveSpace = function (endX, endY, beginX, beginY) {
            var _this = this;
            var xMove = Tools.abs(endX - beginX);
            var yMove = Tools.abs(endY - beginY);
            var moveCellX = 0;
            var moveCellY = 0;
            //最小滑动距离
            if (xMove < map.MapConst.min_space || yMove < map.MapConst.min_space) {
                return;
            }
            if (xMove > yMove) {
                moveCellX = endX > beginX ? 1 : -1;
            }
            else {
                moveCellY = endY > beginY ? 1 : -1;
            }
            var mapManager = Stores.getMapManager();
            var mapCells = mapManager.getMapCells();
            // for(var i = 0; i < mapCells.length; i++){
            // 	let cells = mapCells[i];
            // 	if(cells == null){
            // 		continue;
            // 	}
            // 	for(var j = 0; j < cells.length; j++ ){
            // 		let rCell = cells[j];
            // 		if(rCell != null){
            // 				this.moveExt(rCell,moveCellX,moveCellY);
            // 		}
            // 	}
            // }
            mapCells.forEach(function (cells) {
                if (cells != null) {
                    cells.forEach(function (rCell) {
                        if (rCell != null) {
                            _this.moveExt(rCell, moveCellX, moveCellY);
                        }
                    });
                }
            });
        };
        MapService.prototype.moveExt = function (mapCell, moveCellX, moveCellY) {
            var targetX = mapCell.x + moveCellX * map.MapConst.move_space;
            var targetY = mapCell.y + moveCellY * map.MapConst.move_space;
            var targetCellX = mapCell.getCellX() + moveCellX;
            var targetCellY = mapCell.getCellY() + moveCellY;
            //边界限制
            if (targetX < map.MapConst.minPoint || targetX > map.MapConst.maxPointX || targetY < map.MapConst.minPoint || targetY > map.MapConst.maxPointY) {
                return;
            }
            this.moveCell(mapCell, targetCellX, targetCellY);
            egret.Tween.get(mapCell).to({ x: targetX, y: targetY }, 200, egret.Ease.sineIn).call(function (e) {
                mapCell.playerEffcts(1);
            }, this);
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
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
            cell1.initPoint(0, 0, 1001);
            cell1.setBgImager("1001_png");
            mapManager.initCell(cell1);
            var cell2 = new map.Cell();
            cell2.initPoint(0, 5, 1001);
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
            mainMapLayer.needMove = true;
        };
        MapService.prototype.moveSpace = function (endX, endY, beginX, beginY, e) {
            var xMove = Tools.abs(endX - beginX);
            var yMove = Tools.abs(endY - beginY);
            //最小滑动距离
            if (xMove < map.MapConst.min_space || yMove < map.MapConst.min_space) {
                return;
            }
            //设置移动
            var mainMapLayer = e.target;
            mainMapLayer.needMove = false;
            var moveCellX = 0;
            var moveCellY = 0;
            if (xMove > yMove) {
                moveCellX = endX > beginX ? 1 : -1;
            }
            else {
                moveCellY = endY > beginY ? 1 : -1;
            }
            var mapManager = Stores.getMapManager();
            if (moveCellX > 0) {
                //遍历
                for (var i = map.MapConst.cell_H_count - 1; i >= 0; i--) {
                    for (var j = 0; j < map.MapConst.cell_W_count; j++) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            this.moveExt(targetCell, moveCellX, moveCellY);
                        }
                    }
                }
            }
            if (moveCellY > 0) {
                //遍历
                for (var i = 0; i < map.MapConst.cell_H_count; i++) {
                    for (var j = map.MapConst.cell_W_count - 1; j >= 0; j--) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            this.moveExt(targetCell, moveCellX, moveCellY);
                        }
                    }
                }
            }
            if (moveCellX < 0 || moveCellY < 0) {
                //遍历
                for (var i = 0; i < map.MapConst.cell_H_count; i++) {
                    for (var j = 0; j < map.MapConst.cell_W_count; j++) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            this.moveExt(targetCell, moveCellX, moveCellY);
                        }
                    }
                }
            }
            // mapCells.forEach(cells => {
            // 	if(cells != null){
            // 		cells.forEach(rCell => {
            // 			if(rCell != null){
            // 				this.moveExt(rCell,moveCellX,moveCellY);
            // 			}
            // 		});
            // 	}
            // });
        };
        MapService.prototype.moveExt = function (mapCell, directionX, directionY) {
            var mapManager = Stores.getMapManager();
            var mapCellX = mapCell.getCellX();
            var mapCellY = mapCell.getCellY();
            var targetCell;
            var targetCellX = mapCellX;
            var targetCellY = mapCellY;
            var isMerger = false;
            //获得移动的最终坐标
            if (directionX > 0) {
                var mapCellYs = mapManager.getMapCellsByY(mapCellY);
                for (var targetX_1 = map.MapConst.cell_W_count - 1; targetX_1 > mapCellX; targetX_1--) {
                    targetCell = mapCellYs[targetX_1];
                    if (targetCell != null) {
                        if (targetCell.getConfigId() != mapCell.getConfigId() || !map.MapUtil.isMergeType(mapCell.getElementType())) {
                            //不可移动
                            continue;
                        }
                        else {
                            isMerger = true;
                        }
                    }
                    targetCellX = targetX_1;
                    break;
                }
            }
            if (directionX < 0) {
                var mapCellYs = mapManager.getMapCellsByY(mapCellY);
                for (var targetX_2 = 0; targetX_2 < mapCellX; targetX_2++) {
                    targetCell = mapCellYs[targetX_2];
                    if (targetCell != null) {
                        if (targetCell.getConfigId() != mapCell.getConfigId() || !map.MapUtil.isMergeType(mapCell.getElementType())) {
                            //不可移动
                            continue;
                        }
                        else {
                            isMerger = true;
                        }
                    }
                    targetCellX = targetX_2;
                    break;
                }
            }
            //获得移动的最终坐标
            if (directionY > 0) {
                var mapCellXs = mapManager.getMapCellsByX(mapCellX);
                for (var targetY_1 = map.MapConst.cell_H_count - 1; targetY_1 > mapCellY; targetY_1--) {
                    targetCell = mapCellXs[targetY_1];
                    if (targetCell != null) {
                        if (targetCell.getConfigId() != mapCell.getConfigId() || !map.MapUtil.isMergeType(mapCell.getElementType())) {
                            //不可移动
                            continue;
                        }
                        else {
                            isMerger = true;
                        }
                    }
                    targetCellY = targetY_1;
                    break;
                }
            }
            //获得移动的最终坐标
            if (directionY < 0) {
                var mapCellXs = mapManager.getMapCellsByX(mapCellX);
                for (var targetY_2 = 0; targetY_2 < mapCellY; targetY_2++) {
                    targetCell = mapCellXs[targetY_2];
                    if (targetCell != null) {
                        if (targetCell.getConfigId() != mapCell.getConfigId() || !map.MapUtil.isMergeType(mapCell.getElementType())) {
                            //不可移动
                            continue;
                        }
                        else {
                            isMerger = true;
                        }
                    }
                    targetCellY = targetY_2;
                    break;
                }
            }
            //没有可以移动的则不移动
            if (targetCellX == mapCellX && targetCellY == mapCellY) {
                return;
            }
            var targetX = targetCellX * map.MapConst.move_space;
            var targetY = targetCellY * map.MapConst.move_space;
            // let targetCellX = mapCell.getCellX() + moveX;
            // let targetCellY = mapCell.getCellY() + moveY;
            // //边界限制
            // if(targetX < MapConst.minPoint || targetX > MapConst.maxPointX || targetY < MapConst.minPoint || targetY > MapConst.maxPointY) {
            // 	return;
            // }
            //已经有不可合并的元素了不移动
            // let targetCell = mapManager.getMapCell(targetCellX,targetCellY);
            // if(targetCell != null){
            // 	if (targetCell.getConfigId() != mapCell.getConfigId() || !MapUtil.isMergeType(mapCell.getElementType())){
            // 		return;
            // 	}else{
            // 		isMerger = true;
            // 	}
            // }
            this.moveCell(mapCell, targetCellX, targetCellY);
            egret.Tween.get(mapCell).to({ x: targetX, y: targetY }, 200, egret.Ease.sineIn).call(function (e) {
                if (isMerger) {
                    //初始化新的道具
                    var cell1 = new map.Cell();
                    cell1.initPoint(targetCellX, targetCellY, 1002);
                    cell1.setBgImager("1002_png");
                    mapManager.initCell(cell1);
                    mapCell.playerEffcts(1, function () {
                        mapManager.removeSpriteCell(targetCell);
                        mapManager.removeSpriteCell(mapCell);
                    });
                }
            }, this);
        };
        MapService.prototype.touchEnd = function (e) {
            LogHandler.debug("coming endTouch!!!");
            var endX = e.localX;
            var endY = e.localY;
            var mainMapLayer = e.target;
            var beginX = mainMapLayer.touchBeginX;
            var beginY = mainMapLayer.touchBeginY;
            Services.getMapService().moveSpace(endX, endY, beginX, beginY, e);
        };
        /**
         * 响应 touch move 事件
         */
        MapService.prototype.touchMove = function (e) {
            LogHandler.debug(" moveTouch!!!");
            var endX = e.localX;
            var endY = e.localY;
            var mainMapLayer = e.target;
            var beginX = mainMapLayer.touchBeginX;
            var beginY = mainMapLayer.touchBeginY;
            if (!mainMapLayer.needMove) {
                return;
            }
            Services.getMapService().moveSpace(endX, endY, beginX, beginY, e);
        };
        return MapService;
    }());
    map.MapService = MapService;
    __reflect(MapService.prototype, "map.MapService");
})(map || (map = {}));
//# sourceMappingURL=MapService.js.map
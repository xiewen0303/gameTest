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
        MapService.prototype.initMap = function () {
            //地图战斗场景
            this.addCellFightScean(0, 0, 1001);
            this.addCellFightScean(0, 5, 1001);
            var mapManager = Stores.getMapManager();
            var fightBagContainer = mapManager.getFightBagContainer();
            //地图背包
            this.setOpenBagCount(2);
            this.addCellBagCell(1009, 0);
            //var p = cell.localToGlobal();
        };
        /**
         * 添加元素到战斗场景
         */
        MapService.prototype.addCellFightScean = function (slotx, sloty, tplId) {
            var mapManager = Stores.getMapManager();
            var cell2 = new map.Cell();
            cell2.initPoint(slotx, sloty, tplId);
            cell2.setBgImager("1001_png"); //这个地方一般从配置表的读出来
            mapManager.initFightSceanCell(cell2);
        };
        /**
         * 添加元素到战斗场景
         */
        MapService.prototype.addFightSceanByCell = function (cell) {
            var mapManager = Stores.getMapManager();
            mapManager.initFightSceanCell(cell);
        };
        /**
         * 添加元素到战场背包中
         */
        MapService.prototype.addCellBagCell = function (configId, index) {
            var mapManager = Stores.getMapManager();
            var cell = new map.Cell();
            cell.x = 19;
            cell.y = 19;
            cell.scaleX = 0.8;
            cell.scaleY = 0.8;
            cell.initConfig(configId);
            cell.setBgImager("1023_png"); //这个从配置表的读出来 
            cell.setFightBagIndex(index);
            mapManager.initFightBagCell(cell);
            //初始化背包
            this.addMoveListener(cell);
        };
        /**
         * 添加战场背包道具的移动监听器
         */
        MapService.prototype.addMoveListener = function (cell) {
            cell.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.choiseItem, cell);
        };
        /**
         * 删除战场背包道具的移动监听器
         */
        MapService.prototype.removeMoveLister = function (cell) {
            cell.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.choiseItem, cell);
        };
        /**
         * 选择需要拖动的道具
         */
        MapService.prototype.choiseItem = function (event) {
            var mapManager = Stores.getMapManager();
            var cell = event.target;
            Stores.getMapManager().setChioseItem(cell);
            var p = cell.localToGlobal();
            //删除战场背包容器
            var itemContair = mapManager.getItemsByFightBag(cell.getFightBagIndex());
            itemContair.removeChild(cell);
            mapManager.removeFightBagCell(cell.getFightBagIndex());
            cell.scaleX = 1;
            cell.scaleY = 1;
            cell.x = p.x;
            cell.y = p.y;
            var moveItemLayer = mapManager.getMoveItemLayer();
            moveItemLayer.addChild(cell);
            cell.touchEnabled = false;
            moveItemLayer.touchEnabled = true;
            LogHandler.error("----" + cell.x + "," + cell.y + "," + cell.getConfigId());
        };
        /**
         * 添加点击爆炸事件
         */
        MapService.prototype.addClickBombListener = function (cell) {
            cell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bombItem, cell);
        };
        MapService.prototype.bombItem = function (event) {
            //TODO 实现爆炸具体的伤害
            var cell = event.target;
            LogHandler.error("--------itemBomb------" + cell.getConfigId());
            //阻止
            event.stopImmediatePropagation();
        };
        /**
         * 设置背包开启格子数
         */
        MapService.prototype.setOpenBagCount = function (number) {
            var mapManager = Stores.getMapManager();
            mapManager.initFightBagCount(number);
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
            LogHandler.debug("moveContent touchBegin!!!");
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
            //向右
            if (moveCellX > 0) {
                //遍历
                for (var j = 0; j < map.MapConst.cell_W_count; j++) {
                    var targetIndex = -1;
                    for (var i = map.MapConst.cell_H_count - 1; i >= 0; i--) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            targetIndex = this.moveExt(targetCell, moveCellX, moveCellY, targetIndex);
                        }
                    }
                }
            }
            //向下
            if (moveCellY > 0) {
                //遍历
                for (var i = 0; i < map.MapConst.cell_H_count; i++) {
                    var targetIndex = -1;
                    for (var j = map.MapConst.cell_W_count - 1; j >= 0; j--) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            targetIndex = this.moveExt(targetCell, moveCellX, moveCellY, targetIndex);
                        }
                    }
                }
            }
            //向左
            if (moveCellX < 0) {
                //遍历
                for (var j = 0; j < map.MapConst.cell_W_count; j++) {
                    var targetIndex = -1;
                    for (var i = 0; i < map.MapConst.cell_H_count; i++) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            targetIndex = this.moveExt(targetCell, moveCellX, moveCellY, targetIndex);
                        }
                    }
                }
            }
            //向上
            if (moveCellY < 0) {
                //遍历
                for (var i = 0; i < map.MapConst.cell_H_count; i++) {
                    var targetIndex = -1;
                    for (var j = 0; j < map.MapConst.cell_W_count; j++) {
                        var targetCell = mapManager.getMapCell(i, j);
                        if (targetCell != null) {
                            targetIndex = this.moveExt(targetCell, moveCellX, moveCellY, targetIndex);
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
        MapService.prototype.moveExt = function (mapCell, directionX, directionY, targetIndex) {
            var result = 0;
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
                var beginIndex = targetIndex != -1 ? targetIndex : map.MapConst.cell_H_count - 1;
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
                    result = targetCellX = targetX_1;
                    break;
                }
            }
            if (directionX < 0) {
                var mapCellYs = mapManager.getMapCellsByY(mapCellY);
                var beginIndex = targetIndex != -1 ? targetIndex : 0;
                for (var targetX_2 = beginIndex; targetX_2 < mapCellX; targetX_2++) {
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
                    result = targetCellX = targetX_2;
                    break;
                }
            }
            //获得移动的最终坐标
            if (directionY > 0) {
                var mapCellXs = mapManager.getMapCellsByX(mapCellX);
                var beginIndex = targetIndex != -1 ? targetIndex : map.MapConst.cell_H_count - 1;
                for (var targetY_1 = beginIndex; targetY_1 > mapCellY; targetY_1--) {
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
                    result = targetCellY = targetY_1;
                    break;
                }
            }
            //获得移动的最终坐标
            if (directionY < 0) {
                var mapCellXs = mapManager.getMapCellsByX(mapCellX);
                var beginIndex = targetIndex != -1 ? targetIndex : 0;
                for (var targetY_2 = beginIndex; targetY_2 < mapCellY; targetY_2++) {
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
                    result = targetCellY = targetY_2;
                    break;
                }
            }
            //没有可以移动的则不移动
            if (targetCellX == mapCellX && targetCellY == mapCellY) {
                if (directionX != 0) {
                    result = mapCellX;
                }
                if (directionY != 0) {
                    result = mapCellY;
                }
                return result;
            }
            var targetX = targetCellX * map.MapConst.move_space;
            var targetY = targetCellY * map.MapConst.move_space;
            this.moveCell(mapCell, targetCellX, targetCellY);
            egret.Tween.get(mapCell).to({ x: targetX, y: targetY }, 200, egret.Ease.sineIn).call(function (e) {
                if (isMerger) {
                    //初始化新的道具
                    var cell1 = new map.Cell();
                    cell1.initPoint(targetCellX, targetCellY, 1002);
                    cell1.setBgImager("1002_png");
                    mapManager.initFightSceanCell(cell1);
                    mapCell.playerEffcts(1, function () {
                        mapManager.removeSpriteCell(targetCell);
                        mapManager.removeSpriteCell(mapCell);
                    });
                }
            }, this);
            return result;
        };
        MapService.prototype.touchEnd = function (e) {
            //LogHandler.debug("move endTouch!!!");
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
            LogHandler.debug("moveContent moveTouch!!!");
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
        /**
         * 响应 touch move 事件
         */
        MapService.prototype.touchTap = function (e) {
            LogHandler.debug("moveContent touchTap!!!");
        };
        MapService.prototype.moveFightBagBegin = function (event) {
            //添加一个层，专门用来滑动的？  //置顶TODO
            var mapManager = Stores.getMapManager();
            var moveItemLayer = mapManager.getMoveItemLayer();
            moveItemLayer.touchEnabled = true;
            var cell = Stores.getMapManager().getChioseItem();
            if (cell == null) {
                return;
            }
            moveItemLayer.addChild(cell);
        };
        /**
         * 战场背包移动事件监听
         */
        MapService.prototype.moveFightBagMove = function (event) {
            var cell = Stores.getMapManager().getChioseItem();
            if (cell == null) {
                return;
            }
            cell.x = event.localX;
            cell.y = event.localY;
        };
        /**
         * 战场背包元素移动结束事件
         */
        MapService.prototype.moveBagItemEnd = function (event) {
            var mapManager = Stores.getMapManager();
            var cell = mapManager.getChioseItem();
            if (cell == null) {
                LogHandler.error("not chiose item");
                return;
            }
            //触摸事件移除
            var moveItemLayer = mapManager.getMoveItemLayer();
            moveItemLayer.touchEnabled = false;
            var point = map.MapUtil.getCellXY(cell.x, cell.y);
            if (point == null) {
                //退回到原来的地点
                var index_1 = cell.getFightBagIndex();
                var itemContainer = mapManager.getItemsByFightBag(index_1);
                var p = itemContainer.localToGlobal();
                egret.Tween.get(cell).to({ x: p.x, y: p.y }, 2000, egret.Ease.sineIn).call(function (e) {
                    cell.touchEnabled = true;
                    moveItemLayer.removeChild(cell);
                    mapManager.addFightBagCell(cell);
                }, this);
                return;
            }
            //加入到战场中去
            cell.initPoint(point[0], point[1]);
            var mapService = Services.getMapService();
            mapService.addFightSceanByCell(cell);
            mapService.removeMoveLister(cell);
            //添加点击爆炸事件
            cell.touchEnabled = true;
            mapService.addClickBombListener(cell);
            LogHandler.debug(point[0] + "=" + point[1] + "----" + event.localX + "," + event.localY + "," + cell.getConfigId());
        };
        return MapService;
    }());
    map.MapService = MapService;
    __reflect(MapService.prototype, "map.MapService");
})(map || (map = {}));
//# sourceMappingURL=MapService.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapUtil = (function () {
        function MapUtil() {
        }
        /**
         * 是否为可以合并的类型
         */
        MapUtil.isMergeType = function (elementType) {
            if (elementType == map.ElementType.cat.valueOf() || elementType == map.ElementType.dog.valueOf()) {
                return true;
            }
            return false;
        };
        /**
         * 获取移动到场景中的坐标
         */
        MapUtil.getCellXY = function (px, py) {
            var tempx = px - map.MapConst.fightSlot_X;
            var tempy = py - map.MapConst.fightSlot_Y;
            if (tempx < 0 || tempy < 0 || tempx > map.MapConst.maxPointX || tempy > map.MapConst.maxPointY) {
                LogHandler.debug("not in fight cell container x:" + tempx + ",y:" + tempy);
                return null;
            }
            var cellx = (tempx / map.MapConst.cell_Width) >> 0;
            var celly = (tempy / map.MapConst.cell_Height) | 0;
            var cell = Stores.getMapManager().getMapCell(cellx, celly);
            if (cell != null) {
                LogHandler.debug("cell is exist" + cell.getConfigId());
                return null;
            }
            return [cellx, celly];
        };
        return MapUtil;
    }());
    map.MapUtil = MapUtil;
    __reflect(MapUtil.prototype, "map.MapUtil");
})(map || (map = {}));
//# sourceMappingURL=MapUtil.js.map
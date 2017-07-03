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
        return MapUtil;
    }());
    map.MapUtil = MapUtil;
    __reflect(MapUtil.prototype, "map.MapUtil");
})(map || (map = {}));
//# sourceMappingURL=MapUtil.js.map
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var map;
(function (map) {
    var MapConst = (function () {
        function MapConst() {
        }
        return MapConst;
    }());
    MapConst.cell_Width = 100;
    MapConst.cell_Height = 100;
    MapConst.cell_H_count = 6; //地图纵向格子数
    MapConst.cell_W_count = 6; //地图横向格子数
    map.MapConst = MapConst;
    __reflect(MapConst.prototype, "map.MapConst");
})(map || (map = {}));
//# sourceMappingURL=MapConst.js.map
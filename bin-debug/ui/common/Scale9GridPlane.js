var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var commonui;
(function (commonui) {
    var Scale9GridPlane = (function (_super) {
        __extends(Scale9GridPlane, _super);
        function Scale9GridPlane() {
            return _super.call(this) || this;
        }
        Scale9GridPlane.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        Scale9GridPlane.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        return Scale9GridPlane;
    }(eui.Component));
    commonui.Scale9GridPlane = Scale9GridPlane;
    __reflect(Scale9GridPlane.prototype, "commonui.Scale9GridPlane", ["eui.UIComponent", "egret.DisplayObject"]);
})(commonui || (commonui = {}));
//# sourceMappingURL=Scale9GridPlane.js.map
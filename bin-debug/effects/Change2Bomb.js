var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var effects;
(function (effects) {
    var Change2Bomb = (function (_super) {
        __extends(Change2Bomb, _super);
        function Change2Bomb() {
            return _super.call(this) || this;
        }
        //初始化
        Change2Bomb.prototype.initMovieClip = function (displayerObject) {
            var _this = this;
            displayerObject.addChild(this);
            this.x = displayerObject.width / 2;
            this.y = displayerObject.height / 2;
            var NewProject_mc_json = RES.getRes("NewProject_mc_json");
            var texture = RES.getRes("NewProject_tex_png");
            var mcFactory = new egret.MovieClipDataFactory(NewProject_mc_json, texture);
            var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
            this.addChild(mc);
            mc.gotoAndPlay(0, 1);
            mc.addEventListener(egret.Event.COMPLETE, function (e) {
                LogHandler.debug("执行完成！" + e.type);
                displayerObject.removeChild(_this);
            }, this);
            mc.addEventListener(egret.Event.LOOP_COMPLETE, function (e) {
                e.target;
                egret.log("执行完一次！");
            }, this);
        };
        //初始化
        Change2Bomb.prototype.initMovieClip1 = function () {
            var dragonbonesData = RES.getRes("Robot_json");
            var textureData = RES.getRes("texture_json");
            var texture = RES.getRes("texture_png");
            var dragonbonesFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));
            dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
            var armature = dragonbonesFactory.buildArmature("robot");
            this.addChild(armature.display);
            armature.display.x = 200;
            armature.display.y = 300;
            armature.display.scaleX = 0.5;
            armature.display.scaleY = 0.5;
            armature.animation.play("Run", 0);
            dragonBones.WorldClock.clock.add(armature);
            egret.Ticker.getInstance().register(function (advancedTime) {
                dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            }, this);
        };
        return Change2Bomb;
    }(egret.DisplayObjectContainer));
    effects.Change2Bomb = Change2Bomb;
    __reflect(Change2Bomb.prototype, "effects.Change2Bomb");
})(effects || (effects = {}));
//# sourceMappingURL=Change2Bomb.js.map
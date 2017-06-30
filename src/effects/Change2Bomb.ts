module effects {
	
	export class Change2Bomb extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}

		//初始化
		public initMovieClip():void{
			let NewProject_mc_json = RES.getRes("NewProject_mc_json");
			let texture = RES.getRes( "NewProject_tex_png" );

			var mcFactory = new egret.MovieClipDataFactory(NewProject_mc_json,texture);
			var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
			this.addChild(mc);
			mc.gotoAndPlay(0,3);

			mc.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
				egret.error("执行完成！"+e.type);
			}, this);

			mc.addEventListener(egret.Event.LOOP_COMPLETE,(e:egret.Event)=>{
				e.target;
				egret.log("执行完一次！");
			},this)
		}

		//初始化
		public initMovieClip1():void{
			var dragonbonesData = RES.getRes("Robot_json");  
			var textureData = RES.getRes("texture_json");  
			var texture = RES.getRes("texture_png");

			var dragonbonesFactory:dragonBones.EgretFactory = new dragonBones.EgretFactory();  
			dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(dragonbonesData));  
			dragonbonesFactory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture,textureData));
			var armature: dragonBones.Armature = dragonbonesFactory.buildArmature("robot");
			this.addChild(armature.display);
			
			armature.display.x = 200;
			armature.display.y = 300;
			armature.display.scaleX = 0.5;
			armature.display.scaleY = 0.5;

			armature.animation.play("Run",0);

			dragonBones.WorldClock.clock.add(armature);  
			egret.Ticker.getInstance().register(function(advancedTime){  
				dragonBones.WorldClock.clock.advanceTime(advancedTime/1000);  
			},this);
		}
	}
}
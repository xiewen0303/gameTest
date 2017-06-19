module net {
	export class Decode implements IDecode{
		public constructor() {
		}
		public handler(data:egret.ByteArray):boolean{
			 console.log("coming handler ...");
			 return true;
		}
	}
}
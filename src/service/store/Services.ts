class Services {
	
	private static mapService:map.MapService = new map.MapService();
	private static loginService:login.LoginService = new login.LoginService();

	public constructor() {
	}
	
	public static getMapService():map.MapService {
		return this.mapService;
	}
	
	public static getLoginService():login.LoginService {
		return this.loginService;
	}
}
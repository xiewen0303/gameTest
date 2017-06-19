
class LogHandler {
		public constructor() {
		}

		public static debug(message?: string, ...optionalParams: any[]): void {
			console.debug(message,optionalParams);
		}

		public static error(message?: string, ...optionalParams: any[]): void {
			console.error(message,optionalParams);
		}
}
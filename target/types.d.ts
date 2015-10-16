
declare module "kasai" { 
	export var match: (value: any, patterns: any[]) => any;
	export var _: (x: any) => boolean;
	export var typeOf: (t: string) => (x: any) => boolean;
	export var instanceOf: (c: any) => (x: any) => boolean;
	export var $: (x: any) => any;
}

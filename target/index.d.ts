declare module "Kasai" {
    var match: (value: any, patterns: any[]) => any;
    var _: (x: any) => boolean;
    var typeOf: (t: string) => (x: any) => boolean;
    var instanceOf: (c: any) => (x: any) => boolean;
}

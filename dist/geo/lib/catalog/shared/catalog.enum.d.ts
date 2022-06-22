export declare enum CatalogItemType {
    Layer = "layer",
    Group = "group"
}
export declare enum TypeCatalog {
    wms = 0,
    wmts = 1,
    baselayers = 2,
    arcgisrest = 3,
    tilearcgisrest = 4,
    imagearcgisrest = 5,
    composite = 6
}
export declare type TypeCatalogStrings = keyof typeof TypeCatalog;

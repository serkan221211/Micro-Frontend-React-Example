
    export type RemoteKeys = 'Product/Product';
    type PackageType<T> = T extends 'Product/Product' ? typeof import('Product/Product') :any;
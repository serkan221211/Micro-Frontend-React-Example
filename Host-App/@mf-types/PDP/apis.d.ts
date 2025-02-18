
    export type RemoteKeys = 'PDP/Product';
    type PackageType<T> = T extends 'PDP/Product' ? typeof import('PDP/Product') :any;

    export type RemoteKeys = 'Auth/Login' | 'Auth/Register';
    type PackageType<T> = T extends 'Auth/Register' ? typeof import('Auth/Register') :T extends 'Auth/Login' ? typeof import('Auth/Login') :any;
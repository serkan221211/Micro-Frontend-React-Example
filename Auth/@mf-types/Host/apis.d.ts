
    export type RemoteKeys = 'Host/Navbar';
    type PackageType<T> = T extends 'Host/Navbar' ? typeof import('Host/Navbar') :any;
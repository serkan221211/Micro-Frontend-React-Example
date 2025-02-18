
    export type RemoteKeys = 'Host_App/Navbar';
    type PackageType<T> = T extends 'Host_App/Navbar' ? typeof import('Host_App/Navbar') :any;
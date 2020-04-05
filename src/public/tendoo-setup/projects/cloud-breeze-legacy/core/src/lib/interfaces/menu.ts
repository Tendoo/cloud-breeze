export interface SubMenu {
    text:string;
    href:string;
    active?: boolean;
    icon?: string;
    open?:boolean;
    namespace?: string;
    shows?: () => Promise<boolean>;
}

export interface Menu {
    text:string;
    href?:string;
    active?: boolean;
    icon?: string;
    open?: boolean;
    shows?: () => Promise<boolean>;
    childs?: SubMenu[];
    namespace: string;
}

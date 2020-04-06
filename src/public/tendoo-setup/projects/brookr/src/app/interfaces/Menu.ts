export interface Menu {
    label: string;
    path?: string;
    toggled?: boolean;
    show?: () => boolean;
    childrens?: Menu[],
    icon?: string;
}
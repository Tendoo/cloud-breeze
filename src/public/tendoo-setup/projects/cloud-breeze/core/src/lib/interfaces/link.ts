export interface Link {
    href: string | boolean;
    label: string;
    namespace: string;
    class?: string;
    icon?: string;
    onClick?: () => {},
    show?: () => {};
}
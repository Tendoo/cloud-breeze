import { Field } from "./field";

export interface CrudConfig {
    columns? : string;
    labels?  : {
        list_title : string;
        list_description : string;
        edit_title : string;
        edit_description : string;
        create_title : string;
        create_description : string;
    }
    fields: Field[];
    links: {[ key: string ]: string };
    results? : {[ key: string]: string | number | boolean }[];
    namespace?: string;
}
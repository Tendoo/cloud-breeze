import { Observable } from "rxjs";
import { SearchEntry } from "./search-entry";

export interface SearchObject {
    title: string;
    entries: Observable<SearchEntry[]>;
    multiselect?: boolean;
    closeOnFound?: boolean;
}
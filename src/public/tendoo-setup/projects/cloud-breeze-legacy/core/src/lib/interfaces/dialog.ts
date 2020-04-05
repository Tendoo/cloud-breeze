import { Button } from "./button";

export interface Dialog {
    title : string;
    message: string;
    buttons: Button[]
}
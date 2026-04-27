import { Injectable } from "@angular/core";

import { TitleBarComponent } from "mf-shared-core";

@Injectable({
    providedIn: 'root',
})
export class RemoteUtilsService {
    constructor() { }

    public log(message: string): void {
        console.log(`RemoteUtilsService: ${message}`);
    }

    public brandMessage(state: { message: string }): void {
        state.message = `RemoteUtilsService: ${state.message}`;
    }

    public brandTitle(com: TitleBarComponent): void {
        if (com && com.title) {
            com.setTitle(`RemoteUtilsService: ${com.title}`);
        }
    }
}
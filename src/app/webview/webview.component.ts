import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-webview",
    templateUrl: "./webview.component.html"
})
export class WebviewComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

    loadFinished(event) {
        const webview = event.object;
        setTimeout(async () => {
            await webview.executeJavaScript(`links = document.links;
            for (i = 0, length = links.length; i < length; i++) {
                 links[i].target == '_blank' && links[i].removeAttribute('target');
             }`);
        }, 1000);
    }
}

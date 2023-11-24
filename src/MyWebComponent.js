import { HttpClient } from "../node_modules/lib-http/HttpClient.js";
import { Url } from "../node_modules/lib-http/Url.js";

// import { ComponentHelper } from "../node_modules/ComponentHelper.js";

export { MyWebComponent };




class MyWebComponent extends HTMLElement {

 
    instanceVar1;


    instanceVar2;



    constructor() {
        super();
        
        // Initialize things in the constructor.
    }






    // Called each time the element is appended to the window/another element.
    async connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const list = document.createElement("div");
        list.setAttribute("class", "statute");
        const style = document.createElement("style");
        style.innerText = WebcOrs.getCss();

        this.list = list;

        this.shadowRoot.append(style, list);

        const headers = new Headers();
        headers.append("Accept", "text/html");
        const reqInit = {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default"
        };

   
        const client = new HttpClient();
        // client.toggleTest();
        let url = MyWebComponent.MyStaticMethod(this.instanceVar1);
        
        // Register a mock for a given domain.
        HttpClient.register("appdev.ocdla.org", new MyMock());

        

        // Make our http request and load the chapter from the Oregon Legislature website.
        const req = new Request(url);
        let resp = await client.send(req);

        let html = render(data);

        this.list.innerHTML = html;
    }






    static MyStaticMethod(p1) {

        return p1;
    }



    render(data) {
        return `<div>
            <p>${data}</p>
        </div>`;
    }

    static getCss() {
        return `
        .selector-1 {
            display:inline-block;
            margin-top: 8px;
        }
        .selector-2 {
            font-family: monospace;
            border-left: 3px solid blue;
            margin-left: 50px;
            max-width: 80%;
            padding-left: 20px;
        }`;
       
    }




}


function beforeCreate() {
    const url = new URL(window.location.href);
    baseUrl = url.hostname;
}

export class Router {
    constructor(routes) {
        this.routes = routes;
        const url = new URL(window.location.href);
        this.baseUrl = url.hostname;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
var register = function (app) {
    // home page    
    app.get("/", function (req, res) {
        res.render("index");
    });
    // about page    
    app.get("/about", function (req, res) {
        res.render("about");
    });
};
exports.register = register;

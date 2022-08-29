"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8000;
app.get("/", function (req, res) {
    res.send("Hello Typescript with Node.js!");
});
app.listen(PORT, function () {
    console.log("Server Running here \uD83D\uDC49 https://localhost:" + PORT);
});

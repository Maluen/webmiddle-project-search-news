import Server from "webmiddle-server";
import newsSearchWebmiddle from "./newsSearchWebmiddle";

const server = new Server(newsSearchWebmiddle);
server.start();

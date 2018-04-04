import Server from "webmiddle-server";
import { contextOptions, Start } from "./newsSearch";

const server = new Server({
  "start": Start,
}, {
  contextOptions,
});
server.start();

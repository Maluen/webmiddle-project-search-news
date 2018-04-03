import Server from "webmiddle-server";
import newsSearchContext, { Start } from "./newsSearch";

const server = new Server({
  "start": Start,
}, {
  context: newsSearchContext,
});
server.start();

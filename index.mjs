import { createServer } from "http";
import router from "./router.mjs";

const server = createServer(router);

server.listen(3333, () => console.log(`Listening on http://localhost:3333`));

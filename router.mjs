import { parse } from "url";
import templates from "./templates";

async function router(request, response) {
  try {
    const url = parse(request.url, true);
    const path = url.pathname === "/" ? "home" : url.pathname.replace("/", "");
    const routeHandler = templates[path];
    if (!routeHandler) {
      const error = new Error(`/${path} not found`);
      error.status = 404;
      throw error;
    }
    const html = await routeHandler({ url });
    response.writeHead(200, { "content-type": "text/html" });
    response.end(html);
    console.log(200, `/${path}`);
  } catch (error) {
    const html = templates.missing({ message: error.message });
    response.writeHead(error.status || 500, { "content-type": "text/html" });
    response.end(html);
    console.error(error.status, error.message);
  }
}

export default router;

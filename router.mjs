import { parse } from "url";
import handlers from "./handlers";

async function router(request, response) {
  try {
    const url = parse(request.url, true);
    const path = url.pathname === "/" ? "home" : url.pathname.replace("/", "");
    const routeTemplate = handlers[path];
    if (!routeTemplate) {
      const error = new Error(`/${path} not found`);
      error.status = 404;
      throw error;
    }
    const html = await routeTemplate({ url });
    response.writeHead(200, { "content-type": "text/html" });
    response.end(html);
    console.log(200, `/${path}`);
  } catch (error) {
    const html = handlers.missing({ message: error.message });
    response.writeHead(error.status || 500, { "content-type": "text/html" });
    response.end(html);
    console.error(error.status, error.message);
  }
}

export default router;

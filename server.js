import http from "http";
import fsPromise from "fs/promises";
import url from "url";
import path from "path";
const PORT = 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

http
  .createServer(async (req, res) => {
    const method = req.method;
    let filePath;

    try {
      if (method === "GET") {
        const pathname = req.url;
        if (pathname === "/") {
          filePath = path.join(__dirname, "public", "index.html");
        }
        if (pathname === "/about") {
          filePath = path.join(__dirname, "public", "about.html");
        } else {
          throw new Error("Not found");
        }

        const fileContent = await fsPromise.readFile(filePath);
        console.log(fileContent);
        res.setHeader("Content-Type", "text/html");
        res.write(fileContent);
        res.end();
      } else {
        throw new Error("Method not allowed");
      }
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("<h1>Server Error</h1>");
    }
  })
  .listen(PORT, () => console.log(`Server is running on port ${PORT}`));

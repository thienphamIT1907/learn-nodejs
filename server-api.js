import http from "http";

const users = [
  { id: 1, name: "Thien Pham" },
  { id: 2, name: "Vang Nguyen" },
  { id: 3, name: "Van Nguyen" },
  { id: 4, name: "Peter Parker" },
];

http
  .createServer((req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify(users));
    }
  })
  .listen(3000, () => {
    console.log("Server running...");
  });

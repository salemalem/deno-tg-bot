// server.ts
import Denoot from "https://deno.land/x/denoot/mod.ts";

const app = Denoot.app(3000);

console.log("Server is running..")
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// then run "deno run --allow-net --unstable server.ts"
// open http://localhost:3000
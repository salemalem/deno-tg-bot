// server.ts
import Denoot from "https://deno.land/x/denoot/mod.ts";

const app = Denoot.app(3000);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

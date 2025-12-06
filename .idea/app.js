import express from "express"

const app = express()

app.listen(3000, () => {
    console.log("Server listening on 3000")
})

app.use(express.static("views"))

app.get("/", (req, res) => {
    console.log('request sent')
    res.sendFile("./index.html", { root: "views" })
})

app.get("/about", (req, res) => {
    console.log('request sent')
    res.sendFile("./about.html", { root: "views" })
})

app.get("/contact", (req, res) => {
    console.log('request sent')
    res.sendFile("./contact-me.html", { root: "views" })
})

app.use("/", (req, res) => {
    console.log('request sent')
    res.sendFile("./404.html", { root: "views" })
})


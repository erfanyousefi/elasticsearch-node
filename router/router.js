const { blogRouter } = require("./blog.routes");
const { indicesRoutes } = require("./indices.routes");

const AllRouters = require("express").Router();
AllRouters.get("/", (req, res) => {
    return res.render("./pages/index", {
        message: "Hello Express"
    })
})
AllRouters.use("/index", indicesRoutes)
AllRouters.use("/blog", blogRouter)
module.exports = {
    AllRouters
}
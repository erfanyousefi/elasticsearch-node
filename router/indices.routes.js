const { createNewIndex, getIndices, removeIndex } = require("../controller/indices.controller");

const indicesRoutes = require("express").Router();
indicesRoutes.post("/create", createNewIndex)
indicesRoutes.get("/list", getIndices)
indicesRoutes.delete("/delete/:indexName", removeIndex)
module.exports = {
    indicesRoutes
}
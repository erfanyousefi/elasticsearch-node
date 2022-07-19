const { createNewBlog, getAllBlogs, removeBlog, updateBlog, updateBlog2, searchByTitle, searchByMultiField, searchByRegexp, findBlogByMultifield } = require("../controller/blog.controller");

const blogRouter = require("express").Router();
blogRouter.post("/create", createNewBlog)
blogRouter.get("/list/:value?", getAllBlogs)
blogRouter.delete("/delete/:id", removeBlog)
blogRouter.put("/update/:id", updateBlog)
blogRouter.put("/update-2/:id", updateBlog2)
blogRouter.get("/findByTitlt", searchByTitle)
blogRouter.get("/multi-fields", searchByMultiField)
blogRouter.get("/regexp-search", searchByRegexp)
blogRouter.get("/findBlogByMultifield", findBlogByMultifield)
module.exports = {
    blogRouter
}
const Blogs = require("../../Models/Blogs");

const getBlogById = async (req, res) => {
    let errorCode = null;
    try {
        // getting blogId and finding the blog
        const blogId = req.header('blogId');
        const blog = await Blogs.findById(blogId);

        // if blog doesn't exist, throwing error;
        if (!blog) {
            errorCode = 404;
            throw new Error("Blog not found")
        }

        // returning blog
        return res.status(200).json({ success: true, blog })
    } catch (err) {
        // checking for erros and send them as response
        return res.status(errorCode || 500).json({ success: false, message: "Internal server Error", error: err.message })
    }
}
module.exports = getBlogById
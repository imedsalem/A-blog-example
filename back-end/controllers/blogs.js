const Blog = require('../models/blogs');

exports.createBlog = async (req, res) => {
    const { title, content, author } = req.body;
  
    const blog = new Blog({ title, content, author });
  
    try {
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.search = async (req, res) => {
    try {
      const { search } = req.query;
      const query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
        ],
      };
      const blogs = await Blog.find(query);
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        res.status(404).json({ error: 'Blog not found' });
        return;
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
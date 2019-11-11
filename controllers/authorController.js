function AuthorController(Author){
  function post(req, res) {
    const author = new Author(req.body);
    author.save();
    res.status(201);
    return res.json(author);
  };
  function get(req, res) {
    Author.find((err, author) => {
      if (err) {
        return res.send(err);
      }
      return res.json(author);
    });
  };
  return { post, get };
}

module.exports = AuthorController;
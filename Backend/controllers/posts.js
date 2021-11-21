const posts = [
    {
      title: "Primer post",
      sumary: "Este es un post",
      content: "Nuestro primer post desde el servidor"
    },
    {
      title: "Segundo post",
      sumary: "Este es un post",
      content: "Felicitaciones"
    }
  ];

exports.getMessage = (req,res) => {
    res.send("Hola Mundo!");
}

exports.getPosts = (req, res) => {
    res.status(200).json(posts);
}

exports.createPost = (req, res) => {
    console.log(req.body);
    posts.push(req.body);
    res.status(201).json({message: "Post creado"});
}
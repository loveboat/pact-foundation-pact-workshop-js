import ProductRepository from "./product.repository.js";

const repository = new ProductRepository();

const getAll = async (req, res) => {
  res.send(await repository.fetchAll());
};

const getById = async (req, res) => {
  const product = await repository.getById(req.params.id);
  product
    ? res.send(product)
    : res.status(404).send({ message: "Product not found" });
};

export { getAll, getById, repository };

const Product = require("../modals/productModel");

//Create Product -- Admin
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ success: true, products });
};

// Update Product -- Admin
exports.updateProduct = async (req, res, next) => {
  let product = Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({ success: true, product });
};

// Delete Product
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Product Deleted successfully",
  });
};

// Get Product Details
exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  console.log(product);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "Product not found" });
  }

  res.status(200).json({ success: true, product });
};

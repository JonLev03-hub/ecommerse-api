const router = require("express").Router();
const Product = require("../models/Product");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

// Create
router.post("/");

//Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    req.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Delete
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json("Product has been deleted");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get Product
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//   try {
//     const Product = await Product.findById(req.params.id);
//     const { password, ...other } = Product._doc;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// // Get All User
// router.get("/Products", verifyTokenAndAdmin, async (req, res) => {
//   const query = req.query.new;

//   try {
//     const product = query
//       ? await Product.find().sort({ _id: -1 }).limit(5)
//       : await Product.find();
//     const { password, ...other } = product;
//     res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get User Stats
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//   try {
//     const data = await Product.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: {
//             $month: "$createdAt",
//           },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Créer un nouveau produit
router.post('/', productController.createProduct);

// Obtenir tous les produits
router.get('/', productController.getAllProducts);

// Obtenir un produit par ID
router.get('/:id', productController.getProductById);

// Mettre à jour un produit par ID
router.put('/:id', productController.updateProduct);

// Supprimer un produit par ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;

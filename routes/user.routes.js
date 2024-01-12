const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Créer un nouvel utilisateur
router.post('/', userController.createUser);

// Connexion de l'utilisateur
router.post('/login', userController.loginUser);

// Obtenir tous les utilisateurs
router.get('/', userController.getAllUsers);

// Obtenir un utilisateur par ID
router.get('/:id', userController.getUserById);

// Mettre à jour un utilisateur par ID
router.put('/:id', userController.updateUser);

// Supprimer un utilisateur par ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
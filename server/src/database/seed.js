import sequelize from './connect.js';
import models from '../models/index.js';
const { role, user, product } = models;

export const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const roles = await role.bulkCreate([
      { name: 'user' },
      { name: 'moderator' },
      { name: 'admin' },
    ]);

    const users = await user.bulkCreate([
      {
        username: 'user',
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'user@mail.com',
        password: '$2a$10$KH1D8E6BfPJFsoxBJYA5TuVItCzipAxI52JiRl0gKLKCgMOsjM.6q',
      },
      {
        username: 'moderator',
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'moderator@mail.com',
        password: '$2a$10$KH1D8E6BfPJFsoxBJYA5TuVItCzipAxI52JiRl0gKLKCgMOsjM.6q',
      },
      {
        username: 'admin',
        firstName: 'Charlie',
        lastName: 'Brown',
        email: 'admin@mail.com',
        password: '$2a$10$KH1D8E6BfPJFsoxBJYA5TuVItCzipAxI52JiRl0gKLKCgMOsjM.6q',
      },
    ]);

    await users[0].addRole(roles[0]);
    await users[1].addRole(roles[1]);
    await users[2].addRole(roles[1]);
    await users[2].addRole(roles[2]);

    const products = await product.bulkCreate([
      {
        name: 'Product 1',
        price: 10.99,
        description: 'Description of product 1',
        image: 'product1.jpg',
        available: true,
        quantity: 100,
        releaseDate: new Date(),
      },
      {
        name: 'Product 2',
        price: 20.99,
        description: 'Description of product 2',
        image: 'product2.jpg',
        available: true,
        quantity: 50,
        releaseDate: new Date(),
      },
      {
        name: 'Product 3',
        price: 30.99,
        description: 'Description of product 3',
        image: 'product3.jpg',
        available: false,
        quantity: 0,
        releaseDate: new Date(),
      },
    ]);

    console.log('Données de test créées avec succès !');
  } catch (error) {
    console.error('Erreur lors de la création des données de test :', error);
    process.exit(1);
  }
};

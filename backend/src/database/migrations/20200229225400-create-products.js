module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descProduto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descCor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tamanho: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descTamanho: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('products');
  },
};

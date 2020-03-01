import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        produto: Sequelize.STRING,
        descproduto: Sequelize.STRING,
        cor: Sequelize.STRING,
        desccor: Sequelize.STRING,
        tamanho: Sequelize.INTEGER,
        desctamanho: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Product;

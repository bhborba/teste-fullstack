import { Op } from 'sequelize';
import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const { produto, descricao, page = 1 } = req.query;
    let where = {};

    if (produto) {
      where = {
        produto: { [Op.like]: `%${produto}%` },
      };
    } else if (descricao) {
      where = {
        descProduto: { [Op.like]: `%${descricao}%` },
      };
    }
    const products = await Product.findAll({
      where,
      limit: 15,
      offset: (page - 1) * 15,
      attributes: [
        'id',
        'produto',
        'descProduto',
        'cor',
        'descCor',
        'tamanho',
        'descTamanho',
      ],
    });
    return res.json(products);
  }
}

export default new ProductController();

import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function deleteProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found. Check the id!' });
    }

    res.json({ message: 'Product deleted successfully!' });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

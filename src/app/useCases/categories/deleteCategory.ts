import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;

    const category = await Category.findByIdAndDelete(categoryId);

    if (!category) {
      return res.status(404).json({ error: 'Category not found. Check the id!' });
    }

    res.json({ message: 'Category deleted successfully!' });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

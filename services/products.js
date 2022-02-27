const { query } = require("../db");

class Product{
 async create(data) {
    const user = await UserModel.create(data);
    return user;
  }

  async update(id, data) {
    const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
    return user;
  }

  async delete(id) {
    const user = await UserModel.findByIdAndDelete(id);
    return user;
  }
}






module.exports = Product;
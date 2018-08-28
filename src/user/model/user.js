module.exports = class extends think.Model {
  async checkName (name) {
    const result = await this.where({name}).find();
    return think.isEmpty(result);
  }

  async saveUser (info) {
    let insertId = await this.add(info);
    console.log(insertId)
  }
};

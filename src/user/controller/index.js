const Base = require('./base.js');

module.exports = class extends Base {
  // 路径 /user/index

  indexAction () {
    return this.display();
  }

  // 路径 /user/index/test
  async testAction () {
    const model = this.model('user')
    if (this.isPost && await model.checkName(this.post('name'))) {
      await model.saveUser(this.post());
    }
  }
}

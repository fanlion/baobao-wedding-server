import { Application } from 'egg';
import validator from './validator';

class AppBootHook {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  // 配置文件即将加载
  configWillLoad() {
    console.log('配置文件即将加载');
  }

  configDidLoad() {
    console.log('配置文件加载完成');
  }

  didLoad() {
    console.log('文件加载完成');
  }

  // 插件启动完毕
  async willReady() {
    for (const [k, v] of Object.entries(validator)) {
      this.app.validator.addRule(k, (...[, value]) => v(value));
    }
    console.log('插件启动完毕');
  }

  serverDidReady() {
    console.log('应用启动完成');
  }
}

module.exports = AppBootHook;

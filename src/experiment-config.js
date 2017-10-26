import yaml from 'js-yaml';
/**
 * by default except yaml config, parseit it into json object
 *
 * my oun config
 * ```
 * import Config from 'Config';
 * export default class MyClass extends Config {
 *  constructor(configYaml, env = 'dev') {
 *   // config parsing logic, for struction validate config.yaml file
 *  }
 * }
 * ```
 */
export default class ExperimentConfig {
  constructor(configYaml, env = 'dev') {
    this.config = {};
    yaml.safeLoadAll(configYaml, (doc) => {
      if (doc && doc[env]) {
        this.config = doc[env];
      }
    });
  }

  getConfig() {
    return this.config;
  }
}

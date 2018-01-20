import ConfigStore from './config_store';
import AuthStore from './auth_store';

const config = new ConfigStore()
const auth = new AuthStore()

export default {config, auth}
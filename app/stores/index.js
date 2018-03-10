import ConfigStore from './config_store';
import AuthStore from './auth_store';
import MatchStore from './match_store';
import PostStore from './post_store';

const config = new ConfigStore()
const auth = new AuthStore()
const matches = new MatchStore()
const post = new PostStore()

export default {config, auth, matches, post}
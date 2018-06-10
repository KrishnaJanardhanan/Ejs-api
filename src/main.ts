
import { WebApi } from './webApi';
import { AppSetting } from './config/AppSetting';

let api = new WebApi();

api.run();
console.log(`listening on ${AppSetting.Port}`);
let app = api.app;
export { app };

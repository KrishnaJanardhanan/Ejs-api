import { Router, Request, Response, NextFunction } from 'express';
import { Api } from '../helpers';

export class CustomerController {
    public static route = '/customer';
    public router: Router = Router();
    constructor() {
        this.router.get('/', this.getCustomer);
    }
    public getCustomer(request: Request, response: Response, next: NextFunction) {
        return Api.ok(request, response, 'Customer info');

    }
}




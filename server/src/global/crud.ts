import { Request, Response } from 'express';

interface Crud {

    create?: (request: Request, response: Response) => Response;
    get?: (request: Request, response: Response) => Response;
    delete?: (request: Request, response: Response) => Response;
    update?: (request: Request, response: Response) => Response;
}

export {
    Crud
};
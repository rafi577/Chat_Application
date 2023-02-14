import createError from 'http-errors';
import { Request , Response } from 'express';


function notFoundHandler(req:Request,res:Response,next:any) {
    next(createError(404,"page not founded"));
}
function errorHandler(err:Error, req:Request,res:Response, next:any){
    console.log('default render');
    res.render("error",{
        title : "!error"
    });
}

export {notFoundHandler,errorHandler};//multiple function exports in ES6
import { Request, Response, RequestHandler, NextFunction } from 'express'

export const catchAsync = (handle: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => handle(...args).catch(args[2])

export const notFound = (req:Request, res: Response, next: NextFunction) => {
  res.status(404).json({message: 'Not found'})
}

export const serverError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if(!err.status){
    console.log(err.stack)
  }
  
  res.status(err.status || 500).json({message: err.message || 'Internal Server Error'})
}

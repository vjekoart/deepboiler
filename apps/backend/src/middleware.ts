import type { Request, Response, NextFunction } from 'express'

interface AppError extends Error {
  status?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ message: err.message || 'Server Error' })
}

import { Response } from 'express';
import { User } from 'polario-common';

// All possible result types
type Result = User | User[];

/**
 * Contructs an Error 404 response
 *
 * @param res the express response to build
 * @param message the message to include with the response
 * @returns the 404 express response
 */
const Error404 = (res: Response, message = 'Not found'): Response =>
  res.status(404).json({ success: false, message: message });

/**
 * Constructs an HTTP_OK 200 response
 *
 * @param res the express response to build
 * @param message the response's message
 * @param result the response's result/data
 * @returns the 200 express response
 */
const HTTP_OK = (res: Response, message: string, result: Result): Response =>
  res.status(200).json({ success: true, message: message, result: result });

export { Error404, HTTP_OK };

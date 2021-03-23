import { Request, Response } from 'express';
import { redirectToHttpsMiddleware } from '../src';

describe('httpsRedirect()', () => {
  test('should not redirect when protocol is not http', () => {
    const request = { protocol: 'https', hostname: 'example.com', url: '/login' } as Request;
    const response = {} as Response;
    response.redirect = jest.fn();
    const next = jest.fn();
    redirectToHttpsMiddleware(request, response, next);
    expect(response.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test('should not redirect when hostname is localhost', () => {
    const request = { protocol: 'http', hostname: 'localhost', url: '/login' } as Request;
    const response = {} as Response;
    response.redirect = jest.fn();
    const next = jest.fn();
    redirectToHttpsMiddleware(request, response, next);
    expect(response.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test('should not redirect when hostname is 127.0.0.1', () => {
    const request = { protocol: 'http', hostname: '127.0.0.1', url: '/login' } as Request;
    const response = {} as Response;
    response.redirect = jest.fn();
    const next = jest.fn();
    redirectToHttpsMiddleware(request, response, next);
    expect(response.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  test('should redirect to the same url with https protocol', () => {
    const request = { protocol: 'http', hostname: 'example.com', url: '/login' } as Request;
    const response = {} as Response;
    response.redirect = jest.fn();
    const next = jest.fn();
    redirectToHttpsMiddleware(request, response, next);
    expect(response.redirect).toHaveBeenCalledWith(`https://${request.hostname}${request.url}`);
    expect(next).not.toHaveBeenCalled();
  });
});

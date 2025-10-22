import React from 'react';

export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Link = ({ children, to }) => <a href={to}>{children}</a>;
export const Route = ({ element }) => element;
export const Routes = ({ children }) => <div>{children}</div>;
export const useParams = () => ({ id: '123' });

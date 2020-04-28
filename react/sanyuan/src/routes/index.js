import React from 'react';
import Home from '../application/Home';
import { Redirect } from 'react-router-dom';
export default [
    {
        path: "/",
        component: Home,
        routes: [
            {
              path: "/",
              exact: true,
              render: () => (
                <Redirect to={"/recommend"}/>
              )
            },
        ]
    }
]
import { createBrowserRouter, Navigate } from "react-router-dom";

import Quotes from "@/pages/quotes";
import Layout from "@/components/layout";

import { routes } from "@/constants/routes";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={routes.quotes} replace />
            },
            {
                path: routes.quotes,
                element: <Quotes />,
            },
            {
                path: routes.orders,
                async lazy() {
                    let PasswordForgot = await import("@/pages/orders");
                    return {Component: PasswordForgot.default}
                },
            },
        ],
    }
]);
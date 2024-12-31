import { routes } from "./routes";
import { icons } from "./icons";

interface NavlinkProps {
    id: number;
    title: string;
    link?: string;
    icon: string;
    rightSection?: boolean;
    children?: {
        id: number;
        title: string;
        link: string;
    }[]
};

export const mainLinks:NavlinkProps[] = [
    {
        id: 1,
        title: "Dashboard",
        link: routes.dashboard,
        icon: icons.home,
    },
    {
        id: 2,
        title: "Inventory",
        link: routes.inventory,
        icon: icons.inventory,
    },
    {
        id: 3,
        title: "Procurement",
        icon: icons.procurement,
        children: [
            {
                id: 1,
                title: "Quotes",
                link: routes.quotes,
            },
            {
                id: 2,
                title: "Orders",
                link: routes.orders,
            },
        ],
    },
    {
        id: 4,
        title: "Finance",
        icon: icons.finance,
        children: []
    },
    {
        id: 5,
        title: "Communication",
        rightSection: true,
        icon: icons.communication,
    },
    {
        id: 6,
        title: "Calendar",
        rightSection: true,
        icon: icons.calendar,
    },
    {
        id: 7,
        title: "Contracts",
        icon: icons.contracts,
    },
];

export const footerLinks:NavlinkProps[] = [
    {
        id: 1,
        title: "Support",
        icon: icons.support,
    },
    {
        id: 2,
        title: "Settings",
        icon: icons.settings,
    },
];
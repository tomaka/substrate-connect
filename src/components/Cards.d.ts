import * as React from 'react';
import { GridProps } from '@material-ui/core';
interface CardLinkProps {
    href: string;
}
interface CardProjectProps extends GridProps {
    title?: string;
    subtitle?: string;
    imageProps?: {
        path: string;
        position?: string;
    };
    linkProps?: CardLinkProps;
}
export declare const CardProject: React.FunctionComponent<CardProjectProps>;
interface CardStatusProps {
    status: 'supported' | 'soon' | 'very soon';
}
export declare const CardStatus: React.FunctionComponent<CardStatusProps>;
interface CardNetworkProps {
    title: string;
    statusProps: CardStatusProps;
    linkProps?: CardLinkProps;
}
export declare const CardNetwork: React.FunctionComponent<CardNetworkProps>;
export {};
//# sourceMappingURL=Cards.d.ts.map
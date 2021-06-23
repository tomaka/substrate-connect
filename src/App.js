/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { CssBaseline, ThemeProvider, createMuiTheme, Typography, Box, Grid } from '@material-ui/core';
import { theme, dark, Loader, Logo, Sidebar, UIContainer, Section, SectionHeading, SectionText, SectionRef, FooterLink, SidebarLink, Code } from './components';
import MuiAlert from '@material-ui/lab/Alert';
import { CardNetwork, CardProject } from './components/Cards';
import BrowserDemo from 'url:../public/assets/images/BrowserDemo.png';
import NetworksDemo from 'url:../public/assets/images/NetworksDemo.png';
import Burnr from 'url:../public/assets/images/Burnr.png';
import Extension from 'url:../public/assets/images/Extension.png';
import YourProject from 'url:../public/assets/images/YourProject.png';
const Alert = (props) => {
    return React.createElement(MuiAlert, Object.assign({ elevation: 6, variant: "filled" }, props));
};
const App = () => {
    return (React.createElement(ThemeProvider, { theme: createMuiTheme(theme) },
        React.createElement(CssBaseline, null),
        React.createElement(Loader, null),
        React.createElement(UIContainer, null,
            React.createElement("div", null,
                React.createElement(Section, null,
                    React.createElement(Typography, { variant: 'h1' }, "Run Wasm Light Clients of any Substrate based chain directly in your browser")),
                React.createElement(Section, null,
                    React.createElement(Alert, { severity: "warning" }, "This project is experimental!")),
                React.createElement(Section, null,
                    React.createElement(SectionHeading, { id: 'substrate-based-chains', prefix: '1' }, "Substrate-based chains"),
                    React.createElement(SectionText, null, "Substrate is a modular framework for creating use-case optimized blockchains at a low cost, by composing custom or pre-built components. Substrate is the backbone that powers Polkadot, a next-generation, heterogeneous, multi-chain network, and its ecosystem."),
                    React.createElement(SectionRef, { href: 'https://www.substrate.io/' }, "substrate.io"),
                    React.createElement(SectionRef, { href: 'https://substrate.dev/docs/en/' }, "substrate.dev/docs")),
                React.createElement(Section, null,
                    React.createElement(SectionHeading, { id: 'wasm-light-clients', prefix: '2' }, "Wasm Light Clients"),
                    React.createElement(SectionText, null, "Substrate-connect turns a browser into a node on a network allowing end-users of Web3 apps to interact with blockchains directly - without connecting to third-party remote nodes and other servers. Removing intermediary servers between network and its users improves security, simplifies infrastructure of a network and lowers its maintenance costs. Decentralized in-browser light clients are a unique feature of substrate-based networks."),
                    React.createElement(SectionRef, { href: 'https://www.parity.io/what-is-a-light-client/' }, "\u201CWhat is a light client and why you should care?\u201D by Thibaut Sardan")),
                React.createElement(Section, null,
                    React.createElement(SectionHeading, { id: 'supported-networks', prefix: '3' }, "Supported Networks"),
                    React.createElement(Grid, { container: true },
                        React.createElement(CardNetwork, { title: 'Westend', statusProps: { status: 'supported' }, linkProps: { href: 'https://wiki.polkadot.network/docs/en/maintain-networks#westend-test-network' } }, "Testing environment for Polkadot and Kusama deployments and processes"),
                        React.createElement(CardNetwork, { title: 'Kusama', statusProps: { status: 'supported' }, linkProps: { href: 'https://kusama.network/' } }, "A network built as a risk-taking, fast-moving \u2018canary in the coal mine\u2019 for its cousin Polkadot"),
                        React.createElement(CardNetwork, { title: 'Polkadot', statusProps: { status: 'supported' }, linkProps: { href: 'https://polkadot.network/' } }, "Scalable sharded chain and the first protocol that provides a secure environment for cross-chain composability"),
                        React.createElement(CardNetwork, { title: 'Rococo', statusProps: { status: 'soon' }, linkProps: { href: 'https://polkadot.network/rococo-v1-a-holiday-gift-to-the-polkadot-community/' } }, "Testnet designed for parachains and related technologies: Cumulus and HRMP")),
                    React.createElement(SectionRef, { href: 'https://github.com/paritytech/substrate-connect/tree/13bd26a1ca2904f8e0b5d04dfa35e82364d37d99/packages/connect/assets' }, "Github repo with chainspecs")),
                React.createElement(Section, null,
                    React.createElement(SectionHeading, { id: 'getting-started', prefix: '4' }, "Getting Started"),
                    React.createElement(ThemeProvider, { theme: createMuiTheme(dark) },
                        React.createElement(Code, null, "yarn add @substrate/substrate-connect"),
                        React.createElement(Code, { heading: 'index.ts' },
                            React.createElement(Box, null, `import { Detector } from '@substrate/connect';`),
                            React.createElement(Box, { mt: 2 }, `// Create a new UApp with a unique name`),
                            React.createElement(Box, null, `const app = new Detector('burnr-wallet');`),
                            React.createElement(Box, null, `const westend = await app.detect('westend');`),
                            React.createElement(Box, null, `const kusama = await app.detect('kusama');`),
                            React.createElement(Box, { mt: 2 }, `await westend.rpc.chain.subscribeNewHeads((lastHeader) => {`),
                            React.createElement(Box, { pl: 3 }, `console.log(lastHeader.hash);`),
                            React.createElement(Box, null, `);`),
                            React.createElement(Box, { mt: 2 }, `await kusama.rpc.chain.subscribeNewHeads((lastHeader) => {`),
                            React.createElement(Box, { pl: 3 }, `console.log(lastHeader.hash);`),
                            React.createElement(Box, null, `});`),
                            React.createElement(Box, { mt: 2 }, `// etc ...`),
                            React.createElement(Box, { mt: 2 }, `await westend.disconnect();`),
                            React.createElement(Box, null, `await kusama.disconnect();`)))),
                React.createElement(Section, null,
                    React.createElement(SectionHeading, { id: 'projects', prefix: '5' }, "Projects"),
                    React.createElement(CardProject, { title: 'Browser Demo', subtitle: 'Minimal implementation', imageProps: { path: BrowserDemo, position: 'left top' }, linkProps: { href: './smoldot-browser-demo/' } }),
                    React.createElement(CardProject, { title: 'Burnr', subtitle: 'Insecure redeemable wallet', imageProps: { path: Burnr, position: 'center top' }, linkProps: { href: './burnr/' } }),
                    React.createElement(CardProject, { title: 'Multi Network Demo', subtitle: 'One uApp - multiple networks implementation', imageProps: { path: NetworksDemo, position: 'center top' }, linkProps: { href: './multiple-network-demo/' } }),
                    React.createElement(CardProject, { title: 'Extension', subtitle: 'Light clients broker for browser', imageProps: { path: Extension, position: 'center top' }, linkProps: { href: 'https://github.com/paritytech/substrate-connect/tree/master/projects/extension' } },
                        React.createElement(SectionRef, { href: './extension/substrate-connect.zip' }, "Download")),
                    React.createElement(CardProject, { title: 'Next Project', imageProps: { path: YourProject } },
                        React.createElement(SectionRef, { href: 'https://github.com/paritytech/substrate-connect/blob/master/CONTRIBUTING.md' }, "Contributor\u2019s guide"))),
                React.createElement(ThemeProvider, { theme: createMuiTheme(dark) },
                    React.createElement(Section, { pt: 5, pb: 5 },
                        React.createElement(Box, null,
                            React.createElement(FooterLink, { href: 'https://parity.io/' }, "\u00A9 2021 Parity Technologies"),
                            React.createElement(FooterLink, { href: 'https://substrate.dev/terms' }, "Terms & conditions"),
                            React.createElement(FooterLink, { href: 'https://www.parity.io/privacy/' }, "Privacy policy"),
                            React.createElement(FooterLink, { href: 'https://github.com/paritytech/substrate-connect/issues' }, "Report an issue"),
                            React.createElement(FooterLink, { href: 'https://github.com/paritytech/substrate-connect' }, "GitHub"))))),
            React.createElement(Sidebar, null,
                React.createElement(Logo, null),
                React.createElement(SidebarLink, { href: '#substrate-based-chains' }, "Substrate-based chain"),
                React.createElement(SidebarLink, { href: '#wasm-light-clients' }, "Wasm Light Clients"),
                React.createElement(SidebarLink, { href: '#supported-networks' }, "Supported Networks"),
                React.createElement(SidebarLink, { href: '#getting-started' }, "Getting Started"),
                React.createElement(SidebarLink, { href: '#projects' }, "Projects"),
                React.createElement(SidebarLink, { href: './api/' }, "API Documentation")))));
};
export default App;
//# sourceMappingURL=App.js.map
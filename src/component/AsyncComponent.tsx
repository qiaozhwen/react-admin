import React, {ReactNode} from 'react'

const AsyncComponent = (loadComponent: any) => (
    class AsyncComponent extends React.Component {
        state = {
            Component: null,
        };

        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then((module: any) => module.default)
                .then((Component: any) => {
                    this.setState({Component});
                })
                .catch((err: any) => {
                    console.error(`Cannot load component in <AsyncComponent />`);
                    throw err;
                });
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render(): ReactNode {
            const {Component}: any = this.state;
            return (Component) ? <Component {...this.props} /> : null;
        }
    }
);

export default AsyncComponent;
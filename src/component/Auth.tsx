import React, {ReactNode, Fragment} from 'react'
export default class Auth extends React.Component<any, any>{
    render(): ReactNode {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        );
    }
}
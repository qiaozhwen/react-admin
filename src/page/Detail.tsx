import React from 'react';
import {Link} from 'react-router-dom'

export default class Detail extends React.Component{
    componentWillMount() {
        console.log('Detail')
    }
    render() {
        return(
            <Link to={'/'}>Detail</Link>
        )
    }
}
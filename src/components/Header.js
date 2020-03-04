import React from 'react';
import { connect } from 'react-redux';

import { getCurrentDate } from '../actions';

import '../css/header.css';

class Header extends React.Component {
    componentDidMount() {
        this.props.getCurrentDate();
    }

    render() {
        return (
            <div className='header'>
                <div className='headerMain'>
                    <h1>Mount Pleasant</h1>
                    <h3>{ this.props.currentDate }</h3>
                </div>
                <div className='headerInput'>
                    <input type='text' placeholder='Enter zipcode'/>
                    <button>Get Weather</button>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentDate: state.currentDate
    }
};

export default connect(mapStateToProps, {
    getCurrentDate
})(Header);
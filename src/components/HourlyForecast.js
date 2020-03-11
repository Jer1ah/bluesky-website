import React from 'react';
import { connect } from 'react-redux';

import HourForecast from '../components/HourForecast';
import { getCurrentHours } from '../actions';
import weatherIcon from '../img/weather.svg';
import '../css/hourlyForecast.css';

class HourlyForecast extends React.Component {
    componentDidMount() {
        this.props.getCurrentHours();
    }

    render() {
        const hourlyForecast = this.props.currentHours.map((hour) => {
            return <HourForecast
                        hour={hour}
                        weatherIcon={weatherIcon}
                        temperature='26'
                    />
        });

        return (
            <div className='hourlyForecast'>
                <h1>Hourly Forecast</h1>
                <ul className='hourlyForecastList'>
                    { hourlyForecast }
                </ul>
            </div>
        );
    }   
};

const mapStateToProps = (state) => {
    return {
        currentHours: state.currentHours
    }
};

export default connect(mapStateToProps, {
    getCurrentHours
})(HourlyForecast);
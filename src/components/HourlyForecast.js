import React from 'react';
import { connect } from 'react-redux';

import HourForecast from '../components/HourForecast';
import { getCurrentHours, getHourlyForecast } from '../actions';
import weatherIcon from '../img/weather.svg';
import '../css/hourlyForecast.css';

class HourlyForecast extends React.Component {
    componentDidMount() {
        this.props.getHourlyForecast();
        this.props.getCurrentHours();
    }

    render() {
        let hourlyForecast;
        if( this.props.currentHours && this.props.currentTemps[0] ) {
            hourlyForecast = this.props.currentHours.map((hour, index) => {
                return <HourForecast
                            hour={hour}
                            weatherIcon={weatherIcon}
                            temperature={Math.floor(this.props.currentTemps[index].main.temp)}
                        />
                });
        }

        return (
            <div className='hourlyForecast'>
                <h1>Hourly Forecast</h1>
                <ul className='hourlyForecastList'>
                    { hourlyForecast ? hourlyForecast : null }
                </ul>
            </div>
        );
    }   
};

const mapStateToProps = (state) => {
    return {
        currentHours: state.currentHours,
        currentTemps: state.hourlyForecast
    } 
};

export default connect(mapStateToProps, {
    getCurrentHours,
    getHourlyForecast
})(HourlyForecast);


import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_utc, launch_success }}) => {

    let missionNameColor;

    if (launch_success === true) {
        missionNameColor = 'text-success';
    } else if (launch_success === false) {
        missionNameColor = 'text-danger';
    } else {
        missionNameColor = 'text-warning';
    }

    return (
        <div className='card card-body mb-3'>
            <div className='row'>
                <div className='col-md-9'>
                    <h4>Mission: <span className={missionNameColor}>{mission_name}</span></h4>
                    <p>Date: <Moment format='YYYY-MM-DD HH:mm'>{launch_date_utc}</Moment> UTC</p>
                </div>
                <div className='col-md-3'>
                    <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>Launch details</Link>
                </div>
            </div>
        </div>
    );
}

export default LaunchItem;
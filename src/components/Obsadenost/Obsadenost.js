import React, {Component} from 'react';
import BookingCalendar from 'react-booking-calendar';
import './Obsadenost.css';

const bookings = [
    new Date(2018, 3, 1),
    new Date(2018, 3, 2),
    new Date(2018, 3, 3),
    new Date(2018, 3, 9),
    new Date(2018, 3, 10),
    new Date(2018, 3, 11),
    new Date(2018, 3, 12),
];

const MyBookingCalendar = () => (
    <BookingCalendar bookings={bookings} />
);

class Obsadenost extends Component{
    render(){
        return(
            <div className="main container">
                <h1>Obsadenosť</h1>
                <MyBookingCalendar/>
            </div>
        );
    }
}

export default Obsadenost;
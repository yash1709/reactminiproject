// import axios from 'lib/scripts/axios';

// Mocked data
import hotels from './_api/hotels.json';
import hotelsDetails from './_api/hotels-details.json';
import coupon20 from './_api/coupons.json';
import hotelBookings from './_api/hotel-bookings.json';

const apis = {
    getHotels: async (): Promise<any> => {
        return hotels;
    },
    getHotelsDetails: async (): Promise<any> => {
        return hotelsDetails;
    },

    checkCoupon: async (coupon: string): Promise<any> => {
        return coupon20;
    },
    newReservation: async (data: TypeNewReservation): Promise<TypeNewReservation> => {
        return hotelBookings[0];
    },
    updateReservation: async (data: TypeNewReservation, reservationId: string): Promise<TypeNewReservation> => {
        return hotelBookings[0];
    },
    deleteReservation: async (reservationId: string): Promise<TypeNewReservation> => {
        return hotelBookings[0];
    }
};

export default apis;

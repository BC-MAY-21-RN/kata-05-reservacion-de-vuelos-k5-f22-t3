import firestore from '@react-native-firebase/firestore';

export const createBooking = ({userEmail, currentBookingId, beg, ams, date, passengers}) => {
  return firestore().collection('Flights')
  .doc(currentBookingId)
  .set({
    userEmail,
    beg, 
    ams, 
    date, 
    passengers
  });
}; 

export const getBookings = (email) => {
  return firestore()
  .collection('Flights')
  .where('userEmail', '==', email)
  .get();
};

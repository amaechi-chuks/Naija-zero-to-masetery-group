/* Check the id of every request to see whether it can be converted to number */

export const parsedInt = id => ((!(/^\d+$/.test(id))) ? NaN : parseInt(id, 10));


/* Validate fields for create new ride offers */
export const isValid = (rideOffer) => {
    /* Ride title */
    const {
      rideTitle,
      location,
      destination,
      departureTime,
      noOfSeats
    } = rideOffer;

    const errCode = 401;
  let errMsg;

  if (!rideTitle || rideTitle.trim() === '') {
    errMsg = 'Ride title is required';
  }
  if (!location || location.trim() === '') {
    errMsg = 'Location is required';
  }
  if (!destination || destination.trim() === '') {
    errMsg = 'Destination is required';
  }
  if (!departureTime || departureTime.trim() === '') {
    errMsg = 'Departure time is required';
  }
  if (noOfSeats < 1) {
    errMsg = 'Number of seats is required for this ride';
  }

  return { errCode, errMsg };
};


/* returns the response of a request */
export const error = (res, statusCode, message) =>
  res.status(statusCode).json({ status: 'error', message });

/* returns the response of a request */
export const failure = (res, statusCode, data) =>
  res.status(statusCode).json({ status: 'fail', data });

/* When a request was successful */
export const success = (res, statusCode, data) =>
  res.status(statusCode)
    .json({ status: 'success', data });

/* Find ride offer */
export const find = (rideOfferArr, id) => rideOfferArr.find(ride => (id === ride.id));

/* Find request */
export const findRequest = (requestArr, id) => requestArr.find(request => (id === request.rideId));

/* validate request */
export const isRequestValid = (requestOption) => {
  const userId = requestOption.id;
  const seats = requestOption.seats >= 1;
  return userId && seats;
}; // validate request details

/* Check to see if passsenger sit are already filled up */
export const isSeatValid = (noOfSeats, passengerArr, userSeat) => (noOfSeats > passengerArr)
  && (noOfSeats > (passengerArr + userSeat));

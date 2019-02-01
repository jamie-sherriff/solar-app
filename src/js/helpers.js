import moment from 'moment-timezone';

export function convertIsoToLocalDisplay(time) {
  let localTime = moment.tz(time, 'UTC').local();
  return localTime.format('dddd h:mm A');
}

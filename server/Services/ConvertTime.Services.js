import moment from "moment";

export const convertTime = (busTime) => {
  const time = moment(busTime, "h:mm A");
  return time.format("HH.mm");
};

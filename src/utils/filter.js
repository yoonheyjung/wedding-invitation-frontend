import moment from "moment-timezone";

export const getDiffTime = (param) => {
  const nowUtc = moment.utc();
  const paramUtc = moment.utc(param);
  return moment.duration(paramUtc.diff(nowUtc)).asSeconds();
};

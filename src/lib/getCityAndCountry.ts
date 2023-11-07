import timeZoneCityToCountry from "../constants/tz-cities-to-countries.json";

export function getCityAndCountry() {
  let userTimeZone;
  let userCity;
  let userCountry;

  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    userCity = userTimeZone.split("/")[1];
    userCountry = (timeZoneCityToCountry as any)[userCity];

    return `${userCountry} | ${userCity}`;
  }

  return null;
}

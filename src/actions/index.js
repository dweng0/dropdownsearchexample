export const selectCountry = (country) => {
    console.log(country);
    return {
        type: 'COUNTRY_SELECTED',
        payload: country
    };
};
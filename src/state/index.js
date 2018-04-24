export const defaults = {
    allCitiesFromAPI: [],
    cityInputValue: ''
};

export const resolvers = {
    Mutation: {
        updateCityInputValue: (_, { cityInputValue }, { cache }) => {
            cache.writeData({
                data: {
                    cityInputValue
                }
            });
            return null;
        }
    }
};

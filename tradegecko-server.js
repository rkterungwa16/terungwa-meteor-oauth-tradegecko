OAuth.registerService('tradegecko', 2, null, function (query) {
    const config = ServiceConfiguration.configurations.findOne({
        service: 'tradegecko'
    });
    const response = getTokens(config, query);

    return {
        serviceData: response
    };
});

const getTokens = function (config, query) {
    const endpoint = 'https://api.tradegecko.com/oauth/token';

    let response;
    try {
        response = HTTP.post(
            endpoint, {
            params: {
                code: query.code,
                client_id: config.appId,
                client_secret: OAuth.openSecret(config.secret),
                grant_type: 'authorization_code',
                redirect_uri: config.url
            }
        });

        const {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: expiresIn,
            scope,
            token_type: tokenType
        } = JSON.parse(response.content);

        return {
            accessToken,
            refreshToken,
            expiresIn,
            scope,
            tokenType
        };

    } catch (err) {
        throw new Meteor.Error(err.response.statusCode, `Tradegecko ${JSON.parse(err.response.content).message}`);
    }
};
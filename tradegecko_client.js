
const Tradegecko = {};


Tradegecko.requestCredential = (options, credentialRequestCompleteCallback) => {
    if (!credentialRequestCompleteCallback && typeof options === 'function') {
        credentialRequestCompleteCallback = options;
        options = {};
    } else if (!options) {
        options = {};
    }

    const config = ServiceConfiguration.configurations.findOne({
        service: 'tradegecko'
    });
    if (!config) {
        credentialRequestCompleteCallback && credentialRequestCompleteCallback(
            new ServiceConfiguration.ConfigError()
        );
        return;
    }

    const credentialToken = Random.secret();
    const loginStyle = OAuth._loginStyle('tradegecko', config, options);

    const loginUrl = `https://api.tradegecko.com/oauth/authorize?response_type=code&client_id=${config.appId}&redirect_uri=${config.url}`;

    OAuth.launchLogin({
        loginService: 'tradegecko',
        loginStyle,
        loginUrl,
        credentialRequestCompleteCallback,
        credentialToken,
        popupOptions: {
            height: 600
        }
    });
}
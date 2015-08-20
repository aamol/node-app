exports.config = {

	/**
     * desired capabilities
     */
    capabilities: {
        browserName: 'phantomjs'
    },

    /**
     * environment variables
     *
     * - baseUrl: sets base url for `Given I open the site "/some/url.html"`
     *  - Fore sample replace base with  'http://webdriverjs.christian-bromann.com' 
     */
    env: {
        baseUrl: 'http://localhost:8080'
    }
};

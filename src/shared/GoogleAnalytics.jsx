// eslint-disable-next-line react/prop-types
const GoogleAnalyticsWrapper = ({ children }) => (
  <>
    <noscript><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-MNMH9KJ"
      height="0"
      width="0"
      title="ga"
      style={{ display: 'none', visibility: 'hidden' }}
    />
    </noscript>
    { children }
  </>
);

export default GoogleAnalyticsWrapper;

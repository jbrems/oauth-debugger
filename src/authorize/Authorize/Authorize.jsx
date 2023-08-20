import { useEffect, useState } from 'react';
import AuthorizeInputs from '../Authorize-inputs/AuthorizeInputs';
import { getItemFromSessionStorage } from '../../shared/SaveValueToSessionStorage/session-storage-helper';
import InputOutput from '../../shared/InputOutput/InputOutput';

const authorizeEndpointUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

export default function Authorize () {
  const [values, setValues] = useState({
    clientId: getItemFromSessionStorage('clientId') || '',
    redirectUri: getItemFromSessionStorage('redirectUri') || `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
    responseType: getItemFromSessionStorage('responseType') || 'code',
    scope: getItemFromSessionStorage('scope') || '',
    accessType: getItemFromSessionStorage('accessType') || '',
    state: getItemFromSessionStorage('state') || '',
    includeGrantedScopes: Boolean(getItemFromSessionStorage('includeGrantedScopes')),
    loginHint: getItemFromSessionStorage('loginHint') || '',
    prompt: getItemFromSessionStorage('prompt') || 'consent',
  });
  const [authorizeUrl, setAuthorizeUrl] = useState('#');

  useEffect(() => {
    setAuthorizeUrl(`
      ${authorizeEndpointUrl}
      ?client_id=${values.clientId}
      &redirect_uri=${encodeURIComponent(values.redirectUri)}
      &response_type=${values.responseType}
      &scope=${encodeURIComponent(values.scope)}
      &access_type=${values.accessType}
      &state=${encodeURIComponent(values.state)}
      &include_granted_scopes=${values.includeGrantedScopes}
      &login_hint=${values.loginHint}
      &prompt=${values.prompt}
    `.replace(/\s/g, ''));
  }, [values]);

  const handleChange = (values) => {
    setValues(values);
  };

  return <article className="authorize-container">
    <h2>Authenticate user & authorize access</h2>
    <InputOutput>
      <AuthorizeInputs initialValue={values} onChange={handleChange} />
      <span>Redirect user to {authorizeUrl}</span>
      <br/>
      <a href={authorizeUrl}>Authenticate & authorize</a>
    </InputOutput>
  </article>;
}
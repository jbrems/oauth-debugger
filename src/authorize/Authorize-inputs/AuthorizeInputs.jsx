import { useEffect, useState } from 'react';
import Checkbox from '../../shared/Checkbox/Checkbox';
import Input from '../../shared/Input/Input';
import Selectmenu from '../../shared/Selectmenu/Selectmenu';

const responseTypeOptions = [
  { value: 'code', label: 'Code', description: 'For web server applications. This value instructs the Google Authorization Server to return an authorization code as a name=value pair in the query parameters of the URI (?) to which the user is redirected after completing the authorization process.' },
  { value: 'token', label: 'Token', description: 'For javaScript applications. This value instructs the Google Authorization Server to return the access token as a name=value pair in the fragment identifier of the URI (#) to which the user is redirected after completing the authorization process.' },
];

const scopeOptions = [
  { value: 'https://www.googleapis.com/auth/userinfo.email', label: 'Userinfo - Email', description: 'See your primary Google Account email address.' },
  { value: 'https://www.googleapis.com/auth/userinfo.profile', label: 'Userinfo - Profile', description: 'See your personal info, including any personal info you\'ve made publicly available.' },
  { value: 'openid', label: 'OpenID Connect SSO', description: 'Associate you with your personal info on Google.' },
];

const accessTypeOptions = [
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline', description: 'Set the value to offline if your application needs to refresh access tokens when the user is not present at the browser. This value instructs the Google Authorization Server to return a refresh token and an access token the first time that your application exchanges an authorization code for tokens.' },
];

const promptOptions = [
  { value: 'none', label: 'None', description: 'Do not display any authentication or consent screens. Must not be specified with other values.' },
  { value: 'consent', label: 'Consent', description: 'Prompt the user for consent.' },
  { value: 'select_account', label: 'Select account', description: 'Prompt the user to select an account.' },
];

export const authorizeEndpointUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

export default function AuthorizeInputs () {
  const [clientId, setClientId] = useState('');
  const [redirectUri, setRedirectUri] = useState(window.location.href + 'callback');
  const [responseType, setResponseType] = useState('code');
  const [scope, setScope] = useState('');
  const [accessType, setAccessType] = useState('offline');
  const [state, setState] = useState('');
  const [includeGrantedScopes, setIncludeGrantedScopes] = useState(false);
  const [loginHint, setLoginHint] = useState('jonasbrems@gmail.com');
  const [prompt, setPrompt] = useState('consent');

  const [authorizeUrl, setAuthorizeUrl] = useState('#');

  useEffect(() => {
    setAuthorizeUrl(`
      ${authorizeEndpointUrl}
      ?client_id=${clientId}
      &redirect_uri=${encodeURIComponent(redirectUri)}
      &response_type=${responseType}
      &scope=${encodeURIComponent(scope)}
      &access_type=${accessType}
      &state=${encodeURIComponent(state)}
      &include_granted_scopes=${includeGrantedScopes}
      &login_hint=${loginHint}
      &prompt=${prompt}
    `.replace(/\s/g, ''));
  }, [clientId, redirectUri, responseType, scope, accessType, state, includeGrantedScopes, loginHint, prompt]);

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px', padding: '50px' }}>
    <Input label="Client ID" initialValue={clientId} onChange={setClientId}></Input>
    <Input label="Redirect URI" initialValue={redirectUri} onChange={setRedirectUri}></Input>
    <Selectmenu label="Response type" options={responseTypeOptions} initialValue={responseType} onChange={setResponseType}></Selectmenu>
    {/* <Input label="Scope" initialValue={scope} onChange={setScope}></Input> */}
    <Selectmenu label="Scope" options={scopeOptions} initialValue={scope} onChange={setScope}></Selectmenu>
    <Selectmenu label="Access type" options={accessTypeOptions} initialValue={accessType} onChange={setAccessType}></Selectmenu>
    <Input label="State" initialValue={state} onChange={setState}></Input>
    <Checkbox label="Include granted scopes" initialValue={includeGrantedScopes} onChange={setIncludeGrantedScopes}></Checkbox>
    <Input label="Login hint" initialValue={loginHint} onChange={setLoginHint}></Input>
    <Selectmenu label="Prompt" options={promptOptions} initialValue={prompt} onChange={setPrompt}></Selectmenu>
    <a href={authorizeUrl}>Authenticate & authorize</a> ({authorizeUrl})
  </div>;
}
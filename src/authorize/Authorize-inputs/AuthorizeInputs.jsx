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

export default function AuthorizeInputs ({ initialValue = {}, onChange = () => {} } = {}) {
  const [clientId, setClientId] = useState(initialValue.clientId);
  const [redirectUri, setRedirectUri] = useState(initialValue.redirectUri);
  const [responseType, setResponseType] = useState(initialValue.responseType);
  const [scope, setScope] = useState(initialValue.scope);
  const [accessType, setAccessType] = useState(initialValue.accessType);
  const [state, setState] = useState(initialValue.state);
  const [includeGrantedScopes, setIncludeGrantedScopes] = useState(initialValue.includeGrantedScopes);
  const [loginHint, setLoginHint] = useState(initialValue.loginHint);
  const [prompt, setPrompt] = useState(initialValue.prompt);

  useEffect(() => {
    onChange({ clientId, redirectUri, responseType, scope, accessType, state, includeGrantedScopes, loginHint, prompt });
  }, [clientId, redirectUri, responseType, scope, accessType, state, includeGrantedScopes, loginHint, prompt]);

  return <div>
    <Input inputId="clientId" label="Client ID" initialValue={clientId} onChange={setClientId}></Input>
    <Input inputId="redirectUri" label="Redirect URI" initialValue={redirectUri} onChange={setRedirectUri}></Input>
    <Selectmenu inputId="responseType" label="Response type" options={responseTypeOptions} initialValue={responseType} onChange={setResponseType}></Selectmenu>
    {/* <Input label="Scope" initialValue={scope} onChange={setScope}></Input> */}
    <Selectmenu inputId="scope" label="Scope" options={scopeOptions} initialValue={scope} onChange={setScope}></Selectmenu>
    <Selectmenu inputId="accessType" label="Access type" options={accessTypeOptions} initialValue={accessType} onChange={setAccessType}></Selectmenu>
    <Input inputId="state" label="State" initialValue={state} onChange={setState}></Input>
    <Checkbox inputId="includeGrantedScopes" label="Include granted scopes" initialValue={includeGrantedScopes} onChange={setIncludeGrantedScopes}></Checkbox>
    <Input inputId="loginHint" label="Login hint" initialValue={loginHint} onChange={setLoginHint}></Input>
    <Selectmenu inputId="prompt" label="Prompt" options={promptOptions} initialValue={prompt} onChange={setPrompt}></Selectmenu>
  </div>;
}
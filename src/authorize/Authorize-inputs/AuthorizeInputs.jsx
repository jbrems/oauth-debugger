import Checkbox from '../../shared/Checkbox/Checkbox';
import Input from '../../shared/Input/Input';
import Selectmenu from '../../shared/Selectmenu/Selectmenu';

export default function AuthorizeInputs () {
  const responseTypeOptions = [
    { value: 'code', label: 'Code', description: 'For web server applications. This value instructs the Google Authorization Server to return an authorization code as a name=value pair in the query parameters of the URI (?) to which the user is redirected after completing the authorization process.' },
    { value: 'token', label: 'Token', description: 'For javaScript applications. This value instructs the Google Authorization Server to return the access token as a name=value pair in the fragment identifier of the URI (#) to which the user is redirected after completing the authorization process.' },
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

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <Input label="Client ID" message="Required"></Input>
    <Input label="Redirect URI" message="Required"></Input>
    <Selectmenu label="Response type" options={responseTypeOptions} message="Required"></Selectmenu>
    <Input label="Scope" message="Required"></Input>
    <Selectmenu label="Access type" options={accessTypeOptions} message="Recommended"></Selectmenu>
    <Input label="State" message="Recommended"></Input>
    <Checkbox label="Include granted scopes" message="Optional"></Checkbox>
    <Input label="Login hint" message="Optional"></Input>
    <Selectmenu label="Prompt" options={promptOptions} message="Optional"></Selectmenu>
  </div>;
}
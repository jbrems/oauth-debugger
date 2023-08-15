import Checkbox from '../../shared/Checkbox/Checkbox';
import Input from '../../shared/Input/Input';
import Selectmenu from '../../shared/Selectmenu/Selectmenu';

export default function AuthorizeInputs () {
  return <div>
    <Input label="Client ID"></Input>
    <Input label="Redirect URI"></Input>
    <Selectmenu label="Response type" options={[{ value: 'code', label: 'Code' }, { value: 'token', label: 'Token' }]}></Selectmenu>
    <Input label="Scope"></Input>
    <Input label="Access type"></Input>
    <Input label="State"></Input>
    <Checkbox label="Include granted scopes"></Checkbox>
    <Input label="Login hint"></Input>
    <Selectmenu label="Prompt" options={[{ value: 'none', label: 'None' }, { value: 'consent', label: 'Consent' }, { value: 'select_account', label: 'Select account' }]}></Selectmenu>
  </div>;
}
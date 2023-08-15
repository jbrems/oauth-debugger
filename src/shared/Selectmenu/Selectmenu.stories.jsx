import Selectmenu from './Selectmenu';

export default {
  component:Selectmenu,
  title: 'Shared/Selectmenu',
};

export const Default = {
  args: {
    label: 'Response type',
    options: [
      { value: 'code', label: 'Code', description: 'For web server applications. This value instructs the Google Authorization Server to return an authorization code as a name=value pair in the query parameters of the URI (?) to which the user is redirected after completing the authorization process.' },
      { value: 'token', label: 'Token', description: 'For javaScript applications. This value instructs the Google Authorization Server to return the access token as a name=value pair in the fragment identifier of the URI (#) to which the user is redirected after completing the authorization process.' },
    ],
  },
};

export const WithMessage = {
  args: {
    ...Default.args,
    message: 'Provide a valid response type.',
  },
};

export const Success = {
  args: {
    ...Default.args,
    initialValue: 'code',
    status: 'SUCCESS',
    message: 'Used to request an authorization code.',
  },
};

export const Warning = {
  args: {
    ...Default.args,
    initialValue: 'token',
    status: 'WARNING',
    message: 'Used to request an access token directly. This approach is deemed less secure in OAuth 2.1.',
  },
};

export const Error = {
  args: {
    ...Default.args,
    initialValue: '',
    status: 'ERROR',
    message: 'Please select a response type.',
  },
};
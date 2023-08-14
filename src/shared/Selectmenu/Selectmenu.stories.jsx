import Selectmenu from './Selectmenu';

export default {
  component:Selectmenu,
  title: 'Shared/Selectmenu',
};

export const Default = {
  args: {
    label: 'Response_type',
    options: [{ value: 'code', label: 'Code' }, { value: 'token', label: 'Token' }],
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
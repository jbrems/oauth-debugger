import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Shared/Checkbox',
};

export const Default = {
  args: {
    label: 'Include granted scopes',
  },
};

export const WithMessage = {
  args: {
    ...Default.args,
    message: 'Enables applications to use incremental authorization to request access to additional scopes in context.',
  },
};

export const Success = {
  args: {
    ...Default.args,
    initialValue: true,
    status: 'SUCCESS',
    message: 'Incremental authorization will be used to request access to additional scopes in context.',
  },
};

export const Warning = {
  args: {
    ...Default.args,
    initialValue: true,
    status: 'WARNING',
    message: 'Make sure that the user knows incremental authorization is being given.',
  },
};

export const Error = {
  args: {
    ...Default.args,
    initialValue: false,
    status: 'ERROR',
    message: 'This use case requires incremental authorization.',
  },
};
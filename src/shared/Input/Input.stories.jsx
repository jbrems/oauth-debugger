import Input from './Input';

export default {
  component: Input,
  title: 'Shared/Input',
};

export const Default = {
  args: {
    label: 'Email address',
  },
};

export const WithMessage = {
  args: {
    ...Default.args,
    message: 'Provide a valid email address.',
  },
};

export const Success = {
  args: {
    ...Default.args,
    initialValue: 'jonas.brems@gmail.com',
    status: 'SUCCESS',
    message: 'This email address is available.',
  },
};

export const Warning = {
  args: {
    ...Default.args,
    initialValue: 'jonas.brems@gmail',
    status: 'WARNING',
    message: 'While technically possible, this email address is probably not correct.',
  },
};

export const Error = {
  args: {
    ...Default.args,
    initialValue: 'jonas.brems',
    status: 'ERROR',
    message: 'This email address is not valid.',
  },
};
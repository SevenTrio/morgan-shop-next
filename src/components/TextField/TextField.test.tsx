import { ChangeEvent, FC, useState } from 'react';
import { render, fireEvent } from 'utils/test-utils';

import { ITextFieldProps } from 'components/TextField/TextField.component';

import TextField from 'components/TextField';

const ControlledTextField: FC = (props?: Partial<ITextFieldProps>) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <TextField value={value} onChange={handleChange} {...props} />;
};

const setupControlledTextField = (props?: Partial<ITextFieldProps>) => {
  const utils = render(<ControlledTextField aria-label="input" {...props} />);

  const input = utils.getByLabelText('input') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const setupUncontrolledTextField = (props?: Partial<ITextFieldProps>) => {
  const utils = render(<TextField aria-label="input" {...props} />);

  const input = utils.getByLabelText('input') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe(`TextField component`, () => {
  describe(`renders correctly`, () => {
    test(`without props`, () => {
      const { container } = render(<TextField />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });

    test(`with label prop`, () => {
      const labelText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(<TextField label={labelText} />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(getByText(labelText)).not.toBeNull();
    });

    test(`with helperText prop`, () => {
      const helperText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(
        <TextField helperText={helperText} />,
      );
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(getByText(helperText)).not.toBeNull();
    });

    test(`with action prop`, () => {
      const actionText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(
        <TextField action={<p>{actionText}</p>} />,
      );
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(getByText(actionText)).not.toBeNull();
    });

    test(`with type prop`, () => {
      const { container, input } = setupUncontrolledTextField({
        type: 'password',
      });
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(input.type).toBe('password');
    });
  });

  describe(`applies correct styles`, () => {
    test(`to wrapper component`, () => {
      const { container } = render(
        <TextField m={2} style={{ display: 'none' }} className="Test" />,
      );
      const tree = container.firstChild as HTMLElement;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`margin`, `8px`);
      expect(tree?.style.display).toBe('none');
      expect(tree?.className.split(' ').includes('Test')).toBe(true);
    });
  });

  describe(`retains the value correctly`, () => {
    test(`when controlled`, () => {
      const inputValue = `Lorem ipsum dolor.`;
      const { container, input } = setupControlledTextField();
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(input.value).toBe('');
      fireEvent.change(input, { target: { value: inputValue } });
      expect(input.value).toBe(inputValue);
    });

    test(`when uncontrolled`, () => {
      const inputValue = `Lorem ipsum dolor.`;
      const { container, input } = setupUncontrolledTextField();
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(input.value).toBe('');
      fireEvent.change(input, { target: { value: inputValue } });
      expect(input.value).toBe(inputValue);
    });
  });
});

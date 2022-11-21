import { render } from 'utils/test-utils';
import { theme } from 'styles/theme';

import Button from 'components/Button';

const whiteColor = theme.palette.common.white;
const primaryColor = theme.palette.primary.main;
const primaryTextColor = theme.palette.text.primary;

describe(`Button component`, () => {
  describe(`renders correctly`, () => {
    test(`without props`, () => {
      const { container } = render(<Button />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });

    test(`with children prop`, () => {
      const buttonText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(<Button>{buttonText}</Button>);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(getByText(buttonText)).not.toBeNull();
    });
  });

  describe(`applies correct styles`, () => {
    test(`by default`, () => {
      const buttonText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(<Button>{buttonText}</Button>);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`width`, `auto`);
      expect(tree).toHaveStyleRule(`height`, `48px`);
      expect(tree).toHaveStyleRule(`padding`, `0 16px`);
      expect(tree).toHaveStyleRule(`background-color`, `transparent`);
      expect(tree).toHaveStyleRule(`border`, `1px solid ${primaryColor}`);
      expect(tree).toHaveStyleRule(`cursor`, `pointer`);
      expect(getByText(buttonText)).toHaveStyleRule(`color`, primaryTextColor);
    });

    test(`with secondary variant`, () => {
      const buttonText = `Lorem ipsum dolor.`;
      const { container, getByText } = render(
        <Button variant="secondary">{buttonText}</Button>,
      );
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`height`, `48px`);
      expect(tree).toHaveStyleRule(`padding`, `0 16px`);
      expect(tree).toHaveStyleRule(`background-color`, primaryColor);
      expect(tree).toHaveStyleRule(`border`, `none`);
      expect(tree).toHaveStyleRule(`cursor`, `pointer`);
      expect(getByText(buttonText)).toHaveStyleRule(`color`, whiteColor);
    });

    test(`with fullWidth prop`, () => {
      const { container } = render(<Button fullWidth />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`width`, `100%`);
    });

    test(`to wrapper component`, () => {
      const { container } = render(
        <Button m={2} style={{ display: `none` }} className="Test" />,
      );
      const tree = container.firstChild as HTMLElement;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`margin`, `8px`);
      expect(tree?.style.display).toBe(`none`);
      expect(tree?.className.split(` `).includes(`Test`)).toBe(true);
    });
  });

  describe(`renders correct tag`, () => {
    test(`by default`, () => {
      const { container } = render(<Button />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`BUTTON`);
    });

    test(`with component prop`, () => {
      const { container } = render(<Button component="a" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`A`);
    });
  });
});

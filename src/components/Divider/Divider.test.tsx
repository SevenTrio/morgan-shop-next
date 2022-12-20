import { render } from 'utils/test-utils';
import { theme } from 'styles/theme';

import Divider from 'components/Divider';

const dividerColor = theme.palette.divider;

describe(`Divider component`, () => {
  describe(`renders correctly`, () => {
    test(`without props`, () => {
      const { container } = render(<Divider />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });

    test(`with text prop`, () => {
      const dividerText = `Lorem ipsum dolor.`;
      const { container } = render(<Divider text={dividerText} />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`applies correct styles`, () => {
    test(`by default`, () => {
      const { container } = render(<Divider />);
      const tree = container.firstChild;

      expect(tree).toHaveStyleRule(
        `border-bottom`,
        `1px solid ${dividerColor}`,
      );
    });
  });
});

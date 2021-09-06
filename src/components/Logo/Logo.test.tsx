import { render } from 'utils/test-utils';

import { Logo } from './Logo.component';

describe(`Logo component`, () => {
  describe(`renders correctly`, () => {
    test(`without props`, () => {
      const { container } = render(<Logo />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`applies correct styles`, () => {
    test(`to wrapper component`, () => {
      const { container } = render(
        <Logo m={2} style={{ display: 'none' }} className="Test" />,
      );
      const tree = container.firstChild as HTMLElement;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`margin`, `8px`);
      expect(tree?.style.display).toBe('none');
      expect(tree?.className.split(' ').includes('Test')).toBe(true);
    });
  });

  describe(`renders correct tag`, () => {
    test(`with component prop`, () => {
      const { container } = render(<Logo component="a" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`A`);
    });
  });
});

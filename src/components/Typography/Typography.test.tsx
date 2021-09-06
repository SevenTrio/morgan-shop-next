import { render } from 'utils/test-utils';
import { theme } from 'styles/theme';

import Typography from 'components/Typography';

describe(`Typography component`, () => {
  describe(`renders correctly`, () => {
    test(`without props`, () => {
      const { container } = render(<Typography />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
    });

    test(`with children prop`, () => {
      const typographyText = `Lorem ipsum dolor.`;
      const { container } = render(<Typography>{typographyText}</Typography>);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.textContent).toBe(typographyText);
    });
  });

  describe(`applies correct styles`, () => {
    test(`by default`, () => {
      const { container } = render(<Typography />);
      const tree = container.firstChild;

      expect(tree).toHaveStyleRule(`padding`, `0`);
      expect(tree).toHaveStyleRule(`font-size`, `1rem`);
      expect(tree).toHaveStyleRule(`font-weight`, `500`);
      expect(tree).toHaveStyleRule(`line-height`, `1.5`);
      expect(tree).toHaveStyleRule(`color`, theme.palette.text.primary);
      expect(tree).not.toHaveStyleRule(`text-align`);
      expect(tree).not.toHaveStyleRule(`overflow`);
      expect(tree).not.toHaveStyleRule(`white-space`);
      expect(tree).not.toHaveStyleRule(`text-overflow`);
    });

    test(`with variant prop`, () => {
      const { container } = render(<Typography variant="body3" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`font-size`, `0.875rem`);
      expect(tree).toHaveStyleRule(`font-weight`, `500`);
    });

    test(`with color prop`, () => {
      const { container } = render(<Typography color="textSecondary" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`color`, theme.palette.text.secondary);
    });

    test(`with align prop`, () => {
      const { container } = render(<Typography align="center" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule(`text-align`, `center`);
    });

    test(`to wrapper component`, () => {
      const { container } = render(
        <Typography m={2} style={{ display: 'none' }} className="Test" />,
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
      const { container } = render(<Typography component="h1" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`H1`);
    });

    test(`with variant prop`, () => {
      const { container } = render(<Typography variant="caption1" />);
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`SPAN`);
    });

    test(`with both component and variant props`, () => {
      const { container } = render(
        <Typography component="h1" variant="caption1" />,
      );
      const tree = container.firstChild;

      expect(tree).toMatchSnapshot();
      expect(tree?.nodeName).toBe(`H1`);
    });
  });
});

import styled from 'styled-components';

import { render } from 'utils/test-utils';
import { spacingStyles } from './spacingStyles';

const SpacingComponent = styled.div`
  ${spacingStyles};
`;

describe(`spacingStyles function`, () => {
  describe(`should apply correct styles`, () => {
    test(`with boolean values`, () => {
      const { container } = render(<SpacingComponent m />);
      const tree = container.firstChild;

      expect(tree).toHaveStyleRule(`margin`, `1em`);
    });

    test(`with number values`, () => {
      const { container } = render(<SpacingComponent my={2} mr={1} />);
      const tree = container.firstChild;

      expect(tree).toHaveStyleRule(`margin-top`, `8px`);
      expect(tree).toHaveStyleRule(`margin-right`, `4px`);
      expect(tree).toHaveStyleRule(`margin-bottom`, `8px`);
      expect(tree).not.toHaveStyleRule(`margin-left`);
    });

    test(`with string values`, () => {
      const { container } = render(
        <SpacingComponent mx="auto" mt="7px" mb="5%" />,
      );
      const tree = container.firstChild;

      expect(tree).toHaveStyleRule(`margin-top`, `7px`);
      expect(tree).toHaveStyleRule(`margin-right`, `auto`);
      expect(tree).toHaveStyleRule(`margin-bottom`, `5%`);
      expect(tree).toHaveStyleRule(`margin-left`, `auto`);
    });
  });
});

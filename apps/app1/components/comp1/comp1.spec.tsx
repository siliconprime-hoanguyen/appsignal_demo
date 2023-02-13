import { render } from '@testing-library/react';

import Comp1 from './comp1';

describe('Comp1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Comp1 />);
    expect(baseElement).toBeTruthy();
  });
});

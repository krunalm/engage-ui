import * as React from 'react';
import { themr } from 'react-css-themr';
import {classNames} from '@shopify/react-utilities/styles';

import { STACK } from '../ThemeIdentifiers';

import * as baseTheme from './Stack.scss';

export interface Props {
  children?: React.ReactNode,
  fill?: boolean,
  theme?: any,
}

const Item = ({children, fill, theme}: Props) => {
  const className = classNames(
    theme.Item,
    fill && theme['Item-fill'],
  );

  return <div className={className}>{children}</div>;
}

export default themr(STACK, baseTheme)(Item);
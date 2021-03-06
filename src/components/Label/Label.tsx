import * as React from 'react';
import { themr } from 'react-css-themr';
import {classNames} from '@shopify/react-utilities/styles';

import {Action} from '../../types';
import {buttonFrom} from '../Button';
import { LABEL } from '../ThemeIdentifiers';

import * as baseTheme from './Label.scss';

export {Action};

export interface Props {
  children?: string,
  id: string,
  action?: Action,
  hidden?: boolean,
  style?: React.CSSProperties,
  theme?: any,
  required?: boolean,
  focused?: boolean,
  hasValue?: boolean,
};

export function labelID(id: string) {
  return `${id}Label`;
}

function Label({
  children,
  id,
  action,
  hidden,
  required,
  focused,
  hasValue,
  style,
  theme,
}: Props) {
  const className = classNames(
    theme.Text,
    hidden && theme.hidden,
    required && theme.required,
    focused && theme.focused,
    !hasValue && theme.empty,
  );

  const actionMarkup = action
    ? buttonFrom(action, {plain: true})
    : null;

  return (
    <div className={theme.Label}>
      <label id={labelID(id)} htmlFor={id} className={className} style={style}>{children}</label>
      {actionMarkup}
    </div>
  );
}

export default themr(LABEL, baseTheme)(Label);
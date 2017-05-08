import * as React from 'react';

import * as styles from './Message.scss';

export interface Props {
  children?: React.ReactNode,
  isVisible?: boolean,
  id: string,
}

export default function Message({children, isVisible, id}: Props) {
  if (!isVisible) {
    return null;
  }

  return (
    <div id={id} className={styles.messageBlock} role="alert" aria-live="polite">
      <span className={styles.messagePrompt}>
        {children}
      </span>
    </div>
  );
}
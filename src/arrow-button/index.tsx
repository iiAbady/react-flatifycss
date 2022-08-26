import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';

interface ArrowButtonProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'> {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  isButton?: boolean;
  isFlipped?: boolean;
  label: string;
}

const ArrowButtonWrapper = styled.button`
  ${({ sx }: ArrowButtonProps) => (sx ? sx : '')}
`;

export function ArrowButton(props: ArrowButtonProps) {
  const { direction, isButton, isFlipped, label, ...rest } = props;

  return (
    <ArrowButtonWrapper
      {...rest}
      className={clsx(
        'arrow-button',
        {
          button: isButton,
          'arrow-flip': isFlipped,
          ['arrow-' + direction]: direction,
        },
        ...generalClasses(props)
      )}
      aria-label={label}
    />
  );
}

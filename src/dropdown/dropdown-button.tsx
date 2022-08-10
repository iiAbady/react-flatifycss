import React from 'react';
import clsx from 'clsx';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface DropdownButtonProps extends FlatifyGeneralProps {
  children?: React.ReactNode;
  hasArrow?: boolean;
  innerRef?: React.Ref<HTMLButtonElement>;
  isButton?: boolean;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DropdownButton(props: DropdownButtonProps) {
  const {
    hasArrow,
    children,
    isOpen,
    isButton,
    onClick,
    onMouseEnter,
    onMouseLeave,
    innerRef,
  } = props;

  return (
    <button
      {...generalAttributes(props)}
      ref={innerRef}
      aria-expanded={isOpen}
      className={clsx(
        'dropdown-toggle',
        isButton !== false && 'button',
        hasArrow && 'arrow-button',
        isOpen && 'active',
        isOpen && hasArrow && 'arrow-flip',
        ...generalClasses(props)
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}

DropdownButton.defaultProps = {
  __TYPE: 'DropdownButton',
};

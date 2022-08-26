import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { FlatifyGeneralProps } from '../interfaces';
import { generalClasses } from '../classes';
import { generalAttributes } from '../attributes';

interface CheckboxProps
  extends FlatifyGeneralProps,
    Omit<React.HTMLAttributes<HTMLInputElement>, 'color' | 'onChange'> {
  checked?: boolean;
  children?: React.ReactNode;
  label?: string;
  onChange?: (checked: boolean) => void;
  state?: 'valid' | 'warning' | 'invalid';
}

const CheckboxWrapper = styled.label`
  ${({ sx }: CheckboxProps) => (sx ? sx : '')}
`;

export function Checkbox(props: CheckboxProps) {
  const {
    as,
    checked,
    children,
    onChange,
    label,
    size,
    state,
    sx,
    ...rest
  } = props;

  return (
    <CheckboxWrapper
      {...generalAttributes(props)}
      as={as}
      sx={sx}
      className={clsx(
        'checkbox-wrapper',
        { [state + '']: state },
        ...generalClasses(props)
      )}
    >
      <input
        {...rest}
        type="checkbox"
        checked={checked}
        onChange={() => onChange?.(!checked)}
      />
      <span aria-hidden={true} className="check" />
      {children}
      {label}
    </CheckboxWrapper>
  );
}

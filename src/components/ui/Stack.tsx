'use client';

import MuiStack, { type StackProps as MuiStackProps } from '@mui/material/Stack';
import type { SxProps, Theme } from '@mui/material/styles';

type BreakpointValue<T> = T | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>;

interface CompatibleStackProps extends MuiStackProps {
  alignItems?: BreakpointValue<'baseline' | 'center' | 'flex-start' | 'flex-end' | 'stretch'>;
  justifyContent?: BreakpointValue<'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>;
  textAlign?: BreakpointValue<'center' | 'left' | 'right' | 'justify'>;
}

function combineStyles(
  baseStyles: Record<string, unknown>,
  sx: SxProps<Theme> | undefined
): SxProps<Theme> {
  if (sx === undefined) return [baseStyles];
  return [baseStyles, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>;
}

export function Stack({
  alignItems,
  justifyContent,
  textAlign,
  sx,
  ...props
}: CompatibleStackProps) {
  return (
    <MuiStack
      {...props}
      sx={combineStyles({ alignItems, justifyContent, textAlign }, sx)}
    />
  );
}

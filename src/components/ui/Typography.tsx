'use client';

import MuiTypography, { type TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

interface CompatibleTypographyProps extends MuiTypographyProps {
  fontWeight?: number | string;
  letterSpacing?: number | string;
}

function combineStyles(
  baseStyles: Record<string, unknown>,
  sx: SxProps<Theme> | undefined
): SxProps<Theme> {
  if (sx === undefined) return [baseStyles];
  return [baseStyles, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>;
}

export function Typography({ fontWeight, letterSpacing, sx, ...props }: CompatibleTypographyProps) {
  return (
    <MuiTypography
      {...props}
      sx={combineStyles({ fontWeight, letterSpacing }, sx)}
    />
  );
}

'use client';

import { IconButton, Tooltip } from '@mui/material';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import { useThemeMode } from '@/providers/ThemeModeProvider';

export function ThemeModeButton() {
  const { mode, toggleMode } = useThemeMode();
  const label = mode === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro';

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} onClick={toggleMode} color="inherit">
        {mode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  );
}

'use client';

import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from '@mui/material';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const isLight = mode === 'light';

  useEffect(() => {
    const savedMode = window.localStorage.getItem('conectapro-institutional-theme');
    if (savedMode === 'dark' || savedMode === 'light') setMode(savedMode);
  }, []);

  const toggleMode = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('conectapro-institutional-theme', nextMode);
      return nextMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: isLight ? '#2563EB' : '#60A5FA',
            dark: isLight ? '#1D4ED8' : '#3B82F6',
            light: isLight ? '#DBEAFE' : '#1E3A8A',
            contrastText: isLight ? '#FFFFFF' : '#04122B',
          },
          secondary: {
            main: isLight ? '#FACC15' : '#FDE047',
            dark: isLight ? '#EAB308' : '#FACC15',
            contrastText: '#0B1220',
          },
          background: {
            default: isLight ? '#F4F7FC' : '#070B14',
            paper: isLight ? '#FFFFFF' : '#0F1626',
          },
          text: {
            primary: isLight ? '#0B1220' : '#F8FAFF',
            secondary: isLight ? '#475569' : '#A9B7D0',
          },
          divider: isLight ? '#DCE3EF' : '#243352',
          success: {
            main: isLight ? '#16A34A' : '#4ADE80',
            light: isLight ? '#DCFCE7' : '#052E1B',
            dark: isLight ? '#14532D' : '#BBF7D0',
            contrastText: isLight ? '#052E1B' : '#04122B',
          },
          warning: {
            main: isLight ? '#EA8C00' : '#FBBF24',
            light: isLight ? '#FEF3C7' : '#3A2506',
            dark: isLight ? '#78350F' : '#FDE68A',
            contrastText: '#0B1220',
          },
          error: {
            main: isLight ? '#E11D48' : '#FB7185',
            light: isLight ? '#FFE4E6' : '#3F0D1D',
            dark: isLight ? '#881337' : '#FDA4AF',
            contrastText: isLight ? '#FFFFFF' : '#0B1220',
          },
          action: {
            selected: isLight ? '#DBEAFE' : '#1E3A8A',
            hover: isLight ? 'rgba(11, 18, 32, 0.04)' : 'rgba(248, 250, 255, 0.08)',
          },
        },
        shape: { borderRadius: 8 },
        typography: {
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          h1: { fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.04em' },
          h2: { fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em' },
          h3: { fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em' },
          button: { fontWeight: 650, textTransform: 'none' },
        },
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                border: `1px solid ${isLight ? '#DCE3EF' : '#243352'}`,
                borderRadius: 12,
              },
            },
          },
          MuiButton: {
            defaultProps: { disableElevation: true },
            styleOverrides: { root: { borderRadius: 8, minHeight: 42 } },
          },
          MuiDialog: {
            styleOverrides: { paper: { borderRadius: 12 } },
          },
          MuiOutlinedInput: {
            styleOverrides: { root: { borderRadius: 8 } },
          },
          MuiChip: {
            styleOverrides: { root: { borderRadius: 6 } },
          },
          MuiTextField: {
            defaultProps: { size: 'medium', fullWidth: true },
          },
        },
      }),
    [isLight, mode]
  );

  const cssVariables = useMemo<Record<string, string>>(
    () => ({
      '--cp-primary': theme.palette.primary.main,
      '--cp-primary-strong': theme.palette.primary.dark,
      '--cp-primary-container': theme.palette.primary.light,
      '--cp-on-primary': theme.palette.primary.contrastText,
      '--cp-on-primary-container': isLight ? '#1E3A8A' : '#BFDBFE',
      '--cp-brand-accent': theme.palette.secondary.main,
      '--cp-brand-accent-strong': theme.palette.secondary.dark,
      '--cp-on-brand-accent': theme.palette.secondary.contrastText,
      '--cp-brand-navy': '#0B1220',
      '--cp-brand-surface': isLight ? '#0B1220' : '#16203A',
      '--cp-on-brand-surface': isLight ? '#FFFFFF' : '#F8FAFF',
      '--cp-on-brand-surface-muted': isLight ? '#BFDBFE' : '#A9B7D0',
      '--cp-background': theme.palette.background.default,
      '--cp-surface': theme.palette.background.paper,
      '--cp-surface-alt': isLight ? '#EEF2F9' : '#16203A',
      '--cp-surface-elevated': isLight ? '#FFFFFF' : '#1B2743',
      '--cp-border': theme.palette.divider,
      '--cp-border-strong': isLight ? '#C3CDE0' : '#33436B',
      '--cp-control-border': isLight ? '#5B6B84' : '#7C8DB0',
      '--cp-text-primary': theme.palette.text.primary,
      '--cp-text-secondary': theme.palette.text.secondary,
      '--cp-text-tertiary': isLight ? '#64748B' : '#8291AC',
      '--cp-success': theme.palette.success.main,
      '--cp-success-text': theme.palette.success.dark,
      '--cp-success-container': theme.palette.success.light,
      '--cp-warning': theme.palette.warning.main,
      '--cp-warning-text': theme.palette.warning.dark,
      '--cp-warning-container': theme.palette.warning.light,
      '--cp-danger': theme.palette.error.main,
      '--cp-danger-text': theme.palette.error.dark,
      '--cp-danger-container': theme.palette.error.light,
      '--cp-favorite': isLight ? '#DB2777' : '#F472B6',
      '--cp-favorite-container': isLight ? '#FCE7F3' : '#3B0D2A',
      '--cp-overlay': isLight ? 'rgba(11, 18, 32, 0.55)' : 'rgba(0, 0, 0, 0.68)',
      '--cp-skeleton': isLight ? '#E2E8F2' : '#1C2740',
      '--cp-disabled': isLight ? '#D8DFEA' : '#253248',
      '--cp-on-disabled': isLight ? '#64748B' : '#8291AC',
      '--cp-shadow': isLight ? '#0B1220' : '#000000',
      '--cp-shadow-color': isLight ? 'rgba(11, 18, 32, 0.10)' : 'rgba(0, 0, 0, 0.32)',
      '--cp-brand-gradient': 'linear-gradient(135deg, #1D4ED8, #2563EB 55%, #60A5FA)',
      '--cp-selection': `color-mix(in srgb, ${theme.palette.primary.main} 24%, transparent)`,
      '--cp-primary-glow': `color-mix(in srgb, ${theme.palette.primary.main} 32%, transparent)`,
      '--cp-accent-glow': `color-mix(in srgb, ${theme.palette.secondary.main} 18%, transparent)`,
      '--cp-glass-border': 'rgba(255, 255, 255, 0.18)',
      '--cp-glass-surface': 'rgba(255, 255, 255, 0.10)',
      '--cp-glass-surface-hover': 'rgba(255, 255, 255, 0.08)',
      '--cp-glass-ring': 'rgba(255, 255, 255, 0.035)',
      '--cp-glass-ring-soft': 'rgba(255, 255, 255, 0.025)',
    }),
    [isLight, theme]
  );

  const value = useMemo(() => ({ mode, toggleMode }), [mode]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ ':root': { ...cssVariables, colorScheme: mode } }} />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) throw new Error('useThemeMode precisa estar dentro do ThemeModeProvider.');
  return context;
}

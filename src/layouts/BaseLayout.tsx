'use client'

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import theme from "@/utils/theme";
import { Box, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/id';

type BaseLayoutProps = {
  readonly children: React.ReactNode,
}

export default function BaseLayout({
  children
}: BaseLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
        <Box
          sx={{
            display: 'flex',
            background: '#F1F5F9',
            minHeight: '100vh',
          }}
        >
          <Sidebar />
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: '245px'
            }}
          >
            <Header />
            <Box
              sx={{
                paddingY: 5,
                paddingX: 10
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>

  )
}

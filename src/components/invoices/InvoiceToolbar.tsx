import { Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function InvoiceToolbar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState<string>(searchParams.get('search') || "");
    const [status, setStatus] = useState<string>(searchParams.get('status') || "");

    return (
        <Box>
            <TextField
                variant='outlined'
                size="small"
                placeholder="Search"
                sx={{
                    background: 'white',
                    borderRadius: 3,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiOutlinedInput-input' : {
                        fontSize: 14,
                    }
                }}
                //   value={search}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    },
                }}
            //   onChange={(e) => handleSearch(e.target.value)}
            />
        </Box>
    )
}

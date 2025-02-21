import { InvoiceStatusConstant } from '@/constants/invoice.constant';
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from '@mui/icons-material'
import { Box, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function InvoiceToolbar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState<string>(searchParams.get('search') ?? "");
    const [status, setStatus] = useState<string>(searchParams.get('status') ?? "");

    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        const params = new URLSearchParams();

        if (debouncedSearch) params.set("search", debouncedSearch);
        if (status && status !== "all") {
            params.set("status", status);
        } else {
            params.delete("status");
        }

        router.push(`?${params.toString()}`, { scroll: false });
    }, [debouncedSearch, status, router]);

    const handleSearch = (searchInput: string) => {
        setSearch(searchInput);
    }

    const handleStatus = (selectedStatus: string) => {
        setStatus(selectedStatus);
    }

    return (
        <Box display={"flex"} columnGap={2}>
            <TextField
                variant='outlined'
                size="small"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    },
                }}
                sx={{
                    background: 'white',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiOutlinedInput-input': {
                        fontSize: 14,
                    }
                }}
            />
            <Select
                variant="outlined"
                size="small"
                value={status || 'all'}
                onChange={(e) => handleStatus(e.target.value)}
                sx={{
                    background: 'white',
                    borderRadius: 2,
                    minWidth: 150,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiOutlinedInput-input': {
                        fontSize: 14,
                    }
                }}
            >
                <MenuItem value="all">All Status</MenuItem>
                {InvoiceStatusConstant.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    )
}

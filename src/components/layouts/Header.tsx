import { Avatar, Box, IconButton } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
    return (
        <header className="bg-white w-full shadow-sm py-3 px-7">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    gap: 2,

                }}
            >
                <IconButton
                    sx={{
                        background: '#EFF4FB',
                        border: '1px solid #E2E8F0',
                        width: 35,
                        height: 35,
                    }}
                >
                    <Image src='/icons/notification.svg' alt="notif-icon" width={15} height={15} />
                </IconButton>
                <IconButton
                    sx={{
                        background: '#EFF4FB',
                        border: '1px solid #E2E8F0',
                        width: 35,
                        height: 35,
                    }}
                >
                    <Image src='/icons/chat.svg' alt="chat-icon" width={15} height={15} />
                </IconButton>
                <div className="flex">
                    <span className="flex gap-2 items-center">
                        <div className="flex flex-col justify-end text-right">
                            <span className="block mr-1 text-sm font-medium">
                                John Doe
                            </span>
                            <span className="block mr-1 text-xs font-medium text-gray-500">
                                Verified Member
                            </span>
                        </div>
                        <Avatar
                            sx={{ width: 38, height: 38 }}
                            src="/images/avatar.png"
                        />
                        <ExpandMoreIcon />
                    </span>
                </div>
            </Box>
        </header>
    )
}

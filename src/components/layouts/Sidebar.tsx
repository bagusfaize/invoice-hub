import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Menu = {
    name: string,
    icon: string,
    link: string,
}

const menus: Menu[] = [
    {
        name: 'Add Invoice',
        icon: '/icons/add-invoice.svg',
        link: '/invoices/add',
    },
    {
        name: 'My Invoices',
        icon: '/icons/list-invoice.svg',
        link: '/invoices/list',
    },
]

export default function Sidebar() {

    const renderMenus = (menus: Menu[]) => (
        <ul>
            {menus.map((menu) => (
                <li key={menu.name}>
                    <Link
                        href={menu.link}
                        className="flex gap-3 py-4 text-sm"
                    >
                        <span>
                            <Image src={menu.icon} alt={menu.name} width={17} height={17} />
                        </span>
                        <span>
                            {menu.name}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )

    return (
        <aside className="fixed bg-mainblue h-screen py-5 px-7 text-white w-[245px]">
            <div className="mb-5">
                <Image
                    src="/icons/logo.svg"
                    alt="Logo"
                    width={145}
                    height={40}
                />
            </div>
            <div className="my-9">
                <Typography sx={{ color: '#9D9D9D', textTransform: 'uppercase', fontSize: 14, marginBottom: 2 }}>Menu</Typography>
                {renderMenus(menus)}
            </div>
        </aside>
    )
}

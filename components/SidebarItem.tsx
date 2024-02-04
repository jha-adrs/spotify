"use client"
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    className?: string;
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

export const SidebarItem = ({
    className,
    icon:Icon,
    label,
    active,
    href
}: SidebarItemProps) => {
    return (
        <Link href={href} className={
            twMerge(`
            flex flex-row rounded-md h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 p-1 
            `,
            active && `text-white`)
        }>
            <Icon size={24} />
            <p 
            className='truncate w-full'
            >{label}</p>
        </Link>
    )
}
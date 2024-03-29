"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
    const router = useRouter();
    const handleLogout = () => {

    };
    return (
        <div className={
            twMerge(
                "h-fit w-full bg-gradient-to-b from-emerald-800 p-6",
                className
            )
        }>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft size={35} className='text-white' />
                    </button>
                    <button
                        className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight size={35} className='text-white' />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className='rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'>
                        <HiHome size={20} className='text-black' />
                    </button>
                    <button
                        className='rounded-full p-2 bg-white flex items-center hover:opacity-75 transition'>
                        <BiSearch size={20} className='text-black' />
                    </button>
                </div>
                <div className="flex  justify-between items-center  gap-x-4">
                    <>
                        <div className=''>
                            <Button className='bg-transparent font-medium text-neutral-300'>
                                Sign Up
                            </Button>

                        </div>
                        <div className=''>
                            <Button className='bg-white px-6 py-2'>
                                Log in
                            </Button>

                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}
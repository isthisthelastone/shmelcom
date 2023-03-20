/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Flex } from '../../../shared/ui';
import {
  SearchIcon,
  MoonIcon,
  ShmelIcon,
  ProfileIcon,
  CartIcon,
} from '../../../shared/assets';

const navigation = [
  { name: 'All', href: '#', current: true },
  { name: 'New Arrivals', href: '#', current: false },
  { name: 'T-Shirts', href: '#', current: false },
  { name: 'Hoodies', href: '#', current: false },
  { name: 'Bottoms', href: '#', current: false },
  { name: 'Collectibles', href: '#', current: false },
  { name: 'Extras', href: '#', current: false },
  { name: 'ShmelFarms', href: '#', current: false },
];

export function Header() {
  return (
    <Flex className="flex-col">
      <Flex className="pt-[132px] pl-[100px] gap-[250px]">
        <Flex className="gap-[40px]">
          <SearchIcon />
          <MoonIcon />
        </Flex>
        <Flex>
          <ShmelIcon />
        </Flex>
        <Flex className="gap-[40px]">
          <ProfileIcon />
          <CartIcon />
        </Flex>
        <Flex />
      </Flex>
      <Disclosure as="nav" className="pl-[100px] pt-[50px]">
        {() => (
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center" />
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-[100px]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </Flex>
  );
}

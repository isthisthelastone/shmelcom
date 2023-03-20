/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Flex } from '../../../shared/ui';
import {
  SearchIcon,
  MoonIcon,
  ShmelIcon,
  ProfileIcon,
  CartIcon,
} from '../../../shared/assets';

export function Header() {
  return (
    <Flex className="pt-[132px] pl-[100px] gap-[250px]">
      <Flex className="gap-[40px]">
        <SearchIcon />
        <MoonIcon />
      </Flex>
      <Flex className="relative ">
        <ShmelIcon />
      </Flex>
      <Flex className="gap-[40px]">
        <ProfileIcon />
        <CartIcon />
      </Flex>
      <Flex />
    </Flex>
  );
}

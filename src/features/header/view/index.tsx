/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Flex } from '../../../shared/ui';

import {
	SearchIcon,
	MoonIcon,
	ShmelIcon,
	ProfileIcon,
	CartIcon,
	WeedIcon,
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
		<Flex className="flex-col border-b-[3px]  border-black border-opacity-20 pb-[2rem]">
			<Flex className="pt-[100px] pl-[50px] gap-[300px]">
				<Flex className="gap-[40px]">
					<SearchIcon />
					<MoonIcon />
				</Flex>
				<Flex>
					<ShmelIcon />
				</Flex>
				<Flex className=" gap-[40px] ">
					<ProfileIcon />
					<CartIcon />
				</Flex>
				<Flex />
			</Flex>
			<NavBar />
		</Flex>
	);
}

type NavigationProps = {
	name: string;
	href: string;
	current: boolean;
};

const menuColor = (content: NavigationProps) => {
	const { name } = content;

	if (name === 'Collectibles') return <div className="opacity-40">{name}</div>;
	if (name === 'Extras') return <div className="text-shmelYellow">{name}</div>;
	if (name === 'ShmelFarms')
		return (
			<Flex className="text-weedGreen gap-[0.25rem]">
				<WeedIcon className="mt-[-6px]" />
				{name}
			</Flex>
		);

	return <div>{name}</div>;
};

function NavBar() {
	return (
		<Disclosure as="nav" className="font-poppins pl-[100px] pt-[50px]">
			{() => (
				<div className="mx-auto max-w-16xl px-2 sm:px-12 lg:px-16">
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
											{menuColor(item)}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</Disclosure>
	);
}

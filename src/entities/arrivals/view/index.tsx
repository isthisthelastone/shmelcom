/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';

import type { ReactElement } from 'react';
import { Flex } from '../../../shared/ui/atoms/flex';
import {
	DiscordIcon,
	ShmelMonkeyR,
	ShopIcon,
	TelegramIcon,
	VKIcon,
} from '../../../shared/assets';

export function Arrivals() {
	return (
		<Flex className=" flex-col py-[150px] font-noodle text-[45px] text-main">
			<Flex className=" w-full items-center">
				<Flex className="pl-[20rem] mx-auto">NEW ARRIVALS</Flex>
				<Flex className=" rounded-[20px] gap-[5rem] justify-between mr-[50px] relative bg-main">
					<Flex className=" pl-[1rem] flex-end text-white">Shop all</Flex>
					<Flex className="items-center pr-[1rem]">
						<ShopIcon />
					</Flex>
					<a className="absolute h-[100%] w-[100%]" role="button" href="#" />
				</Flex>
			</Flex>
			<Flex className="px-[2.5rem] gap-[5rem] pt-[3rem]">
				<Card name="OG Planet Hoodie" price="US$ 65" />
				<Card name="OG Planet Hoodie" price="US$ 65" />
				<Card name="OG Planet Hoodie" price="US$ 65" />
				<Card name="OG Planet Hoodie" price="US$ 65" />
			</Flex>
			<Footer />
		</Flex>
	);
}

interface CardProps {
	name: string;
	price: string;
}

export function Card(props: CardProps) {
	const { name, price } = props;

	return (
		<Flex className="gap-[0.5rem] flex-col font-poppins text-[20px]">
			<Flex className="w-[335px] h-[432px] border-2 border-gray" />
			<p className="text-center align-center ">{name}</p>
			<p className="text-center align-center text-gray">{price}</p>
		</Flex>
	);
}

function Footer() {
	return (
		<Flex className="justify-between font-poppins  text-[20px]">
			<Flex>
				<Media icon={<TelegramIcon />} name="test" />
				<Media icon={<TelegramIcon />} name="test2" />
				<Media icon={<VKIcon />} name="test3" />
				<Media icon={<DiscordIcon />} name="test4" />
			</Flex>
			<ShmelMonkeyR className="z-1" />
		</Flex>
	);
}

interface MediaProps {
	icon: ReactElement;
	name: string;
}

function Media(props: MediaProps) {
	const { icon, name } = props;

	return (
		<Flex>
			{icon}
			<Flex>{name}</Flex>
		</Flex>
	);
}

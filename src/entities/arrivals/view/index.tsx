import React from 'react';

import { Flex } from '../../../shared/ui/atoms/flex';
import { ShopIcon } from '../../../shared/assets';

export function Arrivals() {
	return (
		<Flex className="py-[150px] font-noodle text-[45px] text-main w-full items-center">
			<Flex className="mx-auto">NEW ARRIVALS</Flex>
			<Flex className=" rounded-[20px] gap-[5rem] justify-between mr-[50px] relative bg-main">
				<Flex className=" pl-[1rem] flex-end text-white">Shop all</Flex>
				<Flex className="items-center pr-[1rem]">
					<ShopIcon />
				</Flex>
				<a className="absolute h-[100%] w-[100%]" role="button" href="#" />
			</Flex>
		</Flex>
	);
}

export function Carousel() {
	return <Flex />;
}

interface CardProps {
	name: string;
}
export function Card(props: CardProps) {
	const { name } = props;

	return <Flex />;
}

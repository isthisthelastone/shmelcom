/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { type ReactElement } from 'react';
import styled from 'styled-components';

import { Flex } from '../../../shared/ui/atoms/flex';
import {
	BelarusFlag,
	GermanFlag,
	SpanishFlag,
	UkranianFlag,
	ChinaFlag,
	USAFlag,
	ThaiFlag,
	IsraelFlag,
} from '../../../shared/assets';

export function WorldWide() {
	return (
		<Flex className="pl-[2.75rem] text-main">
			<Flex className="flex-col">
				<Flex className="font-noodle text-[120px] gap-[2rem]">
					<Flex>SHMELCOM WORLDWIDE</Flex>
					<Typing>SHMELMAFIA</Typing>
				</Flex>
				<Flex>
					<Flex className="text-[20px] pl-[5rem] gap-[0.5rem] flex-col">
						<Flex className="text-[30px] justify-center font-poppinsSb">
							Europe
						</Flex>
						<CountryInfo flag={<UkranianFlag />} country="Ukraine" />
						<CountryInfo flag={<BelarusFlag />} country="Belarus" />
						<CountryInfo flag={<SpanishFlag />} country="Spain" />
						<CountryInfo flag={<GermanFlag />} country="German" />
					</Flex>
					<Flex className="text-[20px] pl-[5rem] gap-[0.5rem] flex-col">
						<Flex className="text-[30px] justify-center font-poppinsSb">
							Asia
						</Flex>
						<CountryInfo flag={<ChinaFlag />} country="China" />
					</Flex>
					<Flex className="text-[20px] pl-[5rem] gap-[0.5rem] flex-col">
						<Flex className="text-[30px] justify-center font-poppinsSb">
							America
						</Flex>
						<CountryInfo flag={<USAFlag />} country="USA" />
					</Flex>
					<Flex className="text-[20px] pl-[5rem] gap-[0.5rem] flex-col">
						<Flex className="text-[30px] font-poppinsSb">Headquarters</Flex>
						<CountryInfo flag={<ThaiFlag />} country="Phuket, Thailand" />
						<Flex className="text-[30px] justify-center font-poppinsSb">
							Haifa & Krayot, Israel
						</Flex>
						<CountryInfo
							flag={<IsraelFlag />}
							country="Haifa & Krayot, Israel"
						/>
						<Flex className="text-[30px] justify-center font-poppinsSb">
							Europe Department
						</Flex>
						<CountryInfo flag={<GermanFlag />} country="Potsdam, Germany" />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}

type CountryInfoProps = {
	flag: ReactElement;
	country: string;
};

function CountryInfo(props: CountryInfoProps) {
	const { flag, country } = props;

	return (
		<Flex className="gap-[0.5rem] items-center font-poppins">
			{flag} {country}
		</Flex>
	);
}

const Typing = styled.p`
	color: #fff;
	-webkit-text-fill-color: transparent; /* Use this property to make the text transparent */
	-webkit-text-stroke: 1px #3f3f3f;
`;

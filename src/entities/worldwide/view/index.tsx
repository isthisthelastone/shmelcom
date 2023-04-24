/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { type ReactElement, useEffect } from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import styled from 'styled-components';
import * as THREE from 'three';

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
					<EarthModel className="pt-[30px]" />
				</Flex>
			</Flex>
		</Flex>
	);
}

export function EarthModel(props: { className: string }) {
	const { className } = props;

	useEffect(() => {
		const modelURL = new URL(
			'../../../shared/assets/3dmodels/test.glb',
			import.meta.url
		);

		const canvas = document.getElementById('kek') as HTMLCanvasElement;

		const renderer = new THREE.WebGL1Renderer({
			canvas,
		});

		renderer.setSize(600, 350);

		const scene = new THREE.Scene();
		scene.name = 'kek';
		scene.background = new THREE.Color(0xffffff);

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		camera.position.set(0, 2, 5);

		const assetLoader = new GLTFLoader();

		const al = new THREE.AmbientLight(0xffffff, 0.8);
		scene.add(al);

		// Add some directional lights to properly light the model
		const dl1 = new THREE.DirectionalLight(0xffffff, 0.5);
		dl1.position.set(1, 1, 1);
		scene.add(dl1);

		const dl2 = new THREE.DirectionalLight(0xffffff, 0.5);
		dl2.position.set(-1, -1, -1);
		scene.add(dl2);

		assetLoader.load(modelURL.href, (gltfScene) => {
			scene.add(gltfScene.scene);

			function animated() {
				gltfScene.scene.rotateY(0.005);
			}

			renderer.setAnimationLoop(() => {
				animated();
				renderer.render(scene, camera);
			});
		});

		renderer.setAnimationLoop(animate);

		const orbit = new OrbitControls(camera, renderer.domElement);
		orbit.update();

		function animate() {
			renderer.render(scene, camera);
		}

		renderer.render(scene, camera);
	}, []);

	return (
		<Flex className={className}>
			<canvas id="kek" />
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

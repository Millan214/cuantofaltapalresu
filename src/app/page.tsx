"use client"
import { useEffect, useState } from "react"
import Image from "next/image";
import './globals.css'
import ResuImg from '../../images/resu.png';

export default function Home() {
	const [remainingTime, setRemainingTime] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

	useEffect(() => {

		const interval = setInterval(() => {
			const currentDate = new Date();
			const targetDate = new Date('2024-06-26');
			const timeDifference = targetDate.getTime() - currentDate.getTime();

			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

			setRemainingTime({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<Image
				className="imagenresu"
				src={ResuImg}
				alt="Next.js Logo"
				priority
			/>
			{remainingTime ? (
				<div className="cajaprincipal">
					<div className="subcaja">
						<div className="subcaja-title">dias</div>
						<div className="cajaprincipal-item">{remainingTime.days}</div>
					</div>
					<div className="subcaja">
						<div className="subcaja-title">horas</div>
						<div className="cajaprincipal-item">{remainingTime.hours.toString().padStart(2, '0')}</div>
					</div>
					<div className="subcaja">
						<div className="subcaja-title">minutos</div>
						<div className="cajaprincipal-item">{remainingTime.minutes.toString().padStart(2, '0')}</div>
					</div>
					<div className="subcaja">
						<div className="subcaja-title">segundos</div>
						<div className="cajaprincipal-item">{remainingTime.seconds.toString().padStart(2, '0')}</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
			<a href="https://open.spotify.com/playlist/23FYpQqRAokYs8i4fD7E6N?si=a4db1401783445ad" target="_" className="spoty-caja">
				<svg width="30" height="30" viewBox="0 0 1829 1829" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M914.5 0C409.439 0 0 409.446 0 914.5C0 1419.59 409.446 1829 914.5 1829C1419.6 1829 1829 1419.59 1829 914.5C1829 409.482 1419.6 0.0500117 914.486 0.0500117L914.493 0.00714453L914.5 0ZM1333.88 1318.98C1317.49 1345.84 1282.33 1354.36 1255.47 1337.87C1040.75 1206.72 770.459 1177.01 452.135 1249.74C437.394 1253.1 421.924 1250.46 409.127 1242.41C396.33 1234.36 387.252 1221.56 383.89 1206.83C382.215 1199.53 381.995 1191.97 383.243 1184.59C384.492 1177.21 387.184 1170.15 391.166 1163.81C395.148 1157.47 400.341 1151.98 406.448 1147.65C412.556 1143.32 419.457 1140.23 426.757 1138.57C775.124 1058.98 1073.93 1093.25 1314.99 1240.57C1341.85 1257.06 1350.37 1292.12 1333.88 1318.98ZM1445.81 1069.97C1425.16 1103.52 1381.27 1114.11 1347.74 1093.47C1101.93 942.378 727.22 898.618 436.474 986.874C398.765 998.263 358.941 977.015 347.496 939.37C336.136 901.661 357.398 861.909 395.043 850.449C727.156 749.669 1140.04 798.487 1422.33 971.956C1455.86 992.604 1466.45 1036.49 1445.81 1069.97ZM1455.42 810.676C1160.68 635.606 674.401 619.502 392.999 704.922C347.81 718.626 300.02 693.112 286.331 647.923C272.635 602.713 298.12 554.959 343.345 541.22C666.37 443.154 1203.38 462.108 1542.71 663.555C1583.45 687.675 1596.77 740.173 1572.63 780.762C1548.61 821.414 1495.97 834.81 1455.46 810.676H1455.42Z"
					fill="#1ED760"/>
				</svg>
				<div>
					Considera seguir mi playlist de spotify 👉👈
				</div>
			</a>
		</div>
	);
}

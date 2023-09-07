import QRCode from 'react-qr-code';

const QRPage = () => {
	return (
		<div className="flex w-full h-full bg-gradient-to-b from-blue-950 via-sky-600 to-sky-200">
			

			<div className="flex flex-col justify-evenly items-center h-[80%] w-screen mt-20 lg:mt-28">
				
				<div className="md:mb-[50px] bg-white m-16 p-3  lg:h-[240px] lg:w-[240px] 2xl:h-[300px] 2xl:w-[300px]">
					<QRCode
						size={256}
						style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
						value={window.location.href}
						viewBox={`0 0 256 256`}
					/>
				</div>
				<p className="w-full font-OnAir-Regular text-center text-darkest-blue text-[15px] md:text-[30px] lg:text-[23px] leading-[16.5pxpx] md:leading-[33px] mt-[0px]  lg:mb-14">
					The augmented reality experience is <br />
					only available to be viewed on mobile. <br />
					<strong>Scan this QR code to access</strong>
				</p>
			</div>
		</div>
	);
};


export default QRPage

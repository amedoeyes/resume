export default function PrintButton() {
	const handleClick = () => {
		window.print();
	};

	return (
		<button
			className="p-3 text-lg font-bold text-white bg-black rounded-full hover:bg-neutral-800 active:bg-neutral-900"
			onClick={handleClick}
		>
			Print
		</button>
	);
}

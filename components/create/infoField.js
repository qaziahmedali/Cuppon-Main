function InfoField(props) {
	const { Data, IT, IH, Del, index } = props;

	return (
		<>
			<div className="flex flex-col float-right">
				<button
					onClick={() => {
						Del(Data.infoId);
					}}
				>
					<i
						className="fa fa-minus-circle text-2xl text-red-600"
						aria-hidden="true"
					></i>
				</button>
			</div>
			<div className="mt-2">
				<label className="block text-sm text-gray-600">Heading</label>
				<input
					className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
					id="heading"
					name="heading"
					type="text"
					placeholder="Heading"
					value={Data.infoHeading}
					onChange={(e) => {
						IH(index, e.target.value);
					}}
					aria-label="heading"
				/>
			</div>
			<div className="mt-2">
				<label className=" block text-sm text-gray-600">Message</label>
				<textarea
					className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
					name="message"
					rows="6"
					value={Data.infoText}
					onChange={(e) => IT(index, e.target.value)}
					placeholder="Message"
				></textarea>
			</div>
		</>
	);
}

export default InfoField;

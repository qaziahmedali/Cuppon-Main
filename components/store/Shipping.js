function Shipping({ Item }) {
	console.log("object", Item);
	return (
		<>
			<div className="mb-4">
				<div className="px-6 pt-4 pb-4 rounded-3 bg-white dark:bg-gray-800 dark:text-white">
					<h2 className="text-lg font-semibold mb-2">
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>
								{Item ? Item.infoHeading : ""}
							</font>
						</font>
					</h2>
					<div className="mb-3 text-sm">
						<font style={{ verticalAlign: "inherit" }}>
							{Item ? Item.infoText : ""}
							{/* At Jotex you have several different shipping options, and below
							you can read about the different options:&nbsp; */}
						</font>

						{/* <ul>
							<li>
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										Normal package: the package is sent to your nearest delivery
										point.
									</font>
								</font>
							</li>
							<li>
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										Express24: Your products are delivered the next day for NOK
										69 extra.
									</font>
								</font>
							</li>
							<li>
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										Larger furniture: delivery home to plot boundary 0 kr.{" "}
									</font>
									<font style={{ verticalAlign: "inherit" }}>
										Delivery with delivery costs NOK 595.
									</font>
								</font>
							</li>
						</ul> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Shipping;

import Coupons from "./CouponCard/Coupons";

const Details = () => {
	return (
		<>
			<div className="mt-4">
				<div className="my-5">
					<h3 className="text-2xl dark:text-white font-semibold mt-10 mb-4 w-full">
						Save money every single day with valid discount codes
					</h3>
					<div className="flex mt-4 mb-4 gap-4">
						<div className="dark:text-white">
							It is very profitable to look for one if there is a valid discount
							code in the store you are going to shop in. Discount codes give
							quick discounts on products you may not have been aware of had a
							well-hidden discount. We promote valid promotions and discount
							codes here on Smartspart.no and we try daily to be your preferred
							discount code site online.
						</div>
						<div className="dark:text-white">
							We browse the internet every single day so you do not have to! We
							guarantee the discount codes we collect so that you can quickly
							and easily use valid coupon codes in your favorite store. We
							constantly strive to give you the best selection of discount
							codes. Do not hesitate, save money today and look through our
							large selection of discount codes.
						</div>
					</div>
					<h3 className="text-2xl dark:text-white font-semibold mt-10 mb-4 w-full">
						Todays best discount codes
					</h3>
					<div className="flex flex-wrap justify-between">
						<Coupons />
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;

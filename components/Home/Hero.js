import styles from "../../styles/Hero.module.css";
import SearchBox from "../SearchBox";
import Image from "next/image";

const Hero = () => {
	return (
		<>
			<div className={`${styles.card} text-body shadow`}>
				<div className="container py-5 ">
					<div className="mb-0">
						<div className="pt-3 text-center bg-gray-50 dark:bg-gray-800 shadow rounded-t">
							<div className="md:px-16 px-8 py-8">
								<h1 className="md:text-2xl text-lg font-bold dark:text-white">
									Save money with discount codes
								</h1>
								<h2 className="md:text-lg text-sm mb-2 dark:text-white">
									Search for hundreds of discount codes and offers at your
									favorite store
								</h2>
								<div className="bg-white dark:bg-gray-700 rounded-full flex py-2 border border-green-600 dark:border-gray-600 w-50 relative">
									<div className="rounded z-20 bg-white dark:bg-gray-700 border dark:border-gray-900 w-full absolute top-10 hidden"></div>
									<SearchBox />
								</div>
							</div>
							<div className="mt-5 bg-white dark:bg-gray-700 py-4">
								<div className="flex flex-wrap justify-between px-6">
									<div className="lg:w-1/6 md:w-1/3 w-1/2">
										<a
											href="/rabattkode/eurodel"
											className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5"
										>
											{/* <div style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
                      <div style="box-sizing:border-box;display:block;max-width:100%">
                        <Image style="max-width:100%;display:block;margin:0;border:none;padding:0" alt="" aria-hidden="true" role="presentation" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" />
                      </div>
                      <Image alt="Eurodel logo" src="/_next/image?url=%2Fassets%2Fimages%2Flogo%2Feurodel_logo.jpg&amp;w=256&amp;q=75" decoding="async" className="p-2 rounded bg-white" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" srcset="/_next/image?url=%2Fassets%2Fimages%2Flogo%2Feurodel_logo.jpg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Flogo%2Feurodel_logo.jpg&amp;w=256&amp;q=75 2x" />
                    </div> */}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;

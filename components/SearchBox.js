import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Search.module.css";

const SearchBox = () => {
	const searchRef = useRef(null);
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(false);
	const [results, setResults] = useState([]);

	const searchEndpoint = (query) => `/api/search?name=${query}`;

	const onChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query);
		if (query.length) {
			fetch(searchEndpoint(query))
				.then((res) => res.json())
				.then((res) => {
					setResults(res.results);
				});
		} else {
			setResults([]);
		}
	}, []);

	const onFocus = useCallback(() => {
		setActive(true);
		window.addEventListener("click", onClick);
	}, []);

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false);
			window.removeEventListener("click", onClick);
		}
	}, []);
	return (
		<>
			<div className="">
				<span className="px-4" id="basic-addon1">
					🔍
				</span>
			</div>
			<div className={styles.container} ref={searchRef}>
				<input
					type="text"
					id="front"
					autoComplete="off"
					value={query}
					onChange={onChange}
					onFocus={onFocus}
					className="text-gray-800 dark:text-white bg-transparent small w-full outline-none"
					placeholder="Search for store"
				/>
				{active && results?.length > 0 && (
					<ul className={styles.results}>
						{results.map((item, index) => {
							return (
								<>
									<div
										className="rounded z-20 bg-white dark:bg-gray-700 border dark:border-gray-900 w-full top-10"
										key={index}
									>
										<li className="w-full py-0 show ">
											<div className="px-4 py-2 border-b text-gray-800 dark:text-white">
												<Link
													href={"/store/[store]"}
													as={`/store/${item.name}`}
												>
													<a>{item.name}</a>
												</Link>
											</div>
										</li>
									</div>
								</>
							);
						})}
					</ul>
				)}
			</div>
		</>
	);
};

export default SearchBox;

import React from "react";
import "./App.css";
import ProductsMenu from "./components/ProductsMenu";
import MenuBuilder from "./components/MenuBuilder";

export default () => (
	<div className="wrapper">
		<div className="menu-summary">
			<div className="container">
				<div className="row">
					<div className="col-6 menu-summary-left">
						<span>6 items</span>
					</div>
					<div className="col-6 menu-summary-right">
						6x <span className="dietary">ve</span>
						4x <span className="dietary">v</span>
						12x <span className="dietary">n!</span>
					</div>
				</div>
			</div>
		</div>
		<MenuBuilder />
	</div>
);

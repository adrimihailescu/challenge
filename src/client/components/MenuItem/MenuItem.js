import React from "react";

//reusable component receiving the addItem and removeItem, keeping it on the same level with all components (could have been inside ProductsMenu)
//Be able to remove items from the menu by clicking the (x)

const MenuItem = ({ item, addItem, removeItem }) => {
	const { id, name, dietaries } = item;
	return (
		<li className="item" onClick={() => !removeItem && addItem(item)}>
			<h2>{name}</h2>
			<p>
				{dietaries.map((diet) => (
					<span key={`${item.id}-${diet}`} className="dietary">
						{diet}
					</span>
				))}
			</p>
			{removeItem && (
				<button className="remove-item" onClick={() => removeItem(id)}>
					x
				</button>
			)}
		</li>
	);
};

export default MenuItem;

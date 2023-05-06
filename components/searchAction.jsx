import React from "react";

const SearchAction = () => {
    return (
        <div className="market-action">
            <form action="submit" method="get">
                <div className="search-action">
                    <input
                        type="text"
                        name="Name"
                        id="Name"
                        placeholder="product name"
                    />
                </div>
                <div className="filter-sort">
                    <div className="filter-action">
                        <label htmlFor="Filter">Filter By: </label>
                        <select name="Filter" id="Filter">
                            <option value="">--SELECT--</option>
                            <option value="">Option 1</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                        </select>
                    </div>
                    <div className="sort-action">
                        <label htmlFor="Sort"> Sort By: </label>
                        <select name="Sort by" id="Sort">
                            <option value="">--SELECT--</option>
                            <option value="Newest to Oldest">
                                Newest to Oldest
                            </option>
                            <option value="Oldest to Newest">
                                Lowest to Highest
                            </option>
                            <option value="Newest to Oldest">
                                Highest to Lowest
                            </option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchAction;

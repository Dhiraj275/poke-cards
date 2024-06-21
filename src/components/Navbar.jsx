import React from 'react'

const Navbar = ({ search, searchQuery }) => {

    return (
        <header className="header home">
            <div className="container">
                <div className="logo-wrapper">
                    <img src="/assets/pokeball.svg" alt="pokeball" />
                    <h1>PokeCards</h1>
                </div>
                <div className="search-wrapper">
                    <div className="search-wrap">
                        <img
                            src="./assets/search.svg"
                            alt="search icon"
                            className="search-icon"
                        />
                        <input
                            onChange={(e) => search(e.target.value)}
                            type="text"
                            value={searchQuery}
                            className="search-input body3-fonts"
                            placeholder="Search"
                            id="search-input"
                        />
                        {searchQuery !== "" &&
                            <img
                                src="./assets/cross.svg"
                                alt="cross icon"
                                onClick={() => search("")}
                                className="search-close-icon"
                                id="search-close-icon"
                            />

                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
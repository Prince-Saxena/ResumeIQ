import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({
		_id: "",
		username: "",
		fullname: "",
	});

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
export const useUser = () => useContext(UserContext);

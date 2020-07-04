import axios from 'axios';

const client = axios.create({
	baseURL: "https://peagle-backend.herokuapp.com"
});

export const Register = async (email, password) => {
	const { data } = await client.post("/users", {
		email: email,
		password: password
	});
	console.log(data);
	return data;
};

export const Login = async (email, password) => {
	const { data } = await client.post("/users/login", {
		email: email,
		password: password
	});
	return data;
};

export const Logout = async (token) => {
	const { data } = await client.post("/users/logout", null, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	});
	return data;
};

export const LogoutAll = async (token) => {
	const { data } = await client.post("/users/logoutAll", null, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
};

export const ReadUser = async (token) => {
	const { data } = await client.get("/users/me", {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
};

export const CreateDashboard = async(token) => {
	const { data } = await client.post("/dashboard", null, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const GetDashboards = async(token) => {
	const { data } = await client.get("/dashboard/me", {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export default { Register, Login, Logout, LogoutAll, ReadUser, CreateDashboard, GetDashboards };
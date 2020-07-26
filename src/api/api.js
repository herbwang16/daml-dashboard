import axios from 'axios';

const client = axios.create({
	baseURL: "https://peagle-backend.herokuapp.com"
	// baseURL: "http://localhost:5000"
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
	console.log(data);
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

export const CreateDashboard = async(token, title) => {
	const { data } = await client.post("/dashboards", {name: title}, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const GetDashboards = async(token) => {
	const { data } = await client.get("/dashboards/me", {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const CreateChart = async(token, chart) => {
	const { data } = await client.post(`/charts`, chart,
	{
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const UpdateChart = async(token, id, chart) => {
	const { data } = await client.put(`/charts/${id}`, chart,
	{
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const GetCharts = async(token, id) => {
	const { data } = await client.get(`/dashboards/${id}/charts`, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const EditDashboard = async(token, id, ids) => {
	const { data } = await client.patch(`/dashboards/edit/${id}`, {charts: ids}, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export const DeleteChart = async(token, id) => {
	const { data } = await client.delete(`/charts/${id}`, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	console.log(data);
	return data;
}

export default { Register, Login, Logout, LogoutAll, ReadUser, CreateDashboard, GetDashboards, CreateChart, UpdateChart, GetCharts, DeleteChart };
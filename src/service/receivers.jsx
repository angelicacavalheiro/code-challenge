import axios from "axios";

const endpoint = '/receivers';
const URL = 'http://localhost:3000' + endpoint;

async function getReceiversReq() {
	try {
		const response = await axios.get(`${URL}/?_sort=name&_order=asc`);
		return response;
	} catch (error) {
		throw error;
	}
}

async function deleteReceiversListReq(selectedItems) {
	try {
		const promises = selectedItems.map(id => {
		const config = {
			headers: {
			'Content-Type': 'application/json'
			}
		};
		return axios.delete(`${URL}/${id}`, config);
		});
		await Promise.all(promises);
	} catch (error) {
		throw error;
	}
}

async function deleteReceiverReq(id) {
	const config = {
		headers: {
		'Content-Type': 'application/json'
		}
  	}    
	try {
		const response = await axios.delete(`${URL}/${id}`, config);
		return response;
	} catch (error) {
		throw error;
	}
}

async function postReceiversReq(body) {
	const config = {
		headers: {
		'Content-Type': 'application/json'
		}
	};
	try {
		const response = await axios.post(URL, body, config);
		return response;
	} catch (error) {
		throw error; 
	}
}

async function patchReceiverReq(receiverId, newEmail) {
	const config = {
		headers: {
		'Content-Type': 'application/json'
		}
	};
	try {
		const response = await axios.patch(`${URL}/${receiverId}`, { email: newEmail }, config);
		return response;
	} catch (error) {
		throw error;
	}
}

async function updateReceiversReq(receiverId, body) {
	const config = {
		headers: {
		'Content-Type': 'application/json'
		}
	};
	try {
		const response = await axios.put(`${URL}/${receiverId}`, body, config);
		return response;
	} catch (error) {
		throw error; 
	}
}

export {
	getReceiversReq,
	deleteReceiversListReq,
	deleteReceiverReq,
	postReceiversReq,
	patchReceiverReq,
	updateReceiversReq
}

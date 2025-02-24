import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = `${import.meta.env.VITE_REACT_APP_URL}/${
	import.meta.env.VITE_REACT_APP_API_VERSION
}/`;

const customBaseQuery = () => {
	const baseQuery = fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			const adminToken = localStorage.getItem('adminToken');
			const userToken = localStorage.getItem('userToken');

			if (adminToken) {
				headers.set('Authorization', `Bearer ${adminToken}`);
			} else if (userToken) {
				headers.set('Authorization', `Bearer ${userToken}`);
			}

			return headers;
		}
	});

	return async (args: string | FetchArgs, api: BaseQueryApi) => {
		const response = await baseQuery(args, api, {});

		if (response.error?.status === 401) {
			// Logic xử lý lỗi 401 (Unauthorized)
			// Bạn có thể thêm logic điều hướng đến trang đăng nhập tại đây
			// Ví dụ: navigate('/login')
		}

		return response;
	};
};

export default customBaseQuery;

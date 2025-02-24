import { createApi } from '@reduxjs/toolkit/query/react';
import { REQUEST_HEADERS } from '@/constants/api.constant';
import customBaseQuery from './fetchBase';
export const apiCaller = createApi({
	reducerPath: 'apiCaller',
	refetchOnMountOrArgChange: 30,
	baseQuery: customBaseQuery(),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (users) => ({
				url: '/auth/register',
				method: 'POST',
				body: users,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		login: builder.mutation({
			query: (users) => ({
				url: '/auth/login',
				method: 'POST',
				body: users,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		loginAdmin: builder.mutation({
			query: (users) => ({
				url: '/auth/admin',
				method: 'POST',
				body: users,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		forgotPassword: builder.mutation({
			query: (email) => ({
				url: '/auth/forgot-password',
				method: 'POST',
				headers: REQUEST_HEADERS.header(),
				params: { email }
			})
		}),
		changePassword: builder.mutation({
			query: (data) => ({
				url: '/auth/change-password',
				method: 'POST',
				body: data,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),

		//books
		getAllBooks: builder.query({
			query: () => ({
				url: `/books`,
				method: 'GET'
			})
		}),
		getBookDetailById: builder.query({
			query: (id) => ({
				url: `/books/details/${id}`,
				method: 'GET'
			})
		}),
		getBooks: builder.query({
			query: (queryArgs) => {
				const params = new URLSearchParams(queryArgs);
				return {
					url: `/books?${params}`,
					method: 'GET',
					headers: REQUEST_HEADERS.header()
				};
			}
		}),
		getBookPublishers: builder.query({
			query: () => ({
				url: `/books/publishers`,
				method: 'GET'
			})
		}),
		createBook: builder.mutation({
			query: (book) => ({
				url: `/books`,
				method: 'POST',
				body: book
			})
		}),
		updateBook: builder.mutation({
			query: (book) => ({
				url: `/books/update-book/${book.id}`,
				method: 'PUT',
				body: book.book
			})
		}),
		deleteBook: builder.mutation({
			query: (id) => ({
				url: `/books/${id}`,
				method: 'DELETE'
			})
		}),
		//orders
		getAllOrders: builder.query({
			query: () => ({
				url: `/orders`,
				method: 'GET'
			})
		}),
		getAllOrdersUser: builder.query({
			query: () => ({
				url: `/orders/user`,
				method: 'GET'
			})
		}),
		getOrderDetailAdminById: builder.query({
			query: (id) => ({
				url: `/order-details/admin/${id}`,
				method: 'GET'
			})
		}),
		getOrderDetailUserById: builder.query({
			query: (id) => ({
				url: `/order-details/user/${id}`,
				method: 'GET'
			})
		}),
		confirmOrder: builder.mutation({
			query: (id) => ({
				url: `/orders/admin/confirm/${id}`,
				method: 'PUT'
			})
		}),
		receivedOrder: builder.mutation({
			query: (id) => ({
				url: `/orders/user/received/${id}`,
				method: 'PUT'
			})
		}),
		cancelOrder: builder.mutation({
			query: ({ id, note }) => ({
				url: `/orders/cancel/${id}`,
				method: 'PUT',
				body: { note },
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		//customers
		getAllCustomers: builder.query({
			query: () => ({
				url: `/users`,
				method: 'GET'
			})
		}),
		// getExportUser: builder.query<Blob, void>({
		// 	query: () => ({
		// 		url: `/export/excel`,
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		// 			Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		// 		}
		// 	})
		// }),
		//infoUser
		getInfoUser: builder.query({
			query: () => ({
				url: `/users/information`,
				method: 'GET'
			})
		}),
		updateInfoUser: builder.mutation({
			query: (data) => ({
				url: `/users/update-information`,
				method: 'PUT',
				body: data,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		//statistical
		getAllTopBooks: builder.query({
			query: () => ({
				url: `statistical/top5-books`,
				method: 'GET'
			})
		}),
		getAllRevenueByMonth: builder.query({
			query: () => ({
				url: `statistical/revenue-by-month`,
				method: 'GET'
			})
		}),
		getTotalCustomers: builder.query({
			query: () => ({
				url: `statistical/total-customers`,
				method: 'GET'
			})
		}),
		getTotalOrders: builder.query({
			query: () => ({
				url: `statistical/total-orders`,
				method: 'GET'
			})
		}),
		getTotalRevenue: builder.query({
			query: () => ({
				url: `statistical/total-revenue`,
				method: 'GET'
			})
		}),
		//category
		getAllCategories: builder.query({
			query: () => ({
				url: `/categories`,
				method: 'GET'
			})
		}),
		createCategory: builder.mutation({
			query: (category) => ({
				url: `/categories`,
				method: 'POST',
				body: category
			})
		}),
		updateCategory: builder.mutation({
			query: ({ id, ...body }) => ({
				url: `/categories/update-category/${id}`,
				method: 'PUT',
				body: body,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),

		deleteCategory: builder.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
				method: 'DELETE'
			})
		}),
		//carts
		getAllCarts: builder.query({
			query: () => ({
				url: `/carts`,
				method: 'GET'
			})
		}),
		createCart: builder.mutation({
			query: (cart) => ({
				url: `/carts`,
				method: 'POST',
				body: cart,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		updateCart: builder.mutation({
			query: (cart) => ({
				url: `/carts/update-quantity`,
				method: 'PUT',
				body: cart,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		}),
		deleteCart: builder.mutation({
			query: (id) => ({
				url: `/carts/delete?bookId=${id}`,
				method: 'DELETE'
			})
		}),
		checkoutCart: builder.mutation({
			query: () => ({
				url: `/carts/checkout`,
				method: 'POST'
			})
		}),
		//payments
		payments: builder.mutation({
			query: (data) => ({
				url: `/payments`,
				method: 'POST',
				body: data
			})
		}),
		//comments
		getAllComments: builder.query({
			query: (id) => ({
				url: `/comments/${id}`,
				method: 'GET'
			})
		}),
		createComment: builder.mutation({
			query: ({ id, data }) => ({
				url: `/comments/${id}`,
				method: 'POST',
				body: data,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		})
	})
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useLoginAdminMutation,
	useForgotPasswordMutation,
	useChangePasswordMutation,
	useGetInfoUserQuery,
	useUpdateInfoUserMutation,
	useGetAllBooksQuery,
	useGetBookDetailByIdQuery,
	useGetBooksQuery,
	useGetBookPublishersQuery,
	useCreateBookMutation,
	useUpdateBookMutation,
	useDeleteBookMutation,
	useGetAllOrdersQuery,
	useGetAllOrdersUserQuery,
	useGetOrderDetailAdminByIdQuery,
	useGetOrderDetailUserByIdQuery,
	useConfirmOrderMutation,
	useReceivedOrderMutation,
	useCancelOrderMutation,
	useGetAllCustomersQuery,
	// useGetExportUserQuery,
	useGetAllTopBooksQuery,
	useGetAllRevenueByMonthQuery,
	useGetTotalCustomersQuery,
	useGetTotalOrdersQuery,
	useGetTotalRevenueQuery,
	useGetAllCategoriesQuery,
	useCreateCategoryMutation,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation,
	useGetAllCartsQuery,
	useCreateCartMutation,
	useUpdateCartMutation,
	useDeleteCartMutation,
	useCheckoutCartMutation,
	usePaymentsMutation,
	useGetAllCommentsQuery,
	useCreateCommentMutation
} = apiCaller;

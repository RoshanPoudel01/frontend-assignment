import { useMutation, useQuery, useQueryClient } from "react-query";
import { apiURl } from "../service-api";
import { HTTPClient } from "../HttpClient";

// const postInvestmentSIP = (body) => {
//   return MicroMCPHttpClient.post(api.sip.sipGetInvestments, body);
// };

// const usePostInvestmentSIP = () => {
//   const queryClient = useQueryClient();
//   return useMutation(postInvestmentSIP, {
//     onError: (error) => {},
//     onSuccess: (success) => {
//       if (success?.data?.code === 1) {
//       } else {
//         toastFail(success?.data?.message);
//       }
//     },
//   });
// };
const fetchProductDetails =
  ({ sort, limit }) =>
  () => {
    console.log(sort);
    return HTTPClient.get(apiURl.products, {
      params: { sort: sort, limit: limit },
    });
  };
const useFetchProductDetails = (value) => {
  console.log(value);
  return useQuery([apiURl.products, value], fetchProductDetails(value), {
    select: (data) => data?.data,
  });
};

const fetchSingleProductDetail =
  ({ id }) =>
  () => {
    const URL = `${apiURl.products}/${id}`;
    return HTTPClient.get(URL);
  };
const useFetchSingleProductDetail = (id) => {
  return useQuery([apiURl.product, id], fetchSingleProductDetail(id), {
    select: (data) => data?.data,
    enabled: !!id,
  });
};

export { useFetchProductDetails, useFetchSingleProductDetail };

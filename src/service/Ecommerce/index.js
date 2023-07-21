import { useQuery } from "react-query";
import { apiURl } from "../service-api";
import { HTTPClient } from "../HttpClient";

const fetchProductDetails =
  ({ sort, limit }) =>
  () => {
    return HTTPClient.get(apiURl.products, {
      params: { sort: sort, limit: limit },
    });
  };
const useFetchProductDetails = (value) => {
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

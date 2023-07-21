import axios from "axios";
import { BASE_URL } from "../../helper/Config";

const THREE_MINUTES = 3 * 60 * 1000;
export const baseURL = BASE_URL;
/**
 * Axios HTTP Client
 * {@link https://github.com/axios/axios#request-config Axios Request Config}
 */
const HTTPClient = axios.create({
  baseURL,
  timeout: THREE_MINUTES,
});

export { HTTPClient };

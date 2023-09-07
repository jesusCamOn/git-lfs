import { useRouteStore } from '../store/routeStore';
import { arrayExistsInArray, getQueryParams } from "../utils";
import { Error404, QRPage } from '../views';

const Routes = ({ children, allowedParams, allowedValues, fallbackComponent = Error404, QRComponent = QRPage }) => {
  const { keys: receivedParams, values: receivedValues } = getQueryParams();
  const passParams = arrayExistsInArray(receivedParams, allowedParams);
  const passValues = arrayExistsInArray(receivedValues, allowedValues);
  if (!passParams || !passValues) return fallbackComponent()
  
  return <>{children}</> 
};

const usePath = () => {
  const route = useRouteStore((state) => state.route)
  return { route }
}

const useNavigate = () => {
  const setRoute = useRouteStore((state) => state.setRoute)
  const back = useRouteStore((state) => state.previusRoute)

  const navigate = (path, config = { queryParams: null }) => {
    // ejemplo de como setear query params    
    /* const qp = {
      "d1": "google_pixel_7"
    } */
    // navigate(PATHS.home, { queryParams: qp })

    if (config.queryParams) {
      const urlSearchParams = new URLSearchParams(config.queryParams);
      const queryString = urlSearchParams.toString();
      const url = `${window.location.origin + window.location.pathname}?${queryString}`;
      window.history.replaceState(null, '', url);
    }
    return setRoute(path)
  }

  return { navigate,back }
}

const Route = ({ path, component: Component }) => {
  const route = useRouteStore((s) => s.route)
  return <>{route === path && <Component />}</>
}


export { Routes, Route, usePath, useNavigate }
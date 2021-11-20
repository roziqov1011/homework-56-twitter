import { Route, Redirect } from "react-router";
import useAuth from "../hooks/useAuth";

const Private =({ path, component, exact})=>{
    const [token] = useAuth()
    if(token)
    {

        return <Route path={path} component={component} exact={exact}></Route>
    }
    return <Redirect to="/login"></Redirect>
}
export default Private;
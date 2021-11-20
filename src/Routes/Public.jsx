import { Route } from "react-router";

const Public =({ path, component, exact})=>{
    return <Route path={path} component={component} exact={exact}></Route>
}
export default Public;
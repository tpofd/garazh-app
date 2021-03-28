import {Base} from "./pages/base/Base";
import {Layout} from "./components/layout/layout";
import {AnimatePresence} from "framer-motion"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import {Users} from "./pages/users/Users";
import {BaseContext} from "./pages/base/BaseContext";
import {AddReview} from "./pages/addReview/AddReview";
import {AddReviewContext} from "./pages/addReview/AddReviewContext";
import {Tasks} from "./pages/tasks/Tasks";
import {UsersMap} from "./pages/usersMap/UsersMap";
const history = createBrowserHistory();

export const App = () => (
    <Router history={history}>
        <Layout>
            <Switch>
                <AnimatePresence>
                    <Route exact path="/">
                        <BaseContext>
                            <Base key={"/"}/>
                        </BaseContext>
                    </Route>
                    <Route key={"/users"} exact path="/users">
                        <Users/>
                    </Route>
                    <Route key={"/add-review"} exact path="/add-review">
                        <AddReviewContext>
                            <AddReview/>
                        </AddReviewContext>
                    </Route>
                    <Route key={"/tasks"} exact path="/tasks">
                        <Tasks/>
                    </Route>
                    <Route key={"/user-map"} exact path="/user-map">
                        <UsersMap />
                    </Route>
                </AnimatePresence>
            </Switch>
        </Layout>
    </Router>
);
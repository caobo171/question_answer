import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Users from './pages/user/Users';
import User from './pages/user/User';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
	const { user } = useContext(Context);
	return (
		<Router>
			<ToastContainer />
			<TopBar />
			<div class='container'>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/register">{user ? <Home /> : <Register />}</Route>
					<Route path="/login">{user ? <Home /> : <Login />}</Route>
					<Route path="/ask">{user ? <Write /> : <Register />}</Route>
					<Route path="/settings">{user ? <Settings /> : <Register />}</Route>
					<Route path="/admin">{user ? <Users /> : <Login />}</Route>
					<Route path="/post/:postId">
						{user ? <Single /> : <Login />}

					</Route>

					<Route path="/user/:username">
						<User />
					</Route>
				</Switch>
			</div>

		</Router>
	);
}

export default App;

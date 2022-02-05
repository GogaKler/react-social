import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Page_content = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">

					<Sidebar />

				</div>
				<div className="col-md-9">

					<Profile />

				</div>
			</div>
		</div>
	)
}

export default Page_content;
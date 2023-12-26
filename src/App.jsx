// import UserProfile from "./component/one/UserProfile";

import UserList from "./component/five/UserList";
import DropdownMenu from "./component/seven/DropdownTest";
import Notification from "./component/six/Notification";

// import ReviewModal from "./component/four/ReviewForm";
// import Collection from "./component/three/Collection";

// import JobList from "./component/two/JobList";

export default function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-400">
      {/* <UserProfile /> */}
      {/* <JobList/> */}
      {/* <Collection /> */}
      {/* <ReviewModal /> */}
      {/* <UserList /> */}
      <DropdownMenu />
    </div>
  );
}

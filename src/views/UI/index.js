import Sidebar from "./Sidebar";
import users from "./users";
import Person from "./Person";
const user = {
  name: "Someone",
  img: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  city: "Pune",
};

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="position-fixed col-3">
        <Sidebar {...user}></Sidebar>
      </div>
      <div className="row justify-content-end">
        <div className="col-8 m-4 align-self-end">
          <div>
            <form action="form-control">
              <div>
                <input className="form-control form-control-lg" type="text" />
              </div>
            </form>
          </div>
          <div className="row justify-content-evenly">
            {users.map((user, index) => {
              return <Person key={index} {...user}></Person>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

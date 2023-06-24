
import LeftAside from "../components/profile/leftAside";
function profile() {
  return (
    <section className="w-[90%] max-w-7xl m-auto">
      <LeftAside img={""} recived={12} donated={20} name={'yahya'} />
      <section className="w-[60%]"></section>
    </section>
  );
}

export default profile;

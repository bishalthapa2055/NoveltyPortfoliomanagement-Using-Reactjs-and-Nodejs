// import "./Aboutme.css";
const Aboutme1 = (props) => {
  return (
    <>
      <article class="card">
        <img src={props.img} alt="" className="img1" />
        <h3>{props.title}</h3>
        <p className="text">{props.desc}</p>
      </article>
    </>
  );
};

export default Aboutme1;

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "react-gsap";
import "./style.css";

function App() {
  const container = useRef();
  const circle = useRef();

  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      gsap.to(".box", { rotation: "+=360", duration: 10 });
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container }
  );

  const onClickGood = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  return (
    <div ref={container} className="container">
      <div className="box">selector</div>
      <div className="circle gradient-green" ref={circle}>
        Ref
      </div>
      <button onClick={onClickGood} className="box good">
        Click Me
      </button>
    </div>
  );
}

export default App;


import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  //   const [Visible,setIsVisible] = useState(false);
//   console.warn(title, description, isVisible, setIsVisible,"section")
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-2xl">{title}</h1>
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >        
        {console.warn("isVisible",isVisible)}

          Show
        </button>
      ) : (
        <button
        onClick={() => setIsVisible(false)}
        className="cursor-pointer underline m-3"
        >
            {console.warn("isVisible",isVisible)}
          hide
        </button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};
//lifting the state up parent will handle the visiblity of section
const Instamart = () => {
  //   const [sectionConfig,setSectionConfig] = useState({
  //     showAbout:true,
  //     showTeam:false,
  //     showCareer:false
  //   })
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h1 className="text-3xl p-2 m-3 font-bold">Instamart</h1>
      <Section
        title="About instamart"
        description="This is about instamart"
        isVisible={visibleSection === "about"}
        setIsVisible={() => setVisibleSection("about") }
      />
      <Section
        title="Team instamart"
        description="This is about Team instamart"
        isVisible={visibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title="Career Section"
        description="This is about Career instamart"
        isVisible={visibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};
export default Instamart;
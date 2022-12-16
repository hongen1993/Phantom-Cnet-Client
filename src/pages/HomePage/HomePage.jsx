import "./HomePage.css"
import Navbar from "../../components/Navbar/Navbar"

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home">
        {/* 
        <div className="image-a"></div>
        <div className="image-b"></div> */}

        <h1>One app to
          replace them all.</h1>
        <p>All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>

        <p>Set goals and crush them faster.
          Stay on track to hit your goals with targets for task completions, numbers, monetary values and more. Track progress in real-time connecting tasks to goals and keep your objectives organized with Goal Folders.</p>
      </div>
    </>
  );
}

export default HomePage

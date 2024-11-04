import { FaDumbbell, FaBiking, FaUserTie, FaWeight } from 'react-icons/fa'; 

const Features = ({featuresRef}:any) => {
  return (
    <section className="features bg-gray-900 py-16 bg-black text-white text-center" ref={featuresRef}>
      <h2 className="text-3xl font-bold mb-12">WHY CHOOSE US?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-[90%] mx-auto">
        <div className="feature-card bg-gray-800 p-6 rounded-lg hover:shadow-lg transition transform hover:scale-105">
          <FaDumbbell size={50} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Muscle Training</h3>
          <p className="text-gray-400">
            Build strength and endurance with tailored muscle-focused workouts.
          </p>
        </div>

        <div className="feature-card bg-gray-800 p-6 rounded-lg hover:shadow-lg transition transform hover:scale-105">
          <FaBiking size={50} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cardio Training</h3>
          <p className="text-gray-400">
            Boost heart health and burn calories with our dynamic cardio programs.
          </p>
        </div>

        <div className="feature-card bg-gray-800 p-6 rounded-lg hover:shadow-lg transition transform hover:scale-105">
          <FaUserTie size={50} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Personal Training</h3>
          <p className="text-gray-400">
            Achieve your fitness goals faster with one-on-one personalized coaching.
          </p>
        </div>

        <div className="feature-card bg-gray-800 p-6 rounded-lg hover:shadow-lg transition transform hover:scale-105">
          <FaWeight size={50} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bodybuilding Training</h3>
          <p className="text-gray-400">
            Sculpt your physique with expert-led bodybuilding regimens for results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;

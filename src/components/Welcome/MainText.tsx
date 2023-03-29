const MainText:React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-10">
      <h2 className="text-white font-semibold text-3xl">The Food Order App - React and Typescript</h2>
      <h3 className="text-white font-semibold text-xl">Delicous Food, Delivered to you</h3>
      <p className="text-white font-semibold text-base">
        Choose your favorite food and added to your list.
      </p>
      <p className="text-white font-semibold textbase">
        You can add as many meals as you want.
      </p>
    </div>
  )
}

export default MainText;

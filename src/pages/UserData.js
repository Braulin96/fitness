//components:
import Onboarding from "../components/shared/Onboarding";
//images:
import { useData } from "components/hooks/DataContext";
import Woman from "assets/images/secondWoman.jpeg";
import Lady from "assets/images/thirdLady.jpeg"

const UserData = () => {
  const { name, handleNameChange, category, handleOptionChange } = useData();

  const UserName = () => {
    return (
      <div className="">
        <label className="text-xl"> What is you first name</label>
        <input
          placeholder="type your name..."
          type="text"
          value={name}
          onChange={handleNameChange}
          className="mt-6 w-full rounded-lg border-2 border-tertiary-gray px-4 py-1.5 focus:ring-0 focus:outline-none focus:border-primary-blue"
        />
      </div>
    );
  };

  const Category = () => {
    const answers = [
      { text: "Smartphones", value: 0 },
      { text: "Laptops", value: 1 },
      { text: "Fragrances", value: 2 },
      { text: "Skincare", value: 3 },
      { text: "Groceries", value: 4 },
      { text: "Home-decoration", value: 5 },
    ];

    return (
      <div className="flex flex-col">
        <label className="text-xl"> Thanks {name}! Now your categories.</label>
        <p className="text-sm mt-2">
          Select one option that is better in your case.
        </p>
        {answers.map((answer) => (
          <button
            className={`mt-4 px-3 py-1.5 w-full rounded-lg border-2 border-tertiary-gray ${
              category === answer.text
                ? "bg-primary-blue text-white" // Applied background blue when selected
                : "bg-white text-black"
            }`}
            key={answer.value}
            onClick={() => handleOptionChange(answer.text)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    );
  };

  const elements = [
    { image: Lady, description: UserName() },
    { image: Woman, description: Category() },
  ];
  return (
    <div>
      <Onboarding elements={elements} />
    </div>
  );
};
export default UserData;

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  //   const arr = data.map((post) => (
  //     console.log(post)

  // ))

  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default PromptCardList;

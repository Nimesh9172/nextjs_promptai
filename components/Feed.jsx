"use client";

import { useState, useEffect, useMemo } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const debouncedSearchText = useDebounce(searchText, 500);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (p) =>
        p.prompt.toLowerCase().includes(debouncedSearchText.trim().toLowerCase()) ||
        p.tag.toLowerCase().includes(debouncedSearchText.trim().toLowerCase())
    );
  }, [debouncedSearchText, posts]);

  return (
    <section className="feed">
      <form className="reltive w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={filteredPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;


function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
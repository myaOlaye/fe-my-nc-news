import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { getArticles } from "../api";
getArticles;

export const ArticleFilter = ({ searchParams, setSearchParams }) => {
  const setOrderBy = (orderBy) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", orderBy);
    setSearchParams(newParams);
  };

  const setSortBy = (sortBy) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
  };

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title="Sort Articles">
        <Dropdown.Item
          onClick={() => {
            setSortBy("created_at");
          }}
        >
          date
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortBy("votes");
          }}
        >
          votes
        </Dropdown.Item>
      </DropdownButton>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton
          id="tbg-radio-1"
          value={1}
          onClick={() => {
            setOrderBy("desc");
          }}
        >
          desc
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-2"
          value={2}
          onClick={() => {
            setOrderBy("asc");
          }}
        >
          asc
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

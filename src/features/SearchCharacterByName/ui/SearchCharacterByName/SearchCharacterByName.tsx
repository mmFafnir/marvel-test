"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { useSearchCharacterQuery } from "../../api/useSearchCharacterQuery";
import { SearchCharByNameContent } from "../SearchCharByNameContent/SearchCharByNameContent";
import styles from "./search.module.scss";

export const SearchCharacterByName = () => {
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [isRequired, setIsRequired] = useState<boolean>(false);

  const { data, isFetching } = useSearchCharacterQuery(search);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsRequired(value.trim().length === 0);
    setSearch(value);
  };

  return (
    <div className={styles.body}>
      <p className={styles.title}>Or find a character by name:</p>
      <form className={styles.search} onSubmit={onSearch}>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button disabled={isFetching}>FIND</Button>
      </form>

      <SearchCharByNameContent
        isRequired={isRequired}
        isLoading={isFetching}
        character={data}
      />
    </div>
  );
};

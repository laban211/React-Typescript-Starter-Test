import React, { useEffect, useState } from "react";
import { appPaths } from "../AppRouter";
import { ContentCard } from "../components/ContentCard";
import { ContentContainer } from "../components/ContentContainer";
import { PaddedContainer } from "../components/PaddedContainer";
import { useFetch } from "../hooks/useFetch";
import { ApiContent } from "../types/ApiContent";

interface Props {}

export const SportsScreen: React.FC<Props> = () => {
  const { data, isFetching, isError, removeItemFromDataById, retryFetch } =
    useFetch<ApiContent>(appPaths.sports);

  const removeItemById = (id: string) => {
    removeItemFromDataById(id, (item) => item.id);
  };

  return (
    <PaddedContainer size="large">
      <ContentContainer
        data={data}
        isLoading={isFetching}
        isError={isError}
        refetchData={retryFetch}
        renderItem={(item) => (
          <ContentCard
            cover={<img alt="sports-image" src={item.url} />}
            title={item.title}
            description={item.description}
            deleteAction={() => {
              removeItemById(item.id);
            }}
          />
        )}
      />
    </PaddedContainer>
  );
};

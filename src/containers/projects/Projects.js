import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob("IDBiOWQ4M2JlNjhlMDdhMTY3YmRlYmVhZjNlMjczMTk3YmE3MmNjYjI=")}`
            //authorization: `Bearer Yjg3OGM2ZmVmMThkYTU3MjcyNGM2ZGVkODViM2UwMzZiOGZmMjIwMg==`,
          }
        });
      }
    });

    client
      .query({
        query: gql`
        {
          user(login: "nhammad") {
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    url
                    id
                    diskUsage
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
        `
      })
      .then(result => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
        console.log("REOP FUNC", result.data.user.pinnedItems.edges)
      })
      .catch(erorr => {console.log("problem", erorr)});

  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <div className="main" id="opensource">
      <h1 className="project-title">An Insight Into My Github</h1>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button text={"More Projects"} className="project-button" href="https://github.com/nhammad" newTab={true} />
    </div>
  );
}

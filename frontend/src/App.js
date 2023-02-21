import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import './global.css'
import "graphiql/graphiql.css";
import gql from 'graphql-tag'
import {useGQLQuery} from './utils.js'
import Button from "./components/button/Button";

const fetcher = createGraphiQLFetcher({
  url: "http://localhost:8085/query",
});

const GET_HEROES = gql`
	query{
		heroes{
			name
			class
			colour
		}
	}
`

function App() {
	
	const {data, isLoading, error } = useGQLQuery('heroes', GET_HEROES)

	console.log(data)
	if (isLoading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  return (
    <div class="container">
      <div class="btns">
				{data.heroes.map((hero,idx) => {
					return(
						<Button title={hero.name} style={hero.class} colour={hero.colour} idx={hero.idx}/>
					)
				})}
      </div>
      <GraphiQL fetcher={fetcher} />
    </div>
  ); 
	
}

export default App;

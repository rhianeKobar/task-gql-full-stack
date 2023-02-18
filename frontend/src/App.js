import { createGraphiQLFetcher } from "@graphiql/toolkit";
import { GraphiQL } from "graphiql";
import React from "react";
import './global.css'
import "graphiql/graphiql.css";
import Button from "./components/button/Button";

const fetcher = createGraphiQLFetcher({
  url: "http://localhost:8085/query",
});
function App() {

  return (
    <div class="container">
      <div class="btns">
        <Button title="Luke Skywalker" class="luke" colour="#A1B7B0" />
        <Button title="Hans Solo" class="hans" colour="#0B3957" />
        <Button title="C-3PO" class="c-3po" colour="#D6BE98" />
        <Button title="Chewy" class="chewy" colour="#B2B2B7" />
      </div>
      <GraphiQL fetcher={fetcher} />
    </div>
  ); 
	
}

export default App;

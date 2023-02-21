import { useQuery } from 'react-query';
import {GraphQLClient, request} from 'graphql-request'


/**
 * copyObject is a pure function that expects an object that contains only variables and returns a copy of it.
 */

export const copyObject = (obj) => {
  const copyObj = JSON.parse(JSON.stringify(obj));
  return copyObj;
}

export const useGQLQuery = (key, query, config = {}) => {
	const endpoint = 'http://localhost:8085/query'

	const fetchData = async() => await request(endpoint, query)

	return useQuery(key, fetchData, config)
}
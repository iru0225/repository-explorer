// import { request } from "@octokit/request";
import { Octokit } from "octokit";
import { UserType } from "../types";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN})

export const getUsers = async () => {
  try {
    const result = await octokit.rest.users.list()

    return {
      users: result.data
    }
  } catch (error) {
    return {
      users: []
    }
  }
}

export const getRepositories = async (user: string) => {
  try {
    const obj: {
      [key: string]: any
    } = {}
    const result = await octokit.request('GET /users/{username}/repos', {
      username: user
    })
    obj[user] = result.data
    console.log(obj);
    
    return obj
  } catch (error) {
    return {}
  }
}

export const getData = async (data: string) => {
  try {
    const result = await octokit.rest.repos.listForOrg({
      org: "octokit",
      type: "public",
    })

    return result
  } catch (error) {
    return []
  }
}

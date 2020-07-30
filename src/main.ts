import * as core from '@actions/core'
import {Octokit} from '@octokit/core'

async function run(): Promise<void> {
  try {
    const octokit = new Octokit({auth: core.getInput('github_token')})
    const {data} = await octokit.request(
      'GET /users/{username}/settings/billing/actions',
      {
        username: core.getInput('username')
      }
    )

    core.setOutput('data', data)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

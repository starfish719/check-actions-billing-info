import * as core from '@actions/core'
import {Octokit} from '@octokit/core'

async function run(): Promise<void> {
  try {
    const octokit = new Octokit({auth: core.getInput('accessToken')})
    const {data} = await octokit.request(
      'GET /users/:username/settings/billing/actions',
      {
        username: core.getInput('username')
      }
    )

    core.setOutput('total_minutes_used', data.total_minutes_used)
    core.setOutput('total_paid_minutes_used', data.total_paid_minutes_used)
    core.setOutput('included_minutes', data.included_minutes)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

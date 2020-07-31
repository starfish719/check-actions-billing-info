import * as core from '@actions/core'
import {Octokit} from '@octokit/core'

async function run(): Promise<void> {
  try {
    const octokit = new Octokit({auth: core.getInput('accessToken')})

    let path = 'GET /users/:username/settings/billing/actions'
    let params: {[s: string]: string} = {
      username: core.getInput('name')
    }

    const accessType = core.getInput('accessType')
    if (accessType === 'org') {
      path = 'GET /orgs/:org/settings/billing/actions'
      params = {
        org: core.getInput('name')
      }
    }
    const {data} = await octokit.request(path, params)

    core.setOutput('total_minutes_used', data.total_minutes_used)
    core.setOutput('total_paid_minutes_used', data.total_paid_minutes_used)
    core.setOutput('included_minutes', data.included_minutes)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

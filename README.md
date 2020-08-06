# CheckActionsBillingInfo

This action is get GitHub Actions billing info.

## Inputs

### `accessType`

access type.

`user` or `org`

default is `user`

### `accessToken`

**Required** access token.

https://github.com/settings/tokens

When accessType is `user`, Access tokens must have the user scope.
When accessType is `org`, Access tokens must have the org scope.

Warning: The Billing API is currently in public beta and subject to change.

### `name`

**Required** GitHub account name or organization name.

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Check Actions Billing Info
      id: exec-actions
      uses: starfish719/check-actions-billing-info@v.0.0
      with:
        accessToken: ${{ secrets.ACCESS_TOKEN }}
        name: your name
    - name: result
        run: |
          echo total_minutes_used-${{ steps.exec-action.outputs.total_minutes_used }}
          echo total_paid_minutes_used-${{ steps.exec-action.outputs.total_paid_minutes_used }}
          echo included_minutes-${{ steps.exec-action.outputs.included_minutes }}
```

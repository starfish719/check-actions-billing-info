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

Access tokens must have the user scope.

### `name`

**Required** GitHub account name or organization name.

## Example usage

```yml
jobs:
  build:
    steps:
    - name: Check Actions Billing Info
      id: exec-actions
      uses: starfish719/check-actions-billing-info@v1.0.0
      with:
        accessToken: ${{ secrets.ACCESS_TOKEN }}
        name: your name
    - name: result
        run: |
          echo total_minutes_used-${{ steps.exec-action.outputs.total_minutes_used }}
          echo total_paid_minutes_used-${{ steps.exec-action.outputs.total_paid_minutes_used }}
          echo included_minutes-${{ steps.exec-action.outputs.included_minutes }}
```

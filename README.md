# action-test

Throwaway action used to exercise `freshaengineering/actions-manifest`'s external-action
security-review gate. Not intended for real use — see the repo description.

## Usage

```yaml
- uses: kruczele/action-test@<sha>
  with:
    message: hello
```

Echoes `message` back as the `echoed` output.

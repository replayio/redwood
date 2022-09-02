## Links

- [Team invitation](https://app.replay.io/team/invitation?code=50df870a-a7f4-40a1-b027-2de9b81e6165)
- [Link to team](https://app.replay.io/team/dzozY2NiYjM3NC01MWU0LTRhZTEtYWQxZi0wNzc4NDRmNjZlNDY=/recordings)

## Instructions

### Getting started

> Once
1. `git clone git@github.com:replayio/redwood.git`
2. `cd redwood`
3. `yarn`

> At least once to build a test project
1. `export PROJECT_PATH=$(mktemp -d)`
2. `yarn build:test-project --ts --link $PROJECT_PATH`
3. `yarn rw build`

### Running the tests locally without Replay

1. ?

### Running the tests locally with Replay
> It expects a PROJECT_PATH to be set. Set it inline if you've built a test project in a "temporary" place

1. `PROJECT_PATH=$PROJECT_PATH cd ./tasks/smoke-test && npx -y playwright test --project replay-firefox --reporter @replayio/playwright/reporter,line`

See Linear ticket here: https://linear.app/replay/issue/RUN-518/[redwoodjs]-unknown-fatals
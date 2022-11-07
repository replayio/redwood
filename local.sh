# clone git@github.com:replayio/redwood.git
# Once after cloning
yarn

# At least once to build a test project
export PROJECT_PATH=$(mktemp -d)
yarn build:test-project --ts --link $PROJECT_PATH
yarn rw build

# run the tests. It expects PROJECT_PATH to be se
# so be sure to set it inline if you've built a
# test project in a "permanent" place
(cd ./tasks/smoke-test && npx -y playwright test --project replay-firefox --reporter @replayio/playwright/reporter,line)
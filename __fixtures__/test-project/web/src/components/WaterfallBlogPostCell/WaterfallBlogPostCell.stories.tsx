import { Loading, Empty, Failure, Success } from './WaterfallBlogPostCell'
import { standard } from './WaterfallBlogPostCell.mock'

export const loading = (args) => {
  return Loading ? <Loading {...args} /> : null
}

export const empty = (args) => {
  return Empty ? <Empty {...args} /> : null
}

export const failure = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : null
}

export const success = (args) => {
  return Success ? <Success {...standard()} {...args} /> : null
}

export default { title: 'Cells/WaterfallBlogPostCell' }

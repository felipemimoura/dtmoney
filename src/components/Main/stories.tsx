import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Exemplo de args',
    description: 'Utilização dos args no storybook'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

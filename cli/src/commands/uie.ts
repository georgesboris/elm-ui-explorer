import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'uie',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to uie 🔥')
  }
}

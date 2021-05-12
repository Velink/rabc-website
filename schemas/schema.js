// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import boardMember from './boardMember'
import playingCard from './playingCard'
import joinInfo from './joinInfo'
import sponsor from './sponsor'
import group from './group'
import playerType from './playerType'
import tournamentInfo from './tournamentInfo'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'mySchema',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    boardMember,
    group,
    playingCard,
    joinInfo,
    tournamentInfo,
    sponsor,
    playerType,
  ]),
})

import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideos: [],
  addToSaveVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  removeSaveVideos: () => {},
})

export default NxtWatchContext
